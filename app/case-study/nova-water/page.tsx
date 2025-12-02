import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Calendar, Award, CheckCircle2 } from "lucide-react"
import PersonaSlider from "./PersonaSlider" // Import the PersonaSlider component

export default function NovaWaterCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Mobile App
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                E-commerce
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Water Delivery
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-balance">
              NOVA WATER Mobile App
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl text-pretty">
              A mobile application designed to deliver clean, trusted water directly to users in KSA, replacing
              unreliable offline vendors with a seamless digital ordering experience and real-time delivery tracking.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Role</p>
                  <p className="text-sm font-medium">UX Designer Lead</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Timeline</p>
                  <p className="text-sm font-medium">2 months (2022)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Platform</p>
                  <p className="text-sm font-medium">iOS & Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 sm:pb-24 border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative aspect-[9/16] overflow-hidden border-r border-white/10">
            <Image
              src="/images/nova-water-screens-2.png"
              alt="Nova Water App - Order Management"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[9/16] overflow-hidden border-r border-white/10">
            <Image
              src="/images/nova-water-screens-1.png"
              alt="Nova Water App - Dashboard and Checkout"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[9/16] overflow-hidden">
            <Image
              src="/images/nova-water-screens-3.png"
              alt="Nova Water App - Goal Setting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-zinc-950/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">The Challenge</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                With increasing pollution and water adulteration in KSA, users are becoming more concerned about water
                quality.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                During initial research, we discovered that many people still rely on offline water vendors, facing
                issues such as:
              </p>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex gap-3 items-start">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Unreliable delivery times</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Lack of hygiene assurance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Difficulty tracking orders</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-400 mt-1">•</span>
                  <span>No ability to modify or cancel deliveries</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-400 mt-1">•</span>
                  <span>No digital history or proof of orders</span>
                </li>
              </ul>
              <p className="text-lg text-neutral-300 leading-relaxed pt-4">
                This revealed a clear gap and opportunity to shift users toward a trusted digital platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">Research & Discovery</h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl mb-12">
            Through early research, we explored how people in KSA currently order water and what challenges they face.
            We identified four main user groups with different needs and behaviors:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Home Users Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Home Users</h3>
              <p className="text-neutral-400 leading-relaxed">
                Individuals and families living in permanent or temporary homes who need a reliable and regular supply
                of drinking water.
              </p>
            </div>

            {/* Restaurants & Hotels Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Restaurants & Hotels</h3>
              <p className="text-neutral-400 leading-relaxed">
                Businesses that require frequent bulk orders and smooth delivery scheduling to support daily operations.
              </p>
            </div>

            {/* Workplaces Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/10 border border-blue-500/10 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Workplaces</h3>
              <p className="text-neutral-400 leading-relaxed">
                Offices, schools, construction sites, and other organizations that need multi-location deliveries and
                easy order management.
              </p>
            </div>

            {/* Donation Users Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/10 border border-amber-500/10 hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Donation Users</h3>
              <p className="text-neutral-400 leading-relaxed">
                People who want to donate water to mosques or charitable entities and need a simple, transparent way to
                send their contributions.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-zinc-900/50 border border-white/5">
            <p className="text-neutral-300 leading-relaxed">
              Understanding these user segments helped us shape a solution that works across household, commercial, and
              donation scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-zinc-950/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">User Personas</h2>
          <PersonaSlider />
        </div>
      </section>

      {/* Key Findings */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">Key Findings</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                number: "1",
                title: "Unreliable Delivery",
                description: "Users complained about late or missed deliveries without prior notification.",
              },
              {
                number: "2",
                title: "No Hygiene Trust",
                description: "No way to verify cleanliness or quality of water or delivery process.",
              },
              {
                number: "3",
                title: "No Order History",
                description: "No record of past orders, making it hard to track spending or reorder.",
              },
              {
                number: "4",
                title: "Cannot Modify Orders",
                description: "Once placed, orders were hard to change or cancel.",
              },
              {
                number: "5",
                title: "No Tracking",
                description: "Users didn't know when the water would arrive.",
              },
              {
                number: "6",
                title: "Lack of Reminders",
                description: "People often ran out of water before remembering to reorder.",
              },
              {
                number: "7",
                title: "Payment Issues",
                description: "Payment was mostly cash-based, with no digital receipts.",
              },
              {
                number: "8",
                title: "No Health Goals",
                description: "Users wanted a way to track daily water consumption and set goals.",
              },
            ].map((finding, index) => (
              <div
                key={index}
                className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-yellow-900 font-bold text-sm">
                    {finding.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{finding.title}</h3>
                    <p className="text-sm text-gray-700">{finding.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Artifacts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Artifacts</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-white transition-all hover:border-cyan-400 hover:shadow-lg aspect-square">
                  <Image
                    src="/images/nova-water-user-journey.png"
                    alt="Nova Water User Journey"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium text-white">User Journey</h3>
              </div>

              <div className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-neutral-100 transition-all hover:border-cyan-400 hover:shadow-lg aspect-square">
                  <Image
                    src="/images/nova-water-user-flow.png"
                    alt="Nova Water User Flow"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium text-white">User Flow</h3>
              </div>

              <div className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-white transition-all hover:border-cyan-400 hover:shadow-lg aspect-square">
                  <Image
                    src="/images/nova-water-journey-map.png"
                    alt="Nova Water User Journey Map"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium text-white">User Journey Map</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Improved delivery reliability with clear ETAs and real-time tracking.",
              "Increased user trust through transparency and hygiene-focused messaging.",
              "Higher engagement thanks to daily water goals and reminders.",
              "Faster reordering and stronger retention through recurring deliveries.",
              "Growth in donations with a simple 'Donate to Mosque' flow.",
              "Better order management for homes, restaurants, workplaces, and multi-location users.",
            ].map((impact, index) => (
              <div key={index} className="flex gap-3 items-start p-6 rounded-xl bg-zinc-900 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-300">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-zinc-950/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Key Learnings</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                Designing for essential services like water delivery in KSA required deep cultural understanding and
                empathy for diverse user groups—from families to restaurants to donation-minded individuals.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                The most impactful features weren't flashy—they were simple reliability indicators: clear ETAs,
                real-time tracking, and hygiene transparency. Users valued trust and consistency over complex features.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Balancing health-focused features (like daily water goals) with transactional needs (ordering and
                tracking) taught us that engagement comes from solving real problems first, then adding value-added
                experiences.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Working with stakeholders across different user segments—homeowners, business owners, and charitable
                organizations—highlighted the importance of flexible design systems that adapt to varied contexts while
                maintaining a unified brand experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">Ready to transform your platform?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
            <Link
              href="/case-studies"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
