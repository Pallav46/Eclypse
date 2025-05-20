"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-black pt-16">
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white">
          Eclypse<span className="text-sm align-super ml-0.5">®</span>
        </h1>
        <span className="text-sm md:text-base text-white">© 2025</span>
      </div>

      <div className="relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto max-h-[calc(100vh-64px-72px-5vh)] min-h-[300px] object-cover"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 max-w-[50%] text-right">
          <h2
            className={`text-lg md:text-2xl lg:text-3xl font-normal text-white drop-shadow-md transform ${
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
