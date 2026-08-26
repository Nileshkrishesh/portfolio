# Production QA Checklist - Recruiter Perspective

## 🎯 5-Second Clarity Test

Within 5 seconds of landing, it must be unambiguous:

### ✅ Implemented (Structure Ready)
- ✅ **Who you are**: First name + last name prominently displayed in Hero
- ✅ **What you do**: Role/title directly below name
- ✅ **What you've built**: Projects section with cards, images, tech stacks
- ✅ **What you know**: Skills section grouped by category
- ✅ **How to contact**: Email button in Hero "Get in Touch" + Contact section

### ⏳ Needs Real Content
- [ ] Replace "Your Name" with actual name in `portfolio.ts`
- [ ] Replace "Software Engineer & Creative Developer" with real title
- [ ] Add real profile photo to `public/images/profile.jpg`
- [ ] Add real projects with descriptions, links, images
- [ ] Add real skills (current tech stack)
- [ ] Add real email address

---

## 📋 Functional Checklist

### Navigation

#### ✅ Implemented
- ✅ All nav links use anchor format (`#about`, `#projects`, etc.)
- ✅ Smooth scroll behavior enabled
- ✅ Active section detection with visual indicator
- ✅ Mobile menu opens/closes correctly
- ✅ Mobile menu closes on link click
- ✅ Escape key closes mobile menu
- ✅ Body scroll prevented when mobile menu open
- ✅ Proper ARIA labels on mobile menu button
- ✅ `aria-expanded` state on menu button
- ✅ `role="navigation"` on mobile menu

#### ⏳ Test With Real Content
- [ ] Verify each nav link scrolls to correct section
- [ ] Test smooth scroll on all browsers
- [ ] Test mobile menu on actual mobile devices
- [ ] Verify no scroll trapping in mobile menu

### Links & Buttons

#### ✅ Implemented (Structure)
- ✅ Project cards support GitHub and Live Demo links
- ✅ Links only render if URL exists (no dead placeholders)
- ✅ Social links in Footer and Contact
- ✅ Email button with `mailto:` link
- ✅ Resume download button with file path
- ✅ All external links have `target="_blank"` and `rel="noopener noreferrer"`

#### ⏳ Needs Real URLs
- [ ] Add real GitHub URLs for each project in `portfolio.ts`
- [ ] Add real Live Demo URLs for projects (or remove if not deployed)
- [ ] Verify LinkedIn URL in `socialLinks`
- [ ] Verify email address is real
- [ ] Add real resume PDF to `public/resume/resume.pdf`
- [ ] Test all links open correctly in new tabs
- [ ] Verify no `#` placeholder links remain

### Layout & Responsive

#### ✅ Implemented
- ✅ Mobile-first responsive design
- ✅ Grid breakpoints: `md:` (768px), `lg:` (1024px)
- ✅ Hero: Single column mobile, two-column desktop (55/45)
- ✅ Projects: Stacked mobile, grid desktop
- ✅ Skills: Category clusters work on all sizes
- ✅ Experience: Timeline hidden on mobile, simplified layout
- ✅ Touch targets: Buttons minimum 44x44px
- ✅ Container max-width and responsive padding
- ✅ No fixed widths that could cause overflow

#### ⏳ Test on Real Devices
- [ ] Test at 320px width (iPhone SE)
- [ ] Test at 375px width (iPhone 12/13)
- [ ] Test at 768px width (iPad)
- [ ] Test at 1024px+ width (Desktop)
- [ ] Verify no horizontal scroll at any breakpoint
- [ ] Test landscape orientation on mobile
- [ ] Verify touch targets are easy to tap on mobile
- [ ] Check that mobile layout is considered design, not just shrunk

---

## ♿ Accessibility

### Keyboard Navigation

#### ✅ Implemented
- ✅ All interactive elements focusable via Tab
- ✅ Focus rings visible on all elements
- ✅ Focus ring style: 2px accent color with offset
- ✅ Logical tab order (top to bottom, left to right)
- ✅ Skip to main content possible (navbar allows scrolling)
- ✅ Mobile menu keyboard accessible (Tab, Escape)

#### ⏳ Manual Testing Required
- [ ] Tab through entire page, verify logical order
- [ ] Verify focus never gets trapped
- [ ] Test with screen reader (NVDA/JAWS on Windows, VoiceOver on Mac)
- [ ] Verify all images read descriptive alt text, not filenames
- [ ] Test keyboard-only navigation through mobile menu

