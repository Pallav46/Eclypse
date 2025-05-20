"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    if (pathname) {
      setIsTransitioning(true)
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setIsTransitioning(false)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [pathname, children])

  return (
    <div className="page-transition-container">
      <div
        className={`page-transition-overlay fixed inset-0 z-50 bg-black pointer-events-none transition-transform duration-500 ${
          isTransitioning ? "transform-none" : "translate-y-full"
        }`}
      />
      <div className={`page-content transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {displayChildren}
      </div>
    </div>
  )
}
