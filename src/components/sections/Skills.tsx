'use client'

import { motion } from 'framer-motion'
import { Tag } from '@/components/ui/Tag'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Skill } from '@/data/portfolio'

interface SkillsProps {
  skills: Skill[]
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

export function Skills({ skills, sectionNumber = '03' }: SkillsProps) {
  // Don't render if no skills
  if (!skills || skills.length === 0) return null

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categories = Object.keys(groupedSkills)

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Skills`} />

        <div className="mt-12 space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: categoryIndex * 0.15 }} // Staggered per category cluster
            >
              {/* Category Label */}
              <h3 className="text-xl font-serif font-semibold mb-6 text-text-primary">
                {category}
              </h3>

              {/* Skills in this category */}
              <div className="flex flex-wrap gap-3">
                {groupedSkills[category].map((skill, skillIndex) => (
                  <motion.div
                    key={`${skill.name}-${skillIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Tag variant="accent">
                      {skill.name}
                      {skill.level && (
                        <span className="ml-2 text-xs opacity-70">
                          {skill.level === 'Expert' && '★★★'}
                          {skill.level === 'Advanced' && '★★'}
                          {skill.level === 'Intermediate' && '★'}
                        </span>
                      )}
                    </Tag>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
