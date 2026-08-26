# Hero Section Layout Reference

Visual breakdown of the Hero section structure and spacing.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  [Background: Animated particle network canvas at very low opacity]         │
│  [Overlay: Radial gradient fade for text readability]                       │
│                                                                              │
│  ┌─────────────────────────────────┬────────────────────────────────────┐  │
│  │  LEFT COLUMN (55%)              │  RIGHT COLUMN (45%)                │  │
│  │                                 │                                    │  │
│  │  ┌─────────────────────────┐   │                                    │  │
│  │  │ OPEN TO OPPORTUNITIES   │   │  ┌──────────────────────────────┐ │  │
│  │  └─────────────────────────┘   │  │                              │ │  │
│  │  (Small eyebrow badge)          │  │                              │ │  │
│  │                                 │  │                              │ │  │
│  │  John                           │  │      PROFILE PHOTO           │ │  │
│  │  Doe                            │  │      (3:4 aspect ratio)      │ │  │
│  │  (Large serif, first name dark, │  │   Rounded corners, beige     │ │  │
│  │   last name dusty rose)         │  │   border, soft shadow        │ │  │
│  │                                 │  │                              │ │  │
│  │  Full-Stack Developer           │  │                              │ │  │
│  │  (Medium serif, muted)          │  │                              │ │  │
│  │                                 │  └──────────────────────────────┘ │  │
│  │  A software engineer with       │            │                      │  │
│  │  5+ years of experience...      │            ▼                      │  │
│  │  (2-3 sentence intro, large     │  ┌──────────────────────────────┐ │  │
│  │   sans, muted, line-height      │  │   BS in Computer Science    │ │  │
│  │   relaxed)                      │  │    Stanford University       │ │  │
│  │                                 │  └──────────────────────────────┘ │  │
│  │  ┌────────────────────────┐    │  (Floating degree badge pill)     │  │
│  │  │ ▶ View My Work     →   │    │                                    │  │
│  │  └────────────────────────┘    │  ┌────────────┬────────────────┐  │  │
│  │  (Dark espresso bg, ivory text) │  │    5+      │      20+       │  │  │
│  │                                 │  │   Years    │    Projects    │  │  │
│  │  ┌────────────────────────┐    │  │ Experience │    Shipped     │  │  │
│  │  │ ✉ Get in Touch         │    │  └────────────┴────────────────┘  │  │
│  │  └────────────────────────┘    │  (Stats card, 2-column grid)      │  │
│  │  (Outlined, beige border)       │                                    │  │
│  │                                 │                                    │  │
│  └─────────────────────────────────┴────────────────────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Spacing & Sizing

### Desktop Layout (1024px+)
```
Container: max-width 1400px (7xl), centered
Grid: 55% / 45% columns, 4rem gap
Section padding: 8rem top/bottom
Minimum height: 100vh (full viewport)
Vertical centering: Flexbox align-items-center
```

### Left Column Elements
```
Eyebrow badge:
  - Padding: 0.375rem 1rem
  - Font: 12px, uppercase, 0.2em tracking
  - Border: 1px dusty rose with 30% opacity
  - Border radius: Full (pill shape)
  - Margin bottom: 1.5rem

Name (h1):
  - Font size: 5xl → 6xl → 7xl (responsive)
  - Line height: 0.95 (tight)
  - Spacing between first/last: 0.5rem
  - First name color: #2A2019 (dark espresso)
  - Last name color: #BD8175 (dusty rose)

Role:
  - Font size: 2xl → 3xl
  - Font: Serif
  - Color: #55483E (muted espresso)
  - Margin top: 1rem

Intro paragraph:
  - Font size: 18px → 20px
  - Line height: 1.625 (relaxed)
  - Color: #55483E
  - Max width: 48rem (2xl)
  - Margin top: 1.5rem

Buttons:
  - Height: Large (56px)
  - Padding: 2rem 2rem
  - Gap between: 1rem
  - Border radius: Full (pill shape)
  - Margin top: 0.5rem
```

### Right Column Elements
```
Profile image container:
  - Max width: 28rem (md)
  - Aspect ratio: 3:4
  - Border radius: 2rem
  - Border: 1px #E5D9C9
  - Shadow: 0 8px 30px rgba(0,0,0,0.04)

Degree badge:
  - Position: Absolute, bottom -1rem
  - Padding: 0.75rem 1.5rem
  - Border radius: Full
  - Background: White with backdrop blur
  - Border: 1px #E5D9C9
  - Shadow: Large

Stats card:
  - Max width: 24rem (sm on desktop)
  - Margin top: 2rem desktop / 2rem mobile
  - Padding: 1.5rem
  - Border radius: 1.5rem (card)
  - Background: #F2EBE0 (background-alt)
  - Grid: 2 columns, 1.5rem gap

Stat numbers:
  - Font size: 3xl → 4xl
  - Font: Serif, bold
  - Color: #BD8175 (accent)

Stat labels:
  - Font size: 14px
  - Color: #55483E
  - Margin top: 0.25rem
```

