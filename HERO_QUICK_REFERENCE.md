# Hero Section - Quick Reference Card

## 📋 5-Minute Setup

```bash
# 1. Add your photo
cp your-photo.jpg public/images/profile.jpg

# 2. Edit data file
code src/data/portfolio.ts

# 3. Update these fields:
personalInfo: {
  firstName: 'Your',
  lastName: 'Name', 
  title: 'Your Role',
  intro: 'Your 2-3 sentence CV intro...',
  openToOpportunities: true,
}

heroStats: [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Shipped' },
]

education[0]: {
  degree: 'Your Degree',
  field: 'Your Field',
  institution: 'Your University',
}

# 4. Run dev server
npm run dev
```

## 🎨 Design Token Quick Reference

```css
/* Colors */
--color-background: #FAF6EF          /* Warm ivory */
--color-text-primary: #2A2019        /* Dark espresso */
--color-text-secondary: #55483E      /* Soft espresso */
--color-accent: #BD8175              /* Dusty rose */
--color-border: #E5D9C9              /* Thin beige */

/* Typography */
--font-serif: 'Fraunces'             /* Headings */
--font-sans: 'Inter'                 /* Body text */
```

## 🧩 Component Props

```typescript
<Hero
  firstName="John"                    // Required
  lastName="Doe"                      // Required
  role="Full-Stack Developer"         // Required
  intro="CV-sourced intro..."         // Required
  profileImage="/images/profile.jpg"  // Optional
  degree="BS in Computer Science"     // Optional (auto from education)
  university="Stanford"               // Optional (auto from education)
  stats={heroStats}                   // Optional (array or undefined)
  openToOpportunities={true}          // Optional (default: false)
/>
```

## 📐 Layout Breakpoints

```
< 768px    Mobile     Single column, image below content
768-1023px Tablet     Single column, larger text
≥ 1024px   Desktop    Two columns (55% / 45%)
```

## 🎭 Animation Sequence

```
1. Background fades in
2. "OPEN TO OPPORTUNITIES" badge (if enabled)
3. First name reveals
4. Last name reveals  
5. Role fades up
6. Intro fades up
7. Buttons stagger in
8. Profile photo scales in
9. Degree badge slides up
10. Stats card appears

Duration: ~1.7 seconds total
Respects: prefers-reduced-motion
```

## 🎯 Button Actions

```typescript
"View My Work"    → scrolls to #projects
"Get in Touch"    → scrolls to #contact
```

## 📁 File Locations

```
Component:     src/components/sections/Hero.tsx
Data:          src/data/portfolio.ts
Page:          src/app/page.tsx
Photo:         public/images/profile.jpg
Styles:        src/app/globals.css (tokens)
```

## ✏️ Content Writing Template

```
Intro structure (2-3 sentences):

"A [ROLE] with [X years/credential] building [WHAT]. 
Specialized in [SPECIFIC TECH/DOMAIN]. 
[WHAT DRIVES YOU or WHAT YOU DELIVER]."

Example:
"A software engineer with 5+ years building scalable web 
applications at venture-backed startups. Specialized in 
React, TypeScript, and AWS. Passionate about elegant 
solutions to complex problems."
```

## 🚫 Common Mistakes

❌ Using placeholder stats (delete stats if not real)
❌ Generic intro ("passionate developer who loves to code")
❌ Low-resolution profile photo
❌ Forgetting to update firstName/lastName
❌ Image path without leading slash (`images/` vs `/images/`)

## ✅ Quality Checklist

- [ ] Real first/last name in data
- [ ] CV-sourced intro (no fluff)
- [ ] Professional photo added
- [ ] Stats are real numbers (or array is empty)
- [ ] Degree/university match your education
- [ ] Desktop layout looks balanced
- [ ] Mobile layout is readable
- [ ] Buttons scroll correctly
- [ ] Animations play smoothly

## 🔧 Quick Fixes

**Image not showing?**
```bash
# Check file exists
ls public/images/profile.jpg

# Verify path in data (needs leading slash)
image: '/images/profile.jpg'  ✅
image: 'images/profile.jpg'   ❌
```

**Stats not appearing?**
```typescript
// Make sure array is not empty and has items
export const heroStats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years Experience' },
]

// Or hide completely
export const heroStats: Stat[] = []
```

**Degree badge not showing?**
```typescript
// Ensure education array has at least one entry
export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Your University',  // ← Required
    degree: 'Bachelor of Science',   // ← Required
    field: 'Computer Science',       // ← Required
    // ... other fields
  },
]
```

**Animations too fast/slow?**
```typescript
// Edit durations in Hero.tsx
transition: {
  duration: 0.5,  // ← Change this (0.3 - 1.0)
}
```

## 📱 Responsive Preview Widths

```
Mobile:   375px  (iPhone SE)
Mobile:   414px  (iPhone Pro Max)
Tablet:   768px  (iPad)
Tablet:   1024px (iPad Pro) ← Layout switches here
Desktop:  1440px (Laptop)
Desktop:  1920px (Desktop)
```

## 🎨 Customization Points

```typescript
// Change button actions
const handleScrollToWork = () => {
  document.getElementById('projects')?.scrollIntoView()
}

// Change button text
<Button>Your Custom Text</Button>

// Hide eyebrow badge
openToOpportunities={false}

// Hide stats card
stats={[]}  // or stats={undefined}

// Hide degree badge
degree={undefined}
university={undefined}
```

## 🐛 Debug Checklist

```bash
# 1. Check server is running
npm run dev

# 2. Check for TypeScript errors
# Look at terminal output

# 3. Check browser console
# Open DevTools (F12) → Console tab

# 4. Verify imports
grep -r "Hero" src/app/page.tsx

# 5. Check data exports
grep -r "export const heroStats" src/data/portfolio.ts
```

## 📚 Related Docs

- **HERO_CUSTOMIZATION.md** - Detailed setup guide
- **HERO_LAYOUT_REFERENCE.md** - Visual specs
- **HERO_COMPLETE.md** - Implementation summary
- **COMPONENT_EXAMPLES.md** - Component patterns
- **GETTING_STARTED.md** - Project setup

## 🎯 Production Checklist

Before deploying:
- [ ] All placeholder text replaced
- [ ] Profile photo optimized (< 200KB)
- [ ] Stats are accurate
- [ ] Intro is proofread
- [ ] Tested on mobile device
- [ ] Tested with reduced motion
- [ ] Buttons link to correct sections
- [ ] Alt text is descriptive

---

**Quick start**: Edit `src/data/portfolio.ts` and add photo to `public/images/` 🚀
