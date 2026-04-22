# Minimalist Professional Profile

A blazing-fast, SEO-optimized, and elegant single-page professional profile. Designed for Software Engineers who prefer simplicity, performance, and complete ownership of their data.

## Features

- **Zero Dependencies:** Built with semantic HTML5, CSS3 (Custom Properties), and minimal Vanilla JavaScript. No heavy frameworks (React, Angular, etc.).
- **SEO & Social Ready:** Fully equipped with Open Graph tags and meta descriptions for perfect previews on LinkedIn, Twitter, and search engines.
- **Auto Dark/Light Mode:** Automatically adapts to the user's system preferences (`prefers-color-scheme`).
- **100% Autonomous:** All assets, including high-quality typography (Playfair Display & Inter), are served locally. No tracking or reliance on Google Fonts.
- **Accessible (a11y):** Implements ARIA landmarks and keyboard navigation focus states.
- **Dockerized:** Ready to be deployed anywhere using a lightweight Nginx Alpine container.

## Project Structure

```text
.
├── index.html          # Main entry point and data source (Semantic HTML)
├── Dockerfile          # Nginx Alpine configuration for deployment
├── DECISIONS.md        # Architecture decisions and maintenance guide
└── assets/
    ├── css/style.css   # Modular styling and themes
    ├── fonts/          # Local WOFF2 fonts
    ├── images/         # Profile pictures
    ├── icons/          # Multi-device favicons
    └── js/app.js       # Minimal UI logic (dynamic footer year)
```

## Local Development

Since the project uses local modules and assets, it needs to be served via HTTP (not `file://`) to avoid CORS issues with fonts or future module expansions.

You can use any local static server. For example, using Python:
```bash
python3 -m http.server 8000
```
Or using Node.js:
```bash
npx serve .
```

Then, open `http://localhost:8000` (or the port provided) in your browser.

## Deployment (Docker)

The project includes a `Dockerfile` tailored for a lightweight, production-ready Nginx server. It's ideal for self-hosting on a VPS or Homelab (e.g., behind Cloudflare Tunnels).

1. **Build the image:**
   ```bash
   docker build -t profile-cv .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8080:80 --name my-profile profile-cv
   ```

The site will be available on port `8080` of your host machine.

## Maintenance & Updates

To update your work experience, awards, or profile description, simply edit the `index.html` file. The structure is designed to be easily copy-pasted.

Please refer to the `DECISIONS.md` file for a detailed guide on how to iterate and maintain the content.

---
*Crafted with precision and clean architecture principles.*
