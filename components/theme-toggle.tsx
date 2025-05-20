"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, SunMoon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTheme(theme === "dark" ? "light" : "dark")

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-white/10 flex items-center justify-center">
        <SunMoon size={18} className="text-white dark:text-white/70" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
        theme === "dark" ? "bg-black/20" : "bg-white/20"
      } hover:scale-110`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          isAnimating ? (theme === "dark" ? "animate-theme-toggle-to-light" : "animate-theme-toggle-to-dark") : ""
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Sun
            size={18}
            className={`transition-all duration-300 ${
              theme === "dark" ? "opacity-0 scale-50" : "opacity-100 scale-100 text-white"
            } ${isHovered && theme !== "dark" ? "rotate-45" : ""}`}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Moon
            size={18}
            className={`transition-all duration-300 ${
              theme === "dark" ? "opacity-100 scale-100 text-black" : "opacity-0 scale-50"
            } ${isHovered && theme === "dark" ? "-rotate-45" : ""}`}
          />
        </div>
      </div>
    </button>
  )
}
