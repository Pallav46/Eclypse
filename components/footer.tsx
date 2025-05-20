"use client"

import type React from "react"

import Link from "next/link"
import { ArrowUpRight, ArrowUp } from "lucide-react"
import { useInView } from "@/utils/animation"

export default function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      className="py-16 md:py-20 px-6 md:px-10 border-t border-neutral-800 dark:border-neutral-200 bg-black dark:bg-white text-white dark:text-black transition-colors duration-500"
      data-scroll-section
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div
        className={`container transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <Link
              href="/"
              className="text-3xl font-medium mb-8 inline-block text-white dark:text-black no-underline hover:text-red-500 dark:hover:text-red-600 transition-colors font-playfair"
            >
              Eclypse
              <span className="text-sm align-super">
                <ArrowUpRight size={14} className="inline" />
              </span>
            </Link>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
              <Link
                href="/"
                className="text-white dark:text-black hover:text-red-500 dark:hover:text-red-600 hover:underline text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white dark:text-black hover:text-red-500 dark:hover:text-red-600 hover:underline text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-white dark:text-black hover:text-red-500 dark:hover:text-red-600 hover:underline text-sm transition-colors"
              >
                Buy
              </Link>
              <Link
                href="#"
                className="text-white dark:text-black hover:text-red-500 dark:hover:text-red-600 hover:underline text-sm transition-colors"
              >
                Our Customers
              </Link>
              <Link
                href="#"
                className="text-white dark:text-black hover:text-red-500 dark:hover:text-red-600 hover:underline text-sm transition-colors"
              >
                Contacts
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
            <div>
              <h4 className="text-xs text-neutral-600 dark:text-neutral-500 font-normal mb-2 tracking-wider">
                CONTACT
              </h4>
              <p className="text-sm mb-6">+91 123-456-7890</p>

              <h4 className="text-xs text-neutral-600 dark:text-neutral-500 font-normal mb-2 tracking-wider">EMAIL</h4>
              <p className="text-sm">eclypse@gmail.com</p>
            </div>

            <button
              className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-200 flex items-center justify-center cursor-pointer transition-all hover:bg-white dark:hover:bg-black group hover:scale-110"
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp
                size={18}
                className="text-white dark:text-black group-hover:text-black dark:group-hover:text-white transition-colors"
              />
            </button>
          </div>
        </div>

        <div className="text-right text-xs text-neutral-600 dark:text-neutral-500 mt-8">© Eclypse 2025</div>
      </div>
    </footer>
  )
}
