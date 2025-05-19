"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowUp } from "lucide-react"

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-16 md:py-20 px-6 md:px-10 border-t border-neutral-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-3xl font-medium mb-8 inline-block text-white no-underline">
              Eclypse
              <span className="text-sm align-super">
                <ArrowUpRight size={14} className="inline" />
              </span>
            </Link>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
              <Link href="/" className="text-white hover:underline text-sm">
                Home
              </Link>
              <Link href="#" className="text-white hover:underline text-sm">
                About
              </Link>
              <Link href="#" className="text-white hover:underline text-sm">
                Buy
              </Link>
              <Link href="#" className="text-white hover:underline text-sm">
                Our Customers
              </Link>
              <Link href="#" className="text-white hover:underline text-sm">
                Contacts
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
            <div>
              <h4 className="text-xs text-neutral-600 font-normal mb-2 tracking-wider">CONTACT</h4>
              <p className="text-sm mb-6">+91 123-456-7890</p>

              <h4 className="text-xs text-neutral-600 font-normal mb-2 tracking-wider">EMAIL</h4>
              <p className="text-sm">eclypse@gmail.com</p>
            </div>

            <button
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center cursor-pointer hover:bg-neutral-700 transition-colors"
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="text-right text-xs text-neutral-600 mt-8">© Eclypse 2025</div>
      </div>
    </footer>
  )
}
