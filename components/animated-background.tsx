"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create geometric shapes
    const shapes: { x: number; y: number; size: number; opacity: number; speed: number }[] = []

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 10,
        opacity: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 0.2 + 0.1,
      })
    }

    // Animation
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw shapes
      shapes.forEach((shape) => {
        ctx.beginPath()
        ctx.fillStyle = `rgba(167, 139, 250, ${shape.opacity})`
        ctx.moveTo(shape.x, shape.y)
        ctx.lineTo(shape.x + shape.size, shape.y)
        ctx.lineTo(shape.x + shape.size * 0.5, shape.y + shape.size * 0.8)
        ctx.closePath()
        ctx.fill()

        // Move shapes
        shape.y += shape.speed

        // Reset position if out of canvas
        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size
          shape.x = Math.random() * canvas.width
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none" aria-hidden="true" />
}
