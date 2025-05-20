"use client"

import { useEffect, useState } from "react"
import { getAssetPath } from "@/utils/asset-path"
import ParallaxSection from "@/components/parallax-section"
import { useTheme } from "next-themes"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setMounted(true)
  }, [])

  return (
    <section className="relative bg-black dark:bg-white pt-16 transition-colors duration-500" data-scroll-section>
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white dark:text-black animate-fade-in font-playfair">
          Eclypse<span className="text-sm align-super ml-0.5">®</span>
        </h1>
        <span className="text-sm md:text-base text-white dark:text-black">© 2025</span>
      </div>

      <div className="relative overflow-hidden">
        <ParallaxSection speed={0.15} direction="up">
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-auto max-h-[calc(100vh-64px-72px-5vh)] min-h-[300px] object-cover scale-110 transition-opacity duration-500 ${
                mounted && theme === "dark" ? "opacity-80" : "opacity-100"
              }`}
            >
              <source src={getAssetPath("/videos/hero_video.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {mounted && theme === "dark" && (
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            )}
          </div>
        </ParallaxSection>

        <div
          className="absolute bottom-5 md:bottom-10 right-5 md:right-10 max-w-[50%] text-right"
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.1"
        >
          <h2
            className={`text-lg md:text-2xl lg:text-3xl font-normal text-white dark:text-black drop-shadow-md transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-1000 ease-out delay-500`}
          >
            A silhouette worth remembering
          </h2>
        </div>
      </div>
    </section>
  )
}
