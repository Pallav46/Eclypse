"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const router = useRouter()

  const sizes = ["XS", "S", "M", "L", "XL"]

  return (
    <section className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="flex flex-col md:flex-row">
        {/* Product Media */}
        <div className="flex-1 relative min-h-[400px] md:min-h-[600px] bg-black flex items-center justify-center">
          <div className="w-full h-full">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/videos/product-detail.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 bg-white text-neutral-800 p-6 md:p-10 flex flex-col min-h-[400px] md:min-h-[600px] rounded-none md:rounded-r-lg">
          <div className="mb-8">
            <p className="text-base leading-relaxed">
              A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this
              piece captures presence without force. Worn here in the stillness of a city in motion.
            </p>
          </div>

          <div className="flex gap-4 mb-10">
            {[
              { src: "/images/detail1.jpg", alt: "Red suit blazer close-up" },
              { src: "/images/detail2.jpg", alt: "Red suit blazer side view" },
              { src: "/images/detail3.jpg", alt: "Red suit full outfit" },
            ].map((img, i) => (
              <div key={i} className="w-1/3">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={200}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
            ))}
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold">₹ 7,999</span>
              <span className="text-sm text-neutral-600">MRP incl. of all taxes</span>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-neutral-600 font-normal">Please select a size</h3>
              <a href="#" className="text-neutral-600 text-sm">
                Size chart
              </a>
            </div>

            <div className="flex gap-2.5">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`w-[60px] h-10 flex items-center justify-center text-sm rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-auto">
            <button className="flex-1 h-[50px] rounded flex items-center justify-center text-base font-medium border border-black hover:bg-neutral-100 transition-colors">
              Add to Cart
            </button>
            <button
              className="flex-1 h-[50px] rounded flex items-center justify-center text-base font-medium bg-black text-white hover:bg-red-600 transition-colors"
              onClick={() => router.push("/checkout")}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
