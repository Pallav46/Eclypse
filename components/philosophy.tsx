import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface PhilosophyProps {
  title?: string
  showLearnMore?: boolean
  id?: string
}

export default function Philosophy({
  title = "Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.",
  showLearnMore = true,
  id,
}: PhilosophyProps) {
  return (
    <section className="bg-black py-20 md:py-24 px-6 md:px-10" id={id}>
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-white mb-12">{title}</h2>

        {showLearnMore && (
          <Link
            href="#"
            className="text-white text-base md:text-lg inline-block pb-2 border-b border-white transition-all hover:bg-white hover:text-black hover:pl-2.5 group"
          >
            Learn more about Eclypse
            <span className="ml-2.5 inline-block transition-all group-hover:opacity-0 group-hover:translate-x-2.5">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}
