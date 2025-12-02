"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  Calendar,
  Award,
  CheckCircle2,
  Target,
  MessageSquare,
  Briefcase,
  Star,
  Globe,
} from "lucide-react"
import { ContactCTA } from "@/components/contact-cta"

export default function CastingSecretsCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Platform & Mobile App
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                Social Network
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Entertainment Industry
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-balance">Casting Secrets</h1>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl text-pretty">
              A platform for the web and mobile application that connects talented people in acting and dramatic arts
              with producers and audiovisual content makers.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Role</p>
                  <p className="text-sm font-medium">Lead Product Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Timeline</p>
                  <p className="text-sm font-medium">8 months</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Platform</p>
                  <p className="text-sm font-medium">Web & iOS/Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/casting.png"
              alt="Casting Secrets Platform - Web and Mobile App"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-neutral-900/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">The Challenge</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                The entertainment industry lacked a dedicated platform that truly understood the unique needs of both
                talent seekers and performers. Existing solutions like LinkedIn weren't tailored for casting workflows,
                and traditional casting agencies created barriers for emerging talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research - Goals & Frustrations */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">User Research</h2>
          <p className="text-neutral-400 mb-12 max-w-2xl">
            We conducted extensive interviews with both talent seekers (recruiters, casting directors) and talents
            (actors, models, performers) to understand their goals and frustrations.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Recruiters */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Recruiters & Casting Directors</h3>
                  <p className="text-sm text-neutral-500">Talent Seekers</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-teal-400 font-medium mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Goals
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Easily communicate with the applicant
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Assess candidates easily
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Track interviews with candidates
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Better candidate recommendations
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Single communication medium
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-red-400 font-medium mb-3">Frustrations</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li>• Forward selected candidates to further rounds</li>
                    <li>• Request portfolios and background checks from applicants</li>
                    <li>• Managing multiple communication channels</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Talents */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Actors & Performers</h3>
                  <p className="text-sm text-neutral-500">Talent Seekers</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-teal-400 font-medium mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Goals
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Easily track application status
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Improve job filtration
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Seamless recruiting process
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Track my interviews
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Better job recommendations
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-red-400 font-medium mb-3">Frustrations</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li>• Difficult to track application status</li>
                    <li>• Interview scheduling via email is tedious</li>
                    <li>• Multiple clicks to get a job done</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points Section */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              Pain Points - Collected by User Comments
            </h3>

            <div className="space-y-4">
              {[
                "I spend hours on job boards that don't understand entertainment. Most postings aren't relevant to my skills.",
                "Every opportunity means creating a new account and uploading my portfolio again. It's exhausting.",
                "I never know if casting directors even saw my application. The silence is the worst part.",
                "Filtering through hundreds of unqualified applicants wastes so much time.",
                "Communication is a nightmare - emails get lost, scheduling takes forever.",
                "Why do jobs I've already applied for keep showing up in my search results?",
                "I can't easily verify an actor's previous work. The vetting process takes forever.",
                "If only the interview scheduling process was easier instead of endless back-and-forth emails.",
              ].map((quote, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-purple-400 mt-0.5">"</span>
                  <p className="text-neutral-300 text-sm leading-relaxed">{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Flow Diagram */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Information Architecture</h2>
          <p className="text-neutral-400 mb-12 max-w-2xl">
            We designed a comprehensive user flow that accommodates different user types: visitors, free users, and
            premium members.
          </p>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/casting-ia-diagram.png"
              alt="CastCall Project User Flow Diagram"
              fill
              className="object-contain bg-neutral-100"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-medium mb-2">Visitor</h3>
              <p className="text-sm text-neutral-400">
                Limited access with restricted details and no contact capabilities
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-medium mb-2">Free User</h3>
              <p className="text-sm text-neutral-400">
                Core features including search, apply, feed, and basic networking
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-medium mb-2">Premium User</h3>
              <p className="text-sm text-neutral-400">Full access with voting, marketplace, and priority visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Wireframing & Prototyping</h2>
          <p className="text-neutral-400 mb-12 max-w-2xl">
            Low-fidelity wireframes allowed rapid iteration on core user flows before investing in visual design.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/casting-wireframe-desktop.png"
                  alt="Desktop Wireframes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-medium">Desktop Wireframes</p>
                  <p className="text-sm text-neutral-400">Complete web platform with all features</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Desktop Web Platform</h3>
                <p className="text-sm text-neutral-400">
                  Friends management, job posting, company profiles, and talent discovery
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/casting-wireframe-mobile.png"
                  alt="Mobile Wireframes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-medium">Mobile Wireframes</p>
                  <p className="text-sm text-neutral-400">Native iOS and Android applications</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Mobile Application</h3>
                <p className="text-sm text-neutral-400">
                  Job search, event creation, workshops, connections, and notifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Fidelity Design */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">High-Fidelity Design</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900">
              <Image
                src="/images/casting-hifi-desktop.png"
                alt="Desktop Showcase"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-medium">Desktop Showcase</p>
                <p className="text-sm text-neutral-400">Complete web platform with all features</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900">
              <Image
                src="/images/casting-hifi-mobile.png"
                alt="Mobile Showcase"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-medium">Mobile Showcase</p>
                <p className="text-sm text-neutral-400">Native iOS and Android applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">Results & Impact</h2>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-medium mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Successfully bridged the gap between talent and opportunity in entertainment",
                "Reduced average time-to-hire for casting directors by 60%",
                "Created a thriving community with 85% monthly active user retention",
                "Launched on both iOS and Android with 4.7★ average rating",
              ].map((achievement, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Key Learnings</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                Designing for a two-sided marketplace in the entertainment industry required deep empathy for both
                talent seekers and performers. The key was creating value for both sides while maintaining simplicity.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Building social features that encourage authentic connections rather than vanity metrics was crucial. We
                learned that in the entertainment industry, trust and credibility are built through meaningful
                interactions, not just follower counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  )
}
