'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'mb-12 lg:mb-16',
        centered && 'text-center',
        className
      )}
    >
      <h2 className="text-balance font-serif">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
