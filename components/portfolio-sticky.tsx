"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "RTA Dubai - Smart Transit System",
    description:
      "Redesigned the entire public transportation experience for Dubai's RTA, creating an intuitive mobile app that reduced user complaints by 45% and increased app adoption by 200%. The solution included real-time bus tracking, route planning, and seamless payment integration, serving over 500,000 daily commuters.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Image src="/images/rta-thumbnail.png" alt="RTA Public Transportation App" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Link
          href="/case-study/rta-public-transport"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
        >
          View Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    ),
  },
  {
    title: "Ministry of Health Digital Platform",
    description:
      "Led the UX design for a comprehensive healthcare platform serving millions of citizens. Implemented accessible design patterns that achieved WCAG 2.1 AA compliance, streamlined appointment booking reducing wait times by 60%, and created a unified design system used across 15+ government health services.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20">
        <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 text-6xl">🏥</div>
          <h3 className="text-2xl font-bold text-white">Healthcare Platform</h3>
          <p className="mt-2 text-sm text-white/80">Ministry of Health</p>
          <div className="mt-6 flex gap-4">
            <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
              <div className="text-2xl font-bold text-white">60%</div>
              <div className="text-xs text-white/70">Faster Booking</div>
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-xs text-white/70">Services</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "NOVA WATER Smart Utility Platform",
    description:
      "Designed an enterprise utility management system that transformed how water services are delivered to 2M+ customers. Created intuitive dashboards for both customers and operators, implemented predictive analytics visualization, and reduced customer service calls by 35% through self-service features and proactive notifications.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
        <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 text-6xl">💧</div>
          <h3 className="text-2xl font-bold text-white">Smart Utility Platform</h3>
          <p className="mt-2 text-sm text-white/80">NOVA WATER</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
              <div className="text-2xl font-bold text-white">2M+</div>
              <div className="text-xs text-white/70">Customers</div>
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
              <div className="text-2xl font-bold text-white">35%</div>
              <div className="text-xs text-white/70">Less Calls</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "NOVA WATER Mobile App",
    description:
      "Designed a mobile water delivery app for KSA market with hydration tracking, multi-location order management, and donation features. Created an intuitive ordering experience that increased order completion by 85% and achieved a 4.6/5 user rating. The app serves homes, restaurants, workplaces, and supports donations to mosques.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Image src="/images/nova-water-goal-screens.png" alt="NOVA WATER Mobile App" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Link
          href="/case-study/nova-water"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
        >
          View Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    ),
  },
  {
    title: "E-Commerce Fashion Platform",
    description:
      "Built a modern e-commerce experience for a luxury fashion brand, focusing on immersive product visualization and seamless checkout flow. Implemented AR try-on features, personalized recommendations, and optimized mobile experience that increased conversion rates by 85% and reduced cart abandonment by 40%.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-orange-500/20">
        <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 text-6xl">🛍️</div>
          <h3 className="text-2xl font-bold text-white">Fashion E-Commerce</h3>
          <p className="mt-2 text-sm text-white/80">Luxury Brand Platform</p>
          <div className="mt-6 flex gap-4">
            <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-xs text-white/70">Higher Conversion</div>
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur">
              <div className="text-2xl font-bold text-white">40%</div>
              <div className="text-xs text-white/70">Less Abandonment</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export function PortfolioSticky() {
  return (
    <section id="case-study" className="relative z-10 px-4 py-12 sm:px-6 lg:px-8 mt-16 sm:mt-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3 sm:gap-6 items-center">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white">Case Studies</span>
            <span className="w-px h-8 sm:h-10 bg-white/10"></span>
            <span className="text-xs sm:text-sm text-neutral-300">featured work</span>
          </div>
          <Link
            href="/case-study/rta-public-transport"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Sticky Scroll Section */}
        <div className="rounded-3xl border border-white/10 bg-zinc-950/50 backdrop-blur">
          <StickyScroll content={caseStudies} contentClassName="lg:h-[500px] lg:w-[600px]" />
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-400 mb-4">
            Interested in working together? Let's create something amazing.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
