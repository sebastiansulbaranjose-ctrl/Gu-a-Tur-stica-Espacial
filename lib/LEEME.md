# Librerías incluidas en el proyecto

## `three.module.min.js`

[Three.js](https://threejs.org) v0.160.0, licencia MIT. El texto de la licencia
está en `three-LICENSE.txt`, como exige la propia MIT.

Se guarda aquí en vez de pedirla a un CDN por dos razones: el reglamento del
concurso pide entregar una carpeta comprimida con todos los recursos, y así el
sitio sigue funcionando sin conexión.

Se usa solo para el planeta que gira en la portada. El módulo **no se carga con
la página**: `index.html` lo pide con un `import()` dinámico, y únicamente si la
pantalla es lo bastante ancha y el usuario no ha pedido menos movimiento. En un
móvil no llega a descargarse.

Para actualizarla:

```bash
npm install three@<versión>
cp node_modules/three/build/three.module.min.js lib/
cp node_modules/three/LICENSE lib/three-LICENSE.txt
```
