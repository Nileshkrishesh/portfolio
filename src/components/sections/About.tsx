'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface AboutProps {
  bio: string
  focusAreas?: string[]
  philosophy?: string
  sectionNumber?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function About({ bio, focusAreas, philosophy, sectionNumber = '01' }: AboutProps) {
  // Don't render if no bio content
  if (!bio) return null

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — About`} />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 mt-12">
          {/* Left Column: Main Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              {bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Supporting Detail */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Focus Areas */}
            {focusAreas && focusAreas.length > 0 && (
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-text-primary">
                  Focus Areas
                </h3>
                <ul className="space-y-3">
                  {focusAreas.map((area, index) => (
                    <li
                      key={index}
                      className="text-text-secondary flex items-start gap-3"
                    >
                      <span className="text-accent mt-1">—</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Philosophy / Pull Quote */}
            {philosophy && (
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="text-lg italic text-text-secondary leading-relaxed">
                  "{philosophy}"
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
