# Localizar las imágenes del proyecto

El sitio carga hoy **145 referencias a 138 imágenes** alojadas en Wikimedia Commons
y Unsplash. Para la entrega de Código TBox hacen falta dentro del proyecto: el
reglamento pide una carpeta comprimida con *«páginas HTML, hojas de estilo CSS,
scripts JavaScript, imágenes y demás recursos utilizados»*. Además, así el sitio
funciona sin conexión.

## Cómo usarlo

Desde la raíz del proyecto:

```bash
python3 herramientas/localizar-imagenes.py
```

Eso hace dos cosas, en este orden:

1. Descarga las 138 imágenes a `img/`.
2. Reescribe `index.html` y `fallatemporal.html` para que apunten a `img/…`.

Tarda unos 3-4 minutos (hay una pausa de 0,6 s entre descargas por cortesía con
los servidores de Wikimedia).

### Sin Python en la computadora

No hace falta instalar nada: el mismo trabajo lo hacen los servidores de GitHub.
En la pestaña **Actions** del repositorio, flujo *«Descargar imágenes al
proyecto»* → **Run workflow**. Descarga, reescribe el HTML y sube el resultado.

## Otras formas de ejecutarlo

```bash
python3 herramientas/localizar-imagenes.py --listar          # ver el inventario, sin tocar nada
python3 herramientas/localizar-imagenes.py --solo-descargar  # descargar sin reescribir el HTML
python3 herramientas/localizar-imagenes.py --solo-reescribir # reescribir usando lo ya descargado
```

## Si alguna descarga falla

El script no se detiene: sigue con las demás y al terminar escribe
`img-fallidas.txt` con las que no consiguió. **Vuelve a ejecutarlo** y reintentará
solo esas, porque salta las que ya están en `img/`. Las URLs que sigan fallando se
dejan intactas en el HTML, de modo que el sitio nunca queda con enlaces rotos.

Si el fallo es que un archivo **ya no existe en Commons con ese nombre** (lo
renombraron, o el nombre estaba mal desde el principio), el script lo dice y
busca nombres parecidos:

```
  «Laniakea_supercluster.jpg» no existe en Commons con ese nombre.
      candidatos en Commons para «Laniakea supercluster»:
        File:…                                          3840x2160
```

No elige por su cuenta: hay que mirar los candidatos, decidir cuál corresponde y
cambiar la URL en el HTML. Una imagen científica equivocada es peor que ninguna.

## Volver a bajar una imagen ya descargada

```bash
python3 herramientas/localizar-imagenes.py --rehacer 'photo-*.jpg'
```

Desde GitHub Actions, la casilla **rehacer** del formulario hace lo mismo.

Ojo: **no sirve borrar el archivo y volver a ejecutar el script normal.** Una vez
reescrito el HTML, este dice `img/foto.jpg` y en ninguna parte del sitio queda la
URL de origen; el script normal solo sabe descargar lo que encuentra en el HTML,
así que la imagen borrada no volvería. De dónde vino cada archivo se guarda en
`inventario-imagenes.txt`, y de ahí lo saca `--rehacer`.

Si la nueva descarga falla, se conserva la copia anterior en vez de dejar el
sitio con una imagen rota.

## Buscar el nombre real de un archivo en Commons

```bash
python3 herramientas/localizar-imagenes.py --buscar Laniakea supercluster
```

Muestra hasta diez archivos con sus dimensiones y su tipo. En GitHub Actions es
la casilla **buscar**, que solo consulta: no descarga ni sube nada.

## Archivos TIFF

Muchas imágenes de ESO y la NASA están en Commons **solo como TIFF** de decenas
de megas, y los navegadores no muestran TIFF. No hace falta descartarlas: el CDN
de Wikimedia genera una miniatura JPEG de cualquier TIFF, y el script pide esa.
En ese caso guarda el archivo con extensión `.jpg`, porque si conservara el
`.tiff` del nombre original el servidor lo anunciaría como `image/tiff` y la
imagen no se vería.

## El inventario se mantiene solo

`inventario-imagenes.txt` guarda de dónde vino cada archivo. **No se puede
regenerar a partir del HTML**: en cuanto una imagen se localiza, el HTML dice
`img/foto.jpg` y la URL de origen desaparece del sitio. Por eso el script va
anotando cada descarga nueva según la hace. Ese archivo es lo que hace posible
`--rehacer` y lo que servirá de base para los créditos de autoría.

## Comprobar el resultado

```bash
# ninguna URL externa de imagen debería quedar
grep -oE 'https://(commons\.wikimedia|upload\.wikimedia|images\.unsplash)[^"]*' index.html fallatemporal.html | wc -l

# y todas las rutas locales deben existir
python3 herramientas/localizar-imagenes.py --listar | wc -l
ls img | wc -l
```

Después abre `index.html` con el wifi apagado: las imágenes deben verse igual.
Solo seguirán fallando las tipografías de Google Fonts y la librería GSAP, que se
cargan por CDN aparte.

## Notas

- Es **idempotente**: se puede ejecutar las veces que haga falta sin duplicar nada.
- 21 archivos llevan sufijo `-2` porque la misma imagen se pide a dos anchos
  distintos (por ejemplo `?width=1100` y `?width=1200`). Se descargan por separado
  a propósito, para que cada referencia del HTML conserve el tamaño que le toca.
- `inventario-imagenes.txt` tiene la lista completa de nombre local ↔ URL de origen.
  Ese archivo es la base para redactar los créditos de autoría (Hallazgo 2 de la
  revisión del reglamento).