## Mobile Layout (< 1024px)

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  OPEN TO OPPORTUNITIES            │ │
│  └───────────────────────────────────┘ │
│                                         │
│  John                                   │
│  Doe                                    │
│                                         │
│  Full-Stack Developer                   │
│                                         │
│  A software engineer with 5+ years...   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ ▶ View My Work              →   │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ ✉ Get in Touch                  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │        PROFILE PHOTO            │   │
│  │                                 │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│             │                           │
│             ▼                           │
│  ┌─────────────────────────────────┐   │
│  │  BS in Computer Science         │   │
│  │  Stanford University            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌────────────┬──────────────────┐     │
│  │    5+      │       20+        │     │
│  │   Years    │    Projects      │     │
│  │ Experience │    Shipped       │     │
│  └────────────┴──────────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Breakpoints
- **< 768px**: Single column, reduced font sizes
- **768px - 1023px**: Single column, increased font sizes
- **1024px+**: Two-column layout activates

## Color Reference

### Text Colors
```css
Primary heading (first name):    #2A2019  (--color-text-primary)
Accent heading (last name):      #BD8175  (--color-accent)
Secondary text (role, intro):    #55483E  (--color-text-secondary)
```

### Background Colors
```css
Page background:                 #FAF6EF  (--color-background)
Stats card background:           #F2EBE0  (--color-background-alt)
Button primary background:       #2A2019  (--color-text-primary)
Degree badge background:         #FAF6EF  (--color-background)
```

### Border Colors
```css
All borders:                     #E5D9C9  (--color-border)
Eyebrow badge border:            #BD8175  30% opacity
```

### Accent Elements
```css
Eyebrow text:                    #BD8175  (--color-accent)
Stats numbers:                   #BD8175  (--color-accent)
Button hover shift:              #A56D62  (--color-accent-hover)
```

## Animation Timeline

```
Time     Element                Action
────────────────────────────────────────────────
0ms      Background            Fade in (600ms)
200ms    Eyebrow              Fade in (600ms)
300ms    First name           Fade up 20px (500ms)
400ms    Last name            Fade up 20px (500ms)
500ms    Role                 Fade up 20px (500ms)
600ms    Intro                Fade up 20px (500ms)
700ms    Button 1             Fade up 20px (500ms)
800ms    Button 2             Fade up 20px (500ms)
900ms    Profile image        Scale 0.95→1 (600ms)
1000ms   Degree badge         Fade up 20px (500ms)
1100ms   Stats card           Fade up 20px (500ms)
────────────────────────────────────────────────
Total sequence duration: ~1.7 seconds
```

## Interaction States

### "View My Work" Button
```
Default:
  - Background: #2A2019
  - Text: #FAF6EF
  - Arrow icon: static

Hover:
  - Background: #55483E (lighter)
  - Arrow: translateX(4px)
  - Transition: 300ms

Active/Click:
  - Smooth scroll to #projects section
```

### "Get in Touch" Button
```
Default:
  - Background: transparent
  - Border: 1px solid #E5D9C9
  - Text: #2A2019

Hover:
  - Background: #F2EBE0
  - Transform: translateY(-2px)
  - Transition: 300ms

Active/Click:
  - Smooth scroll to #contact section
```

## Component Props Mapping

```typescript
// From data/portfolio.ts
personalInfo: {
  firstName: "John"           → First name display
  lastName: "Doe"            → Last name display  
  title: "Developer"         → Role line
  intro: "I am..."          → Intro paragraph
  image: "/images/..."      → Profile photo src
  openToOpportunities: true  → Shows/hides eyebrow
}

education[0]: {
  degree: "Bachelor of Science"  ─┐
  field: "Computer Science"      ─┼─→ "BS in Computer Science"
  institution: "Stanford"         ─→ "Stanford University"
}

heroStats: [
  { value: 5, suffix: "+", label: "Years Experience" }
  { value: 20, suffix: "+", label: "Projects Shipped" }
]
```

## Z-Index Layers

```
Layer 0:  PageBackground canvas (animated particles)
Layer 1:  Radial gradient overlay (text readability)
Layer 10: Content (text, buttons, images)
Layer 20: Floating degree badge (appears above image)
```

## Accessibility Features

- **Semantic HTML**: `<section>`, `<h1>`, `<p>`, `<button>`
- **Alt text**: Generated from firstName + lastName
- **Focus states**: Visible ring on buttons (2px accent color)
- **Motion**: All animations respect `prefers-reduced-motion`
- **Keyboard**: All interactive elements keyboard accessible
- **Color contrast**: WCAG AA compliant (text/background ratios)
- **Touch targets**: Buttons minimum 44x44px

## Performance Notes

- **Canvas background**: Runs on separate layer, no layout reflow
- **Animations**: GPU-accelerated transforms (translateY, scale, opacity)
- **Images**: Consider using Next.js `<Image>` for optimization
- **Font loading**: Google Fonts with `display=swap` to prevent FOIT

---

**This reference matches the implemented Hero section structure.** 🎯
