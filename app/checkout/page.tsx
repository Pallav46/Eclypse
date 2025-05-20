"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { getAssetPath } from "@/utils/asset-path"
import { useInView } from "@/utils/animation"
import ThemeToggle from "@/components/theme-toggle"
import GrainTexture from "@/components/grain-texture"

export default function CheckoutPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    aptNumber: "",
    state: "",
    zip: "",
  })
  const [leftRef, leftInView] = useInView({ threshold: 0.2 })
  const [rightRef, rightInView] = useInView({ threshold: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Address saved:", formData)
    alert("Address saved successfully!")
  }

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      street: "",
      aptNumber: "",
      state: "",
      zip: "",
    })
  }

  const handlePlaceOrder = () => {
    const form = document.getElementById("shipping-form") as HTMLFormElement
    if (form.checkValidity()) {
      console.log("Order placed!")
      alert("Thank you for your order!")
    } else {
      alert("Please complete the shipping address form before placing your order.")
    }
  }

  const handleBackClick = () => {
    router.push("/")
  }

  return (
    <div className="mx-auto px-5 bg-black dark:bg-white text-white dark:text-black min-h-screen transition-colors duration-500">
      <GrainTexture />
      <header className="flex justify-between items-center py-4">
        <div
          className="w-[42px] h-[42px] bg-white dark:bg-black rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          onClick={handleBackClick}
        >
          <Image
            src={getAssetPath("/logo/logo.png") || "/placeholder.svg"}
            alt="Eclypse Logo"
            width={24}
            height={24}
            className="invert-0 dark:invert"
          />
        </div>

        <div className="flex gap-6 items-center">
          <Link
            href="#"
            className="text-gray-400 dark:text-gray-600 hover:text-red-400 dark:hover:text-red-600 hover:border-b-2 hover:border-red-400 dark:hover:border-red-600 pb-0.5 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-gray-400 dark:text-gray-600 hover:text-red-400 dark:hover:text-red-600 hover:border-b-2 hover:border-red-400 dark:hover:border-red-600 pb-0.5 transition-colors"
          >
            Waitlist
          </Link>
          <Link
            href="#"
            className="text-white dark:text-black border-b-2 border-white dark:border-black pb-0.5 hover:text-red-400 dark:hover:text-red-600 hover:border-red-400 dark:hover:border-red-600 transition-colors"
          >
            Cart
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex items-center gap-3 my-6 text-xl font-medium cursor-pointer group" onClick={handleBackClick}>
        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        <span className="group-hover:text-red-400 dark:group-hover:text-red-600 transition-colors">
          Shipping Address
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Address Form */}
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-200 rounded-lg p-6 transition-all duration-1000 ${
            leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
              </div>
            </div>
            <h3 className="text-lg font-medium">Add New Address</h3>
          </div>

          <form id="shipping-form" onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-2 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 border border-neutral-700 dark:border-neutral-300 rounded-md text-base text-white dark:text-black bg-neutral-800 dark:bg-neutral-200 focus:border-red-500 focus:outline-none transition-colors"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-2 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-3 border border-neutral-700 dark:border-neutral-300 rounded-md text-base text-white dark:text-black bg-neutral-800 dark:bg-neutral-200 focus:border-red-500 focus:outline-none transition-colors"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="street" className="block mb-2 font-medium">
                Street Address
              </label>
              <input
                type="text"
                id="street"
                className="w-full p-3 border border-neutral-700 dark:border-neutral-300 rounded-md text-base text-white dark:text-black bg-neutral-800 dark:bg-neutral-200 focus:border-red-500 focus:outline-none transition-colors"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="aptNumber" className="block mb-2 font-medium">
                  Apt Number
                </label>
                <input
                  type="text"
                  id="aptNumber"
                  className="w-full p-3 border border-neutral-700 dark:border-neutral-300 rounded-md text-base text-white dark:text-black bg-neutral-800 dark:bg-neutral-200 focus:border-red-500 focus:outline-none transition-colors"
                  value={formData.aptNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="state" className="block mb-2 font-medium">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full p-3 border border-neutral-700 dark:border-neutral-300 rounded-md text-base text-white dark:text-black bg-neutral-800 dark:bg-neutral-200 focus:border-red-500 focus:outline-none transition-colors"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="zip" className="block mb-2 font-medium">
                  Zip
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full p-3 border border-neutral-700 dark:border-neutral-300 rounded-md text-base text-white dark:text-black bg-neutral-800 dark:bg-neutral-200 focus:border-red-500 focus:outline-none transition-colors"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                className="flex-1 py-3 px-6 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black border border-neutral-700 dark:border-neutral-300 rounded-md text-base font-medium cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-2 py-3 px-6 bg-white dark:bg-black text-black dark:text-white rounded-md text-base font-medium cursor-pointer hover:bg-red-500 dark:hover:bg-red-600 hover:text-white transition-colors"
              >
                Save This Address
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div
          ref={rightRef as React.RefObject<HTMLDivElement>}
          className={`bg-neutral-900 dark:bg-neutral-100 rounded-lg p-6 transition-all duration-1000 ${
            rightInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="text-gray-400 dark:text-gray-600 mb-6 pb-6 border-b border-neutral-800 dark:border-neutral-300">
            By placing your order, you agree to our company{" "}
            <a
              href="#"
              className="text-white dark:text-black font-medium no-underline hover:text-red-400 dark:hover:text-red-600 transition-colors"
            >
              Privacy policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-white dark:text-black font-medium no-underline hover:text-red-400 dark:hover:text-red-600 transition-colors"
            >
              Conditions of use
            </a>
            .
          </div>

          <h3 className="text-xl font-medium mb-6">Order Summary</h3>

          <div className="flex justify-between mb-4">
            <span>Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Before tax:</span>
            <span>6,599</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>

          <div className="flex justify-between text-lg font-medium pt-4 mt-2 border-t border-neutral-800 dark:border-neutral-300">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>

          <button
            className="w-full py-4 bg-white dark:bg-black text-black dark:text-white border-none rounded-md text-base font-medium cursor-pointer mt-8 hover:bg-red-500 dark:hover:bg-red-600 hover:text-white transition-colors hover:scale-[1.02] transform-gpu"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
