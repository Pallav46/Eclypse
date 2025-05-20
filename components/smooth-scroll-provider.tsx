"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Only import on client side
    const loadLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default

        const scroll = new LocomotiveScroll({
          el: scrollRef.current!,
          smooth: true,
          smoothMobile: false,
          multiplier: 1,
          class: "is-revealed",
          lerp: 0.08,
        })

        setLocomotiveScroll(scroll)

        // Update scroll on window resize
        window.addEventListener("resize", () => scroll.update())

        return () => {
          window.removeEventListener("resize", () => scroll.update())
          scroll.destroy()
        }
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error)
      }
    }

    loadLocomotiveScroll()
  }, [])

  // Update scroll when route changes
  useEffect(() => {
    if (locomotiveScroll) {
      setTimeout(() => {
        locomotiveScroll.update()
      }, 500)
    }
  }, [pathname, locomotiveScroll])

  return (
    <div ref={scrollRef} data-scroll-container className="scroll-container">
      {children}
    </div>
  )
}
