'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface ResumeHighlight {
  label: string
  value: string
}

interface ResumeProps {
  resumePath?: string
  highlights?: ResumeHighlight[]
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

export function Resume({ resumePath, highlights, sectionNumber = '02' }: ResumeProps) {
  // Don't render if no resume available
  if (!resumePath) return null

  return (
    <section id="resume" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Resume`} />

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Resume Preview Area */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="card-base p-8 md:p-12 space-y-8"
          >
            {/* Document Icon/Preview */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-accent-tint rounded-2xl flex items-center justify-center">
                <FileText size={32} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2">
                  Complete Resume
                </h3>
                <p className="text-text-secondary">
                  Download my full resume for detailed information about my experience, 
                  education, and accomplishments.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-sm text-text-secondary mb-1">
                      {highlight.label}
                    </div>
                    <div className="text-xl font-serif font-semibold text-accent">
                      {highlight.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Download Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <a href={resumePath} download target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary"
                  size="lg"
                  className="group bg-text-primary hover:bg-text-secondary text-background"
                >
                  <Download
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
