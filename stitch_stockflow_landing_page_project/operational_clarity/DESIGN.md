---
name: Operational Clarity
colors:
  surface: '#f4fcf0'
  surface-dim: '#d5dcd1'
  surface-bright: '#f4fcf0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6eb'
  surface-container: '#e9f0e5'
  surface-container-high: '#e3eadf'
  surface-container-highest: '#dde5da'
  on-surface: '#161d17'
  on-surface-variant: '#3e4a3e'
  inverse-surface: '#2b322b'
  inverse-on-surface: '#ecf3e8'
  outline: '#6d7b6d'
  outline-variant: '#bccaba'
  surface-tint: '#006d31'
  primary: '#006d31'
  on-primary: '#ffffff'
  primary-container: '#2cb35b'
  on-primary-container: '#003d18'
  inverse-primary: '#5fdf81'
  secondary: '#3b6843'
  on-secondary: '#ffffff'
  secondary-container: '#bcefc0'
  on-secondary-container: '#416e49'
  tertiary: '#aa304d'
  on-tertiary: '#ffffff'
  tertiary-container: '#fb6e89'
  on-tertiary-container: '#6e0026'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7dfc9a'
  primary-fixed-dim: '#5fdf81'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#bcefc0'
  secondary-fixed-dim: '#a1d3a5'
  on-secondary-fixed: '#00210a'
  on-secondary-fixed-variant: '#23502d'
  tertiary-fixed: '#ffd9dd'
  tertiary-fixed-dim: '#ffb2bc'
  on-tertiary-fixed: '#400013'
  on-tertiary-fixed-variant: '#8a1637'
  background: '#f4fcf0'
  on-background: '#161d17'
  surface-variant: '#dde5da'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
  section-gap: 120px
---

## Brand & Style
The design system is anchored in the concept of "Operational Clarity"—a high-performance, product-led aesthetic tailored for real-time inventory management. It draws heavily from the **Corporate / Modern** movement, emphasizing precision, utility, and speed.

The visual language mirrors the efficiency of a well-organized warehouse: structured, reliable, and frictionless. It avoids unnecessary decoration in favor of functional depth, utilizing subtle grid motifs and soft environmental glows to guide the user’s eye toward critical status indicators and data visualizations.

## Colors
The palette is a functional spectrum designed to communicate status at a glance. 
- **Core Brand:** The Brand Green (#2CB35B) serves as the primary action color, symbolizing growth and positive flow.
- **Surface Strategy:** The background uses a "Minty White" (#F7FFF9) to reduce eye strain, while "Ice-Blue" (#E6F6FF) containers provide subtle differentiation for secondary content areas.
- **Semantic Logic:** Alert and Pending colors are reserved strictly for system status (low stock, expiring items, or pending shipments) to maintain the "Clarity" narrative.

## Typography
This design system utilizes **Inter** for its systematic, utilitarian precision.
- **Headlines:** Feature tight negative letter-spacing and bold weights to create a sense of professional urgency and confidence.
- **Body:** Standardized on "Medium" (500) weight for core body text to ensure maximum legibility against the light-tinted backgrounds. 
- **Labels:** Small labels and pill text use a slightly wider letter-spacing and uppercase styling to denote metadata and status categories clearly.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a standard 12-column structure for desktop. 
- **The 4px Rule:** All spacing increments (padding, margins, gaps) must be multiples of 4px to maintain mathematical harmony.
- **Rhythm:** Large section gaps (120px+) are used to separate product features, creating a high-end, "airy" SaaS feel.
- **Warehouse Motif:** Subtle background grid patterns (1px lines in `#707971` at 10% opacity) may be used in hero sections or container backgrounds to reinforce the inventory/logistics theme.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than harsh borders.
- **Shadow Profile:** Use a single, highly diffused shadow for elevated cards: `0px 10px 30px rgba(0, 33, 12, 0.05)`.
- **Glow Effects:** Primary elements (like CTA buttons or feature highlights) may utilize a secondary soft glow using the Primary Container color (#6EF3A5) to simulate an "active" or "powered" state.
- **Layering:** Background (#F7FFF9) > Surface Container Low (#E6F6FF) > Surface Lowest (#FFFFFF) for the highest level of information.

## Shapes
The shape language is structured and varied based on the scale of the element:
- **Functional (8px):** Buttons, input fields, and checkboxes use a smaller radius to feel precise and tool-like.
- **Structural (16px - 24px):** Product screenshots, feature cards, and hero elements use larger radii to appear modern and approachable.
- **Indicators (999px):** All status badges, tags, and pill-styled chips must be fully rounded.

## Components
- **Buttons:** Primary buttons use a solid Brand Green (#2CB35B) with white text. Secondary buttons use the Outline color for borders or a ghost style. Large CTAs in the hero section should include a subtle 8px shadow of the Primary color.
- **Status Pills:** Small, fully-rounded badges. "In Stock" uses Primary Green, "Low Stock" uses Pending Amber, and "Out of Stock" uses Accent Alert.
- **Cards:** White (#FFFFFF) with a 16px radius and the ambient shadow defined in Elevation. Use "Surface Container Low" for the card header or footer to create internal hierarchy.
- **Inputs:** 8px radius with the Outline color (#707971) at 30% opacity. On focus, the border shifts to Brand Green with a 2px outer glow.
- **Inventory Lists:** High-density rows with 1px dividers using the Outline color. Use alternating background tints (Surface Lowest and Surface Container Low) for increased readability in data-heavy views.