'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  size: number
  rotation: number
  rotationSpeed: number
  type: 'cube' | 'sphere' | 'ring'
}

export function PageBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Track mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize 3D particles
    const particleCount = 50
    const particles: Particle[] = []
    const types: Array<'cube' | 'sphere' | 'ring'> = ['cube', 'sphere', 'ring']

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 0.5 + 0.2,
        size: Math.random() * 30 + 15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }

    particlesRef.current = particles

    let time = 0

    // Draw 3D cube
    const drawCube = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      const halfSize = size / 2
      
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      
      // Front face
      ctx.strokeStyle = `rgba(189, 129, 117, ${opacity * 0.6})`
      ctx.lineWidth = 2
      ctx.strokeRect(-halfSize, -halfSize, size, size)
      
      // 3D effect lines
      ctx.beginPath()
      ctx.moveTo(-halfSize, -halfSize)
      ctx.lineTo(-halfSize * 0.7, -halfSize * 0.7)
      ctx.moveTo(halfSize, -halfSize)
      ctx.lineTo(halfSize * 0.7, -halfSize * 0.7)
      ctx.moveTo(halfSize, halfSize)
      ctx.lineTo(halfSize * 0.7, halfSize * 0.7)
      ctx.moveTo(-halfSize, halfSize)
      ctx.lineTo(-halfSize * 0.7, halfSize * 0.7)
      ctx.stroke()
      
      ctx.restore()
    }

    // Draw 3D sphere
    const drawSphere = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size / 2)
      gradient.addColorStop(0, `rgba(189, 129, 117, ${opacity * 0.3})`)
      gradient.addColorStop(1, `rgba(189, 129, 117, 0)`)
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, size / 2, 0, Math.PI * 2)
      ctx.fill()
      
      // Highlight
      ctx.strokeStyle = `rgba(229, 217, 201, ${opacity * 0.5})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, size / 2, 0, Math.PI * 2)
      ctx.stroke()
    }

    // Draw 3D ring
    const drawRing = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.scale(1, 0.3) // Create 3D perspective
      
      ctx.strokeStyle = `rgba(189, 129, 117, ${opacity * 0.6})`
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.strokeStyle = `rgba(229, 217, 201, ${opacity * 0.3})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(0, 0, size / 2.5, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(249, 245, 241, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      time += 0.01

      // Draw wave effects in background
      ctx.strokeStyle = 'rgba(189, 129, 117, 0.05)'
      ctx.lineWidth = 2
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 50
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Update and draw particles with parallax
      particles.forEach((particle) => {
        // Parallax effect based on mouse position
        const parallaxX = mouseRef.current.x * (particle.z / 1000) * 20
        const parallaxY = mouseRef.current.y * (particle.z / 1000) * 20

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z -= particle.vz
        particle.rotation += particle.rotationSpeed

        // Reset particle when it goes off screen or too close
        if (particle.z < 1) {
          particle.z = 1000
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
        }
        if (particle.x < -100) particle.x = canvas.width + 100
        if (particle.x > canvas.width + 100) particle.x = -100
        if (particle.y < -100) particle.y = canvas.height + 100
        if (particle.y > canvas.height + 100) particle.y = -100

        // Calculate 3D projection
        const scale = 1000 / (1000 + particle.z)
        const projectedX = particle.x + parallaxX
        const projectedY = particle.y + parallaxY
        const projectedSize = particle.size * scale
        const opacity = scale * 0.8

        // Draw based on type
        if (opacity > 0.1) {
          switch (particle.type) {
            case 'cube':
              drawCube(ctx, projectedX, projectedY, projectedSize, particle.rotation, opacity)
              break
            case 'sphere':
              drawSphere(ctx, projectedX, projectedY, projectedSize, particle.rotation, opacity)
              break
            case 'ring':
              drawRing(ctx, projectedX, projectedY, projectedSize, particle.rotation, opacity)
              break
          }
        }
      })

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dz = p1.z - p2.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.15
            ctx.strokeStyle = `rgba(229, 217, 201, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

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
    // Static gradient background for reduced motion
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-alt opacity-50" />
      </div>
    )
  }

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{ background: 'linear-gradient(135deg, #f9f5f1 0%, #faf6f2 100%)' }}
    />
  )
}