### Images

#### ✅ Implemented
- ✅ All `<img>` tags have `alt` attributes
- ✅ Alt text is descriptive (not filenames)
- ✅ Profile photo: `"{firstName} {lastName} - {role}"`
- ✅ Project images: `"{project.title} - {project.description}"`
- ✅ Certification images: `"{cert.name} certification badge from {cert.issuer}"`
- ✅ Decorative images have `aria-hidden="true"`
- ✅ Below-the-fold images have `loading="lazy"`

#### ⏳ Optimization Needed
- [ ] Consider migrating to Next.js `<Image>` component for automatic optimization
- [ ] Compress images before upload (target <200KB per image)
- [ ] Use WebP format where supported
- [ ] Ensure images are correctly sized (not loading 4K images scaled down to 400px)

### ARIA & Semantics

#### ✅ Implemented
- ✅ One `<h1>` per page (Hero name)
- ✅ Logical heading hierarchy (h1 → h2 → h3)
- ✅ Semantic HTML throughout (`<section>`, `<article>`, `<nav>`)
- ✅ ARIA labels on icon-only buttons
- ✅ `aria-label` on mobile menu button
- ✅ `aria-expanded` on mobile menu button
- ✅ `role="navigation"` on nav elements

#### ⏳ Testing Required
- [ ] Validate heading hierarchy with accessibility tools
- [ ] Run axe DevTools or WAVE extension
- [ ] Verify no ARIA errors or warnings

---

## 🚀 Performance

### Images

#### ✅ Implemented
- ✅ Lazy loading on below-the-fold images
- ✅ Profile photo loads immediately (above fold)
- ✅ Project images lazy-loaded

#### ⏳ Optimization Tasks
- [ ] Compress all images (use tools like TinyPNG, Squoosh)
- [ ] Target file sizes:
  - Profile photo: <150KB
  - Project images: <200KB each
  - Certification badges: <50KB each
- [ ] Consider WebP or AVIF formats
- [ ] Add width/height attributes to prevent layout shift
- [ ] Consider Next.js `<Image>` for automatic optimization

### Code Splitting

#### ✅ Already Optimized by Next.js
- ✅ Automatic code splitting per route
- ✅ Dynamic imports for Framer Motion
- ✅ Tree-shaking enabled in production

### Fonts

#### ✅ Implemented
- ✅ Google Fonts with `display=swap` to prevent FOIT
- ✅ Only loading required font weights (300, 400, 500, 600, 700)

---

## 🔍 SEO

### Meta Tags

#### ✅ Implemented
- ✅ `<title>` tag with name and role
- ✅ Meta description (uses `intro` from portfolio.ts)
- ✅ Meta keywords
- ✅ Author meta tag
- ✅ Open Graph tags (title, description, type, url, siteName)
- ✅ Twitter Card tags (card, title, description)
- ✅ Language set: `lang="en"`

#### ⏳ Needs Real Content
- [ ] Update `personalInfo.intro` with real professional intro
- [ ] Verify meta description is compelling (155 characters max)
- [ ] Add Open Graph image (`og:image`) - screenshot of portfolio
- [ ] Add Twitter image (`twitter:image`)
- [ ] Update site URL in Open Graph tags when deployed

### Semantic HTML

