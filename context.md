# StockFlow Landing Page - Project & UI Context

This file serves as a comprehensive reference for AI agents or developers working on the StockFlow Landing Page, specifically focusing on UI tokens, design system definitions, and component architecture to facilitate future UI redesigns.

## 1. Overview
This is a static landing page for **StockFlow**, an Android inventory management app.
- **Tech Stack**: HTML5, Vanilla CSS, Vanilla JavaScript, Tailwind CSS (via CDN with custom configuration plugin).
- **Core Identity**: Dark, premium, technical aesthetic derived from the StockFlow logo. The palette consists of very deep navy backgrounds, royal blue primaries, and cyan/teal accents.

## 2. Design System (Tailwind Configuration)

The following custom color tokens and typography settings are injected into the Tailwind CDN config. Future UI modifications should strictly utilize these semantic tokens rather than arbitrary hex codes.

### Color Palette
**Navy Base Surfaces (Backgrounds & Containers)**
- `navy-deepest` (`#0A1628`): Used for the main body background, footer, and deep sections (e.g., hero, carousel container).
- `navy-base` (`#0D1B2E`): Used for alternating section backgrounds (e.g., trust strip, timeline, for users).
- `navy-surface` (`#0F1D32`): Used for standard cards, FAQ accordions, mobile menu.
- `navy-elevated` (`#152238`): Used for elevated/hover states of cards.
- `navy-border` (`#1E3050`): Used for all borders and dividers.
- `navy-light` (`#243B55`): Used for subtle highlights.

**Brand Colors (Primary & Accents)**
- `blue-primary` (`#2563EB`): The main brand color (derived from the 3D cube in the logo).
- `blue-light` (`#3B82F6`): Used for hover states and gradients.
- `cyan-accent` (`#06D6A0`): The energetic accent color (derived from the flow arrow in the logo) used for CTAs, checkmarks, and focus outlines.
- `cyan-light` (`#34E8B8`): Used for hover states on CTA buttons.

**Typography Colors**
- `text-primary` (`#F0F4F8`): Main headings and prominent text.
- `text-secondary` (`#8899A6`): Body paragraphs, subheadings, list items.
- `text-tertiary` (`#556677`): Meta information, version numbers, small print.

### Typography (Font: Inter)
- `display-lg`: 64px, bold, tight tracking (Hero headers).
- `headline-md`: 32px, bold, tight tracking (Section headers).
- `body-lg`: 18px, medium, relaxed line-height (Subtitles).
- `body-md`: 16px, medium (Standard body text).
- `label-sm`: 12px, semi-bold, uppercase, wide tracking (Tags, nav links, buttons).

## 3. Custom CSS Components (`styles.css`)

Beyond Tailwind utilities, several complex custom CSS classes govern the UI's look and feel. 

### Structural & Visual Components
- `.phone-frame`: A custom container used to display screenshots. It features a `3px solid #06D6A0` border, a `48px` border-radius, and deep shadows. It specifically targets Android phone aspect ratios (`aspect-[9/19.5]`).
- `.glass`: A dark glassmorphism effect using `rgba(15, 29, 50, 0.75)` with a 16px backdrop blur and increased saturation. Used on sticky navbars and floating notification popups.
- `.warehouse-grid`: A subtle background pattern using intersecting `blue-primary` linear gradients at 0.4 opacity on a 40px grid size.
- `.feature-card` / `.screenshot-card`: Classes applying cubic-bezier transitions for hover lift and 3D tilt effects.

### Glows & Effects
- `.glow-blue` / `.glow-cyan`: Multi-layered box-shadows that create a diffused neon glow.
- `.pulse-glow`: An infinite CSS keyframe animation causing the box-shadow to throb (applied to primary CTA buttons).
- `.text-shimmer`: A scrolling linear-gradient background masked to text, creating a shimmering highlight effect on the word "warehouse" in the hero.
- `.gradient-border`: An advanced CSS trick using masks and `::before` pseudo-elements to create a 1px border gradient (from blue to cyan) around navy cards.

### Animations
- `.reveal` / `.reveal.active`: An IntersectionObserver-driven scroll reveal pattern. Elements slide up 30px and fade in.
- `.animate-float`: A slow, infinite translateY and rotate keyframe animation used on the hero section phone mockup.

## 4. UI Architecture & Sections

If you need to redesign or add sections, adhere to the established DOM structures:

1. **Section Containers**: Built with `<section class="py-section-gap">` and inner `<div class="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">`.
2. **Hero Section**: Contains floating, blurred glow orbs (`w-[500px] h-[500px] bg-blue-primary/15 rounded-full blur-[150px]`) behind the text for atmospheric lighting. Includes an interactive image slideshow (images 1-7).
3. **Bento Grid (Features)**: Utilizes CSS Grid (`grid-cols-1 md:grid-cols-3 gap-6`). Cards alternate between solid gradient backgrounds (blue to cyan) and bordered navy surfaces.
4. **Timeline**: Uses an absolute-positioned SVG path that connects numbered circles.
5. **Screenshot Carousel**: An auto-scrolling flex container (`overflow-x-auto snap-x`) displaying multiple `.screenshot-card` components.
6. **FAQ Accordions**: Uses semantic HTML `<details>` and `<summary>` tags styled via Tailwind group hover and marker hiding.

## 5. JavaScript Logic (`main.js`)
UI behaviors driven by JavaScript:
- **Scroll Reveal**: Adds `.active` class to `.reveal` elements when they enter the viewport.
- **Sticky Nav**: Adds `.glass` and padding changes to the navbar when scrolled past 80px.
- **Animated Counters**: Eases numbers up to their `data-target` value when scrolled into view.
- **SVG Timeline**: Adjusts `strokeDashoffset` on scroll to "draw" a line down the page.
- **Mobile Menu**: Toggles transform classes and manages an overlay backdrop.
- **3D Tilt**: Tracks mouse movement over `.screenshot-card` to rotate the card on X and Y axes.
- **Slideshow & Carousel**: The hero image (`#hero-slideshow`) rotates `assets/images/1.png` through `7.png` every 5 seconds. The screenshot carousel (`#screenshot-carousel`) auto-scrolls horizontally every 3 seconds.
