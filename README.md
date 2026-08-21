# ÓRBITA — Guía Turística Espacial

Sitio del proyecto para **Código TBox 2026**. Todo el contenido está en español y
funciona sin conexión: las imágenes viven dentro del repositorio.

## Estructura

```
index.html            portada: mapa estelar, biometría, satélites, escalas y anomalías
practica47.html       el minijuego, incrustado en la portada mediante un iframe
credits.html          créditos de autoría de las 118 imágenes

css/orbita.css        estilos de la portada
css/practica47.css    estilos del minijuego
css/creditos.css      estilos de la página de créditos

js/orbita.js          datos y lógica de la portada
js/gsap-resguardo.js  versión mínima de GSAP por si su CDN no responde
js/practica47.js      lógica del minijuego

img/                  las 139 imágenes del sitio
herramientas/         el script que las descargó y el inventario de su procedencia
```

Los archivos de `js/` guardan también los datos (planetas, satélites, anomalías,
escalas) con sus rutas de imagen, así que la herramienta de descarga los recorre
igual que al HTML. Ver `herramientas/LEEME.md`.

## Cómo abrirlo

Basta con abrir `index.html` en el navegador. Las dos únicas cosas que se piden a
la red son las tipografías de Google Fonts y la librería GSAP; sin ellas el sitio
sigue funcionando, solo cambia la tipografía y el minijuego usa animaciones
simplificadas.
