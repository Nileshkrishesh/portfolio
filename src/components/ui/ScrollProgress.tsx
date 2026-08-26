'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (prefersReducedMotion) return null

  return (
    <>
      {/* Track */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[1px] bg-border pointer-events-none" />
      
      {/* Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[1px] bg-accent origin-left pointer-events-none"
        style={{ scaleX }}
      />
    </>
  )
}
