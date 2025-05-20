import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Philosophy from "@/components/philosophy"
import ProductGrid from "@/components/product-grid"
import ProductDetails from "@/components/product-details"
import ProductAccordion from "@/components/product-accordion"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="bg-black text-white min-h-screen">
        <Navbar />
        <Hero />
        <Philosophy />
        <ProductGrid />
        <Philosophy title="Silhouette No. 1 - Vermilion" showLearnMore={false} id="silhouette-vermilion-intro" />
        <ProductDetails />
        <ProductAccordion />
        <Testimonials />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
