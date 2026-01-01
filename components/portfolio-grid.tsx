"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 py-20 px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large card - spans 2 columns on desktop - ROW 1 */}
        <Link
          href="/case-study/rta-public-transport"
          className="group relative lg:col-span-2 rounded-[24px] border border-[#474747] overflow-hidden isolate min-h-[400px]"
        >
          <Image
            src="/images/rta-smart-transit.png"
            alt="RTA Dubai - Smart Transit System"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="inline-block px-4 py-2 text-sm font-medium text-blue-400 bg-blue-400/20 backdrop-blur-sm rounded-full mb-4">
              Public Transportation
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-2">
              RTA Dubai - Smart Transit System
            </h3>
            <p className="text-neutral-300 text-sm mb-4 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Revolutionizing public transportation with an integrated digital platform serving millions of daily users.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Case Study <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Medium card - Ministry of Health - ROW 1 */}
        <Link
          href="/case-study/ministry-of-health"
          className="group relative rounded-[24px] border border-[#474747] overflow-hidden isolate min-h-[400px]"
        >
          <Image
            src="/images/scene-2.png"
            alt="Ministry of Health Digital Platform"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="inline-block px-4 py-2 text-sm font-medium text-emerald-400 bg-emerald-400/20 backdrop-blur-sm rounded-full mb-4">
              Healthcare
            </span>
            <h3 className="text-2xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-2">
              Ministry of Health Digital Platform
            </h3>
            <div className="inline-flex items-center gap-2 text-sm text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Case Study <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Medium card - Design System Documentation - ROW 2 */}
        <Link
          href="/case-study/design-system-documentation"
          className="group relative rounded-[24px] border border-[#474747] overflow-hidden isolate min-h-[400px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-violet-950" />
          <Image
            src="/design-system-documentation-interface-components-t.jpg"
            alt="Design System Documentation"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-400 bg-indigo-400/20 backdrop-blur-sm rounded-full mb-4">
              Design System
            </span>
            <h3 className="text-2xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-2">
              Enterprise Design System
            </h3>
            <div className="inline-flex items-center gap-2 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Case Study <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Large card - NOVA WATER - spans 2 columns - ROW 2 */}
        <Link
          href="/case-study/nova-water"
          className="group relative lg:col-span-2 rounded-[24px] border border-[#474747] overflow-hidden isolate min-h-[400px]"
        >
          <Image
            src="/images/nova-water-goal-screens.png"
            alt="NOVA WATER Mobile App"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="inline-block px-4 py-2 text-sm font-medium text-cyan-400 bg-cyan-400/20 backdrop-blur-sm rounded-full mb-4">
              Mobile App
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-2">
              NOVA WATER Mobile App
            </h3>
            <p className="text-neutral-300 text-sm mb-4 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Smart hydration tracking app helping users build healthy water intake habits with personalized goals.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Case Study <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Large card - Casting Secrets - spans 3 columns - ROW 3 */}
        <Link
          href="/case-study/casting-secrets"
          className="group relative lg:col-span-3 rounded-[24px] border border-[#474747] overflow-hidden isolate min-h-[400px]"
        >
          <Image
            src="/images/casting-app.png"
            alt="Social Media for Talent - Social Network for Artists"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="inline-block px-4 py-2 text-sm font-medium text-purple-400 bg-purple-400/20 backdrop-blur-sm rounded-full mb-4">
              Platform & Mobile App
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-2">
              Social Media for Talent
            </h3>
            <p className="text-neutral-300 text-sm mb-4 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              A social network connecting talented artists with producers and audiovisual content makers.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Case Study <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
