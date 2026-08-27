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
}

export function PageBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: -1000, y: -1000 })

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
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    // Initialize nodes in a grid pattern
    const initNodes = () => {
      const nodes: Node[] = []
      const spacing = 100
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2
          const y = j * spacing + spacing / 2
          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          })
        }
      }

      nodesRef.current = nodes
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const nodes = nodesRef.current

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const mouseRadius = 150 // Distance of mouse influence

      // Update node positions based on mouse
      nodes.forEach((node) => {
        const dx = mouseX - node.x
        const dy = mouseY - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          // Push nodes away from cursor
          const force = (mouseRadius - distance) / mouseRadius
          const angle = Math.atan2(dy, dx)
          node.vx = -Math.cos(angle) * force * 3
          node.vy = -Math.sin(angle) * force * 3
        } else {
          // Return to original position
          node.vx += (node.baseX - node.x) * 0.05
          node.vy += (node.baseY - node.y) * 0.05
        }

        // Apply velocity with damping
        node.vx *= 0.95
        node.vy *= 0.95
        node.x += node.vx
        node.y += node.vy
      })

      // Draw connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Draw line if nodes are close enough
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.25
            ctx.strokeStyle = `rgba(189, 129, 117, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw connection from nodes to mouse cursor
      if (mouseX > 0 && mouseY > 0) {
        nodes.forEach((node) => {
          const dx = mouseX - node.x
          const dy = mouseY - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            const opacity = (1 - distance / mouseRadius) * 0.3
            ctx.strokeStyle = `rgba(189, 129, 117, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
          }
        })

        // Draw cursor node
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 15)
        gradient.addColorStop(0, 'rgba(189, 129, 117, 0.5)')
        gradient.addColorStop(1, 'rgba(189, 129, 117, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = 'rgba(189, 129, 117, 0.8)'
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw nodes
      nodes.forEach((node) => {
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8)
        gradient.addColorStop(0, 'rgba(189, 129, 117, 0.3)')
        gradient.addColorStop(1, 'rgba(189, 129, 117, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Inner dot
        ctx.fillStyle = 'rgba(189, 129, 117, 0.6)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2)
        ctx.fill()

        // Highlight dot
        ctx.fillStyle = 'rgba(229, 217, 201, 0.8)'
        ctx.beginPath()
        ctx.arc(node.x - 0.5, node.y - 0.5, 1, 0, Math.PI * 2)
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
      style={{ background: '#f9f5f1' }}
    />
  )
}
