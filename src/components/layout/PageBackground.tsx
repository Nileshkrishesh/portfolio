'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  pulse: number
  pulseSpeed: number
}

export function PageBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: -1000, y: -1000, trail: [] as { x: number; y: number; life: number }[] })
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

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, life: 1 }
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        trail: [...mouseRef.current.trail.slice(-20), newPoint],
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, trail: [] }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      const nodes: Node[] = []
      const spacing = 80
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2 + (Math.random() - 0.5) * 20
          const y = j * spacing + spacing / 2 + (Math.random() - 0.5) * 20
          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03,
          })
        }
      }

      nodesRef.current = nodes
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const nodes = nodesRef.current

    const animate = () => {
      // Trail effect instead of full clear
      ctx.fillStyle = 'rgba(249, 245, 241, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      timeRef.current += 0.005

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const mouseRadius = 200

      // Update mouse trail
      mouseRef.current.trail = mouseRef.current.trail
        .map((point) => ({ ...point, life: point.life - 0.05 }))
        .filter((point) => point.life > 0)

      // Draw mouse trail with gradient
      mouseRef.current.trail.forEach((point, i) => {
        if (i > 0) {
          const prev = mouseRef.current.trail[i - 1]
          const gradient = ctx.createLinearGradient(prev.x, prev.y, point.x, point.y)
          gradient.addColorStop(0, `rgba(189, 129, 117, ${point.life * 0.3})`)
          gradient.addColorStop(1, `rgba(189, 129, 117, ${point.life * 0.1})`)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 3
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(prev.x, prev.y)
          ctx.lineTo(point.x, point.y)
          ctx.stroke()
        }
      })

      // Flowing wave effect
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(189, 129, 117, ${0.03 + i * 0.01})`
        ctx.lineWidth = 1 + i * 0.5
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.005 + timeRef.current * 2 + i * 0.5) * 30 +
            Math.sin(x * 0.003 + timeRef.current + i) * 20
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Update nodes with organic movement
      nodes.forEach((node) => {
        node.pulse += node.pulseSpeed

        // Organic drift animation
        const driftX = Math.sin(timeRef.current + node.pulse) * 0.3
        const driftY = Math.cos(timeRef.current + node.pulse * 0.8) * 0.3

        const dx = mouseX - node.x
        const dy = mouseY - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius && mouseX > 0) {
          const force = ((mouseRadius - distance) / mouseRadius) * 4
          const angle = Math.atan2(dy, dx)
          node.vx = -Math.cos(angle) * force
          node.vy = -Math.sin(angle) * force
        } else {
          node.vx += (node.baseX - node.x) * 0.03 + driftX
          node.vy += (node.baseY - node.y) * 0.03 + driftY
        }

        node.vx *= 0.92
        node.vy *= 0.92
        node.x += node.vx
        node.y += node.vy
      })

      // Draw connections with gradient and pulse
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 130) {
            const pulseEffect = (Math.sin(node.pulse) + Math.sin(otherNode.pulse)) / 4 + 0.5
            const opacity = ((1 - distance / 130) * 0.3 + pulseEffect * 0.1)
            
            const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
            gradient.addColorStop(0, `rgba(189, 129, 117, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(229, 217, 201, ${opacity * 0.7})`)
            gradient.addColorStop(1, `rgba(189, 129, 117, ${opacity})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1 + pulseEffect * 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw connections to cursor with particle effect
      if (mouseX > 0 && mouseY > 0) {
        nodes.forEach((node) => {
          const dx = mouseX - node.x
          const dy = mouseY - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            const opacity = (1 - distance / mouseRadius) * 0.5
            const gradient = ctx.createLinearGradient(node.x, node.y, mouseX, mouseY)
            gradient.addColorStop(0, `rgba(189, 129, 117, ${opacity * 0.3})`)
            gradient.addColorStop(1, `rgba(189, 129, 117, ${opacity})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
          }
        })

        // Animated cursor node with rings
        for (let i = 0; i < 3; i++) {
          const ringSize = 15 + i * 10 + Math.sin(timeRef.current * 3 + i) * 3
          const ringOpacity = (0.4 - i * 0.1) * (1 + Math.sin(timeRef.current * 2 + i) * 0.3)
          
          ctx.strokeStyle = `rgba(189, 129, 117, ${ringOpacity})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(mouseX, mouseY, ringSize, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Cursor center
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 20)
        gradient.addColorStop(0, 'rgba(189, 129, 117, 0.6)')
        gradient.addColorStop(1, 'rgba(189, 129, 117, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = 'rgba(189, 129, 117, 0.9)'
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw nodes with pulse animation
      nodes.forEach((node) => {
        const pulseSize = 1 + Math.sin(node.pulse) * 0.3
        const pulseOpacity = 0.4 + Math.sin(node.pulse) * 0.2

        // Outer glow with pulse
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 12 * pulseSize)
        gradient.addColorStop(0, `rgba(189, 129, 117, ${pulseOpacity * 0.4})`)
        gradient.addColorStop(1, 'rgba(189, 129, 117, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 12 * pulseSize, 0, Math.PI * 2)
        ctx.fill()

        // Inner dot
        ctx.fillStyle = `rgba(189, 129, 117, ${0.7 + pulseOpacity * 0.3})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3 * pulseSize, 0, Math.PI * 2)
        ctx.fill()

        // Sparkle
        ctx.fillStyle = `rgba(229, 217, 201, ${pulseOpacity})`
        ctx.beginPath()
        ctx.arc(node.x - 1, node.y - 1, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
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
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{ background: '#f9f5f1' }}
    />
  )
}
