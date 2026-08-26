'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CompetitiveProgramming } from '@/data/portfolio'

interface CompetitiveProgrammingProps {
  profiles: CompetitiveProgramming[]
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

export function CompetitiveProgrammingSection({
  profiles,
  sectionNumber = '09',
}: CompetitiveProgrammingProps) {
  // Don't render if no profiles
  if (!profiles || profiles.length === 0) return null

  return (
    <section id="competitive-programming" className="section-padding">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Competitive Programming`} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.article
              key={profile.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="card-base p-6 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Platform Icon */}
                <div className="w-12 h-12 bg-accent-tint rounded-2xl flex items-center justify-center">
                  <Code2 size={24} className="text-accent" />
                </div>

                {/* Platform Name */}
                <h3 className="text-xl font-serif font-semibold text-text-primary">
                  {profile.platform}
                </h3>

                {/* Username */}
                <div className="text-accent font-medium">@{profile.username}</div>

                {/* Rating & Rank */}
                <div className="space-y-2">
                  {profile.rating && (
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary text-sm">Rating</span>
                      <span className="text-lg font-serif font-semibold text-accent">
                        {profile.rating}
                      </span>
                    </div>
                  )}
                  {profile.rank && (
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary text-sm">Rank</span>
                      <span className="text-text-primary font-medium">
                        {profile.rank}
                      </span>
                    </div>
                  )}
                </div>

                {/* Achievements */}
                {profile.achievements && profile.achievements.length > 0 && (
                  <ul className="space-y-1 pt-2">
                    {profile.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Profile Link */}
                {profile.profileUrl && (
                  <div className="pt-2">
                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink size={14} />
                        View Profile
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
