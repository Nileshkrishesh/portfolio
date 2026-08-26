'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Achievement } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

interface AchievementsProps {
  achievements: Achievement[]
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

export function Achievements({ achievements, sectionNumber = '07' }: AchievementsProps) {
  // Don't render if no achievements
  if (!achievements || achievements.length === 0) return null

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Achievements`} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
              ? (Icons as any)[achievement.icon]
              : Icons.Award

            const CardContent = (
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent-tint rounded-2xl flex items-center justify-center">
                  <IconComponent size={24} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-semibold text-text-primary">
                  {achievement.title}
                </h3>

                {/* Category & Date */}
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span>{achievement.category}</span>
                  <span>•</span>
                  <span>{formatDate(achievement.date)}</span>
                </div>

                {/* Description */}
                {achievement.description && (
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                )}

                {/* Link indicator */}
                {achievement.url && (
                  <div className="flex items-center gap-1 text-sm text-accent font-medium">
                    <span>View achievement</span>
                    <Icons.ExternalLink size={14} />
                  </div>
                )}
              </div>
            )

            return (
              <motion.article
                key={achievement.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.15 }} // Slower stagger for sequential feel
              >
                {achievement.url ? (
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block card-base p-6 hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div className="card-base p-6 hover:shadow-card-hover transition-shadow duration-300">
                    {CardContent}
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
