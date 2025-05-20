"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useInView } from "@/utils/animation"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

function AccordionItem({ title, children, isActive, onClick }: AccordionItemProps) {
  return (
    <div className={`border-b border-white/20 ${isActive ? "active" : ""}`}>
      <div
        className="flex justify-between items-center py-6 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={onClick}
      >
        <h3 className="text-xl font-normal">{title}</h3>
        <div className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}>
          <ChevronDown size={24} stroke="white" strokeWidth={2} />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-[500px]" : "max-h-0"}`}
      >
        <div
          className={`px-4 pb-6 transition-all duration-500 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2.5"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="py-16 md:py-20 px-6 md:px-10" data-scroll-section ref={ref as React.RefObject<HTMLDivElement>}>
      <div
        className={`w-full transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        data-scroll
        data-scroll-speed="0.5"
      >
        <AccordionItem title="Size & Fit" isActive={activeIndex === 0} onClick={() => handleToggle(0)}>
          <p className="text-white/80 mb-4">
            This garment is designed with a tailored fit that offers both structure and comfort.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-white/80 mb-2">Runs true to size</li>
            <li className="text-white/80 mb-2">Model is 5'9" (175 cm) and wears size S</li>
            <li className="text-white/80 mb-2">Structured shoulder with modern silhouette</li>
            <li className="text-white/80 mb-2">Mid-weight wool fabric (320 gsm)</li>
            <li className="text-white/80 mb-2">Blazer length: 28" (71 cm) in size M</li>
            <li className="text-white/80 mb-2">Trouser inseam: 32" (81 cm)</li>
          </ul>
          <p className="text-white/80">
            For assistance with sizing, please refer to our detailed size chart or contact customer service.
          </p>
        </AccordionItem>

        <AccordionItem title="Delivery & Returns" isActive={activeIndex === 1} onClick={() => handleToggle(1)}>
          <p className="text-white/80 mb-4">
            We offer flexible delivery and return options to ensure your shopping experience is seamless.
          </p>
          <p className="text-white/80 font-semibold mb-2">Delivery:</p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-white/80 mb-2">Standard Delivery (3-5 business days): Free</li>
            <li className="text-white/80 mb-2">Express Delivery (1-2 business days): ₹499</li>
            <li className="text-white/80 mb-2">Same Day Delivery (select cities only): ₹899</li>
          </ul>
          <p className="text-white/80 font-semibold mb-2">Returns:</p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-white/80 mb-2">Free returns within 30 days of delivery</li>
            <li className="text-white/80 mb-2">Items must be unworn, unwashed, and with original tags attached</li>
            <li className="text-white/80 mb-2">Exchange option available for alternative sizes</li>
          </ul>
          <p className="text-white/80">
            For more details on our delivery and return policies, please visit our Help Center.
          </p>
        </AccordionItem>

        <AccordionItem title="How This Was Made" isActive={activeIndex === 2} onClick={() => handleToggle(2)}>
          <p className="text-white/80 mb-4">
            This tailored suit is crafted with precision and care using sustainable practices.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="text-white/80 mb-2">Made from 100% premium wool sourced from responsible farms</li>
            <li className="text-white/80 mb-2">Dyed using low-impact, OEKO-TEX® certified processes</li>
            <li className="text-white/80 mb-2">Manufactured in our ethical facility in Bengaluru, India</li>
            <li className="text-white/80 mb-2">
              Cut and sewn by skilled artisans with generations of tailoring expertise
            </li>
            <li className="text-white/80 mb-2">Buttons made from biodegradable materials</li>
            <li className="text-white/80 mb-2">Lining created from recycled polyester</li>
          </ul>
          <p className="text-white/80">
            Our commitment to sustainability extends throughout our supply chain, ensuring that each garment meets our
            high standards for environmental responsibility and ethical production.
          </p>
        </AccordionItem>
      </div>
    </div>
  )
}
