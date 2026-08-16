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

Tarda unos 3-4 minutos (hay una pausa de 0,25 s entre descargas por cortesía con
los servidores de Wikimedia).

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
