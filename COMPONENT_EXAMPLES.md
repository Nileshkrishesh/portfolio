# Component Library Reference

Quick reference for all available components with usage examples.

## Layout Components

### Navbar
**Location**: `src/components/layout/Navbar.tsx`

**Props**:
```tsx
interface NavbarProps {
  links: NavLink[]        // Navigation menu items
  personalName: string    // Your name for the logo
}
```

**Features**:
- Fixed header with scroll-based styling
- Responsive mobile menu
- Smooth scroll to sections
- Automatic active state

**Usage**:
```tsx
import { Navbar } from '@/components/layout/Navbar'
import { navLinks, personalInfo } from '@/data/portfolio'

<Navbar links={navLinks} personalName={personalInfo.name} />
```

---

### Footer
**Location**: `src/components/layout/Footer.tsx`

**Props**:
```tsx
interface FooterProps {
  socialLinks: SocialLink[]  // Array of social media links
  personalName: string        // Your name for branding
}
```

**Features**:
- 3-column responsive layout
- Animated social icons
- Quick navigation links
- Dynamic copyright year

**Usage**:
```tsx
import { Footer } from '@/components/layout/Footer'
import { socialLinks, personalInfo } from '@/data/portfolio'

<Footer socialLinks={socialLinks} personalName={personalInfo.name} />
```

---

### PageBackground
**Location**: `src/components/layout/PageBackground.tsx`

**Props**: None

**Features**:
- Animated particle network
- Canvas-based rendering
- Respects `prefers-reduced-motion`
- Dusty rose and beige color scheme
- Particles connect when nearby

**Usage**:
```tsx
import { PageBackground } from '@/components/layout/PageBackground'

<PageBackground />
```

---

## UI Components

### Button
**Location**: `src/components/ui/Button.tsx`

**Props**:
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  // ... all standard button HTML attributes
}
```

**Variants**:
- `primary` - Dusty rose background, white text (default)
- `secondary` - Background-alt color
- `outline` - Transparent with border
- `ghost` - Transparent, hover shows background

**Sizes**:
- `sm` - Compact padding
- `md` - Standard padding (default)
- `lg` - Large padding

**Usage**:
```tsx
import { Button } from '@/components/ui/Button'
import { Mail } from 'lucide-react'

<Button variant="primary" size="lg">
  Get in Touch
</Button>

<Button variant="outline" size="md">
  <Mail size={18} />
  Email Me
</Button>

<Button variant="ghost" onClick={handleClick}>
  Learn More
</Button>
```

---

### SectionHeading
**Location**: `src/components/ui/SectionHeading.tsx`

**Props**:
```tsx
interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}
```

**Features**:
- Fade-in animation on scroll
- Optional subtitle with secondary color
- Text balance for better typography
- Centered or left-aligned

**Usage**:
```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'

<SectionHeading 
  title="About Me"
  subtitle="Get to know my journey and what drives me"
  centered
/>

<SectionHeading 
  title="Work Experience"
/>
```

---

### Tag
**Location**: `src/components/ui/Tag.tsx`

**Props**:
```tsx
interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}
```

**Variants**:
- `default` - Neutral background-alt color (default)
- `accent` - Accent tint background, transforms to accent on hover

**Usage**:
```tsx
import { Tag } from '@/components/ui/Tag'

<div className="flex gap-2 flex-wrap">
  <Tag variant="accent">TypeScript</Tag>
  <Tag variant="default">React</Tag>
  <Tag>Next.js</Tag>
</div>

{/* With skills data */}
{skills.map(skill => (
  <Tag key={skill.name} variant="accent">
    {skill.name}
  </Tag>
))}
```

---

### AnimatedCounter
**Location**: `src/components/ui/AnimatedCounter.tsx`

**Props**:
```tsx
interface AnimatedCounterProps {
  value: number          // Target number to count to
  duration?: number      // Animation duration in seconds (default: 2)
  prefix?: string        // Text before number (e.g., '$')
  suffix?: string        // Text after number (e.g., '+', 'K')
  className?: string
}
```

**Features**:
- Counts from 0 to target value
- Triggers when scrolled into view (once)
- EaseOutCubic easing for natural motion
- Customizable duration

**Usage**:
```tsx
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

{/* Years of experience */}
<AnimatedCounter value={5} suffix="+" duration={2} />

{/* Money raised */}
<AnimatedCounter value={1000000} prefix="$" duration={3} />

{/* With stats data */}
{stats.map(stat => (
  <div key={stat.label}>
    <div className="text-4xl font-serif font-bold">
      <AnimatedCounter 
        value={stat.value}
        prefix={stat.prefix}
        suffix={stat.suffix}
      />
    </div>
    <p className="text-text-secondary">{stat.label}</p>
  </div>
))}
```

---

## Utility Functions

### cn (Class Name Merger)
**Location**: `src/lib/utils.ts`

Merges Tailwind classes intelligently, handling conflicts.

```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  className // Allow prop override
)}>

<button className={cn(
  'px-4 py-2',
  'bg-accent',        // These would conflict
  'bg-red-500'        // This wins (last one)
)}>
```

---

### formatDate
**Location**: `src/lib/utils.ts`

Formats dates consistently.

```tsx
import { formatDate } from '@/lib/utils'

