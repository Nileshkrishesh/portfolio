# Hero Section Customization Guide

The Hero section has been built matching the reference composition with a two-column layout, animated entrance sequence, and data-driven content.

## 📋 Required Content Checklist

To complete the Hero section, update these fields in `src/data/portfolio.ts`:

### 1. Personal Information
```typescript
export const personalInfo: PersonalInfo = {
  firstName: 'John',           // ← Replace with your first name
  lastName: 'Doe',             // ← Replace with your last name
  name: 'John Doe',            // ← Full name (used in navbar, footer, metadata)
  title: 'Full-Stack Developer & UI Designer',  // ← Your role/specialization
  
  // Short professional intro (2-3 sentences max, CV-sourced only)
  intro: 'A software engineer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and cloud architecture. Passionate about creating intuitive user experiences backed by robust engineering.',
  
  location: 'San Francisco, CA',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  image: '/images/profile.jpg',  // ← Add your photo to public/images/
  openToOpportunities: true,     // ← Set to true to show "OPEN TO OPPORTUNITIES" badge
}
```

### 2. Profile Photo
- **Location**: `public/images/profile.jpg`
- **Recommended size**: 600x800px (3:4 aspect ratio)
- **Format**: JPG or PNG
- **Style**: Professional headshot or upper body photo
- **Quality**: High resolution, good lighting, clean background

### 3. Hero Statistics (Optional but Recommended)
```typescript
export const heroStats: Stat[] = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Projects Shipped', value: 20, suffix: '+' },
  // Add 2-4 real, verifiable stats
  // Omit this array entirely if you don't have concrete numbers
]
```

**Important**: Only use **real, verifiable statistics**. Examples:
- ✅ Years of professional experience
- ✅ Number of production projects deployed
- ✅ GitHub stars across repositories
- ✅ Team members mentored
- ❌ Made-up numbers like "50+ clients" if not true

**If you don't have stats**: Set `heroStats` to an empty array:
```typescript
export const heroStats: Stat[] = []
```

### 4. Education (for degree badge)
The degree pill badge is automatically generated from your primary education entry:

```typescript
export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Stanford University',        // ← Your university
    degree: 'Bachelor of Science',             // ← Your degree
    field: 'Computer Science',                 // ← Your field of study
    location: 'Stanford, CA',
    startDate: '2016-09',
    endDate: '2020-05',
    gpa: '3.8/4.0',
    achievements: ['Dean\'s List', 'Summa Cum Laude'],
  },
]
```

The badge will display: **"Bachelor of Science in Computer Science"** and **"Stanford University"**

To hide the degree badge, leave education array empty or set to undefined.

## 🎨 Design Specifications

The Hero section implements:

### Layout (Desktop)
- **Two-column grid**: 55% left (content) / 45% right (image)
- **Left column**: Eyebrow label, name, role, intro, action buttons
- **Right column**: Profile photo, degree badge, stats card

