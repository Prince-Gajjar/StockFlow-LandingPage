# Changelog — StockFlow Landing Page

All notable changes to this project are documented in this file in reverse-chronological order, complying strictly with Section 8.1 of `RULES.md`.

---

## [Bright Liquid Glass Theme Overhaul] — 2026-08-11, 16:38 IST

### What changed
- **Design System Transformed (`css/styles.css`)**:
  - Shifted global theme from dark navy (`#060D18`) to luminous pearl-white (`#F8FAFC`) with bright crystal glassmorphism (`rgba(255, 255, 255, 0.85)`, `backdrop-filter: blur(24px)`).
  - Updated color hierarchy to Slate 900 (`#0F172A`), Slate 700 (`#334155`), and Slate 500 (`#64748B`) for high WCAG AA contrast readability.
  - Implemented high-visibility primary buttons (`linear-gradient(135deg, #2563EB 0%, #0D9488 100%)`) with white text and specular sheen.
  - Styled glossy silver phone mockup casing (`.liquid-phone-frame`) with crystal rim lighting.
- **Markup Overhaul (`index.html`)**:
  - Re-themed header navigation, hero section, bento grid cards, metrics strip, step workflow nodes, screenshot carousel, and FAQ accordions for bright mode.
- **Client Script Refinement (`js/main.js`)**:
  - Calibrated cursor light tracking and hero slideshow dot indicators for light background surfaces.
- **Documentation Updated (`context.md` & `Changelog.md`)**:
  - Updated `context.md` with new bright theme tokens and created `Changelog.md` as required by `RULES.md` Rule 8.1.

### Why
Requested by the user to provide a proper, clean bright theme for the website while adhering strictly to project operating rules in `RULES.md`.

---

## [Liquid Glass Design System Implementation] — 2026-08-11, 16:35 IST

### What changed
- Initial implementation of the Liquid Glass visual language, including glass cards, cursor light refraction, bento feature grid, and phone frame mockup.

### Why
Initial landing page redesign to elevate StockFlow's marketing aesthetic.
