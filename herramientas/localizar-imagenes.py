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
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR_IMG = os.path.join(RAIZ, "img")
ARCHIVOS = ["index.html", "fallatemporal.html"]
HOSTS = ("commons.wikimedia.org", "upload.wikimedia.org", "images.unsplash.com")
PATRON = re.compile(r'https://(?:' + "|".join(h.replace(".", r"\.") for h in HOSTS) + r')[^"\s\\]+')

# Wikimedia rechaza con HTTP 429 ("robot policy") cualquier agente que no
# identifique al proyecto y ofrezca un contacto real.
REPO = "https://github.com/sebastiansulbaranjose-ctrl/Gu-a-Tur-stica-Espacial"
AGENTE = "OrbitaGuiaTuristicaEspacial/1.0 (%s)" % REPO
API_COMMONS = "https://commons.wikimedia.org/w/api.php"
PAUSA = 0.6          # entre descargas
REINTENTOS = 5       # ante un 429, con espera creciente


ANCHO_MAXIMO = 1200   # el mismo tamaño que ya pide el resto del sitio


def abrir(url, timeout=60):
    """Petición con identificación correcta y reintentos ante el límite de Wikimedia.

    Wikimedia responde 429 tanto si el agente no la identifica como si se pide
    demasiado deprisa. En el segundo caso conviene esperar y reintentar en vez
    de darse por vencido, que es lo que hacía la primera versión.
    """
    espera = 4
    for intento in range(1, REINTENTOS + 1):
        try:
            pedido = urllib.request.Request(url, headers={
                "User-Agent": AGENTE,
                "Accept": "*/*",
            })
            return urllib.request.urlopen(pedido, timeout=timeout).read()
        except urllib.error.HTTPError as e:
            if e.code != 429 or intento == REINTENTOS:
                raise
            pausa = int(e.headers.get("Retry-After") or 0) or espera
            print("      429; esperando %ds y reintentando (%d/%d)" % (pausa, intento, REINTENTOS - 1))
            time.sleep(pausa)
            espera = min(espera * 2, 60)
    raise RuntimeError("agotados los reintentos")


def nombre_commons(url):
    """Nombre del archivo en Commons, o None si la URL no es de Wikimedia."""
    partes = urllib.parse.urlparse(url)
    if partes.netloc not in ("commons.wikimedia.org", "upload.wikimedia.org"):
        return None
    return urllib.parse.unquote(partes.path.split("/")[-1])


def resolver_en_cdn(nombres):
    """{nombre en Commons: enlace directo al CDN, ya redimensionado}.

    Special:FilePath pasa por los servidores de aplicación de Wikimedia, que
    limitan el tráfico con dureza. La API permite pedir 50 archivos de una vez y
    devuelve el enlace de la miniatura en upload.wikimedia.org, que es el CDN y
    aguanta muchísimo mejor la descarga.
    """
    mapa = {}
    nombres = list(nombres)
    for i in range(0, len(nombres), 50):
        lote = nombres[i:i + 50]
        consulta = urllib.parse.urlencode({
            "action": "query",
            "format": "json",
            "formatversion": "2",
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": str(ANCHO_MAXIMO),
            "titles": "|".join("File:" + n for n in lote),
        })
        try:
            datos = json.loads(abrir(API_COMMONS + "?" + consulta, timeout=45).decode("utf-8"))
        except Exception as e:
            print("  aviso: la API no respondió para un lote (%s); se usará Special:FilePath" % str(e)[:60])
            continue
        for pagina in datos.get("query", {}).get("pages", []):
            titulo = pagina.get("title", "")[5:]          # quita "File:"
            info = (pagina.get("imageinfo") or [{}])[0]
            enlace = info.get("thumburl") or info.get("url")
            if titulo and enlace:
                mapa[titulo] = enlace
        time.sleep(0.5)
    return mapa


def url_descarga(url, cdn):
    """URL desde la que conviene bajar el archivo."""
    partes = urllib.parse.urlparse(url)
    if partes.netloc == "images.unsplash.com":
        return url                                   # ya viene con w= en la query
    nombre = nombre_commons(url)
    if nombre:
        directa = cdn.get(nombre) or cdn.get(nombre.replace("_", " "))
        if directa:
            return directa                           # CDN: la vía buena
        if "width=" not in partes.query:             # respaldo, ya redimensionado
            return ("https://commons.wikimedia.org/wiki/Special:FilePath/%s?width=%d"
                    % (partes.path.split("/")[-1], ANCHO_MAXIMO))
    return url


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

    pendientes = {u: n for u, n in mapa.items()
                  if not (os.path.exists(os.path.join(DIR_IMG, n))
                          and os.path.getsize(os.path.join(DIR_IMG, n)) > 0)}
    nombres = {nombre_commons(u) for u in pendientes}
    nombres.discard(None)
    cdn = {}
    if nombres:
        print("Resolviendo %d archivos en el CDN de Wikimedia..." % len(nombres))
        cdn = resolver_en_cdn(nombres)
        print("  resueltos: %d de %d\n" % (len(cdn), len(nombres)))

    total, ok, saltadas, fallos = len(mapa), 0, 0, []
    for i, (url, nombre) in enumerate(mapa.items(), 1):
        destino = os.path.join(DIR_IMG, nombre)
        if os.path.exists(destino) and os.path.getsize(destino) > 0:
            saltadas += 1
            continue
        try:
            datos = abrir(url_descarga(url, cdn))
            with open(destino, "wb") as f:
                f.write(datos)
            ok += 1
            print("  [%3d/%d] %s" % (i, total, nombre))
            time.sleep(PAUSA)         # cortesía con los servidores de Wikimedia
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
