'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SocialLink } from '@/data/portfolio'

interface FooterProps {
  socialLinks: SocialLink[]
  personalName: string
}

export function Footer({ socialLinks, personalName }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-alt border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold">{personalName}</h3>
            <p className="text-text-secondary">
              Building elegant digital experiences that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Connect</h4>
            <div className="flex gap-4">
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
                    className="p-3 rounded-full bg-background hover:bg-accent hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-text-secondary text-sm">
          <p>© {currentYear} {personalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
