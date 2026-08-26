'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, Quote } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Research } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

interface ResearchProps {
  publications: Research[]
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

export function ResearchSection({ publications, sectionNumber = '10' }: ResearchProps) {
  // Don't render if no publications
  if (!publications || publications.length === 0) return null

  return (
    <section id="research" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Research & Publications`} />

        <div className="mt-12 space-y-8 max-w-4xl mx-auto">
          {publications.map((paper, index) => (
            <motion.article
              key={paper.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="card-base p-6 md:p-8 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent-tint rounded-2xl flex items-center justify-center">
                  <FileText size={24} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-serif font-semibold text-text-primary leading-snug">
                  {paper.title}
                </h3>

                {/* Authors */}
                <div className="text-text-secondary">
                  {paper.authors.join(', ')}
                </div>

                {/* Publication & Date */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                  {paper.publication && <span>{paper.publication}</span>}
                  {paper.publication && <span>•</span>}
                  <span>{formatDate(paper.date)}</span>
                  {paper.citationCount !== undefined && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Quote size={14} />
                        {paper.citationCount} citations
                      </span>
                    </>
                  )}
                </div>

                {/* Abstract */}
                {paper.abstract && (
                  <p className="text-text-secondary leading-relaxed">
                    {paper.abstract}
                  </p>
                )}

                {/* Tags */}
                {paper.tags && paper.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, i) => (
                      <Tag key={i} variant="default">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                )}

                {/* Paper Link */}
                {paper.paperUrl && (
                  <div className="pt-2">
                    <a
                      href={paper.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="sm">
                        <ExternalLink size={14} />
                        Read Paper
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
