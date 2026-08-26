/**
 * Setup Verification Script
 * Run this to verify your portfolio foundation is correctly set up
 * 
 * Usage: node verify-setup.js
 */

const fs = require('fs');
const path = require('path');

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

console.log(`${BOLD}Portfolio Foundation Setup Verification${RESET}\n`);

let errors = 0;
let warnings = 0;

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    console.log(`${GREEN}✓${RESET} ${description}`);
    return true;
  } else {
    console.log(`${RED}✗${RESET} ${description} (missing: ${filePath})`);
    errors++;
    return false;
  }
}

function checkDirectory(dirPath, description) {
  const exists = fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  if (exists) {
    console.log(`${GREEN}✓${RESET} ${description}`);
    return true;
  } else {
    console.log(`${RED}✗${RESET} ${description} (missing: ${dirPath})`);
    errors++;
    return false;
  }
}

function checkOptional(filePath, description, recommendation) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    console.log(`${GREEN}✓${RESET} ${description}`);
    return true;
  } else {
    console.log(`${YELLOW}⚠${RESET} ${description} (recommended: ${recommendation})`);
    warnings++;
    return false;
  }
}

// Configuration Files
console.log(`${BOLD}\n📋 Configuration Files${RESET}`);
checkFile('package.json', 'package.json');
checkFile('tsconfig.json', 'TypeScript configuration');
checkFile('tailwind.config.ts', 'Tailwind CSS configuration');
checkFile('next.config.ts', 'Next.js configuration');
checkFile('.eslintrc.json', 'ESLint configuration');
checkFile('.gitignore', 'Git ignore file');

// App Structure
console.log(`${BOLD}\n🏗️  App Structure${RESET}`);
checkDirectory('src/app', 'App directory');
checkFile('src/app/layout.tsx', 'Root layout');
checkFile('src/app/page.tsx', 'Home page');
checkFile('src/app/globals.css', 'Global styles');

// Components
console.log(`${BOLD}\n🧩 Components${RESET}`);
checkDirectory('src/components/layout', 'Layout components directory');
checkFile('src/components/layout/Navbar.tsx', 'Navbar component');
checkFile('src/components/layout/Footer.tsx', 'Footer component');
checkFile('src/components/layout/PageBackground.tsx', 'PageBackground component');

checkDirectory('src/components/ui', 'UI components directory');
checkFile('src/components/ui/Button.tsx', 'Button component');
checkFile('src/components/ui/SectionHeading.tsx', 'SectionHeading component');
checkFile('src/components/ui/Tag.tsx', 'Tag component');
checkFile('src/components/ui/AnimatedCounter.tsx', 'AnimatedCounter component');

checkDirectory('src/components/sections', 'Sections directory (empty)');

// Data & Utils
console.log(`${BOLD}\n📊 Data & Utilities${RESET}`);
checkFile('src/data/portfolio.ts', 'Portfolio data file');
checkFile('src/lib/utils.ts', 'Utility functions');

// Public Directories
console.log(`${BOLD}\n📁 Public Directories${RESET}`);
checkDirectory('public', 'Public directory');
checkDirectory('public/images', 'Images directory');
checkDirectory('public/projects', 'Projects directory');
checkDirectory('public/certificates', 'Certificates directory');
checkDirectory('public/resume', 'Resume directory');

// Documentation
console.log(`${BOLD}\n📚 Documentation${RESET}`);
checkFile('README.md', 'README file');
checkFile('GETTING_STARTED.md', 'Getting Started guide');
checkFile('PROJECT_SUMMARY.md', 'Project summary');
checkFile('COMPONENT_EXAMPLES.md', 'Component examples');

// Optional Assets (warnings only)
console.log(`${BOLD}\n🎨 Assets (Optional)${RESET}`);
checkOptional('public/images/profile.jpg', 'Profile image', 'Add your photo');
checkOptional('public/resume/resume.pdf', 'Resume PDF', 'Add your resume');

// Check if node_modules exists
console.log(`${BOLD}\n📦 Dependencies${RESET}`);
if (fs.existsSync('node_modules')) {
  console.log(`${GREEN}✓${RESET} Dependencies installed`);
} else {
  console.log(`${YELLOW}⚠${RESET} Dependencies not installed (run: npm install)`);
  warnings++;
}

// Summary
console.log(`${BOLD}\n${'='.repeat(50)}${RESET}`);
if (errors === 0 && warnings === 0) {
  console.log(`${GREEN}${BOLD}✓ All checks passed! Your setup is complete.${RESET}`);
  console.log(`\n${BOLD}Next steps:${RESET}`);
  console.log('1. Run "npm install" if you haven\'t already');
  console.log('2. Run "npm run dev" to start the development server');
  console.log('3. Edit src/data/portfolio.ts with your information');
  console.log('4. Add your images to the public directories');
  console.log('5. Build content sections in src/components/sections/');
  console.log(`\n${BOLD}Read GETTING_STARTED.md for detailed instructions!${RESET}`);
} else {
  if (errors > 0) {
    console.log(`${RED}${BOLD}✗ ${errors} error(s) found${RESET}`);
  }
  if (warnings > 0) {
    console.log(`${YELLOW}${BOLD}⚠ ${warnings} warning(s)${RESET}`);
  }
  if (errors > 0) {
    console.log(`\n${BOLD}Please fix the errors above and run this script again.${RESET}`);
    process.exit(1);
  } else {
    console.log(`\n${BOLD}Warnings are optional - you can proceed with development.${RESET}`);
  }
}

console.log(`${'='.repeat(50)}\n`);
