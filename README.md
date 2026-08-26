# Portfolio Website

A modern, elegant portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Design System

### Color Palette
- **Background**: Warm ivory (#FAF6EF) with alternating section tone (#F2EBE0)
- **Text**: Dark espresso (#2A2019) primary, softer espresso (#55483E) secondary
- **Accent**: Dusty rose (#BD8175), deeper rose for hover states (#A56D62), soft rose tint (#F5EAE8)
- **Borders**: Thin beige (#E5D9C9), 1px width, generous radius on cards

### Typography
- **Headings**: Fraunces (elegant serif)
- **Body**: Inter (clean sans-serif)
- Large whitespace, generous section padding
- Premium editorial + quiet-tech feel

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar, Footer, Background
│   ├── page.tsx            # Home page with section placeholders
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Responsive navigation with mobile menu
│   │   ├── Footer.tsx      # Footer with social links
│   │   └── PageBackground.tsx  # Animated particle network background
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── SectionHeading.tsx  # Animated section headings
│   │   ├── Tag.tsx         # Tag/badge component
│   │   └── AnimatedCounter.tsx # Animated number counter
│   └── sections/           # (Empty - content sections to be added)
├── data/
│   └── portfolio.ts        # All personal content and data types
└── lib/
    └── utils.ts            # Utility functions
public/
├── images/                 # Personal photos
├── projects/               # Project screenshots
├── certificates/           # Certification images
└── resume/                 # Resume PDFs
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Customization

#### Step 1: Update Personal Data
Edit `src/data/portfolio.ts` with your actual information:
- Personal info (name, title, bio, contact)
- Social links (GitHub, LinkedIn, Twitter, etc.)
- Skills and expertise
- Work experience
- Projects
- Education
- Achievements
- Certifications
- Research papers
- Competitive programming profiles

#### Step 2: Add Your Content
Replace placeholder values in the data file with your real content. All components are data-driven and will automatically update.

#### Step 3: Add Images
Place your images in the appropriate public directories:
- Profile photo → `public/images/`
- Project screenshots → `public/projects/`
- Certificates → `public/certificates/`
- Resume PDFs → `public/resume/`

#### Step 4: Build Content Sections
The following sections are ready to be implemented in `src/components/sections/`:
- Hero.tsx
- About.tsx
- Resume.tsx
- Skills.tsx
- Projects.tsx
- Experience.tsx
- Education.tsx
- Achievements.tsx
- Certifications.tsx
- CompetitiveProgramming.tsx
- Research.tsx
- Contact.tsx

## Data-Driven Architecture

**Rule**: Every piece of personal content lives in `src/data/portfolio.ts` as typed objects. Components receive data via props only—never hardcode content inside components.

This ensures:
- Easy content updates
- Type safety
- Reusability
- Maintainability

## Features Implemented

✅ **Foundation**
- Design tokens as CSS variables
- Tailwind theme configuration
- TypeScript types for all data
- Utility functions
- Responsive layout structure

✅ **Components**
- Navbar with mobile menu
- Footer with social links
- Animated particle background (respects prefers-reduced-motion)
- UI components (Button, SectionHeading, Tag, AnimatedCounter)

✅ **Design System**
- Premium editorial aesthetic
- Generous whitespace
- Smooth animations
- Accessibility considerations
- Reduced motion support

## Next Steps

Before completing the portfolio, you'll need to provide:
- [ ] Reference screenshot or design mockups
- [ ] CV/Resume content
- [ ] Professional photo
- [ ] Social media links
- [ ] Project details and screenshots
- [ ] Work experience details
- [ ] Skills and expertise
- [ ] Education history
- [ ] Achievements and awards
- [ ] Certifications
- [ ] Research papers (if applicable)
- [ ] Competitive programming profiles (if applicable)

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## License

This portfolio template is open source and available under the MIT License.
