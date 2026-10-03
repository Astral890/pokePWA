<!-- README.md -->
# PocketStore - Catálogo Offline (PWA)

## Descripción del Proyecto
PocketStore es una aplicación web de una sola página (SPA) que funciona como un catálogo dinámico y puede ejecutarse sin conexión a internet (Offline First). Desarrollada con Vanilla JavaScript, utiliza **PokeAPI** para recuperar un listado de elementos y un **Service Worker** para garantizar el almacenamiento en caché y la persistencia de datos offline.

## Estructura de Archivos
- `index.html`: Vista principal (App Shell).
- `styles.css`: Estilos visuales del App Shell.
- `app.js`: Lógica del lado del cliente, consumo de PokeAPI y registro del SW.
- `sw.js`: Controlador del Service Worker para el ciclo de vida e interceptación de red (Estrategia Cache-First y Dynamic Caching).
- `manifest.json`: Manifiesto de la aplicación para capacidades PWA.
- `icon-192.png` / `icon-512.png`: (Requeridos) Íconos de instalación local.
- `/docs/images/`: (Requerido) Directorio con capturas de evidencia de desarrollo.

## Instalación y Ejecución Local
1. Clonar este repositorio.
2. Servir el proyecto mediante un servidor local (Ej. extensión *Live Server* en VS Code o `npx serve`). Los Service Workers **requieren HTTPS** o ejecutarse desde `localhost`.
3. Navegar a la dirección de localhost.

## Evidencia del Proceso de Desarrollo
*(Nota: Añadir las imágenes generadas durante el desarrollo en el directorio `/docs/images/` referenciadas a continuación)*

1. **Creación del App Shell**: `![App Shell](./docs/images/app-shell.png)`
2. **Consumo de PokeAPI en app.js**: `![API Fetch](./docs/images/api-fetch.png)`
3. **Registro de Service Worker y Caché (DevTools)**: `![Service Worker](./docs/images/sw-cache.png)`
4. **Prueba de Modo Offline (Red desconectada)**: `![Offline Mode](./docs/images/offline-mode.png)`