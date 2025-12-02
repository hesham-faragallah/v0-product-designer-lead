import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import PortfolioGrid from "@/components/portfolio-grid"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 antialiased scroll-smooth">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
            radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,.16), transparent 60%),
            radial-gradient(800px 400px at 80% 10%, rgba(249,115,22,.14), transparent 60%),
            radial-gradient(1000px 600px at 50% 100%, rgba(0,0,0,.08), transparent 70%)
          `,
          }}
        />
      </div>

      {/* Gradient Blur from Top */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Link
              href="/#case-study"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of digital experiences that solve real problems and create meaningful impact across
              various industries. Each project showcases my approach to user-centered design and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <PortfolioGrid />

      <Footer />
    </main>
  )
}
