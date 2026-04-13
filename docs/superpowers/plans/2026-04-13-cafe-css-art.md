# Cafe CSS Art Walk-Through — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform each portfolio section into a walk-through cafe room using pure SVG/CSS art backgrounds.

**Architecture:** One background component per room, absolutely positioned behind content. Content overlays get warm tinted backgrounds to sit naturally in the scene. All colors use existing CSS variables for automatic dark mode support.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, inline SVG

---

### Task 1: Create backgrounds directory + shared CSS keyframes

**Files:**
- Create: `src/components/backgrounds/` (directory)
- Modify: `src/app/globals.css` (append new keyframes and utility classes)

- [ ] **Step 1: Create the backgrounds directory**

```bash
mkdir -p src/components/backgrounds
```

- [ ] **Step 2: Add new CSS keyframes and utility classes to globals.css**

Append after the existing `.deco-bean` block at the end of `src/app/globals.css`:

```css
/* ─── Cafe room backgrounds ─── */
.room-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.room-content {
  position: relative;
  z-index: 1;
}

/* ─── Doorway transitions between rooms ─── */
.doorway-divider {
  position: relative;
}

.doorway-divider::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 80px;
  pointer-events: none;
  z-index: 2;
}

/* ─── Pendant light glow ─── */
.pendant-glow {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 149, 108, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

/* ─── Candle flame flicker ─── */
@keyframes flicker {
  0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
  25% { transform: scaleY(1.1) scaleX(0.95); opacity: 1; }
  50% { transform: scaleY(0.95) scaleX(1.05); opacity: 0.85; }
  75% { transform: scaleY(1.05) scaleX(0.98); opacity: 0.95; }
}

.candle-flame {
  animation: flicker 1.5s ease-in-out infinite;
}

/* ─── Open sign swing ─── */
@keyframes sign-swing {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.sign-swing {
  transform-origin: top center;
  animation: sign-swing 3s ease-in-out infinite;
}

/* ─── Clothesline sway ─── */
@keyframes line-sway {
  0%, 100% { transform: rotate(-0.5deg); }
  50% { transform: rotate(0.5deg); }
}

.line-sway {
  transform-origin: left center;
  animation: line-sway 4s ease-in-out infinite;
}

/* ─── Book spine wobble on hover ─── */
.book-spine {
  transition: transform 0.2s ease;
}

.book-spine:hover {
  transform: translateX(-3px) rotate(-2deg);
}

/* ─── Brick pattern ─── */
.brick-pattern {
  background-image:
    linear-gradient(to right, var(--border-warm) 0%, var(--border-warm) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border-warm) 0%, var(--border-warm) 1px, transparent 1px);
  background-size: 60px 28px;
  background-position: 0 0, 30px 14px;
  opacity: 0.12;
}

/* ─── Wood grain pattern ─── */
.wood-grain {
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 80px,
    var(--border-warm) 80px,
    var(--border-warm) 81px
  );
  opacity: 0.08;
}

/* ─── Wainscoting ─── */
.wainscot-panel {
  border: 1px solid var(--border-soft);
  border-radius: 2px;
  background: var(--bg-card);
  box-shadow: inset 0 1px 0 var(--border-soft);
}
```

- [ ] **Step 3: Verify dev server compiles**

Run: `npm run build` or check the dev server hasn't errored. Expected: no CSS errors.

---

### Task 2: StorefrontBg — Hero section background

**Files:**
- Create: `src/components/backgrounds/StorefrontBg.tsx`
- Modify: `src/components/HeroSection.tsx`

- [ ] **Step 1: Create StorefrontBg.tsx**

Create `src/components/backgrounds/StorefrontBg.tsx`:

