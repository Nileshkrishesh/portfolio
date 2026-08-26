'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SocialLink, ContactInfo } from '@/data/portfolio'

interface ContactProps {
  contactInfo: ContactInfo
  email: string
  socialLinks: SocialLink[]
  sectionNumber?: string
}

export function Contact({
  contactInfo,
  email,
  socialLinks,
  sectionNumber = '11',
}: ContactProps) {
  // Don't render if no email
  if (!email) return null

  return (
    <section id="contact" className="section-padding-small">
      <div className="container-custom">
        <SectionHeading title={`${sectionNumber} — Contact`} centered />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 max-w-3xl mx-auto text-center space-y-8"
        >
          {/* Heading - Strong deliberate reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-200px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
              {contactInfo.title}
            </h3>
            {contactInfo.subtitle && (
              <p className="text-xl text-text-secondary">
                {contactInfo.subtitle}
              </p>
            )}
            {contactInfo.availability && (
              <p className="text-text-secondary">{contactInfo.availability}</p>
            )}
          </motion.div>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-200px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href={`mailto:${email}`}>
              <Button
                variant="primary"
                size="lg"
                className="group bg-text-primary hover:bg-text-secondary text-background"
              >
                <Icons.Mail size={18} />
                {email}
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          {socialLinks && socialLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-200px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-sm text-text-secondary mb-6">
                Or connect with me on
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = (Icons as any)[social.icon] || Icons.Link
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-background-alt hover:bg-accent hover:text-white transition-all duration-300 border border-border"
                      aria-label={social.name}
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
