"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getAssetPath } from "@/utils/asset-path"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 dark:bg-white/90 backdrop-blur-sm shadow-lg"
          : "bg-black/85 dark:bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image
              src={getAssetPath("/logo/logo.png") || "/placeholder.svg"}
              alt="Eclypse Logo"
              width={32}
              height={32}
              className="hover:scale-110 transition-transform duration-300 invert-0 dark:invert"
            />
          </Link>
        </div>
        <ul className="flex items-center gap-4 md:gap-6">
          <li>
            <Link
              href="#"
              className="text-white dark:text-black hover:text-red-400 dark:hover:text-red-600 transition-colors relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 dark:bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white dark:text-black hover:text-red-400 dark:hover:text-red-600 transition-colors relative group"
            >
              Waitlist
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 dark:bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/checkout"
              className={`text-white dark:text-black hover:text-red-400 dark:hover:text-red-600 transition-colors relative group ${
                pathname === "/checkout" ? "font-medium" : ""
              }`}
            >
              Cart
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-red-400 dark:bg-red-600 transition-all duration-300 ${
                  pathname === "/checkout" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </li>
          <li className="ml-2">
            <ThemeToggle />
          </li>
          <li>
            <Link
              href="/checkout"
              className="bg-white dark:bg-black text-black dark:text-white px-7 py-2.5 rounded-lg font-bold hover:bg-red-500 dark:hover:bg-red-600 hover:text-white transition-all hover:scale-105"
            >
              Buy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
