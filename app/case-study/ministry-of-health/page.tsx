import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Calendar, Award, CheckCircle2 } from "lucide-react"
import { PersonaSlider } from "@/components/persona-slider"

export default function MinistryOfHealthCaseStudy() {
  const personas = [
    {
      name: "Irfan Muhammed",
      age: 36,
      nationality: "Pakistan",
      workplace: "Zulekha Hospital – Sharjah",
      painPoints: [
        "Doctor is coming and waiting two months for procedure license",
        "Size of document attachments is low / PDF extension issues",
        "Cannot delete draft applications from profile",
        "Need separate accounts for different hospital branches",
        "Renewal/cancellation has no clear status indicator",
        "Dataflow upload takes multiple attempts to verify",
      ],
    },
    {
      name: "Fatama",
      age: 32,
      nationality: "Emirati",
      workplace: "Al Zahra Hospital",
      painPoints: [
        "Too many steps in registering a new license",
        "Redundant and repeated attachment requirements",
        "Cancel/refile application changes register number and is not consistent",
        "Form filling takes too much time",
        "Multiple payment steps",
        "Application rejection with no clear status updates",
      ],
    },
    {
      name: "Osama Rahman",
      age: 43,
      nationality: "India",
      workplace: "Aster Hospital and Clinic",
      painPoints: [
        "Attachment formats not standardized",
        "License recognition expiry is unclear",
        "Inspection required throughout the process, causing delays",
        "Some fields are unnecessary in new forms",
        "Payment fees are non-refundable even if officer rejects the application",
      ],
    },
    {
      name: "Mariam Al Shehhi",
      age: 29,
      nationality: "Emirati",
      workplace: "Emirates Clinic & Day Surgery Center",
      painPoints: [
        "Difficulty understanding which documents are mandatory vs optional",
        "System times out frequently while uploading documents",
        "No clear guidance on next steps after submitting an application",
        "Renewal process is not transparent — unclear where delays happen",
        "Cannot track inspection scheduling or officer assignment",
        "Payment receipts and transaction history are hard to retrieve",
        "Users feel forced to re-upload the same documents multiple times",
        "Customer support responses are inconsistent and slow",
      ],
    },
  ]

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
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Healthcare
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Web Platform
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Government
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-balance">
              Healthcare Licensing & Services Platform
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl text-pretty">
              A unified digital platform designed to streamline licensing, applications, and professional services for
              healthcare workers and medical establishments. The system simplifies complex workflows, improves
              transparency, and connects users with essential regulatory services in a clear and structured way.
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
                  <p className="text-sm font-medium">2 years (2020-2021)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Platform</p>
                  <p className="text-sm font-medium">Web & Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 sm:pb-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border-y border-white/10">
          {/* Desktop/Web Interface */}
          <div className="relative aspect-video lg:aspect-square overflow-hidden border-r border-white/10">
            <Image
              src="/images/clip-path-group.png"
              alt="Ministry of Health Web Platform Dashboard Screens"
              fill
              className="object-cover bg-neutral-100"
            />
          </div>

          {/* Mobile Interface */}
          <div className="relative aspect-video lg:aspect-square overflow-hidden">
            <Image
              src="/images/scene-2-mobile.png"
              alt="Ministry of Health Mobile App Screens"
              fill
              className="object-cover bg-neutral-100"
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
                The Ministry of Health needed a unified digital platform between service providers, and external users
                was highly fragmented, with each stakeholder relying on different systems, requirements, and
                communication channels. This created confusion for users, who often faced unclear steps, repeated
                documentation errors, and limited visibility into their application status. At the same time, MOHAP
                teams struggled with manual verification processes and the absence of a unified platform to track
                applications end-to-end, resulting in operational delays, inconsistencies, and an overall inefficient
                experience for both users and service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">Research & Discovery</h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              To deeply understand the challenges within the healthcare licensing ecosystem, I conducted multi-layered
              research across individual professionals, hospitals, clinics, and administrative teams.
            </p>
          </div>

          <div className="space-y-6 mb-16">
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-neutral-100 mb-2">
                    Licensing processes are overly complex and time-consuming
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Users struggle with repeated data entry, unclear steps, and long approval cycles. Most professionals
                    are unsure which service applies to their specific case.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-neutral-100 mb-2">
                    Document submission is a major source of frustration
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Attachment formats are inconsistent, required documents vary by role, and users often need to
                    re-upload the same files due to system limitations or verification errors.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-neutral-100 mb-2">
                    Status tracking lacks clarity and transparency
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Applicants cannot easily understand what stage they are in, what is pending, or what action is
                    required next — leading to high confusion and repeated support calls.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-neutral-100 mb-2">
                    Establishments need better control over staff applications
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Hospitals often manage multiple doctors and branches, but the system lacks clear account switching,
                    centralized dashboards, or visibility of staff progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-neutral-100 mb-2">
                    Renewal and cancellation flows are not intuitive
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Users cannot differentiate between renewal, modification, and cancellation requests. Missing
                    indicators create uncertainty and application errors.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-neutral-100 mb-2">
                    Payment steps feel scattered and unpredictable
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Fees appear at unexpected stages, and users lack a clear understanding of the full cost structure
                    before they begin an application.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-8 border border-white/10">
            <h3 className="text-xl font-light mb-6 text-neutral-200">Research Artifacts</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-emerald-400/50 transition-all cursor-pointer">
                <img
                  src="/images/affinity-mapping-sticky-notes.png"
                  alt="Affinity Mapping - Research Synthesis"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Affinity Mapping</p>
                    <p className="text-xs text-neutral-300">Research Synthesis & Categorization</p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer">
                <img
                  src="/images/user-journey-stages-map.png"
                  alt="User Journey Map"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-sm font-medium text-white mb-1">User Journey Map</p>
                    <p className="text-xs text-neutral-300">End-to-end Flow Analysis</p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all cursor-pointer">
                <img
                  src="/images/user-flow-system-architecture.png"
                  alt="User Flow"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-sm font-medium text-white mb-1">User Flow</p>
                    <p className="text-xs text-neutral-300">System Architecture & Touchpoints</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-zinc-950/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">User Personas</h2>
          <PersonaSlider personas={personas} />
        </div>
      </section>

      {/* Design System */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-left">Design System</h2>
            <button className="px-6 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium transition-colors">
              My Approach
            </button>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <img
              src="/images/design-system-style-guide.png"
              alt="Design System Style Guide showing typography, color palette, gradients, and button specifications"
              className="w-full h-auto"
            />
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 mt-8">
            <img
              src="/images/ministry-health-app-screens.png"
              alt="Ministry of Health mobile app screens showing doctor listings, profiles, appointment booking, prescriptions, and telemedicine features"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">Results & Impact</h2>

          <div className="space-y-12">
            {/* Meaningful Improvements for Users */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-neutral-200">Meaningful Improvements for Users</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                The redesigned system provided a smoother and more reliable experience for healthcare professionals and
                establishments. Users were able to complete tasks with greater confidence, encounter fewer errors, and
                progress through licensing workflows with less confusion and frustration.
              </p>
            </div>

            {/* Operational Enhancements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-neutral-200">Operational Enhancements</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Hospitals and clinics experienced clearer processes, improved visibility over staff applications, and
                fewer repeated steps. The system minimized unnecessary back-and-forth, helping reduce administrative
                pressure on both front-line staff and backend officers.
              </p>
            </div>

            {/* Experience & Satisfaction Gains */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-neutral-200">Experience & Satisfaction Gains</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                User feedback highlighted better clarity in service navigation, more transparent application statuses,
                and a more intuitive end-to-end flow. The simplified interface and improved information structure
                contributed to a more positive and trustworthy experience.
              </p>
            </div>

            {/* Ecosystem Growth */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-neutral-200">Ecosystem Growth</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Multiple healthcare organizations successfully adopted the system as part of their standard licensing
                and compliance operations. The platform became a reliable tool for institutions managing large numbers
                of healthcare professionals.
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-12 p-8 rounded-2xl bg-zinc-900 border border-white/10">
            <h3 className="text-xl font-medium mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Successfully collaborated with numerous hospitals and clinics to streamline licensing workflows",
                "Ensured stable performance with consistent system availability and smooth user access",
                "Reduced administrative load by minimizing repetitive actions and unclear processes",
                "Recognized for delivering a high-quality digital healthcare experience",
              ].map((achievement, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-300">{achievement}</p>
                </div>
              ))}
            </div>
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
                This project reinforced how essential clarity and transparency are in healthcare licensing. Users need
                straightforward steps, consistent document requirements, and clear status updates. I also learned the
                importance of designing for both individuals and large healthcare institutions, ensuring the system
                supports complex workflows without adding friction.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Working with healthcare professionals taught me the importance of balancing user experience with
                regulatory compliance and data security. The iterative testing with real patients and doctors was
                invaluable in creating a solution that truly serves its purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
            Let's create something amazing together
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
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