#### ✅ Implemented
- ✅ One `<h1>` per page (name in Hero)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Semantic sectioning (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- ✅ Descriptive section IDs for anchor links

### Additional SEO

#### ⏳ Pre-Deployment
- [ ] Add `robots.txt` file
- [ ] Add `sitemap.xml`
- [ ] Consider adding structured data (JSON-LD) for Person schema
- [ ] Verify canonical URL when deployed
- [ ] Add favicon (multiple sizes)
- [ ] Add Apple touch icon

---

## 📱 Mobile-Specific QA

### Layout Considerations

#### ✅ Implemented
- ✅ Hero: Content-first order, image below on mobile
- ✅ About: Single column on mobile
- ✅ Projects: Stacked cards, not squeezed grid
- ✅ Experience: Timeline hidden, simplified bullets
- ✅ Skills: Tags wrap naturally
- ✅ Contact: Centered, full-width button

#### ⏳ Test on Real Devices
- [ ] Verify layouts don't feel cramped on small screens
- [ ] Check that important CTAs are thumb-accessible
- [ ] Verify images don't cause horizontal scroll
- [ ] Test gesture interactions (swipe, tap)

### Touch Targets

#### ✅ Implemented
- ✅ Buttons: 44px minimum height (with padding)
- ✅ Nav links: Adequate padding for tap
- ✅ Social icons: 44x44px touch area (p-4 on size-24 icon)

#### ⏳ Verify
- [ ] All interactive elements easy to tap without precision
- [ ] No elements too close together
- [ ] Adequate spacing between links

---

## 🌐 Browser Testing

### ⏳ Cross-Browser Tests
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Known Compatibility

#### ✅ Modern Browsers Supported
- Framer Motion requires modern browsers
- Smooth scroll supported in all major browsers
- CSS Grid and Flexbox widely supported
- IntersectionObserver supported

#### Potential Issues to Test
- [ ] Backdrop blur support (fallback: solid background)
- [ ] Clip-path animations (fallback: standard fade)
- [ ] Custom fonts loading correctly

---

## 🏃 Lighthouse Audit

### Target Scores: 90+ on all four categories

#### ⏳ Run Lighthouse on Production Build
```bash
npm run build
npm run start
# Then run Lighthouse in Chrome DevTools
```

### Performance (Target: 90+)
**Potential Issues**:
- [ ] Unoptimized images (compress, WebP)
- [ ] Unused CSS (remove if any)
- [ ] Large JavaScript bundles (check bundle analyzer)
- [ ] No caching headers (set on deployment)

**Implemented Optimizations**:
- ✅ Lazy loading images
- ✅ Code splitting (Next.js automatic)
- ✅ Font display: swap
- ✅ Minimal animations (GPU-accelerated only)

### Accessibility (Target: 90+)
**Potential Issues**:
- [ ] Missing alt text (verify all images)
- [ ] Insufficient color contrast (check with tool)
- [ ] Missing ARIA labels (validate all interactive elements)

**Implemented**:
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Focus indicators

### Best Practices (Target: 90+)
**Potential Issues**:
- [ ] Mixed content (HTTP resources on HTTPS site)
- [ ] Console errors/warnings (fix all)
- [ ] Deprecated APIs (none used)

**Implemented**:
- ✅ HTTPS links only
- ✅ No deprecated features
- ✅ Secure external links (`rel="noopener"`)

### SEO (Target: 90+)
**Potential Issues**:
- [ ] Missing meta description
- [ ] Non-crawlable links
- [ ] Missing robots.txt/sitemap

**Implemented**:
- ✅ Meta tags
- ✅ Semantic HTML
- ✅ Descriptive page title

---

## 🚨 Console Errors & Warnings

### ✅ Current Status
The dev server is running with:
- ✅ No TypeScript errors
- ✅ No React errors
- ⚠️ 404 warnings for placeholder assets (expected until real content added)

### ⏳ Pre-Deployment Checks
- [ ] Run `npm run build` - must complete with 0 errors
- [ ] Check build output for warnings
- [ ] Run production build locally (`npm run start`)
- [ ] Open browser console - should be clean
- [ ] Check Network tab - verify all assets load
- [ ] Check for 404s (add missing files or remove references)

---

## 🎨 Generic Template Output Check

### ✅ Removed/Customized
- ✅ No default card shadows (custom design system)
- ✅ No stock spacing (custom design tokens)
- ✅ No filler "Lorem ipsum" text
- ✅ All components data-driven from portfolio.ts
- ✅ Custom animation system (not default library effects)
- ✅ Premium editorial design (not Bootstrap/Material-like)

### ⏳ Needs Real Content
- [ ] Replace all "Your Name" placeholders
- [ ] Replace "Software Engineer & Creative Developer" with real title
- [ ] Replace default bio text with real content
- [ ] Replace placeholder project descriptions
- [ ] Replace "5+ years" stats with actual numbers (or remove if not applicable)
- [ ] Remove any placeholder achievements/certifications/research if not applicable

---

## 📦 Production Build Test

### Commands to Run

```bash
# 1. Build for production
npm run build

# Check for:
# - No TypeScript errors
# - No build errors
# - Bundle size warnings

# 2. Start production server
npm run start

# 3. Test in browser
# - Open http://localhost:3000
# - Check console for errors
# - Test all functionality
# - Run Lighthouse audit
```

### ⏳ Build Checklist
- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Bundle sizes reasonable (<500KB initial)
- [ ] All pages render correctly in production mode
- [ ] Animations work in production build
- [ ] No console errors in production

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All real content added (name, bio, projects, etc.)
- [ ] All images added and optimized
- [ ] Resume PDF added
- [ ] All links verified (no placeholder #)
- [ ] Favicon added (multiple sizes)
- [ ] Production build tested locally
- [ ] Lighthouse scores 90+ on all categories
- [ ] All QA items above completed

### Environment Variables (if any)
- [ ] Set up environment variables on hosting platform
- [ ] Verify API keys/secrets not exposed in client code

### After Deployment
- [ ] Test on live URL
- [ ] Verify all links work
- [ ] Test on multiple devices
- [ ] Test on multiple browsers
- [ ] Share with friends for feedback
- [ ] Monitor analytics (if added)

---

## 📝 Content Replacement Guide

### Immediate Updates Needed in `src/data/portfolio.ts`:

```typescript
// 1. Personal Info
export const personalInfo: PersonalInfo = {
  firstName: 'John',              // ← YOUR FIRST NAME
  lastName: 'Doe',                // ← YOUR LAST NAME
  name: 'John Doe',               // ← YOUR FULL NAME
  title: 'Full-Stack Developer',  // ← YOUR ACTUAL ROLE
  intro: '...',                   // ← YOUR 2-3 SENTENCE INTRO
  email: 'john@example.com',      // ← YOUR REAL EMAIL
  image: '/images/profile.jpg',   // ← ADD YOUR PHOTO
  // ... rest
}

// 2. Projects (add at least 2-3 real projects)
export const projects: Project[] = [
  {
    id: 'real-project-1',
    title: 'Real Project Name',
    description: 'What it actually does...',
    tags: ['Real', 'Tech', 'Stack'],
    image: '/projects/real-screenshot.jpg',
    demoUrl: 'https://actual-live-site.com',  // ← REAL URL
    githubUrl: 'https://github.com/you/repo', // ← REAL REPO
    featured: true,
    year: '2024',
  },
  // Add more real projects...
]

// 3. Skills (your actual tech stack)
export const skills: Skill[] = [
  { name: 'JavaScript', category: 'Languages', level: 'Expert' },
  // ... your real skills
]

// 4. Experience (your work history)
export const experiences: Experience[] = [
  {
    id: 'job-1',
    company: 'Real Company Name',
    position: 'Your Actual Position',
    // ... real dates, achievements
  },
]

// 5. Remove sections you don't need
export const achievements: Achievement[] = []  // If none
export const certifications: Certification[] = []  // If none
export const research: Research[] = []  // If none
```

---

## ✅ QA Summary

### Implemented & Production-Ready
✅ Responsive layout (mobile-first)
✅ Keyboard navigation
✅ ARIA labels and semantic HTML
✅ Focus indicators
✅ Smooth scroll with reduced-motion support
✅ Mobile menu with proper UX
✅ Image lazy loading
✅ Descriptive alt text structure
✅ SEO meta tags
✅ Link security (`noopener noreferrer`)
✅ No generic template appearance
✅ Premium animation system
✅ Active section detection
✅ Scroll progress indicator

### Needs Real Content to Test
⏳ All navigation links → need real section IDs
⏳ All project links → need real GitHub/demo URLs
⏳ Email button → need real email
⏳ Resume download → need real PDF
⏳ Social links → need real profile URLs
⏳ Image optimization → need real images
⏳ Lighthouse audit → need production build with real content
⏳ Cross-browser testing → need deployed site
⏳ 5-second clarity test → need real name, title, projects

---

## 🎯 Next Actions

1. **Add Real Content**: Update `src/data/portfolio.ts` with all real information
2. **Add Images**: Place real photos/screenshots in `public/` directories
3. **Add Resume**: Place PDF in `public/resume/resume.pdf`
4. **Build**: Run `npm run build` and fix any errors
5. **Test Locally**: Run production build and test all functionality
6. **Lighthouse**: Run audit and fix issues to get 90+ scores
7. **Deploy**: Deploy to Vercel/Netlify/similar
8. **Final QA**: Test deployed site on real devices/browsers

**The structure is production-ready. It just needs your content!** 🚀
