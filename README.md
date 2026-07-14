# StockFlow Landing Page

Production-ready marketing/download landing page for **StockFlow**, an Android inventory management app by **Vassu Infotech**.

Built from the "Operational Clarity" Stitch design export. Framework-free — vanilla HTML/CSS/JS. Open `index.html` directly in any browser to preview.

---

## Quick Start

1. **Open the page** — double-click `index.html` or serve it locally:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```

2. **Drop the APK** — place the signed `.apk` into `downloads/stockflow.apk`.

3. **Swap screenshots** — replace images in `assets/images/` (keep the same filenames).

---

## Project Structure

```
stockflow-landing/
├── index.html              # Main landing page (all sections)
├── assets/
│   └── images/
│       ├── logo.png            # StockFlow app icon
│       ├── dashboard-mockup.png  # Hero phone screenshot
│       ├── screenshot-1.png      # Carousel slide 2
│       └── screenshot-2.png      # Carousel slide 3
│   └── og-image.png           # [PLACEHOLDER — see below]
├── css/
│   └── styles.css           # Custom animations, utilities, responsive overrides
├── js/
│   └── main.js              # Scroll reveal, nav blur, counters, timeline, mobile menu
├── downloads/
│   └── stockflow.apk        # [PLACEHOLDER — drop your APK here]
└── README.md
```

---

## Tailwind CSS — CDN Tradeoff

**What we do:** The page uses Tailwind via a CDN script (`cdn.tailwindcss.com`).

**Why:** The project requirement is "open directly in browser, no build step needed." The CDN approach achieves this at zero setup cost — no PostCSS, no CLI, no `node_modules`.

**Performance tradeoff:**
| Factor | CDN | Compiled |
|---|---|---|
| **Setup** | None | Requires Node.js + build step |
| **File size** | ~300 KB (download + parse) | ~15-30 KB (purged) |
| **Render blocking** | Yes (script blocks paint) | No (loaded in `<link>`) |
| **Offline** | No (requires internet) | Yes |
| **Per request** | Bad for first visit (cache miss) | Great (cacheable static file) |

**To switch to a compiled build:**
```bash
npm install -D tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i input.css -o css/styles-compiled.css --minify
```
Then replace the CDN `<script>` with `<link href="/css/styles-compiled.css" rel="stylesheet"/>` and remove the inline `tailwind.config`. Copy the exact theme tokens from the inline config into your `tailwind.config.js`.

---

## APK Download Setup

The page links to `/downloads/stockflow.apk` with the `download` attribute on every CTA. To deploy:

1. Place your signed release APK at `downloads/stockflow.apk`
2. The page already displays:
   - Version: **v1.0.0**
   - File size: **~18 MB** (update this in the HTML if your APK differs)
   - Min Android: **8.0 (minSdk 26)**
3. A factual "unknown sources" note appears near each download button

---

## Replacing Screenshots

The carousel currently uses:
- **Slide 1** (`dashboard-mockup.png`) — Real dashboard UI mockup
- **Slide 2** (`screenshot-1.png`) — Copied from v2 Stitch export
- **Slide 3** (`screenshot-2.png`) — Copied from v1 Stitch export
- **Slide 4** (`dashboard-mockup.png`) — Duplicate of slide 1

> **To replace:** drop your real app screenshots (9:19.5 aspect ratio recommended) into `assets/images/` and update the filenames in `index.html`.

---

## OG / Social Preview Image

`assets/images/og-image.png` is a placeholder reference. The Open Graph and Twitter Card meta tags point to it. Generate a 1200×630 px preview image with the StockFlow logo + tagline and save it there, or remove the meta tags if you don't have one yet.

---

## Sections

| Section | Description |
|---|---|
| Nav | Sticky glass nav with mobile hamburger menu |
| Hero | Headline, subhead, download CTA, phone frame mockup |
| Trust Strip | 4 key metrics with animated counters |
| Features | 5-card bento grid (Inward Wizard, Real-Time, Sales, Audit, Offline) |
| How It Works | 5-step SVG timeline with scroll-triggered line draw |
| Screenshots | Horizontal snap carousel with 3D tilt cards |
| Role Split | Two-panel: Warehouse Staff vs Admins & Owners |
| Security Badges | Firebase Auth, Firestore, Crashlytics, AES-256 |
| FAQ | Expandable accordion with install guide, Android ver, offline, security |
| Final CTA | Gradient animated section with download repeat |
| Footer | Brand info, product/company/legal links |

---

## Accessibility

- Semantic heading order (single `h1` in hero, `h2` per section)
- `alt` text on every image
- `aria-label` on landmark sections and interactive elements
- `focus-visible` outlines on all interactive elements
- `prefers-reduced-motion` disables all animations, reveals, and parallax
- `prefers-reduced-transparency` disables backdrop-blur on glass nav
- Sufficient color contrast per the DESIGN.md palette

---

## Browser Support

Optimized for modern browsers (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+). The page uses CSS `backdrop-filter`, `scroll-behavior`, CSS Grid, and `IntersectionObserver` — all widely supported since 2021.

---

## License

© 2024 StockFlow Systems / Vassu Infotech. All rights reserved.
