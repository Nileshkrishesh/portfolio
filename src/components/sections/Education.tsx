'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Education } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

interface EducationProps {
  education: Education[]
  sectionNumber?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function EducationSection({ education, sectionNumber = '06' }: EducationProps) {
  // Don't render if no education
  if (!education || education.length === 0) return null

  return (
    <section id="education" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Education`} />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative space-y-8">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-border hidden md:block" />

            {education.map((edu, index) => (
              <motion.article
                key={edu.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="relative card-base p-6 md:p-8 md:ml-16"
              >
                {/* Timeline icon */}
                <div className="absolute left-0 top-8 -translate-x-1/2 w-12 h-12 bg-accent-tint rounded-full flex items-center justify-center hidden md:flex">
                  <GraduationCap size={24} className="text-accent" />
                </div>

                <div className="space-y-3">
                  {/* Degree & Field */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold text-text-primary">
                      {edu.degree} in {edu.field}
                    </h3>
                    <div className="text-lg text-accent font-medium mt-1">
                      {edu.institution}
                    </div>
                  </div>

                  {/* Location & Date */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>
                      {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                    </span>
                  </div>

                  {/* GPA */}
                  {edu.gpa && (
                    <div className="text-text-secondary">
                      <span className="font-medium">GPA:</span> {edu.gpa}
                    </div>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="pt-2">
                      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-text-secondary">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-accent">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
