'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Certification } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

interface CertificationsProps {
  certifications: Certification[]
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

export function Certifications({ certifications, sectionNumber = '08' }: CertificationsProps) {
  // Don't render if no certifications
  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="section-padding bg-background-alt">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Certifications`} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="card-base overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image or Icon */}
                <div className="w-full md:w-40 h-40 bg-accent-tint flex items-center justify-center flex-shrink-0 rounded-t-card md:rounded-l-card md:rounded-tr-none">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <Award size={48} className="text-accent" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 space-y-3">
                  {/* Certification Name */}
                  <h3 className="text-lg font-serif font-semibold text-text-primary">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <div className="text-accent font-medium">{cert.issuer}</div>

                  {/* Date */}
                  <div className="text-sm text-text-secondary">
                    Issued {formatDate(cert.date)}
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="text-xs text-text-secondary font-mono">
                      ID: {cert.credentialId}
                    </div>
                  )}

                  {/* Verify Link */}
                  {cert.credentialUrl && (
                    <div className="pt-2">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <ExternalLink size={14} />
                          Verify
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
