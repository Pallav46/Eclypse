"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

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
    <div className="max-w-7xl mx-auto px-5 bg-white text-black min-h-screen">
      <header className="flex justify-between items-center py-4">
        <div className="w-[42px] h-[42px] bg-black rounded-lg flex items-center justify-center">
          <Image src="/logo.png" alt="Eclypse Logo" width={24} height={24} />
        </div>

        <div className="flex gap-6">
          <Link
            href="#"
            className="text-gray-500 hover:text-red-600 hover:border-b-2 hover:border-red-600 pb-0.5 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-red-600 hover:border-b-2 hover:border-red-600 pb-0.5 transition-colors"
          >
            Waitlist
          </Link>
          <Link
            href="#"
            className="text-black border-b-2 border-black pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors"
          >
            Cart
          </Link>
        </div>
      </header>

      <div className="flex items-center gap-3 my-6 text-xl font-medium cursor-pointer" onClick={handleBackClick}>
        <ChevronLeft size={24} />
        <span>Shipping Address</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Address Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
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
                  className="w-full p-3 border border-gray-200 rounded-md text-base text-black bg-white"
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
                  className="w-full p-3 border border-gray-200 rounded-md text-base text-black bg-white"
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
                className="w-full p-3 border border-gray-200 rounded-md text-base text-black bg-white"
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
                  className="w-full p-3 border border-gray-200 rounded-md text-base text-black bg-white"
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
                  className="w-full p-3 border border-gray-200 rounded-md text-base text-black bg-white"
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
                  className="w-full p-3 border border-gray-200 rounded-md text-base text-black bg-white"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                className="flex-1 py-3 px-6 bg-white text-black border border-gray-200 rounded-md text-base font-medium cursor-pointer"
                onClick={handleCancel}
              >
                cancel
              </button>
              <button
                type="submit"
                className="flex-2 py-3 px-6 bg-black text-white rounded-md text-base font-medium cursor-pointer hover:bg-red-600 transition-colors"
              >
                Save This Address
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="text-gray-600 mb-6 pb-6 border-b border-gray-200">
            By placing your order, you agree to our company{" "}
            <a href="#" className="text-black font-medium no-underline">
              Privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-black font-medium no-underline">
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

          <div className="flex justify-between text-lg font-medium pt-4 mt-2 border-t border-gray-200">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>

          <button
            className="w-full py-4 bg-black text-white border-none rounded-md text-base font-medium cursor-pointer mt-8 hover:bg-red-600 transition-colors"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
