'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface HeroProps {
  firstName: string
  lastName: string
  role: string
  intro: string
  profileImage?: string
  degree?: string
  university?: string
  stats?: Array<{
    value: number
    label: string
    suffix?: string
  }>
  openToOpportunities?: boolean
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easeOut
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1], // Gentle scale
    },
  },
}

export function Hero({
  firstName,
  lastName,
  role,
  intro,
  profileImage,
  degree,
  university,
  stats,
  openToOpportunities = false,
}: HeroProps) {
  const handleScrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative pt-20"
    >
      {/* Subtle radial fade for text readability - ensures WCAG AA compliance */}
      <div className="absolute inset-0 bg-gradient-radial from-background/98 via-background/95 to-background/90 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center"
        >
          {/* LEFT COLUMN */}
          <div className="space-y-6 md:space-y-8">
            {/* Eyebrow Label */}
            {openToOpportunities && (
              <motion.div variants={fadeIn}>
                <span className="inline-block px-4 py-1.5 text-xs font-sans font-semibold uppercase tracking-[0.2em] text-accent border border-accent/30 rounded-full">
                  Open to Opportunities
                </span>
              </motion.div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <motion.h1
                variants={fadeUp}
                className="font-serif font-semibold leading-[0.95] tracking-tight"
              >
                <span className="block text-text-primary">{firstName}</span>
                <motion.span
                  variants={fadeUp}
                  className="block text-accent"
                >
                  {lastName}
                </motion.span>
              </motion.h1>

              {/* Role */}
              <motion.p
                variants={fadeUp}
                className="text-2xl md:text-3xl font-serif text-text-secondary mt-4"
              >
                {role}
              </motion.p>
            </div>

            {/* Intro */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl"
            >
              {intro}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={container}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.div variants={fadeUp}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleScrollToWork}
                  className={cn(
                    'group bg-text-primary hover:bg-text-secondary text-background',
                    'transition-all duration-300'
                  )}
                >
                  View My Work
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleScrollToContact}
                  className="group transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Mail size={18} />
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex flex-col items-center lg:items-end gap-6">
            {/* Profile Image Container */}
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              {/* Image */}
              <div className="relative rounded-[1.5rem] overflow-hidden border border-border bg-background-alt shadow-card">
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt={`${firstName} ${lastName} - ${role}`}
                    width={400}
                    height={533}
                    priority
                    className="w-full h-auto max-w-md aspect-[3/4] object-cover"
                  />
                ) : (
                  <div className="w-full max-w-md aspect-[3/4] bg-background-alt flex items-center justify-center">
                    <div className="text-center text-text-secondary p-8">
                      <p className="text-sm">Profile photo</p>
                      <p className="text-xs mt-2">Add to public/images/</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Degree Badge Pill */}
              {degree && university && (
                <motion.div
                  variants={fadeUp}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0"
                >
                  <div className="bg-background border border-border rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
                    <p className="text-sm font-medium text-text-primary whitespace-nowrap">
                      {degree}
                    </p>
                    <p className="text-xs text-text-secondary whitespace-nowrap">
                      {university}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Stats Card */}
            {stats && stats.length > 0 && (
              <motion.div
                variants={fadeUp}
                className="w-full max-w-md lg:max-w-sm mt-8 lg:mt-4"
              >
                <div className="bg-background-alt border border-border rounded-card p-6 shadow-subtle">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl md:text-4xl font-serif font-bold text-accent">
                          {stat.value}
                          {stat.suffix}
                        </div>
                        <div className="text-sm text-text-secondary mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
