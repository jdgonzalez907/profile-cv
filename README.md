# Perfil Profesional - Juan David González Bedoya

Este repositorio contiene el código fuente de mi página de perfil profesional estática. El proyecto está diseñado para ser extremadamente ligero, rápido, SEO-friendly y 100% autónomo (sin dependencias de terceros como Google Fonts o librerías pesadas).

## Arquitectura Base

- **HTML5 Semántico:** Toda la información (historial, premios, etc.) vive en el `index.html`.
- **CSS3 (Vanilla):** Estilos modulares en `assets/css/style.css` con soporte automático para modo claro/oscuro.
- **Dockerizado:** Listo para ser desplegado en mi homelab (VPS) detrás de Cloudflare Tunnels usando Nginx Alpine.

## Desarrollo Local

Para previsualizar cambios localmente sin problemas de CORS (especialmente por la carga de fuentes locales):

1. Navegar a la raíz del proyecto.
2. Levantar un servidor estático usando Python:
   ```bash
   python3 -m http.server 8000
   ```
3. Abrir `http://localhost:8000` en el navegador.

## Actualización de Contenido (Mantenimiento)

La página está construida para iterar rápidamente modificando el archivo `index.html`. Para detalles exactos de cómo añadir nuevos bloques de experiencia o premios sin romper el diseño, consultar la guía de iteración en **`DECISIONS.md`**.

## Despliegue (Producción)

El proyecto se despliega empaquetado en un contenedor Docker muy ligero basado en Nginx.

1. Construir la imagen:
   ```bash
   docker build -t profile-cv .
   ```

2. Ejecutar el contenedor (ajustar el puerto expuesto según la configuración del servidor/tunnel):
   ```bash
   docker run -d -p 8080:80 --name jdgonzalez-profile profile-cv
   ```

---
*Repositorio personal. No diseñado como template público.*
