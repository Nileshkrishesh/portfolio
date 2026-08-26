# Quick Start Guide

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📝 Customization Checklist

### 1. Update Personal Information

Open `src/data/portfolio.ts` and replace placeholder data with your information:

#### Required Updates:
- [ ] **personalInfo**: Name, title, bio, location, contact
- [ ] **socialLinks**: GitHub, LinkedIn, Twitter, email URLs
- [ ] **navLinks**: Navigation menu items (customize as needed)
- [ ] **stats**: Key statistics about your work
- [ ] **skills**: Your technical skills and expertise
- [ ] **projects**: Portfolio projects with descriptions
- [ ] **experiences**: Work history and achievements
- [ ] **education**: Academic background

#### Optional Updates (if applicable):
- [ ] **achievements**: Awards and recognitions
- [ ] **certifications**: Professional certifications
- [ ] **competitiveProgramming**: LeetCode, Codeforces, etc.
- [ ] **research**: Published papers and publications
- [ ] **contactInfo**: Custom contact section text

### 2. Add Your Images

Place your files in the `public` directories:

```
public/
├── images/
│   └── profile.jpg          # Your professional photo
├── projects/
│   ├── project-1.jpg        # Project screenshots
│   ├── project-2.jpg
│   └── ...
├── certificates/
│   └── cert-name.jpg        # Certification images
└── resume/
    └── resume.pdf           # Your resume PDF
```

**Image Recommendations**:
- Profile photo: 400x400px, square, professional
- Project images: 1200x630px, landscape format
- Certificates: High resolution scans or screenshots

### 3. Customize Design Tokens (Optional)

If you want to adjust colors, edit the CSS variables in `src/app/globals.css`:

```css
:root {
  /* Colors */
  --color-background: #FAF6EF;        /* Warm ivory */
  --color-background-alt: #F2EBE0;    /* Alternating tone */
  --color-text-primary: #2A2019;      /* Dark espresso */
  --color-text-secondary: #55483E;    /* Soft espresso */
  --color-accent: #BD8175;            /* Dusty rose */
  --color-accent-hover: #A56D62;      /* Deeper rose */
  --color-accent-tint: #F5EAE8;       /* Soft rose tint */
  --color-border: #E5D9C9;            /* Thin beige */
  
  /* Spacing */
  --spacing-section: 8rem;            /* Section padding */
  --radius-card: 1.5rem;              /* Card border radius */
}
```

## 🎨 Design System Reference

### Colors in Components
Use Tailwind classes that reference the design tokens:

```tsx
// Background colors
<div className="bg-background">           // Warm ivory
<div className="bg-background-alt">       // Alternating tone

// Text colors
<p className="text-text-primary">         // Dark espresso
<p className="text-text-secondary">       // Soft espresso

// Accent colors
<button className="bg-accent">            // Dusty rose
<button className="hover:bg-accent-hover"> // Deeper rose on hover
<div className="bg-accent-tint">          // Soft rose tint

// Borders
<div className="border border-border">    // Thin beige border
<div className="rounded-card">            // Card border radius
```

### Typography
```tsx
// Headings use serif font (Fraunces)
<h1 className="font-serif">Large Heading</h1>

// Body text uses sans font (Inter)
<p className="font-sans">Body text</p>
```

### Spacing Utilities
```tsx
// Container with responsive padding
<div className="container-custom">

// Section padding (8rem top/bottom)
<section className="section-padding">

// Editorial spacing (generous gaps)
<div className="editorial-spacing">
```

## 🧩 Component Usage Examples

### Button Component
```tsx
import { Button } from '@/components/ui/Button'

<Button variant="primary" size="lg">
  Get in Touch
</Button>

// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg
```

### Section Heading
```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'

<SectionHeading 
  title="About Me"
  subtitle="Learn more about my journey"
  centered
/>
```

### Tag Component
```tsx
import { Tag } from '@/components/ui/Tag'

<Tag variant="accent">TypeScript</Tag>
<Tag variant="default">React</Tag>
```

### Animated Counter
```tsx
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

<AnimatedCounter 
  value={100} 
  suffix="+" 
  duration={2}
/>
```

## 🎯 Next Steps

### Phase 2: Build Content Sections

After updating the data, create the actual content sections in `src/components/sections/`:

1. **Hero.tsx** - Main introduction with call-to-action
2. **About.tsx** - Personal story and background
3. **Skills.tsx** - Skills showcase with categories
4. **Experience.tsx** - Work history timeline
5. **Projects.tsx** - Project portfolio grid
6. **Education.tsx** - Academic background
7. **Contact.tsx** - Contact form and information

Each section should:
- Import data from `src/data/portfolio.ts`
- Use design system components
- Include Framer Motion animations
- Be responsive and accessible

### Example Section Structure:
```tsx
'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Featured Projects"
          subtitle="A selection of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Project card content */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## 🛠️ Development Tips

### Adding New Data Types
1. Define the TypeScript interface in `src/data/portfolio.ts`
2. Create placeholder data
3. Export both the type and data
4. Use in components with full type safety

### Animation Guidelines
- Use `initial`, `whileInView`, `viewport={{ once: true }}` for scroll animations
- Respect `prefers-reduced-motion` (already handled in PageBackground)
- Keep animation durations between 0.3s - 0.6s
- Use `ease: 'easeOut'` for natural motion

### Responsive Design
- Mobile-first approach (base styles are mobile)
- Use `md:` prefix for tablets (768px+)
- Use `lg:` prefix for desktops (1024px+)
- Test at 375px, 768px, 1024px, and 1920px widths

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🐛 Troubleshooting

**Issue**: Styles not applying
- Solution: Make sure Tailwind is processing your files. Check `tailwind.config.ts` content paths.

**Issue**: Animations not working
- Solution: Ensure components are marked with `'use client'` directive when using Framer Motion.

**Issue**: Images not loading
- Solution: Place images in `public/` directory and reference with `/images/file.jpg` (leading slash).

**Issue**: TypeScript errors
- Solution: Run `npm run build` to check for type errors. Make sure all imports match the exported types.

## 📞 Support

For issues or questions:
1. Check the README.md for architecture details
2. Review the TypeScript types in `src/data/portfolio.ts`
3. Inspect the working components in `src/components/`
4. Consult the official documentation for each technology

---

**Happy building! 🎉**
