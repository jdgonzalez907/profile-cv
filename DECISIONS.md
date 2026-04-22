# Architectural Decisions

## 1. Tech Stack
- **Frontend:** Vanilla HTML5 (Semántico), CSS3 (Custom Properties), y JavaScript mínimo.
- **Data Storage:** El contenido reside directamente en `index.html`. 
  - **Razón:** Maximizar el SEO (indexación inmediata), eliminar peticiones `fetch` innecesarias y asegurar compatibilidad total con previsualizaciones de redes sociales (LinkedIn).
- **Organization:** 
  - `assets/fonts/`: Fuentes locales.
  - `assets/css/`: Estilos modulares.
  - `assets/js/`: Lógica mínima de UI (ej. actualización automática del año).
  - `assets/icons/`: Set completo de favicons.

## 2. Design & UX
- **Theme:** Detección automática de Light/Dark mode vía CSS.
- **Performance:** Carga instantánea (sin dependencias externas).
- **Autonomía:** Fuentes y recursos servidos localmente para independencia de Google Fonts.

## 3. Infrastructure & Deployment
- **VCS:** Git.
- **Containerization:** Docker (Nginx Alpine) para un despliegue ligero y consistente.
- **Homelab:** VPS propio expuesto vía Cloudflare Tunnels.

## 4. Guía de Iteración (Mantenimiento)

Para actualizar tu información, edita directamente el archivo `index.html`. Sigue estas estructuras:

### Actualizar Información Básica
Busca el bloque `<header class="hero">` y edita los textos de `<h1>`, `<p>`, `<div class="summary">` y `<p class="location">`.

### Agregar/Editar Experiencia Laboral
Busca el contenedor `<div id="work">`. Cada empleo es un bloque `<div class="item">`.
- **Nuevo Empleo:** Copia un bloque existente y pégalo al principio de la lista.
- **Empleo Actual:** Asegúrate de que tenga la clase `current-job` (ej. `<div class="item current-job">`) para que se resalte con la línea lateral.
- **Finalizar Empleo:** Quita la clase `current-job` y actualiza la fecha de `Presente` a la fecha de fin.

### Agregar/Editar Premios
Busca el contenedor `<div id="awards">`. Cada premio es un bloque `<div class="item">`. Copia y pega según necesites.

### Tags de Tecnologías (Highlights)
Dentro de cada empleo, puedes usar la lista `<ul class="highlights">`. Cada tecnología va dentro de un `<li class="highlight-tag">`.
