"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    title: "RTA Public Transportation",
    description:
      "Led the complete redesign of Dubai's public transportation system, creating an intuitive mobile-first experience that serves millions of daily commuters. Implemented a comprehensive design system that reduced development time by 40% and improved user satisfaction scores by 65%. The project included real-time tracking, multi-modal journey planning, and seamless payment integration.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="/rta-dashboard.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="RTA Public Transportation Dashboard"
        />
      </div>
    ),
  },
  {
    title: "Ministry of Health Portal",
    description:
      "Designed a comprehensive healthcare portal serving over 2 million citizens, focusing on accessibility and ease of use for all age groups. Implemented WCAG 2.1 AA compliance, reducing appointment booking time by 70% and increasing digital service adoption by 85%. The platform includes telemedicine, prescription management, and health records access.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="/modern-healthcare-digital-platform-interface.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Ministry of Health Portal"
        />
      </div>
    ),
  },
  {
    title: "NOVA WATER Utility Platform",
    description:
      "Created a modern utility management platform that transformed how customers interact with water services. Designed an intuitive dashboard for bill payments, consumption tracking, and service requests. The redesign led to a 60% reduction in call center inquiries and 45% increase in online payment adoption, serving over 500,000 households.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="/smart-utility-dashboard-with-analytics.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="NOVA WATER Utility Platform"
        />
      </div>
    ),
  },
  {
    title: "Fashion E-Commerce Platform",
    description:
      "Designed a luxury fashion e-commerce experience that combines elegant aesthetics with seamless functionality. Implemented advanced filtering, virtual try-on features, and personalized recommendations. The platform achieved a 55% increase in conversion rates and 40% improvement in average order value through strategic UX improvements and A/B testing.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="/luxury-fashion-ecommerce-interface.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Fashion E-Commerce Platform"
        />
      </div>
    ),
  },
  {
    title: "NOVA WATER Mobile App",
    description:
      "Created a mobile water delivery platform that transformed how customers in KSA order water bottles, track deliveries, and manage their daily hydration. The app serves multiple user groups including homes, restaurants, workplaces, and donation users with features like daily goal tracking, real-time delivery updates, and flexible scheduling.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="/images/nova-water-goal-screens.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="NOVA WATER Mobile App"
        />
      </div>
    ),
  },
]

export default function PortfolioParallax() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Case Studies</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Explore my featured projects showcasing user-centered design solutions that drive measurable business impact
          </p>
        </div>

        <StickyScroll content={caseStudies} contentClassName="h-96 w-[500px]" />

        <div className="mt-12 text-center">
          <Link
            href="/case-study/rta-public-transport"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            View Full Case Study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
