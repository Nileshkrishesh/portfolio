import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Resume } from '@/components/sections/Resume'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { EducationSection } from '@/components/sections/Education'
import { Achievements } from '@/components/sections/Achievements'
import { Certifications } from '@/components/sections/Certifications'
import { CompetitiveProgrammingSection } from '@/components/sections/CompetitiveProgramming'
import { ResearchSection } from '@/components/sections/Research'
import { Contact } from '@/components/sections/Contact'

import {
  personalInfo,
  heroStats,
  primaryDegree,
  primaryUniversity,
  focusAreas,
  philosophy,
  resumePath,
  resumeHighlights,
  skills,
  projects,
  experiences,
  education,
  achievements,
  certifications,
  competitiveProgramming,
  research,
  contactInfo,
  socialLinks,
} from '@/data/portfolio'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
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

      {/* 01 — About */}
      <About
        bio={personalInfo.bio}
        focusAreas={focusAreas}
        philosophy={philosophy}
        sectionNumber="01"
      />

      {/* 02 — Resume */}
      <Resume
        resumePath={resumePath}
        highlights={resumeHighlights}
        sectionNumber="02"
      />

      {/* 03 — Skills */}
      <Skills skills={skills} sectionNumber="03" />

      {/* 04 — Projects */}
      <Projects projects={projects} sectionNumber="04" />

      {/* 05 — Experience */}
      <Experience experiences={experiences} sectionNumber="05" />

      {/* 06 — Education */}
      <EducationSection education={education} sectionNumber="06" />

      {/* 07 — Achievements */}
      <Achievements achievements={achievements} sectionNumber="07" />

      {/* 08 — Certifications */}
      <Certifications certifications={certifications} sectionNumber="08" />

      {/* 09 — Competitive Programming */}
      <CompetitiveProgrammingSection
        profiles={competitiveProgramming}
        sectionNumber="09"
      />

      {/* 10 — Research */}
      <ResearchSection publications={research} sectionNumber="10" />

      {/* 11 — Contact */}
      <Contact
        contactInfo={contactInfo}
        email={personalInfo.email}
        socialLinks={socialLinks}
        sectionNumber="11"
      />
    </>
  )
}
