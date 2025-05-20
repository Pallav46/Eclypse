"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { useInView } from "@/utils/animation"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  threshold?: number
}

export default function ParallaxSection({
  children,
  speed = 0.1,
  direction = "up",
  className = "",
  threshold = 0.1,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inViewRef, isInView] = useInView({ threshold })

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    let ticking = false
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      lastScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!section) return

          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionHeight = rect.height
          const viewportHeight = window.innerHeight

          // Calculate how far the section is from the viewport center
          const distanceFromCenter = sectionTop + sectionHeight / 2 - (lastScrollY + viewportHeight / 2)

          // Apply parallax effect based on direction
          let transform = ""

          if (direction === "up" || direction === "down") {
            const translateY = distanceFromCenter * speed * (direction === "down" ? 1 : -1)
            transform = `translateY(${translateY}px)`
          } else {
            const translateX = distanceFromCenter * speed * (direction === "right" ? 1 : -1)
            transform = `translateX(${translateX}px)`
          }

          section.style.transform = transform
          ticking = false
        })

        ticking = true
      }
    }

    if (isInView) {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction, isInView])

  return (
    <div
      ref={(el) => {
        // Assign to both refs
        if (el) {
          sectionRef.current = el
          ;(inViewRef as React.MutableRefObject<HTMLDivElement>).current = el
        }
      }}
      className={`parallax-section overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}
