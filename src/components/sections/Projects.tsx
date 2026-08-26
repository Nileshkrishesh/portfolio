'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Project } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface ProjectsProps {
  projects: Project[]
  sectionNumber?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const clipPathReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Projects({ projects, sectionNumber = '04' }: ProjectsProps) {
  // Don't render if no projects
  if (!projects || projects.length === 0) return null

  return (
    <section id="projects" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Projects`} />

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => {
            const isFeatured = project.featured
            const isEven = index % 2 === 0

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(189, 129, 117, 0.4)',
                  transition: { duration: 0.3 },
                }}
                className={cn(
                  'card-base overflow-hidden',
                  'hover:shadow-card-hover transition-shadow duration-300',
                  isFeatured && 'lg:col-span-2'
                )}
              >
                <div
                  className={cn(
                    'grid grid-cols-1 gap-0',
                    isFeatured
                      ? 'lg:grid-cols-[1.2fr_1fr]'
                      : 'lg:grid-cols-2',
                    !isEven && isFeatured && 'lg:grid-cols-[1fr_1.2fr]'
                  )}
                >
                  {/* Image */}
                  {project.image && (
                    <motion.div
                      variants={clipPathReveal}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-100px' }}
                      className={cn(
                        'relative h-64 lg:h-full overflow-hidden bg-background-alt',
                        !isEven && isFeatured && 'lg:order-2'
                      )}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover rounded-t-card lg:rounded-t-none lg:rounded-l-card"
                      />
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className={cn('p-8 lg:p-12 space-y-6', !project.image && 'lg:col-span-2')}>
                    {/* Year badge */}
                    {project.year && (
                      <div className="text-sm text-accent font-medium">
                        {project.year}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-serif font-semibold">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {project.longDescription || project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex} variant="default">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="primary" size="sm" className="group">
                            <ExternalLink
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                            Live Demo
                          </Button>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="group">
                            <Github
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                            View Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
