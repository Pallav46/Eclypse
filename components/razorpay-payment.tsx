"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface RazorpayPaymentProps {
  amount: number
  currency?: string
  orderId?: string
  onSuccess?: (paymentId: string) => void
  onError?: (error: any) => void
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function RazorpayPayment({
  amount,
  currency = "INR",
  orderId,
  onSuccess,
  onError,
  disabled = false,
  className = "",
  children
}: RazorpayPaymentProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript()
      
      if (!scriptLoaded) {
        throw new Error("Failed to load Razorpay SDK")
      }

      // Create order (in a real app, this would be an API call to your backend)
      const order = {
        id: orderId || `order_${Date.now()}`,
        amount: amount * 100, // Razorpay expects amount in paise
        currency: currency
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_1234567890", // Replace with your Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: "Eclypse",
        description: "Silhouette No. 1 – Vermilion",
        order_id: order.id,
        image: "/logo/logo.png",
        handler: function (response: any) {
          // Payment successful
          toast({
            title: "Payment Successful!",
            description: `Payment ID: ${response.razorpay_payment_id}`,
          })
          
          if (onSuccess) {
            onSuccess(response.razorpay_payment_id)
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        notes: {
          address: "Eclypse Corporate Office"
        },
        theme: {
          color: "#000000"
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false)
          }
        }
      }

      const paymentObject = new window.Razorpay(options)
      
      paymentObject.on('payment.failed', function (response: any) {
        toast({
          title: "Payment Failed",
          description: response.error.description,
          variant: "destructive"
        })
        
        if (onError) {
          onError(response.error)
        }
      })

      paymentObject.open()
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Payment Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      })
      
      if (onError) {
        onError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={disabled || isLoading}
      className={`${className} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {isLoading ? "Processing..." : children || "Pay Now"}
    </button>
  )
}