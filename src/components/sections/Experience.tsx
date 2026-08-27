'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Experience } from '@/data/portfolio'
import { formatDate, isCurrentRole } from '@/lib/utils'

interface ExperienceProps {
  experiences: Experience[]
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

export function Experience({ experiences, sectionNumber = '05' }: ExperienceProps) {
  // Don't render if no experiences
  if (!experiences || experiences.length === 0) return null

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Experience`} />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative space-y-12">
            {/* Vertical timeline line - progressive draw */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute left-0 top-4 bottom-4 w-px bg-border origin-top hidden md:block"
            />

            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-12 pb-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 w-3 h-3 bg-accent rounded-full -translate-x-[5px] hidden md:block" />

                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl lg:text-2xl font-serif font-semibold text-text-primary">
                        {exp.position}
                      </h3>
                      {isCurrentRole(exp.endDate) && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-accent-tint text-accent rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-lg text-accent font-medium mt-1">
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary mt-2">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>
                        {formatDate(exp.startDate)} —{' '}
                        {exp.endDate && !isCurrentRole(exp.endDate)
                          ? formatDate(exp.endDate)
                          : 'Present'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-text-secondary flex items-start gap-3"
                        >
                          <span className="text-accent mt-1 flex-shrink-0">—</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech tags */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag, i) => (
                        <Tag key={i} variant="default">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  )}

                  {/* Offer Letter Link */}
                  {exp.offerLetterUrl && (
                    <div className="pt-4">
                      <a
                        href={exp.offerLetterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="group">
                          <ExternalLink
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                          View Offer Letter
                        </Button>
                      </a>
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
