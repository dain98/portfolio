# Cafe CSS Art Walk-Through — Design Spec

**Date:** 2026-04-13
**Scope:** Transform portfolio sections into an immersive walk-through cafe using pure CSS/SVG art backgrounds.

## Overview

Each page section becomes a different room in a cozy Boston bookhouse cafe. As the user scrolls, they walk through the space — entering at the storefront, moving past the counter, down a gallery hallway, into a reading nook, and ending at a quiet corner table. All art is pure SVG + CSS — no external images.

## Architecture

- **One background component per room** — pure SVG + CSS, absolutely positioned behind content
- **Components:** `StorefrontBg.tsx`, `CounterBg.tsx`, `GalleryBg.tsx`, `ReadingNookBg.tsx`, `CornerTableBg.tsx`
- **Content overlays** — cards and text get warm `rgba` tinted backgrounds so they sit naturally on counters/shelves/walls
- **Color palette** — uses existing CSS variables (`var(--caramel)`, `var(--espresso)`, etc.) so dark mode works automatically
- **Scroll-triggered reveals** — room details fade/slide in via the existing ScrollReveal system

## Room-by-Room Design

### 1. Hero — The Storefront

You're standing outside looking in.

| Element | Implementation |
|---------|---------------|
| Canvas awning | CSS triangles/curves across top, "dain.cafe" text on awning fabric |
| Window frame | Glass panes framing the coffee cup SVG, warm light glow radiating behind |
| Brick walls | Subtle repeating CSS brick pattern flanking the entrance |
| Door with OPEN sign | Doorframe shape, animated sign with gentle swing |
| Light spillover | Radial gradient glow from window onto "sidewalk" at bottom |
| Hero text | Overlaid on the glass/window area — like cafe name painted on glass |

**File:** `src/components/backgrounds/StorefrontBg.tsx`
**Modifies:** `src/components/HeroSection.tsx`

### 2. About — The Welcome Counter

Step inside.

| Element | Implementation |
|---------|---------------|
| Barista counter | Long wooden surface with CSS perspective transform for 3D depth |
| Chalkboard | Skills "Today's Menu" card sits ON the chalkboard |
| Portrait | Photo framed on the wall above the counter |
| Pendant lights | 3 warm-glowing bulbs hanging from top, soft light pools beneath |
| Coffee jars/shelves | Small decorative SVG elements on back wall |

**File:** `src/components/backgrounds/CounterBg.tsx`
**Modifies:** `src/components/AboutSection.tsx`

### 3. Experience — The Gallery Hallway

Walking down the hall.

| Element | Implementation |
|---------|---------------|
| Wainscoting | Lower wall paneling — CSS rectangles with subtle shadow |
| Clothesline timeline | Timeline becomes a clothesline with clothespins. Each card hangs like a pinned polaroid. Line has gentle sag. |
| Wall sconces | Small light fixtures between items with warm glow |
| Hardwood floor | Subtle repeating CSS wood-grain pattern at bottom |

**File:** `src/components/backgrounds/GalleryBg.tsx`
**Modifies:** `src/components/ExperienceSection.tsx`

### 4. Projects — The Reading Nook

The cozy main room.

| Element | Implementation |
|---------|---------------|
| Bookshelves | Tall built-in shelves on both sides — colored "book spines" (small rectangles in warm tones) |
| Armchair silhouette | Subtle CSS-drawn cozy chair in corner (decorative) |
| Project cards | Styled as books/chalkboard signs, slight rotation and shadow |
| Reading lamp glow | Warm directional light from one side |
| Rug | Subtle patterned rectangle under the card grid |

**File:** `src/components/backgrounds/ReadingNookBg.tsx`
**Modifies:** `src/components/ProjectsSection.tsx`

### 5. Contact — The Corner Table

The quiet corner by the window.

| Element | Implementation |
|---------|---------------|
| Window | Large window frame with twilight/dusk CSS gradient sky outside |
| Curtains | Simple pulled-aside curtain shapes flanking window |
| Corner table | Small round table silhouette where contact card sits |
| Mason jar | Decorative SVG with social links radiating from it |
| Candle | Small flickering candle on table (CSS flame animation) |
| CLOSED sign | Visible on distant door, bookending the OPEN from hero |

**File:** `src/components/backgrounds/CornerTableBg.tsx`
**Modifies:** `src/components/ContactSection.tsx`

## Section Transitions

- Overlapping "doorway" dividers between sections — CSS shapes curving from one room into the next
- Storefront → counter: warm light gradient spilling forward
- Gallery → reading nook: wood paneling angles into bookshelves

## Animation

- Room detail elements (pendants, sconces, candles) fade in slightly after content
- Gallery clothesline sways gently on scroll-in
- Book spines have subtle hover wobble
- FloatingBeans component stays — beans drift through the whole cafe
- Candle flame flickers via CSS animation

## Responsive

- **Mobile:** CSS art elements scale down or hide selectively. Storefront shows just door/window. Bookshelves compress. Clothesline becomes vertical.
- **Tablet:** Moderate detail — pendant lights stay, bookshelves partial, rug hidden.

## Dark Mode

Already handled by CSS variables. Specific adjustments:
- Brick → dark brick tones
- Wood → dark wood
- Pendant lights glow brighter against dark backgrounds
- Contact twilight window → full night sky
- All colors derived from `var()` so no extra work needed

## File Structure

```
src/components/
  backgrounds/
    StorefrontBg.tsx
    CounterBg.tsx
    GalleryBg.tsx
    ReadingNookBg.tsx
    CornerTableBg.tsx
  HeroSection.tsx        (modified)
  AboutSection.tsx        (modified)
  ExperienceSection.tsx   (modified)
  ProjectsSection.tsx     (modified)
  ContactSection.tsx      (modified)
```

## Out of Scope

- No external images or assets
- No 3D/WebGL
- No scroll-jacking or custom scroll behavior
- No changes to Navbar, Footer, or FloatingBeans
- No new dependencies
