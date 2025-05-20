"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

// Hook to detect when an element is in viewport
export function useInView(options = {}, once = true) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (once && ref.current) {
          observer.unobserve(ref.current)
        }
      } else if (!once) {
        setIsInView(false)
      }
    }, options)

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options, once])

  return [ref, isInView] as [RefObject<HTMLElement>, boolean]
}

// Hook for parallax effect
export function useParallax(speed = 0.1) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const element = ref.current
      if (element) {
        element.style.transform = `translateY(${scrollY * speed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return ref
}

// Hook for smooth scroll
export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.length > 1) {
        e.preventDefault()
        const targetElement = document.querySelector(anchor.hash)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}
