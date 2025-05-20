"use client"

import { useState } from "react"
import Image from "next/image"
import { getAssetPath } from "@/utils/asset-path"

interface GridItemProps {
  type: "image" | "video"
  src: string
  alt?: string
  hoverText?: string
  colSpan?: number
  aspectRatio?: string
  isLast?: boolean
  index?: number
}

function GridItem({
  type,
  src,
  alt = "",
  hoverText = "",
  colSpan = 1,
  aspectRatio = "aspect-[3/4]",
  isLast = false,
  index = 0,
}: GridItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Define specific aspect ratios based on index
  const getAspectRatio = () => {
    if (type === "video") return "aspect-[16/9]"
    if (index === 1) return "aspect-[4/5]"
    if (index >= 2 && index <= 4) return "aspect-[4/3]"
    return "aspect-[3/4]"
  }

  return (
    <div
      className={`relative overflow-hidden bg-neutral-900 ${
        colSpan > 1 ? `md:col-span-${colSpan}` : ""
      } ${getAspectRatio()}`}
      style={{
        // Fallback inline styles for aspect ratio to ensure consistency
        aspectRatio: type === "video" ? "16/9" : index === 1 ? "4/5" : index >= 2 && index <= 4 ? "4/3" : "3/4",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type === "video" ? (
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={400}
            height={450}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isHovered ? "blur-sm brightness-75" : ""
            }`}
          />

          {hoverText && (
            <div
              className={`absolute pointer-events-none transition-opacity duration-300 ${
                isLast
                  ? "inset-0 flex items-center justify-center text-center bg-black/45 w-full h-full min-h-0 p-2.5"
                  : "left-0 bottom-8 w-[65%] max-w-[65%] px-[18px] py-0 flex items-end justify-start text-left h-auto min-h-[48px]"
              } text-white text-base md:text-[clamp(1rem,2vw,1.3rem)] font-semibold leading-tight ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {hoverText}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function ProductGrid() {
  // Define grid items with their properties
  const gridItems = [
    {
      type: "video" as const,
      src: getAssetPath("/videos/video3.mp4"),
      colSpan: 2,
      aspectRatio: "aspect-video",
      alt: "",
      hoverText: "",
    },
    {
      type: "image" as const,
      src: getAssetPath("/images/fabric.jpg"),
      alt: "Premium wool blend",
      hoverText: "Premium wool blend in signature vermilion",
    },
    {
      type: "image" as const,
      src: getAssetPath("/images/product1.jpg"),
      alt: "Discreet side pockets",
      hoverText: "Discreet side pockets",
    },
    {
      type: "image" as const,
      src: getAssetPath("/images/detail2.jpg"),
      alt: "Hand-cut and assembled",
      hoverText: "Hand-cut and assembled in small batches",
    },
    {
      type: "image" as const,
      src: getAssetPath("/logo/logo.png"),
      alt: "Eclypse Detail",
      hoverText: "Eclypse®",
      isLast: true,
    },
  ]

  return (
    <section className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 px-2.5">
        {gridItems.map((item, index) => (
          <GridItem
            key={index}
            type={item.type}
            src={item.src}
            alt={item.alt}
            hoverText={item.hoverText}
            colSpan={item.colSpan}
            aspectRatio={item.aspectRatio}
            isLast={item.isLast}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
