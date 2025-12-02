"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

const caseStudies = [
  {
    id: "rta-transport",
    title: "RTA Dubai - Smart Transit System",
    category: "Mobile App Design",
    description:
      "Redesigned the entire public transportation experience for Dubai's RTA, creating an intuitive mobile app that serves over 500,000 daily commuters.",
    image: "/images/rta-thumbnail.png",
    bgImage: "/images/1.png",
    metrics: [
      { icon: TrendingUp, label: "User Complaints", value: "45% Reduction" },
      { icon: Users, label: "App Adoption", value: "200% Increase" },
      { icon: Zap, label: "Daily Users", value: "500K+" },
    ],
    link: "/case-study/rta-public-transport",
    gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
  },
  {
    id: "health-platform",
    title: "Ministry of Health Digital Platform",
    category: "Healthcare Platform",
    description:
      "Led the UX design for a comprehensive healthcare platform serving millions of citizens with WCAG 2.1 AA compliance.",
    image: "/modern-healthcare-digital-platform-interface.jpg",
    metrics: [
      { icon: TrendingUp, label: "Wait Times", value: "60% Faster" },
      { icon: Users, label: "Services", value: "15+ Unified" },
      { icon: Zap, label: "Compliance", value: "WCAG AA" },
    ],
    link: "#",
    gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
  },
  {
    id: "nova-water",
    title: "NOVA WATER Mobile App",
    category: "Mobile App",
    description:
      "Designed a mobile water delivery app for NOVA WATER serving customers across homes, restaurants, workplaces, and donation users with daily hydration tracking and seamless ordering.",
    image: "/images/nova-water-goal-screens.png",
    metrics: [
      { icon: Users, label: "Active Users", value: "200K+" },
      { icon: TrendingUp, label: "Order Completion", value: "85%" },
      { icon: Zap, label: "User Rating", value: "4.6/5" },
    ],
    link: "/case-study/nova-water",
    gradient: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
  },
  {
    id: "fashion-ecommerce",
    title: "E-Commerce Fashion Platform",
    category: "E-Commerce",
    description:
      "Built a modern e-commerce experience for a luxury fashion brand with AR try-on features and personalized recommendations.",
    image: "/luxury-fashion-ecommerce-interface.jpg",
    metrics: [
      { icon: TrendingUp, label: "Conversion", value: "85% Higher" },
      { icon: Zap, label: "Cart Abandonment", value: "40% Less" },
      { icon: Users, label: "AR Try-On", value: "Enabled" },
    ],
    link: "#",
    gradient: "from-pink-500/10 via-rose-500/10 to-orange-500/10",
  },
]

export function PortfolioClean() {
  return (
    <section id="case-study" className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Case Studies</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Transforming complex challenges into elegant solutions that drive measurable impact
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur transition-all hover:border-white/20"
            >
              {study.bgImage && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={study.bgImage || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/80" />
                </div>
              )}
              <div className="relative z-10 grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div
                  className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-gradient-to-br ${study.gradient} ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-white border border-white/20">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed mb-8">{study.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="rounded-lg bg-white/5 border border-white/10 p-4 backdrop-blur">
                          <metric.icon className="h-5 w-5 text-blue-400 mb-2" />
                          <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                          <div className="text-xs text-neutral-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={study.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to create something amazing?</h3>
            <p className="text-neutral-400 max-w-md">
              Let's discuss how I can help transform your product vision into reality
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