### Typography
- **Eyebrow**: Sans-serif, uppercase, 0.2em letter-spacing, dusty rose
- **First name**: Large serif (5xl-7xl), dark espresso (#2A2019)
- **Last name**: Large serif (5xl-7xl), dusty rose (#BD8175)
- **Role**: Medium serif (2xl-3xl), muted espresso (#55483E)
- **Intro**: Large sans (lg-xl), muted espresso, relaxed leading

### Buttons
- **VIEW MY WORK**: 
  - Background: Dark espresso (#2A2019)
  - Text: Ivory (#FAF6EF)
  - Hover: Slight color shift, arrow translates right 4px
  - Scrolls to #projects section
  
- **GET IN TOUCH**:
  - Transparent background
  - Border: Thin beige (#E5D9C9)
  - Hover: Translates up 2px
  - Scrolls to #contact section

### Image Styling
- **Border radius**: 2rem (generous rounded corners)
- **Border**: 1px solid beige (#E5D9C9)
- **Shadow**: Subtle, low-opacity (0.04), soft spread
- **Aspect ratio**: 3:4 portrait

### Degree Badge
- **Position**: Floating below/near image (responsive positioning)
- **Style**: White background, beige border, rounded-full, shadow
- **Content**: Two lines - degree on top, university below

### Stats Card
- **Layout**: 2-column grid
- **Numbers**: Large serif, dusty rose accent color
- **Labels**: Small sans, muted text

### Background
- **Base**: PageBackground canvas with particle network
- **Overlay**: Subtle radial gradient fade (95% → 90% → transparent) for text readability
- **Colors**: Very low opacity dusty rose/beige nodes and lines

## 🎭 Animation Sequence

All animations respect `prefers-reduced-motion` automatically via Framer Motion.

**Staggered entrance** (100ms delay between each):
1. **Background**: Fades in (600ms)
2. **Eyebrow label**: Reveals (600ms)
3. **First name**: Fades up 20px (500ms, custom easeOut)
4. **Last name**: Fades up 20px (500ms, custom easeOut)
5. **Role**: Fades up 20px (500ms)
6. **Intro**: Fades up 20px (500ms)
7. **Buttons**: Stagger in (each 500ms)
8. **Profile image**: Scales from 0.95 to 1.0 (600ms, gentle bounce)
9. **Degree badge**: Fades up 20px (500ms)
10. **Stats card**: Fades up 20px (500ms)

**Easing curves**:
- Custom easeOut: `[0.25, 0.46, 0.45, 0.94]`
- Gentle scale: `[0.34, 1.56, 0.64, 1]`

**Hover effects**:
- Button arrow: `translateX(4px)` on hover (300ms transition)
- GET IN TOUCH button: `translateY(-2px)` on hover (300ms transition)

## 📝 Content Writing Guidelines

### Intro Paragraph (2-3 sentences)
**Purpose**: Establish credibility and specialization quickly

**Structure**:
1. **Who you are** + **years of experience** or **key credential**
2. **What you specialize in** (specific technologies/domains)
3. **What drives you** or **what you deliver** (optional third sentence)

**Examples**:

✅ **Good** (specific, credible, concise):
```
"A software engineer with 5+ years of experience building scalable web applications 
at venture-backed startups. Specialized in React, TypeScript, and AWS cloud 
architecture. Passionate about creating intuitive user experiences backed by 
robust engineering."
```

✅ **Good** (different focus):
```
"Full-stack developer focused on performance-critical systems and developer tooling. 
Led engineering teams at Shopify and GitHub, shipping features used by millions. 
I solve complex problems with elegant, maintainable code."
```

❌ **Bad** (vague, generic, too long):
```
"I am a passionate developer who loves to code and create amazing things. 
I have worked on many projects and gained lots of experience. I am always 
learning new technologies and staying up to date with the latest trends. 
Let's build something great together!"
```

**Key principles**:
- Use **specific numbers** (5+ years, not "several years")
- Mention **concrete technologies** (React/TypeScript, not "modern frameworks")
- Highlight **real achievements** (features used by millions, not "great things")
- Keep it **scannable** (2-3 sentences max)
- **No fluff** words: passionate, amazing, innovative, cutting-edge

## 🔧 Technical Implementation

### Component Location
`src/components/sections/Hero.tsx`

### Props Interface
```typescript
interface HeroProps {
  firstName: string
  lastName: string
  role: string
  intro: string
  profileImage?: string
  degree?: string
  university?: string
  stats?: Array<{
    value: number
    label: string
    suffix?: string
  }>
  openToOpportunities?: boolean
}
```

### Integration in page.tsx
```tsx
import { Hero } from '@/components/sections/Hero'
import { personalInfo, heroStats, primaryDegree, primaryUniversity } from '@/data/portfolio'

<Hero
  firstName={personalInfo.firstName}
  lastName={personalInfo.lastName}
  role={personalInfo.title}
  intro={personalInfo.intro}
  profileImage={personalInfo.image}
  degree={primaryDegree}
  university={primaryUniversity}
  stats={heroStats}
  openToOpportunities={personalInfo.openToOpportunities}
/>
```

### Responsive Behavior
- **Mobile**: Single column, image appears below content
- **Tablet** (768px+): Maintains single column with larger text
- **Desktop** (1024px+): Two-column layout activates (55/45 split)

### Scroll Behavior
- "View My Work" → Smooth scrolls to `#projects` section
- "Get in Touch" → Smooth scrolls to `#contact` section
- Both use `document.getElementById().scrollIntoView({ behavior: 'smooth' })`

## 🎯 Quick Start

1. **Add your photo**:
   ```bash
   # Place your photo in:
   public/images/profile.jpg
   ```

2. **Update portfolio data**:
   ```bash
   # Edit:
   src/data/portfolio.ts
   
   # Update:
   - personalInfo.firstName
   - personalInfo.lastName
   - personalInfo.title
   - personalInfo.intro (2-3 sentences from CV)
   - personalInfo.openToOpportunities
   
   # Update (optional):
   - heroStats (or set to empty array)
   - education[0] (for degree badge)
   ```

3. **Start dev server**:
   ```bash
   npm run dev
   ```

4. **Preview**:
   Open http://localhost:3000 and see your Hero section!

## ⚠️ Important Notes

### Content Requirements
- **No fabricated content**: Every claim must be verifiable
- **CV-sourced only**: Intro text should come from your actual CV/resume
- **Real statistics only**: If you don't have concrete numbers, omit the stats card entirely
- **Professional photo**: Use a high-quality, well-lit professional photo

### Accessibility
- All animations respect `prefers-reduced-motion`
- Semantic HTML throughout (`<section>`, `<h1>`, etc.)
- Proper alt text on images
- Keyboard navigation supported on all interactive elements
- ARIA labels where appropriate

### Performance
- Images are not optimized by default - consider using Next.js `<Image>` component for production
- Framer Motion animations are GPU-accelerated
- Canvas background runs on separate layer (no reflow issues)

## 🐛 Troubleshooting

**Image not showing?**
- Check the file path: must be in `public/images/`
- Reference without "public" prefix: `/images/profile.jpg`
- Verify file extension matches (jpg vs jpeg)

**Degree badge not appearing?**
- Check that `education` array has at least one entry
- Verify `degree` and `institution` fields are filled

**Stats card showing placeholder numbers?**
- Update `heroStats` array in `src/data/portfolio.ts`
- Set to empty array `[]` if you want to hide it

**Animations too slow/fast?**
- Edit duration values in the animation variants (currently 0.5-0.6s)
- Located in `src/components/sections/Hero.tsx`

**Text readability issues?**
- Adjust the radial gradient overlay opacity
- Consider increasing background opacity in the gradient

---

**Your Hero section is ready! Update the data and add your photo to bring it to life.** 🚀
