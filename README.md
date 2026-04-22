# Professional Profile - Juan David González Bedoya

This repository contains the source code for my static professional profile page. The project is designed to be extremely lightweight, fast, SEO-friendly, and 100% autonomous (no third-party dependencies like Google Fonts or heavy libraries).

## Core Architecture

- **Semantic HTML5:** All information (work history, awards, etc.) lives directly in `index.html`.
- **CSS3 (Vanilla):** Modular styles in `assets/css/style.css` with automatic support for light/dark mode.
- **Dockerized:** Ready to be deployed in my homelab (VPS) behind Cloudflare Tunnels using Nginx Alpine.

## Local Development

To preview changes locally without CORS issues (especially due to loading local fonts):

1. Navigate to the project root.
2. Start a static server using Python:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## Content Updates (Maintenance)

The page is built for rapid iteration by modifying the `index.html` file. For exact details on how to add new experience blocks or awards without breaking the design, consult the iteration guide in **`DECISIONS.md`**.

## Deployment (Production)

The project is deployed packaged in a very lightweight Docker container based on Nginx.

1. Build the image:
   ```bash
   docker build -t profile-cv .
   ```

2. Run the container (adjust the exposed port according to the server/tunnel configuration):
   ```bash
   docker run -d -p 8080:80 --name jdgonzalez-profile profile-cv
   ```

---
*Personal repository. Not intended as a public template.*
