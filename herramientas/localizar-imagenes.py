#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Descarga a ./img todas las imágenes externas del proyecto y reescribe
index.html y practica47.html para que apunten a las copias locales.

Uso:
    python3 herramientas/localizar-imagenes.py            # descarga y reescribe
    python3 herramientas/localizar-imagenes.py --listar   # solo muestra el inventario
    python3 herramientas/localizar-imagenes.py --solo-descargar
    python3 herramientas/localizar-imagenes.py --solo-reescribir
    python3 herramientas/localizar-imagenes.py --rehacer 'photo-*.jpg'
    python3 herramientas/localizar-imagenes.py --buscar Laniakea supercluster

Se ejecuta desde la raíz del proyecto. Es idempotente: si una imagen ya está
descargada no la vuelve a pedir, y si el HTML ya apunta a ./img no lo toca.
"""
import fnmatch
import html
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
INVENTARIO = os.path.join(RAIZ, "herramientas", "inventario-imagenes.txt")
# Se buscan URLs de imagen en el HTML y en el JavaScript: al separar el
# código, los datos de planetas, satélites y anomalías —con sus rutas de
# imagen— se fueron a los archivos de js/. Las hojas de estilo quedan fuera a
# propósito: viven en css/, así que una ruta reescrita a «img/…» apuntaría un
# nivel más arriba de donde debe.
ARCHIVOS = ["index.html", "practica47.html", "js/orbita.js", "js/practica47.js"]
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
            if titulo and (info.get("thumburl") or info.get("url")):
                mapa[titulo] = {"thumb": info.get("thumburl"),
                                "original": info.get("url")}
        time.sleep(0.5)
    return mapa


def buscar_en_commons(termino, cuantas=10):
    """Imprime los archivos de Commons que responden a unos términos de búsqueda.

    Sirve para dar con el nombre real de una imagen cuando el que había en el
    HTML no existe. Muestra el tipo de archivo porque muchas fotos de ESO o la
    NASA están en Commons como TIFF de decenas de megas: para la web hace falta
    la versión JPG o PNG.
    """
    consulta = urllib.parse.urlencode({
        "action": "query",
        "format": "json",
        "formatversion": "2",
        "generator": "search",
        "gsrsearch": termino,
        "gsrnamespace": "6",          # espacio de nombres «File:»
        "gsrlimit": str(cuantas),
        "prop": "imageinfo",
        "iiprop": "url|size|mime|extmetadata",
        "iiextmetadatafilter": "LicenseShortName|Artist|Credit",
    })
    try:
        datos = json.loads(abrir(API_COMMONS + "?" + consulta, timeout=45).decode("utf-8"))
    except Exception as e:
        print("      (no se pudo buscar: %s)" % str(e)[:60])
        return
    paginas = datos.get("query", {}).get("pages", [])
    if not paginas:
        print("      sin candidatos en Commons para «%s»" % termino)
        return
    print("      candidatos en Commons para «%s»:" % termino)
    for pagina in paginas:
        info = (pagina.get("imageinfo") or [{}])[0]
        print("        %-72s %6sx%-6s %s" % (pagina.get("title", "?"),
                                             info.get("width", "?"),
                                             info.get("height", "?"),
                                             info.get("mime", "?")))
        # Autor y licencia: sin esto no se pueden redactar los créditos, y el
        # reglamento exige respetar los derechos de autor de cada imagen.
        extra = info.get("extmetadata") or {}
        def campo(clave):
            valor = (extra.get(clave) or {}).get("value", "")
            return re.sub(r"<[^>]*>", "", valor).strip()
        licencia, autor = campo("LicenseShortName"), campo("Artist") or campo("Credit")
        if licencia or autor:
            print("            licencia: %-18s autor: %s" % (licencia or "?", (autor or "?")[:70]))


def sugerir_en_commons(nombre, cuantas=10):
    """Busca en Commons nombres parecidos a uno que no existe.

    Si la API no reconoce un archivo es que ya no está con ese nombre (lo
    renombraron o nunca existió). El script no elige por su cuenta: imprime
    los candidatos para que una persona decida cuál encaja.
    """
    termino = re.sub(r"\.[a-z]{3,4}$", "", nombre).replace("_", " ")
    buscar_en_commons(termino, cuantas)


def urls_descarga(url, cdn):
    """Lista de URLs a probar, de la mejor a la de último recurso.

    La miniatura del CDN es la vía preferente, pero a veces devuelve 404 porque
    Wikimedia no la ha generado. En ese caso se prueba el archivo original y,
    por último, Special:FilePath.
    """
    partes = urllib.parse.urlparse(url)
    if partes.netloc == "images.unsplash.com":
        # En el HTML los separadores van escapados como &amp;, que es lo correcto
        # en un atributo. Si se piden así, Unsplash no reconoce w= ni q= y
        # devuelve la imagen original: una de ellas pesaba 9 MB.
        return [html.unescape(url)]

    candidatas = []
    nombre = nombre_commons(url)
    if nombre:
        entrada = cdn.get(nombre) or cdn.get(nombre.replace("_", " ")) or {}
        if entrada.get("thumb"):
            candidatas.append(entrada["thumb"])       # CDN redimensionado
        if es_tiff(nombre) or es_svg(nombre):
            # Muchas fotos de ESO y la NASA solo están en Commons como TIFF, que
            # los navegadores no muestran. La miniatura del CDN sí llega en JPEG,
            # así que para estos archivos es la única fuente válida: bajar el
            # original o pasar por Special:FilePath daría un TIFF inservible.
            # Con los SVG pasa lo mismo al revés: el original es XML válido,
            # pero la miniatura ya viene rasterizada y es lo que se guarda.
            return candidatas
        if entrada.get("original"):
            candidatas.append(entrada["original"])    # CDN a tamaño completo
        candidatas.append("https://commons.wikimedia.org/wiki/Special:FilePath/%s?width=%d"
                          % (partes.path.split("/")[-1], ANCHO_MAXIMO))
    candidatas.append(url)
    vistas, salida = set(), []
    for c in candidatas:
        if c not in vistas:
            vistas.add(c)
            salida.append(c)
    return salida


def es_tiff(nombre):
    return nombre.lower().endswith((".tif", ".tiff"))


def es_svg(nombre):
    return nombre.lower().endswith(".svg")


def extension(url, nombre):
    if es_svg(nombre):
        # El CDN de Wikimedia rasteriza los SVG y entrega PNG. Guardarlo con el
        # .svg del nombre original hacía que el servidor lo anunciara como
        # image/svg+xml: el navegador intentaba interpretar bytes PNG como XML,
        # fallaba, y la imagen no se veía nunca.
        return ".png"
    if es_tiff(nombre):
        # De un TIFF de Commons solo se guarda su miniatura JPEG, así que el
        # archivo local debe llamarse .jpg. Con la extensión original, el
        # servidor lo anunciaría como image/tiff y el navegador no lo pintaría.
        return ".jpg"
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
        if es_tiff(crudo) or es_svg(crudo):
            # se guarda con otra extensión, así que sobra la del nombre original
            base = crudo.rsplit(".", 1)[0]
        else:
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
        print("  resueltos: %d de %d" % (len(cdn), len(nombres)))
        sin_resolver = [n for n in sorted(nombres)
                        if n not in cdn and n.replace("_", " ") not in cdn]
        for n in sin_resolver:
            print("\n  «%s» no existe en Commons con ese nombre." % n)
            sugerir_en_commons(n)
        print()

    total, ok, saltadas, fallos = len(mapa), 0, 0, []
    for i, (url, nombre) in enumerate(mapa.items(), 1):
        destino = os.path.join(DIR_IMG, nombre)
        if os.path.exists(destino) and os.path.getsize(destino) > 0:
            saltadas += 1
            continue
        ultimo = None
        for candidata in urls_descarga(url, cdn):
            try:
                datos = abrir(candidata)
                with open(destino, "wb") as f:
                    f.write(datos)
                ultimo = None
                break
            except Exception as e:
                ultimo = e
        try:
            if ultimo is not None:
                raise ultimo
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


def leer_inventario():
    """{nombre local: URL de origen} a partir de inventario-imagenes.txt.

    Hace falta porque, una vez reescrito el HTML, las URLs originales ya no
    aparecen en ninguna parte del sitio: el HTML dice «img/foto.jpg» y nada
    más. Sin este archivo no habría forma de volver a pedir una imagen ya
    descargada.
    """
    if not os.path.exists(INVENTARIO):
        sys.exit("ERROR: falta %s, que guarda de dónde vino cada imagen." % INVENTARIO)
    mapa = {}
    for linea in io.open(INVENTARIO, encoding="utf-8"):
        partes = linea.split()
        if len(partes) == 2 and partes[1].startswith(("https://", "http://")):
            mapa[partes[0]] = partes[1]
    return mapa


def descargadas(mapa):
    """El subconjunto de {url: nombre} que de verdad está guardado en img/."""
    return {u: n for u, n in mapa.items()
            if os.path.exists(os.path.join(DIR_IMG, n))}


def anotar_inventario(mapa):
    """Añade al inventario los pares nombre↔URL que aún no estén.

    El inventario no se puede regenerar a partir del HTML, porque en cuanto una
    imagen se localiza el HTML deja de mencionar su URL de origen. Por eso se va
    completando aquí, según se descargan: si se dejara a mano, tarde o temprano
    quedaría una imagen sin saber de dónde vino, y ni --rehacer ni los créditos
    de autoría podrían reconstruirlo.
    """
    conocidos = leer_inventario() if os.path.exists(INVENTARIO) else {}
    nuevos = [(n, u) for u, n in mapa.items() if conocidos.get(n) != u]
    if not nuevos:
        return 0
    with io.open(INVENTARIO, "a", encoding="utf-8") as f:
        for nombre, url in nuevos:
            f.write("%-58s  %s\n" % (nombre, url))
    print("Inventario: %d entradas nuevas anotadas." % len(nuevos))
    return len(nuevos)


def rehacer(patrones):
    """Vuelve a descargar las imágenes ya guardadas que encajen con los patrones.

    El HTML no se toca: ya apunta a ./img y los nombres no cambian. Solo se
    sustituye el contenido del archivo, y únicamente si la nueva descarga sale
    bien, para no dejar rota una imagen que hasta ahora funcionaba.
    """
    todo = leer_inventario()
    elegidas = {n: u for n, u in todo.items()
                if any(fnmatch.fnmatch(n, p) for p in patrones)}
    if not elegidas:
        sys.exit("ERROR: ningún nombre del inventario encaja con %s" % " ".join(patrones))

    print("Se van a volver a descargar %d imágenes:" % len(elegidas))
    nombres = {nombre_commons(u) for u in elegidas.values()}
    nombres.discard(None)
    cdn = resolver_en_cdn(nombres) if nombres else {}

    ok, fallos = 0, []
    for nombre, url in sorted(elegidas.items()):
        destino = os.path.join(DIR_IMG, nombre)
        antes = os.path.getsize(destino) if os.path.exists(destino) else 0
        datos, error = None, None
        for candidata in urls_descarga(url, cdn):
            try:
                datos = abrir(candidata)
                break
            except Exception as e:
                error = e
        if datos is None:
            fallos.append(nombre)
            print("  FALLO %-56s se deja la copia que ya había (%s)" % (nombre, str(error)[:40]))
            continue
        with open(destino, "wb") as f:
            f.write(datos)
        ok += 1
        print("  %-56s %7d B -> %7d B" % (nombre, antes, len(datos)))
        time.sleep(PAUSA)

    print("\nRehechas %d · fallidas %d" % (ok, len(fallos)))
    return fallos


def main():
    args = sys.argv[1:]
    if "--buscar" in args:
        termino = " ".join(args[args.index("--buscar") + 1:])
        if not termino:
            sys.exit("Uso: --buscar términos de búsqueda")
        buscar_en_commons(termino)
        return
    if "--rehacer" in args:
        patrones = args[args.index("--rehacer") + 1:]
        if not patrones:
            sys.exit("Uso: --rehacer 'photo-*.jpg' [otro-patrón ...]")
        rehacer(patrones)
        return

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
        anotar_inventario(descargadas(mapa))
        return

    descargar(mapa)
    anotar_inventario(descargadas(mapa))
    print("\nReescribiendo el HTML:")
    reescribir(mapa)
    print("\nListo. Comprueba el sitio abriendo index.html y desconectando la red.")


if __name__ == "__main__":
    main()
