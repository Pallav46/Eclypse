"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { getAssetPath } from "@/utils/asset-path"
import { useInView } from "@/utils/animation"

interface Testimonial {
  id: number
  text: string
  author: string
  location: string
  avatar: string
}

export default function Testimonials() {
  const isMobile = useMobile()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Understated, but unforgettable. It feels like it was made for me",
      author: "Sarah Johnson",
      location: "NY, USA",
      avatar: getAssetPath("/images/avatar1.jpg"),
    },
    {
      id: 2,
      text: "The quality exceeded my expectations. Truly a remarkable experience",
      author: "John Smith",
      location: "LA, USA",
      avatar: getAssetPath("/images/avatar2.jpg"),
    },
    {
      id: 3,
      text: "Simple elegance with outstanding performance. Worth every penny",
      author: "Emma Chen",
      location: "London, UK",
      avatar: getAssetPath("/images/avatar3.jpg"),
    },
  ]

  const handleNextTestimonial = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const nextIndex = (activeTestimonial + 1) % testimonials.length

    setTimeout(() => {
      setActiveTestimonial(nextIndex)
      setIsTransitioning(false)
    }, 300)
  }

  const handleAvatarClick = (index: number) => {
    if (isTransitioning || index === activeTestimonial) return

    setIsTransitioning(true)

    setTimeout(() => {
      setActiveTestimonial(index)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center py-16 md:py-20 px-6 md:px-10"
      data-scroll-section
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div
        className={`container transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        data-scroll
        data-scroll-speed="0.5"
      >
        <h2 className="text-sm uppercase tracking-wider font-medium mb-12">OUR CUSTOMERS</h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
          <div
            className={`max-w-full md:max-w-[65%] relative transition-all duration-500 ${
              isTransitioning ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex">
              <div className="text-5xl leading-none absolute left-0 top-[-1rem] mt-4 font-serif font-bold text-white">
                "
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight pl-16">
                {testimonials[activeTestimonial].text}
              </div>
            </div>
            <div className="mt-8 text-lg font-medium pl-16">{testimonials[activeTestimonial].author}</div>
            <div className="text-gray-500 text-base pl-16">{testimonials[activeTestimonial].location}</div>
          </div>

          <div className="flex flex-row items-center gap-6 mt-8 md:mt-0">
            <button
              className="bg-transparent border-none text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
              onClick={handleNextTestimonial}
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} className={`transform ${isMobile ? "rotate-[270deg]" : "rotate-180"}`} />
            </button>

            <div className={`flex ${isMobile ? "flex-row" : "flex-col"} gap-4`}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-[60px] h-[60px] rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeTestimonial === index
                      ? "opacity-100 border-2 border-white scale-110"
                      : "opacity-70 hover:opacity-90 hover:scale-105"
                  }`}
                  onClick={() => handleAvatarClick(index)}
                >
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`Customer ${testimonial.author}`}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
