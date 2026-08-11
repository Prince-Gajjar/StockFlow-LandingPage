# StockFlow Landing Page - Project & UI Context (Bright Liquid Glass Edition)

This file serves as the living technical reference for AI agents and developers working on the StockFlow Landing Page, documenting the current codebase structure, feature list, architecture overview, and **Bright Liquid Glass Design System**.

---

## 1. Overview & Architecture
Static marketing and APK download landing page for **StockFlow**, an Android inventory management app by **Vassu Infotech**.
- **Tech Stack**: HTML5, Vanilla CSS3 (Bright Liquid Glass System), Vanilla JavaScript (ES6+), Tailwind CSS (via CDN).
- **Theme Identity**: Luminous pearl-white background (`#F8FAFC`), translucent crystal glass cards, specular highlights, and vibrant brand accents (Royal Blue `#2563EB` & Deep Teal `#0D9488`).
- **Compliance Status**: Compliant with `RULES.md` (Implementation Planning, Accessibility/Contrast, `Context.md` & `Changelog.md` maintenance).

---

## 2. File & Directory Structure
```
StockFlow-LandingPage/
├── index.html              # Main single-page application (Bright Liquid theme)
├── RULES.md                # Agent operating rules & governance standards
├── context.md              # Living architecture & UI reference (This document)
├── Changelog.md            # Timestamped log of changes (Rules Section 8.1)
├── README.md               # Quick-start guide & deployment instructions
├── css/
│   └── styles.css          # Bright Liquid Glass system, crystal cards, specularity
├── js/
│   └── main.js             # Cursor light tracking, scroll reveal, hero slideshow, counters
├── assets/
│   └── images/             # App screenshots (1.png - 7.png) and logo.png
└── downloads/
    └── stockflow.apk       # Target destination for the release APK binary
```

---

## 3. Bright Liquid Glass Design Tokens (`styles.css`)

### Surface & Typography Tokens
- `--glass-surface-base`: `rgba(255, 255, 255, 0.75)` — Base section overlays.
- `--glass-surface-card`: `rgba(255, 255, 255, 0.85)` — Default translucent crystal glass cards.
- `--glass-surface-hover`: `rgba(255, 255, 255, 0.95)` — Elevated glass hover state.
- `--glass-border-light`: `rgba(226, 232, 240, 0.8)` — Soft slate rim outline.
- `--liquid-teal`: `#0D9488` — High-visibility secondary accent & badge color.
- `--liquid-blue`: `#2563EB` — Primary brand color derived from the StockFlow 3D cube logo.
- `--text-primary`: `#0F172A` (Slate 900) — Headings & prominent text.
- `--text-secondary`: `#334155` (Slate 700) — Body text & list items.
- `--text-muted`: `#64748B` (Slate 500) — Subtext & metadata.

### Component Classes
1. `.liquid-glass`: Translucent crystal glass card featuring `backdrop-filter: blur(24px) saturate(180%)`, inset white specular top highlights, and 24px rounded corners.
2. `.liquid-glass-hover`: Interactive glass card elevating by `-6px` on hover with dynamic cursor radial refraction overlay (`--mouse-x`, `--mouse-y`).
3. `.liquid-btn-primary`: Royal Blue to Deep Teal gradient button with white bold text, inner light sheen, and press physics.
4. `.liquid-btn-secondary`: Frosted crystal button with slate border and blue hover glow.
5. `.liquid-phone-frame`: Glossy silver phone casing with crystal rim lighting and float animation (`.animate-float-slow`).
6. `.text-liquid-shimmer`: Animated linear gradient text mask sweeping across main hero titles.

---

## 4. Implemented Feature List
- [x] **Bright Glass Navigation Bar**: Sticky header with logo badge, desktop links, and quick APK download CTA.
- [x] **Hero Showcase**: High-contrast headline, dual pill buttons, and phone mockup displaying auto-rotating screenshots (`#hero-slideshow`).
- [x] **Live Metrics Strip**: Eased numeric count-up statistics (*99.9% Audit Accuracy*, *< 2s Scan Latency*, *100% Offline SQLite*, *0 Data Loss*).
- [x] **Bento Feature Grid**: Translucent crystal cards showcasing Real-Time Sync, Barcode Engine, Offline SQLite, Audit Trails, and Multi-Warehouse Bin Mapping.
- [x] **4-Step Workflow Timeline**: Step-by-step process cards.
- [x] **Screenshot Carousel**: Horizontal scroll snap track with manual navigation controls.
- [x] **Glass FAQ Accordions**: Expanding `<details>` cards with smooth transitions.
- [x] **Download CTA Banner & Footer**: Full-width glass banner with download trigger and copyright details.
