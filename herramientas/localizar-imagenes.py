#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Descarga a ./img todas las imágenes externas del proyecto y reescribe
index.html y fallatemporal.html para que apunten a las copias locales.

Uso:
    python3 herramientas/localizar-imagenes.py            # descarga y reescribe
    python3 herramientas/localizar-imagenes.py --listar   # solo muestra el inventario
    python3 herramientas/localizar-imagenes.py --solo-descargar
    python3 herramientas/localizar-imagenes.py --solo-reescribir

Se ejecuta desde la raíz del proyecto. Es idempotente: si una imagen ya está
descargada no la vuelve a pedir, y si el HTML ya apunta a ./img no lo toca.
"""
import io
import os
import re
import sys
import time
import urllib.parse
import urllib.request

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR_IMG = os.path.join(RAIZ, "img")
ARCHIVOS = ["index.html", "fallatemporal.html"]
HOSTS = ("commons.wikimedia.org", "upload.wikimedia.org", "images.unsplash.com")
PATRON = re.compile(r'https://(?:' + "|".join(h.replace(".", r"\.") for h in HOSTS) + r')[^"\s\\]+')
AGENTE = "OrbitaGuiaTuristicaEspacial/1.0 (proyecto escolar Codigo TBox; contacto via GitHub)"


ANCHO_MAXIMO = 1200   # el mismo tamaño que ya pide el resto del sitio


def url_descarga(url):
    """URL desde la que conviene bajar el archivo.

    19 de las imágenes apuntan al original de Wikimedia sin limitar el tamaño, y
    algunas pesan decenas de MB. Se redirigen al servicio Special:FilePath, que
    entrega una copia redimensionada del mismo archivo.
    """
    partes = urllib.parse.urlparse(url)
    if partes.netloc == "images.unsplash.com":
        return url                                   # ya viene con w= en la query
    if "width=" in partes.query:
        return url                                   # ya limitada
    nombre = partes.path.split("/")[-1]
    return ("https://commons.wikimedia.org/wiki/Special:FilePath/%s?width=%d"
            % (nombre, ANCHO_MAXIMO))


def extension(url, nombre):
    for ext in (".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"):
        if nombre.lower().endswith(ext):
            return ext
    return ".jpg"


def nombre_local(url, usados):
    """Nombre de archivo estable, legible y sin colisiones."""
    partes = urllib.parse.urlparse(url)
    if partes.netloc == "images.unsplash.com":
        base = partes.path.strip("/").split("/")[-1]        # photo-1462331940025-...
        ext = ".jpg"
    else:
        crudo = partes.path.split("/")[-1]
        crudo = urllib.parse.unquote(crudo)
        ext = extension(url, crudo)
        base = crudo[: -len(ext)] if crudo.lower().endswith(ext) else crudo
    base = re.sub(r"[^A-Za-z0-9._-]+", "-", base).strip("-.")[:90] or "imagen"
    nombre = base + ext
    n = 2
    while nombre in usados and usados[nombre] != url:
        nombre = "%s-%d%s" % (base, n, ext)
        n += 1
    usados[nombre] = url
    return nombre


def inventario():
    """{url: nombre_local} en orden de aparición, sin duplicados."""
    vistas, usados = {}, {}
    for archivo in ARCHIVOS:
        ruta = os.path.join(RAIZ, archivo)
        if not os.path.exists(ruta):
            sys.exit("ERROR: no se encuentra %s" % archivo)
        texto = io.open(ruta, encoding="utf-8").read()
        for url in PATRON.findall(texto):
            if url not in vistas:
                vistas[url] = nombre_local(url, usados)
    return vistas


def descargar(mapa):
    os.makedirs(DIR_IMG, exist_ok=True)
    total, ok, saltadas, fallos = len(mapa), 0, 0, []
    for i, (url, nombre) in enumerate(mapa.items(), 1):
        destino = os.path.join(DIR_IMG, nombre)
        if os.path.exists(destino) and os.path.getsize(destino) > 0:
            saltadas += 1
            continue
        try:
            pedido = urllib.request.Request(url_descarga(url), headers={"User-Agent": AGENTE})
            with urllib.request.urlopen(pedido, timeout=60) as r, open(destino, "wb") as f:
                f.write(r.read())
            ok += 1
            print("  [%3d/%d] %s" % (i, total, nombre))
            time.sleep(0.25)          # cortesía con los servidores de Wikimedia
        except Exception as e:
            fallos.append((url, nombre, str(e)[:90]))
            if os.path.exists(destino):
                os.remove(destino)
            print("  [%3d/%d] FALLO %s -> %s" % (i, total, nombre, str(e)[:70]))
    print("\nDescargadas %d · ya estaban %d · fallidas %d (de %d)" % (ok, saltadas, len(fallos), total))
    if fallos:
        with io.open(os.path.join(RAIZ, "img-fallidas.txt"), "w", encoding="utf-8") as f:
            for url, nombre, err in fallos:
                f.write("%s\t%s\t%s\n" % (nombre, url, err))
        print("Listado de fallos en img-fallidas.txt — vuelve a ejecutar para reintentar solo esas.")
    return fallos


def reescribir(mapa, exigir_archivo=True):
    faltan = [n for n in set(mapa.values())
              if not os.path.exists(os.path.join(DIR_IMG, n))]
    if faltan and exigir_archivo:
        print("AVISO: faltan %d imágenes por descargar; esas URLs se dejan como están." % len(faltan))
    cambios_totales = 0
    for archivo in ARCHIVOS:
        ruta = os.path.join(RAIZ, archivo)
        texto = io.open(ruta, encoding="utf-8").read()
        original = texto
        n = 0
        for url, nombre in mapa.items():
            if exigir_archivo and nombre in faltan:
                continue
            if url in texto:
                n += texto.count(url)
                texto = texto.replace(url, "img/" + nombre)
        if texto != original:
            io.open(ruta, "w", encoding="utf-8").write(texto)
        print("  %-20s %d referencias apuntando ahora a ./img" % (archivo, n))
        cambios_totales += n
    return cambios_totales


def main():
    args = sys.argv[1:]
    mapa = inventario()
    print("Imágenes externas distintas: %d\n" % len(mapa))

    if "--listar" in args:
        for url, nombre in mapa.items():
            print("%-58s  %s" % (nombre, url))
        return
    if "--solo-reescribir" in args:
        reescribir(mapa)
        return
    if "--solo-descargar" in args:
        descargar(mapa)
        return

    descargar(mapa)
    print("\nReescribiendo el HTML:")
    reescribir(mapa)
    print("\nListo. Comprueba el sitio abriendo index.html y desconectando la red.")


if __name__ == "__main__":
    main()
