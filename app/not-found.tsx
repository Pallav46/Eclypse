import Link from "next/link"
import GrainTexture from "@/components/grain-texture"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black dark:bg-white text-white dark:text-black px-6 text-center">
      <GrainTexture />
      <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair">404</h1>
      <h2 className="text-2xl md:text-3xl mb-8">Page Not Found</h2>
      <p className="text-gray-400 dark:text-gray-600 max-w-md mb-10">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-red-500 dark:hover:bg-red-600 hover:text-white transition-all hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  )
}
