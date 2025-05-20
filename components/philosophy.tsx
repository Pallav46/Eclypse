"use client"

import type React from "react"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/utils/animation"

interface PhilosophyProps {
  title?: string
  showLearnMore?: boolean
  id?: string
}

export default function Philosophy({
  title = "Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.",
  showLearnMore = true,
  id,
}: PhilosophyProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section className="bg-black py-20 md:py-24 px-6 md:px-10" id={id} data-scroll-section>
      <div className="max-w-3xl" ref={ref as React.RefObject<HTMLDivElement>}>
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-white mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-scroll
          data-scroll-speed="1"
        >
          {title}
        </h2>

        {showLearnMore && (
          <Link
            href="#"
            className={`text-white text-base md:text-lg inline-block pb-2 border-b border-white transition-all hover:bg-white hover:text-black hover:pl-2.5 group ${
              isInView ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
            }`}
            data-scroll
            data-scroll-speed="1.2"
          >
            Learn more about Eclypse
            <span className="ml-2.5 inline-block transition-all group-hover:opacity-0 group-hover:translate-x-2.5">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}
