import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  Calendar,
  Award,
  CheckCircle2,
  Target,
  Code2,
  Palette,
  Layout,
  Zap,
  Globe,
  BookOpen,
  Layers,
  Search,
  Code,
} from "lucide-react"
import ContactCTA from "@/components/contact-cta"

export default function DesignSystemDocumentationCaseStudy() {
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
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Design System
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Documentation
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Component Library
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-balance">
              Enterprise Design System Documentation
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl text-pretty">
              Building a comprehensive design system and documentation platform that scales across multiple products,
              teams, and platforms while maintaining consistency and accessibility standards.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Role</p>
                  <p className="text-sm font-medium">Lead Design System Architect</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Timeline</p>
                  <p className="text-sm font-medium">12 months</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Platform</p>
                  <p className="text-sm font-medium">Web, iOS, Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-950 via-indigo-950 to-violet-950">
            <Image
              src="/shail-design-system-hero.png"
              alt="S'hail Design System Documentation - Foundation Elements interface showing Typography, Colors, Sizing, Layout, Iconography, and Effects"
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
                As the company scaled from 3 to 15+ product teams, design inconsistencies multiplied exponentially.
                Designers were recreating components from scratch, developers were implementing different solutions for
                identical patterns, and accessibility standards varied wildly across products.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                We needed a centralized design system that could serve as the single source of truth while remaining
                flexible enough to accommodate diverse product needs without becoming a bottleneck to innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Research */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Stakeholder Research</h2>
          <p className="text-neutral-400 mb-12 max-w-2xl">
            We conducted extensive interviews with designers, engineers, product managers, and accessibility specialists
            to understand their needs and pain points.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Designers */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Designers</h3>
                  <p className="text-sm text-neutral-500">Product & UX Teams</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-teal-400 font-medium mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Needs
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Reusable components with clear usage guidelines
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Visual examples and interactive demos
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Figma library sync with production code
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Engineers */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Engineers</h3>
                  <p className="text-sm text-neutral-500">Frontend & Mobile</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-teal-400 font-medium mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Needs
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Well-documented APIs and props
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Code examples with TypeScript
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Easy integration and versioning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Product Managers */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Product Managers</h3>
                  <p className="text-sm text-neutral-500">Product Strategy</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-teal-400 font-medium mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Needs
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Faster time-to-market with consistency
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Cross-platform feature parity
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      Brand consistency across products
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 mt-8">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              Common Pain Points
            </h3>

            <div className="space-y-4">
              {[
                "I waste hours searching for the right component. Half the time I just rebuild it from scratch.",
                "Design specs don't match what's in production. I never know which version is correct.",
                "Every team has their own button component. We have 8 different implementations!",
                "Accessibility is an afterthought. We fail audits because there's no consistent standard.",
                "Documentation is either missing or outdated. I learn by reading the source code.",
                "Design handoff is painful. Engineers ask the same questions repeatedly.",
              ].map((quote, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-indigo-400 mt-0.5">"</span>
                  <p className="text-neutral-300 text-sm leading-relaxed">{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">System Architecture</h2>
          <p className="text-neutral-400 mb-12 max-w-2xl">
            We structured the design system into four foundational layers, each building upon the previous to create a
            scalable and maintainable system.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-medium mb-2">Design Tokens</h3>
              <p className="text-sm text-neutral-400">
                Colors, typography, spacing, and primitives that form the foundation
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <Layout className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-medium mb-2">Core Components</h3>
              <p className="text-sm text-neutral-400">Buttons, inputs, cards, and atomic building blocks</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-medium mb-2">Patterns</h3>
              <p className="text-sm text-neutral-400">Common compositions like forms, modals, and navigation</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-medium mb-2">Guidelines</h3>
              <p className="text-sm text-neutral-400">Accessibility, content, and best practice documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Library */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Component Library</h2>
          <p className="text-neutral-400 mb-12 max-w-2xl">
            A comprehensive library of 60+ accessible components with live examples, API documentation, and usage
            guidelines.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <h4 className="font-medium mb-2 text-blue-400">Interactive Examples</h4>
              <p className="text-sm text-neutral-400">Live component playground with real-time prop editing</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <h4 className="font-medium mb-2 text-indigo-400">Code Snippets</h4>
              <p className="text-sm text-neutral-400">Copy-paste ready examples in React, Vue, and native mobile</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10">
              <h4 className="font-medium mb-2 text-violet-400">Accessibility First</h4>
              <p className="text-sm text-neutral-400">WCAG 2.1 AA compliant with keyboard navigation support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Platform */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">Documentation Platform</h2>

          <div className="mb-12 rounded-2xl border border-white/10 overflow-hidden">
            <Image
              src="/shail-button-documentation.png"
              alt="S'hail Design System Button Documentation"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                  <Search className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Search</h3>
                  <p className="text-neutral-400">
                    Instant component discovery with fuzzy search, filters, and AI-powered suggestions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                  <Code className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Live Code Playground</h3>
                  <p className="text-neutral-400">
                    Interactive code editor with real-time preview and automatic prop controls
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20">
                  <Palette className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Theme Switcher</h3>
                  <p className="text-neutral-400">
                    Preview components in light, dark, and custom themes with one click
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Version History</h3>
                  <p className="text-neutral-400">
                    Track component changes, view changelog, and compare versions side-by-side
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Key Learnings</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                Building a design system is as much about organizational change as it is about technical implementation.
                Success requires continuous advocacy, education, and demonstrating clear value to stakeholders.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Documentation quality directly correlates with adoption rate. Teams won't use components they don't
                understand, no matter how well-designed. Investing heavily in clear examples, migration guides, and
                interactive demos was crucial to our success.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Starting with design tokens rather than components allowed us to maintain flexibility while ensuring
                consistency. Teams could extend the system for unique needs without breaking the foundational design
                language.
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