```tsx
export default function StorefrontBg() {
  return (
    <div className="room-bg">
      {/* Brick walls on sides */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 brick-pattern" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 brick-pattern" />

      {/* Awning */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] max-w-lg">
        <svg viewBox="0 0 400 60" fill="none" className="w-full">
          {/* Awning fabric with scalloped edge */}
          <path
            d="M0 0h400v40 Q380 55, 360 40 Q340 55, 320 40 Q300 55, 280 40 Q260 55, 240 40 Q220 55, 200 40 Q180 55, 160 40 Q140 55, 120 40 Q100 55, 80 40 Q60 55, 40 40 Q20 55, 0 40Z"
            fill="var(--terracotta)"
            opacity="0.85"
          />
          {/* Stripes */}
          <path
            d="M0 0h400v40 Q380 55, 360 40 Q340 55, 320 40 Q300 55, 280 40 Q260 55, 240 40 Q220 55, 200 40 Q180 55, 160 40 Q140 55, 120 40 Q100 55, 80 40 Q60 55, 40 40 Q20 55, 0 40Z"
            fill="var(--bg-cream)"
            opacity="0.15"
          />
          {/* Cafe name on awning */}
          <text
            x="200"
            y="25"
            textAnchor="middle"
            fill="var(--foam)"
            fontFamily="'DM Serif Display', serif"
            fontSize="18"
            opacity="0.7"
          >
            dain.cafe
          </text>
        </svg>
      </div>

      {/* Window frame glow — warm light spilling from inside */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-[50%]">
        {/* Window frame */}
        <div className="relative w-full h-full border-[6px] border-[var(--medium-roast)] rounded-sm bg-gradient-to-b from-[var(--caramel)] via-[var(--caramel)] to-[var(--foam)] opacity-20">
          {/* Window cross bars */}
          <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-[var(--medium-roast)] -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[var(--medium-roast)] -translate-x-1/2" />
        </div>
        {/* Warm light glow behind window */}
        <div className="absolute inset-0 -m-12 rounded-full bg-[var(--caramel)] opacity-[0.06] blur-2xl" />
        <div className="absolute inset-0 -m-6 rounded-full bg-[var(--caramel)] opacity-[0.08] blur-xl" />
      </div>

      {/* Door with OPEN sign */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-28 md:w-36">
        <svg viewBox="0 0 120 180" fill="none" className="w-full">
          {/* Door frame */}
          <rect x="5" y="0" width="110" height="180" rx="2" fill="var(--bg-card)" stroke="var(--medium-roast)" strokeWidth="3" />
          {/* Door panels */}
          <rect x="15" y="15" width="90" height="60" rx="1" fill="none" stroke="var(--border-soft)" strokeWidth="1.5" />
          <rect x="15" y="90" width="90" height="75" rx="1" fill="none" stroke="var(--border-soft)" strokeWidth="1.5" />
          {/* Door window */}
          <rect x="25" y="22" width="70" height="46" rx="1" fill="var(--caramel)" opacity="0.12" />
          {/* Door handle */}
          <circle cx="95" cy="100" r="4" fill="var(--caramel)" />
          {/* OPEN sign hanging in window */}
          <g className="sign-swing" style={{ transformOrigin: "60px 22px" }}>
            <line x1="60" y1="22" x2="60" y2="30" stroke="var(--border-warm)" strokeWidth="1" />
            <rect x="42" y="30" width="36" height="16" rx="2" fill="var(--sage)" opacity="0.8" />
            <text x="60" y="42" textAnchor="middle" fill="white" fontSize="8" fontFamily="'DM Serif Display', serif">
              OPEN
            </text>
          </g>
        </svg>
      </div>

      {/* Sidewalk / light spillover at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%]">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-cream)] to-transparent opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-[var(--caramel)] opacity-[0.05] blur-3xl rounded-full" />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Modify HeroSection.tsx to use StorefrontBg**

In `src/components/HeroSection.tsx`:

Add import at top:
```tsx
import StorefrontBg from "./backgrounds/StorefrontBg";
```

Replace the existing section wrapper. Change:
```tsx
<section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden wave-divider">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-latte)] via-[var(--bg-warm)] to-[var(--bg-cream)]" />
```

With:
```tsx
<section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden wave-divider doorway-divider">
  {/* Cafe storefront background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-latte)] via-[var(--bg-warm)] to-[var(--bg-cream)]" />
  <StorefrontBg />
```

Remove the old coffee ring decorations (the three `<div className="coffee-ring">` elements inside the section).

Wrap the content div with `room-content`:
```tsx
<div className="room-content relative max-w-2xl text-center">
```

- [ ] **Step 3: Update doorway divider for storefront → counter transition**

Change the `.wave-divider::after` CSS in globals.css to also apply a warm gradient. Find:

```css
.wave-divider::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--bg-warm);
  clip-path: ellipse(55% 100% at 50% 100%);
}
```

Replace with:
```css
.wave-divider::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, var(--bg-warm));
  clip-path: ellipse(55% 100% at 50% 100%);
}
```

- [ ] **Step 4: Verify visually**

Run: `npm run dev`
Expected: Hero section shows storefront with awning at top, brick walls on sides, window frame with glow, door with swinging OPEN sign, warm light spillover at bottom. Content text overlaid like painted on glass.

---

### Task 3: CounterBg — About section background

**Files:**
- Create: `src/components/backgrounds/CounterBg.tsx`
- Modify: `src/components/AboutSection.tsx`

- [ ] **Step 1: Create CounterBg.tsx**

Create `src/components/backgrounds/CounterBg.tsx`:

```tsx
export default function CounterBg() {
  return (
    <div className="room-bg">
      {/* Back wall — subtle warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-warm)] via-[var(--bg-cream)] to-[var(--bg-latte)]" />

      {/* Pendant lights — 3 hanging from top */}
      {[20, 50, 80].map((leftPct, i) => (
        <div key={i} className="absolute top-0" style={{ left: `${leftPct}%` }}>
          {/* Cord */}
          <div className="w-px h-16 md:h-24 bg-[var(--border-warm)] mx-auto" />
          {/* Bulb */}
          <div className="relative mx-auto w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M8 14h8v4c0 2-1 4-4 4s-4-2-4-4v-4z" fill="var(--caramel)" opacity="0.6" />
              <path d="M9 14h6v-2c0-1 2-3 3-5a6 6 0 10-12 0c1 2 3 4 3 5v2z" fill="var(--caramel)" opacity="0.8" />
            </svg>
          </div>
          {/* Light pool */}
          <div
            className="pendant-glow"
            style={{
              width: "120px",
              height: "80px",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "4px",
            }}
          />
        </div>
      ))}

      {/* Shelves on back wall */}
      <div className="absolute top-[35%] right-[8%] hidden md:flex gap-3 opacity-30">
        {/* Coffee jars */}
        {[0, 1, 2].map((i) => (
          <svg key={i} width="24" height="36" viewBox="0 0 24 36" fill="none">
            <rect x="4" y="4" width="16" height="28" rx="3" fill="var(--medium-roast)" opacity="0.4" />
            <rect x="6" y="2" width="12" height="6" rx="2" fill="var(--dark-roast)" opacity="0.3" />
            <rect x="6" y="12" width="12" height="4" rx="1" fill="var(--border-soft)" opacity="0.3" />
          </svg>
        ))}
      </div>

      {/* Barista counter — bottom third */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative h-20 md:h-28">
          {/* Counter top surface (perspective) */}
          <div
            className="absolute inset-x-0 top-0 h-3 bg-[var(--medium-roast)] opacity-20"
            style={{ transform: "perspective(400px) rotateX(5deg)", transformOrigin: "top" }}
          />
          {/* Counter front face */}
          <div className="absolute inset-x-0 top-3 bottom-0 bg-[var(--bg-card)] border-t-2 border-[var(--border-warm)]">
            {/* Wood grain on counter */}
            <div className="wood-grain absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Modify AboutSection.tsx to use CounterBg**

In `src/components/AboutSection.tsx`:

Add import at top:
```tsx
import CounterBg from "./backgrounds/CounterBg";
```

Change the section element. Replace:
```tsx
<section className="relative py-32 px-6 bg-[var(--bg-warm)]">
```
With:
```tsx
<section className="relative py-32 px-6 bg-[var(--bg-warm)] overflow-hidden">
  <CounterBg />
```

Remove the decorative corner cup (`<div className="absolute top-12 right-12 ...">` with `CupDoodle`).

Wrap the `max-w-5xl mx-auto` div with `room-content`:
```tsx
<div className="room-content max-w-5xl mx-auto">
```

Move the profile photo to look like a framed portrait on the wall — update the photo container. Replace the photo wrapper's `rotate-[-3deg]` class with a more portrait-like frame. Change the outer photo div from:
```tsx
<div className="relative">
  <div className="w-56 h-56 rounded-3xl overflow-hidden border-2 border-[var(--border-warm)] shadow-lg rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
```
To:
```tsx
<div className="relative">
  <div className="w-52 h-52 rounded-lg overflow-hidden border-4 border-[var(--medium-roast)] shadow-lg hover:scale-[1.02] transition-transform duration-500">
```

Change the decorative coffee stains under the photo from circles to a proper frame shadow. Replace:
```tsx
<div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-[var(--border-warm)] opacity-20" />
<div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border border-[var(--caramel)] opacity-15" />
```
With:
```tsx
{/* Frame shadow */}
<div className="absolute -inset-2 rounded-lg border border-[var(--border-soft)] opacity-40" />
```

- [ ] **Step 3: Verify visually**

Expected: About section shows pendant lights hanging from top, coffee jars on back shelf, barista counter at bottom. Portrait photo looks framed on the wall. Skills menu chalkboard card sits above the counter.

---

### Task 4: GalleryBg — Experience section background

**Files:**
- Create: `src/components/backgrounds/GalleryBg.tsx`
- Modify: `src/components/ExperienceSection.tsx`

- [ ] **Step 1: Create GalleryBg.tsx**

Create `src/components/backgrounds/GalleryBg.tsx`:

```tsx
export default function GalleryBg() {
  return (
    <div className="room-bg">
      {/* Wall */}
      <div className="absolute inset-0 bg-[var(--bg-cream)]" />

      {/* Wainscoting — lower wall panels */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%]">
        {/* Chair rail */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--border-warm)] opacity-30 rounded-t-sm" />
        {/* Panel grid */}
        <div className="absolute top-4 bottom-0 left-0 right-0 grid grid-cols-8 md:grid-cols-12 gap-2 p-2 opacity-40">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="wainscot-panel hidden md:block" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="wainscot-panel md:hidden" />
          ))}
        </div>
      </div>

      {/* Hardwood floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[15%] wood-grain" />

      {/* Wall sconces */}
      {[30, 70].map((leftPct, i) => (
        <div key={i} className="absolute top-[25%] hidden md:block" style={{ left: `${leftPct}%`, transform: "translateX(-50%)" }}>
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            {/* Bracket */}
            <path d="M12 0v20M18 0v20" stroke="var(--medium-roast)" strokeWidth="1.5" />
            <path d="M8 20h14l2 12H6l2-12z" fill="var(--bg-card)" stroke="var(--border-warm)" strokeWidth="1" />
            {/* Flame */}
            <ellipse cx="15" cy="16" rx="3" ry="5" fill="var(--caramel)" opacity="0.5" />
          </svg>
          {/* Glow */}
          <div className="pendant-glow" style={{ width: "80px", height: "60px", left: "50%", transform: "translateX(-50%)", marginTop: "-4px" }} />
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Modify ExperienceSection.tsx to use GalleryBg + clothesline**

In `src/components/ExperienceSection.tsx`:

Add import:
```tsx
import GalleryBg from "./backgrounds/GalleryBg";
```

Change section element. Replace:
```tsx
<section className="relative py-32 px-6">
```
With:
```tsx
<section className="relative py-32 px-6 overflow-hidden doorway-divider">
  <GalleryBg />
```

Remove the old coffee ring decoration.

Wrap content with `room-content`:
```tsx
<div className="room-content max-w-5xl mx-auto">
```

Replace the existing timeline line and layout with a clothesline concept. Replace the timeline line `<div>` (the one with `absolute left-6 md:left-8`) and the entire `space-y-8` div contents with:

```tsx
<div className="relative max-w-3xl mx-auto">
  {/* Clothesline */}
  <div className="line-sway">
    <svg className="w-full h-4" viewBox="0 0 600 16" preserveAspectRatio="none" fill="none">
      <path
        d="M0 8 Q 150 14, 300 8 Q 450 2, 600 8"
        stroke="var(--border-warm)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>

  <div className="space-y-8 mt-4">
    {experiences.map((exp, i) => (
      <ScrollReveal key={i} variant="left" delay={i * 100}>
        <div className="relative pl-16 md:pl-20 group">
          {/* Clothespin */}
          <div className="absolute left-5 md:left-7 top-3">
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
              <path d="M4 0v10L2 14v10c0 2 12 2 12 0V14l-2-4V0" fill="var(--medium-roast)" opacity="0.5" />
              <path d="M4 0h8v3H4z" fill="var(--terracotta)" opacity="0.3" />
            </svg>
          </div>

          <div className="cafe-card p-6 group-hover:border-[var(--terracotta-soft)]">
            {/* ... existing card content stays exactly the same ... */}
```

Keep all existing card content inside `cafe-card` unchanged. Only the wrapper structure changes (clothespin replaces the old circular icon).

Remove the old timeline icon `<div className="absolute left-1 md:left-3 ...">` with the emoji circle.

- [ ] **Step 3: Verify visually**

Expected: Gallery hallway with wainscoting on lower walls, wall sconces with glow, wood floor at bottom. Timeline is now a clothesline with clothespins holding cards.

---

### Task 5: ReadingNookBg — Projects section background

**Files:**
- Create: `src/components/backgrounds/ReadingNookBg.tsx`
- Modify: `src/components/ProjectsSection.tsx`

- [ ] **Step 1: Create ReadingNookBg.tsx**

Create `src/components/backgrounds/ReadingNookBg.tsx`:

```tsx
export default function ReadingNookBg() {
  return (
    <div className="room-bg">
      {/* Warm interior wall */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-warm)] to-[var(--bg-latte)]" />

      {/* Left bookshelf */}
      <div className="absolute left-0 top-[10%] bottom-[15%] w-16 md:w-28 hidden md:flex flex-col gap-1 px-1 opacity-60">
        {Array.from({ length: 6 }).map((_, shelfIdx) => (
          <div key={shelfIdx} className="flex-1 flex flex-col justify-end gap-px border-b border-[var(--border-warm)] pb-px">
            {/* Book spines on this shelf */}
            {Array.from({ length: 4 + (shelfIdx % 3) }).map((_, bookIdx) => {
              const colors = ["var(--terracotta)", "var(--caramel)", "var(--sage)", "var(--medium-roast)", "var(--cinnamon)", "var(--dark-roast)"];
              const heights = [40, 55, 65, 50, 70, 45, 60];
              return (
                <div
                  key={bookIdx}
                  className="book-spine rounded-sm"
                  style={{
                    width: `${6 + (bookIdx * 3) % 8}px`,
                    height: `${heights[(shelfIdx + bookIdx) % heights.length]}%`,
                    backgroundColor: colors[(shelfIdx + bookIdx) % colors.length],
                    opacity: 0.5,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Right bookshelf */}
      <div className="absolute right-0 top-[10%] bottom-[15%] w-16 md:w-28 hidden md:flex flex-col gap-1 px-1 opacity-60">
        {Array.from({ length: 6 }).map((_, shelfIdx) => (
          <div key={shelfIdx} className="flex-1 flex flex-col justify-end gap-px border-b border-[var(--border-warm)] pb-px">
            {Array.from({ length: 3 + (shelfIdx % 4) }).map((_, bookIdx) => {
              const colors = ["var(--caramel)", "var(--terracotta)", "var(--dark-roast)", "var(--sage)", "var(--cinnamon)", "var(--medium-roast)"];
              const heights = [50, 60, 45, 70, 55, 40, 65];
              return (
                <div
                  key={bookIdx}
                  className="book-spine rounded-sm"
                  style={{
                    width: `${5 + (bookIdx * 4) % 7}px`,
                    height: `${heights[(shelfIdx + bookIdx) % heights.length]}%`,
                    backgroundColor: colors[(shelfIdx + bookIdx) % colors.length],
                    opacity: 0.5,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Reading lamp glow from top-right */}
      <div className="absolute top-0 right-[15%] w-64 h-96 hidden md:block">
        <div className="pendant-glow w-full h-full" style={{ background: "radial-gradient(ellipse at top, rgba(200, 149, 108, 0.1) 0%, transparent 70%)" }} />
      </div>

      {/* Armchair silhouette — bottom right corner */}
      <div className="absolute bottom-[5%] right-[3%] hidden lg:block opacity-10">
        <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
          {/* Chair back */}
          <path d="M15 25 Q15 5, 40 5 Q65 5, 65 25 L65 55 L15 55Z" fill="var(--medium-roast)" />
          {/* Seat */}
          <rect x="10" y="55" width="60" height="12" rx="3" fill="var(--medium-roast)" />
          {/* Arm left */}
          <path d="M10 30 L5 30 Q0 30, 0 35 L0 60 Q0 65, 5 65 L10 65Z" fill="var(--medium-roast)" />
          {/* Arm right */}
          <path d="M70 30 L75 30 Q80 30, 80 35 L80 60 Q80 65, 75 65 L70 65Z" fill="var(--medium-roast)" />
          {/* Legs */}
          <rect x="12" y="67" width="5" height="18" rx="1" fill="var(--dark-roast)" />
          <rect x="63" y="67" width="5" height="18" rx="1" fill="var(--dark-roast)" />
        </svg>
      </div>

      {/* Rug under card area */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70%] max-w-2xl h-[30%] hidden md:block opacity-[0.06] border-4 border-[var(--terracotta)] rounded-lg" />
    </div>
  );
}
```

- [ ] **Step 2: Modify ProjectsSection.tsx to use ReadingNookBg**

Add import:
```tsx
import ReadingNookBg from "./backgrounds/ReadingNookBg";
```

Change section element. Replace:
```tsx
<section className="relative py-32 px-6 bg-[var(--bg-warm)]">
```
With:
```tsx
<section className="relative py-32 px-6 bg-[var(--bg-warm)] overflow-hidden doorway-divider">
  <ReadingNookBg />
```

Wrap content with `room-content`:
```tsx
<div className="room-content max-w-5xl mx-auto">
```

Add slight rotation to project cards to look like propped books. On each `cafe-card` div, add `rotate-[0.5deg]` class. Change:
```tsx
<div className="cafe-card p-6 flex flex-col h-full relative overflow-hidden group">
```
To:
```tsx
<div className="cafe-card p-6 flex flex-col h-full relative overflow-hidden group rotate-[0.5deg]" style={{ transform: `rotate(${0.5}deg)` }}>
```

- [ ] **Step 3: Verify visually**

Expected: Bookshelves with colorful spines on both sides, reading lamp glow top-right, armchair silhouette bottom-right, subtle rug under cards, cards slightly tilted like propped books.

---

### Task 6: CornerTableBg — Contact section background

**Files:**
- Create: `src/components/backgrounds/CornerTableBg.tsx`
- Modify: `src/components/ContactSection.tsx`

- [ ] **Step 1: Create CornerTableBg.tsx**

Create `src/components/backgrounds/CornerTableBg.tsx`:

```tsx
export default function CornerTableBg() {
  return (
    <div className="room-bg">
      {/* Wall */}
      <div className="absolute inset-0 bg-[var(--bg-cream)]" />

      {/* Large window — showing twilight sky */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-[45%]">
        {/* Window frame */}
        <div className="relative w-full h-full">
          {/* Sky gradient — twilight */}
          <div className="absolute inset-3 rounded-sm bg-gradient-to-b from-[#e8a87c] via-[#d4845f] to-[#c4653a] opacity-20" />
          {/* Night sky for dark mode handled by variable opacity */}

          {/* Window frame border */}
          <div className="absolute inset-0 border-[6px] border-[var(--medium-roast)] rounded-sm">
            {/* Window cross bars */}
            <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-[var(--medium-roast)] -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[var(--medium-roast)] -translate-x-1/2" />
          </div>

          {/* Left curtain */}
          <svg className="absolute -left-6 top-0 h-full w-12 opacity-20" viewBox="0 0 40 200" fill="none">
            <path d="M0 0 C20 30, 30 50, 25 100 C20 150, 30 170, 35 200 L0 200Z" fill="var(--caramel)" />
          </svg>

          {/* Right curtain */}
          <svg className="absolute -right-6 top-0 h-full w-12 opacity-20" viewBox="0 0 40 200" fill="none">
            <path d="M40 0 C20 30, 10 50, 15 100 C20 150, 10 170, 5 200 L40 200Z" fill="var(--caramel)" />
          </svg>
        </div>
      </div>

      {/* Corner table */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2">
        <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
          {/* Table top */}
          <ellipse cx="100" cy="15" rx="90" ry="15" fill="var(--medium-roast)" opacity="0.15" />
          {/* Table leg */}
          <rect x="90" y="15" width="20" height="40" fill="var(--medium-roast)" opacity="0.1" />
          {/* Table base */}
          <ellipse cx="100" cy="55" rx="40" ry="6" fill="var(--medium-roast)" opacity="0.08" />
        </svg>
      </div>

      {/* Candle with flickering flame */}
      <div className="absolute bottom-[30%] left-1/2 translate-x-8 md:translate-x-12">
        <svg width="16" height="30" viewBox="0 0 16 30" fill="none">
          {/* Candle body */}
          <rect x="4" y="12" width="8" height="18" rx="2" fill="var(--bg-card)" stroke="var(--border-warm)" strokeWidth="0.5" />
          {/* Wick */}
          <line x1="8" y1="12" x2="8" y2="8" stroke="var(--medium-roast)" strokeWidth="1" />
          {/* Flame */}
          <g className="candle-flame">
            <ellipse cx="8" cy="6" rx="3" ry="5" fill="var(--caramel)" opacity="0.6" />
            <ellipse cx="8" cy="5" rx="2" ry="3" fill="var(--terracotta)" opacity="0.4" />
          </g>
        </svg>
        {/* Candle glow */}
        <div className="absolute -inset-4 rounded-full bg-[var(--caramel)] opacity-[0.06] blur-md" style={{ marginTop: "-20px" }} />
      </div>

      {/* Mason jar with notes — bottom left */}
      <div className="absolute bottom-[10%] left-[10%] hidden md:block opacity-25">
        <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
          {/* Jar body */}
          <path d="M6 10h20v24c0 3-4 6-10 6S6 37 6 34V10z" fill="var(--bg-card)" stroke="var(--border-warm)" strokeWidth="1" />
          {/* Jar lid */}
          <rect x="4" y="7" width="24" height="4" rx="1" fill="var(--border-warm)" opacity="0.5" />
          {/* Notes sticking out */}
          <rect x="10" y="2" width="6" height="10" rx="1" fill="var(--foam)" opacity="0.6" transform="rotate(-10, 13, 7)" />
          <rect x="16" y="1" width="6" height="10" rx="1" fill="var(--caramel)" opacity="0.4" transform="rotate(5, 19, 6)" />
        </svg>
      </div>

      {/* CLOSED sign — bookend the OPEN from hero */}
      <div className="absolute top-[60%] right-[8%] hidden md:block opacity-20">
        <div className="sign-swing" style={{ transformOrigin: "top center" }}>
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
            <rect x="0" y="4" width="40" height="16" rx="2" fill="var(--terracotta)" opacity="0.6" />
            <line x1="20" y1="0" x2="20" y2="4" stroke="var(--border-warm)" strokeWidth="1" />
            <text x="20" y="16" textAnchor="middle" fill="var(--foam)" fontSize="6" fontFamily="'DM Serif Display', serif">
              CLOSED
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Modify ContactSection.tsx to use CornerTableBg**

Add import:
```tsx
import CornerTableBg from "./backgrounds/CornerTableBg";
```

Change section element. Replace:
```tsx
<section className="relative py-32 px-6">
```
With:
```tsx
<section className="relative py-32 px-6 overflow-hidden">
  <CornerTableBg />
```

Remove the old coffee ring decoration.

Wrap content with `room-content`:
```tsx
<div className="room-content max-w-5xl mx-auto">
```

- [ ] **Step 3: Verify visually**

Expected: Large window with twilight gradient and curtains, corner table silhouette, flickering candle with warm glow, mason jar with notes, CLOSED sign on distant door.

---

### Task 7: Polish — responsive hiding, dark mode verification, cleanup

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add dark mode adjustments for CSS art**

Append to `src/app/globals.css`:

```css
/* ─── Dark mode cafe adjustments ─── */
html[data-theme="dark"] .brick-pattern {
  opacity: 0.06;
}

html[data-theme="dark"] .wainscot-panel {
  background: var(--bg-card);
  border-color: var(--border-soft);
}

html[data-theme="dark"] .wood-grain {
  opacity: 0.05;
}

html[data-theme="dark"] .book-spine {
  opacity: 0.35;
}
```

- [ ] **Step 2: Verify full page scroll**

Run: `npm run dev`
Scroll through all 5 sections. Verify:
- Each room's CSS art appears behind content
- Room transitions feel like moving through a space
- Content remains readable (z-index correct)
- Mobile: decorative elements hidden where specified
- Dark mode: all art elements adapt via CSS variables
- FloatingBeans still visible through all rooms

- [ ] **Step 3: Commit all changes**

```bash
git add src/components/backgrounds/ src/components/HeroSection.tsx src/components/AboutSection.tsx src/components/ExperienceSection.tsx src/components/ProjectsSection.tsx src/components/ContactSection.tsx src/app/globals.css
git commit -m "feat: immersive cafe walk-through CSS art backgrounds"
```