formatDate('2024-01-15')
// → "January 2024"

formatDate(new Date())
// → "August 2026"
```

---

### isCurrentRole
**Location**: `src/lib/utils.ts`

Checks if a role is current (ongoing).

```tsx
import { isCurrentRole } from '@/lib/utils'

isCurrentRole(null)          // true
isCurrentRole('Present')     // true
isCurrentRole('2024-12-31')  // false (past)
isCurrentRole('2027-01-01')  // true (future)
```

---

### slugify
**Location**: `src/lib/utils.ts`

Creates URL-friendly slugs from strings.

```tsx
import { slugify } from '@/lib/utils'

slugify('My Amazing Project!')
// → "my-amazing-project"

slugify('Senior Software Engineer @ Company')
// → "senior-software-engineer-company"
```

---

### truncate
**Location**: `src/lib/utils.ts`

Truncates text to a specified length.

```tsx
import { truncate } from '@/lib/utils'

truncate('This is a very long description...', 20)
// → "This is a very long..."

truncate('Short text', 50)
// → "Short text" (unchanged)
```

---

## Design System Tokens

### Colors

Use these Tailwind classes (mapped to CSS variables):

```tsx
{/* Backgrounds */}
<div className="bg-background">           {/* #FAF6EF - Warm ivory */}
<div className="bg-background-alt">       {/* #F2EBE0 - Alternating tone */}

{/* Text */}
<p className="text-text-primary">         {/* #2A2019 - Dark espresso */}
<p className="text-text-secondary">       {/* #55483E - Soft espresso */}

{/* Accent */}
<div className="bg-accent">               {/* #BD8175 - Dusty rose */}
<div className="hover:bg-accent-hover">   {/* #A56D62 - Deeper rose */}
<div className="bg-accent-tint">          {/* #F5EAE8 - Soft rose tint */}

{/* Borders */}
<div className="border border-border">    {/* #E5D9C9 - Thin beige */}
```

---

### Typography

```tsx
{/* Fonts */}
<h1 className="font-serif">               {/* Fraunces (Google Fonts) */}
<p className="font-sans">                 {/* Inter (Google Fonts) */}

{/* Heading sizes (responsive) */}
<h1>                                      {/* 5xl → 6xl → 7xl */}
<h2>                                      {/* 4xl → 5xl → 6xl */}
<h3>                                      {/* 3xl → 4xl */}
<h4>                                      {/* 2xl → 3xl */}
<h5>                                      {/* xl → 2xl */}
<h6>                                      {/* lg → xl */}
```

---

### Spacing Utilities

```tsx
{/* Container with responsive padding */}
<div className="container-custom">
  {/* max-w-7xl mx-auto px-6 md:px-8 lg:px-12 */}
</div>

{/* Section padding (8rem top/bottom) */}
<section className="section-padding">
  {/* py-32 (responsive) */}
</section>

{/* Editorial spacing (generous vertical gaps) */}
<div className="editorial-spacing">
  {/* space-y-6 md:space-y-8 */}
</div>

{/* Card border radius */}
<div className="rounded-card">
  {/* 1.5rem / 24px */}
</div>
```

---

## Common Patterns

### Section Layout
```tsx
<section id="section-name" className="section-padding">
  <div className="container-custom">
    <SectionHeading 
      title="Section Title"
      subtitle="Optional subtitle"
    />
    
    {/* Content here */}
  </div>
</section>
```

---

### Alternating Section Backgrounds
```tsx
{/* Light section */}
<section className="section-padding">
  <div className="container-custom">
    {/* Content */}
  </div>
</section>

{/* Darker section - breaks out of container */}
<section className="section-padding bg-background-alt -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12">
  <div className="container-custom">
    {/* Content */}
  </div>
</section>
```

---

### Animated Card Grid
```tsx
import { motion } from 'framer-motion'

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-background border border-border rounded-card p-6"
    >
      {/* Card content */}
    </motion.div>
  ))}
</div>
```

---

### Card with Hover Effect
```tsx
<motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="bg-background border border-border rounded-card p-6 hover:shadow-lg"
>
  {/* Card content */}
</motion.div>
```

---

### Icon with Text
```tsx
import { Mail, Github } from 'lucide-react'

<Button>
  <Mail size={18} />
  Email Me
</Button>

<a className="flex items-center gap-2">
  <Github size={20} />
  View on GitHub
</a>
```

---

### Responsive Grid
```tsx
{/* 1 col mobile, 2 col tablet, 3 col desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* 1 col mobile, 2 col desktop */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

{/* Auto-fit responsive (CSS Grid magic) */}
<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
```

---

### Fade In on Scroll
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {/* Content fades in when scrolled into view */}
</motion.div>
```

---

## Data Integration Example

Complete example showing how to use data:

```tsx
'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { projects } from '@/data/portfolio'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Featured Projects"
          subtitle="A selection of my recent work"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects
            .filter(p => p.featured)
            .map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-border rounded-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                
                <div className="p-6 space-y-4">
                  <h3>{project.title}</h3>
                  <p className="text-text-secondary">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Tag key={tag} variant="accent">{tag}</Tag>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    {project.demoUrl && (
                      <Button variant="primary" size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  )
}
```

---

**All components are fully typed and documented. Check the source files for detailed implementations!**
