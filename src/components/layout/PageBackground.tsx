'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function PageBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      timeRef.current += 0.003

      // Multiple flowing wave layers
      const waves = [
        { amplitude: 40, frequency: 0.004, speed: 1, opacity: 0.15, offset: 0 },
        { amplitude: 35, frequency: 0.005, speed: -0.8, opacity: 0.12, offset: canvas.height * 0.3 },
        { amplitude: 30, frequency: 0.006, speed: 1.2, opacity: 0.10, offset: canvas.height * 0.6 },
      ]

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2 + wave.offset)

        for (let x = 0; x < canvas.width; x += 3) {
          const y =
            canvas.height / 2 +
            wave.offset +
            Math.sin(x * wave.frequency + timeRef.current * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + timeRef.current * wave.speed * 0.7) * (wave.amplitude * 0.5)
          
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, wave.offset, 0, canvas.height)
        gradient.addColorStop(0, `rgba(189, 129, 117, ${wave.opacity})`)
        gradient.addColorStop(1, `rgba(229, 217, 201, ${wave.opacity * 0.3})`)
        
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Floating circles
      const circles = 8
      for (let i = 0; i < circles; i++) {
        const x = (canvas.width / circles) * i + Math.sin(timeRef.current + i) * 100
        const y = canvas.height / 2 + Math.cos(timeRef.current * 0.7 + i) * 150
        const radius = 20 + Math.sin(timeRef.current + i * 0.5) * 10

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2)
        gradient.addColorStop(0, 'rgba(189, 129, 117, 0.35)')
        gradient.addColorStop(1, 'rgba(189, 129, 117, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Inner circle
        ctx.fillStyle = 'rgba(189, 129, 117, 0.20)'
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-alt opacity-50" />
      </div>
    )
  }

  return (
    <>
      {/* Static gradient overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-br from-background via-background to-background-alt opacity-60" />
      
      {/* Animated canvas */}
      <motion.canvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{ background: '#f9f5f1' }}
      />
    </>
  )
}
