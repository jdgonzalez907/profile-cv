# Architectural Decisions

## 1. Tech Stack
- **Frontend:** Vanilla HTML5, CSS3 (Custom Properties), and JavaScript (ES6+).
- **Data Storage:** `assets/data/profile.json` (JSON Resume standard).
- **Organization:** 
  - `assets/data/`: Data files.
  - `assets/css/`: Modular styles.
  - `assets/js/`: Rendering logic.

## 2. Design & UX
- **Theme:** Automatic Light/Dark mode detection via `prefers-color-scheme`.
- **Typography:** System fonts for performance with elegant backups (Serif for headings, Sans for body).
- **Layout:** Responsive, mobile-first, single-page.

## 3. Infrastructure & Deployment
- **VCS:** Git.
- **Containerization:** Docker (Nginx Alpine).
- **Environment:** Self-hosted VPS with Cloudflare Tunnels.
- **Build Process:** No build step required (native ESM).
