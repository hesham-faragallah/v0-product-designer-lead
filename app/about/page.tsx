"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Linkedin, Phone, ChevronRight, X, Copy, Check } from "lucide-react"
import { CertificationsCarousel } from "@/components/certifications-carousel"
import { Timeline } from "@/components/ui/timeline"
import { useState } from "react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"design" | "research" | "tools">("design")
  const [showPhonePopup, setShowPhonePopup] = useState(false)
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+9710507058346"

  const handlePhoneClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) return
    e.preventDefault()
    setShowPhonePopup(true)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(phoneNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const skillsData = {
    design: [
      "Web and Mobile Design",
      "UI / Visual Design",
      "High-Fidelity UI Creation",
      "Wireframing & Prototyping",
      "Consistency & Design Standards",
      "Accessibility in Design",
      "Service Design",
      "User Journey Mapping",
      "Interaction Design",
      "Design Sprints",
      "Manage Design Teams",
      "Digital Experience Standard (IDCX)",
      "Government Standards (eNOC, TDRA, DCX)",
      "Design Documentation",
      "Design System Governance",
      "Feature Prioritization (MVP Planning)",
    ],
    research: [
      "Data-Driven Design Decisions",
      "UX Research",
      "Usability Testing",
      "Persona Development",
      "User Journey Mapping",
      "Heuristic Evaluation (Nielsen)",
      "Collaboration-Based User Insight Generation",
      "Data-led Insight Generation",
      "Evidence-Based UX Improvements",
      "User Feedback Analysis",
      "Accessibility & Inclusive Design Validation",
    ],
    tools: {
      design: ["Figma", "Adobe Creative Suite", "Sketch"],
      collaboration: ["Notion", "Miro"],
      ai: ["AI Design Tools", "Vibe Coding Tools"],
    },
  }

  const experienceData = [
    {
      title: "May 2022 - Present",
      content: (
        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500 ring-1 ring-white/10 shrink-0">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-white">Chief UX Designer</h3>
              <p className="text-sky-400 mb-2">Roads and Transport Authority (RTA)</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Led the UX transformation of RTA's full digital ecosystem for 6M+ users. Improved task completion and
                usability across transport services. Established a citizen-centric design approach with strong UX
                research, accessibility, and testing practices. Collaborated with engineering, AI, and data teams to
                deliver evidence-based UX improvements aligned with RTA's digital-first vision.
              </p>
              <a
                href="https://rta.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300"
              >
                rta.ae <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2021 - Apr 2022",
      content: (
        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-orange-500 ring-1 ring-white/10 shrink-0">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-white">UX Designer Lead</h3>
              <p className="text-fuchsia-400 mb-2">Blackstone</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Led the full design process (research → wireframes → prototypes → high-fidelity UI). Managed cohesive
                multi-platform design and scalable design system standards. Collaborated with product & engineering to
                align goals and run usability testing. Mentored designers and improved team quality & consistency.
              </p>
              <a
                href="https://www.blackstoneelt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-fuchsia-400 hover:text-fuchsia-300"
              >
                blackstoneelt.com <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2020 - Sep 2021",
      content: (
        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-sky-500 ring-1 ring-white/10 shrink-0">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 text-white">UX Designer Lead</h3>
              <p className="text-orange-400 mb-2">Intertec Systems</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Directed end-to-end UI/UX design for web and mobile. Delivered design sprints, research, and
                high-fidelity prototypes. Built and maintained a scalable design system across teams. Improved user
                journeys, engagement, and task completion rates.
              </p>
              <a
                href="https://intertecsystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300"
              >
                intertecsystems.com <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2016 - Dec 2019",
      content: (
        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500 ring-1 ring-white/10 shrink-0">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 text-white">UX Designer</h3>
              <p className="text-sky-400 mb-2">Freelancer</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Delivered UX research, user flows, wireframes, prototypes, UI design, and consultations across various
                client projects.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2014 - Sep 2015",
      content: (
        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-orange-500 ring-1 ring-white/10 shrink-0">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 text-white">UX Designer</h3>
              <p className="text-fuchsia-400 mb-2">E-Sar</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Contributed to UX and UI design for digital platforms in the government and private sector.
              </p>
              <a
                href="http://e-saris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-fuchsia-400 hover:text-fuchsia-300"
              >
                e-saris.com <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2010 - Jan 2014",
      content: (
        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-sky-500 ring-1 ring-white/10 shrink-0">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 text-white">Draftsman</h3>
              <p className="text-orange-400 mb-2">Global Geobets</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Worked as a draftsman creating layouts, diagrams, and technical illustrations.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-black text-neutral-100 antialiased">
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
      <section className="relative px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                Hesham Faragallah
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto text-pretty leading-relaxed">
              UX UI Designer with over 11 years of experience designing and creating magical solutions that match users'
              needs with impactful results.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience Timeline</h2>
          <p className="text-neutral-400 text-center text-sm md:text-base max-w-2xl mx-auto mb-12">
            Over 11 years of designing impactful digital experiences across government, enterprise, and freelance
            projects.
          </p>
          <Timeline data={experienceData} />
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-12 ring-1 ring-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I have over 11 years of work experience designing and creating magical solutions for clients that wanted
                impactful results matching with users' needs. My journey has taken me from drafting and 3D design to
                becoming a Chief UX Designer at the Roads and Transport Authority in UAE.
              </p>
              <p>
                I use my skills in the best possible way to develop complex things into easy and creative solutions for
                end-users by embracing new technology while keeping up with finalized designed and architected
                strategies for Mobile and Website Design.
              </p>
              <p>
                Throughout my career, I've worked with government entities, municipalities, and private companies across
                UAE, Saudi Arabia, Egypt, and Oman, delivering user-centered design solutions that improve people's
                daily lives through better digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>

          <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 md:p-8 ring-1 ring-white/10">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
              <button
                onClick={() => setActiveTab("design")}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === "design"
                    ? "bg-gradient-to-r from-sky-500 to-sky-400 text-white shadow-lg shadow-sky-500/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300"
                }`}
              >
                Design Skills
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === "research"
                    ? "bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 text-white shadow-lg shadow-fuchsia-500/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300"
                }`}
              >
                Research Skills
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === "tools"
                    ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300"
                }`}
              >
                Tools
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "design" && (
                <div className="flex flex-wrap gap-2 animate-in fade-in duration-300">
                  {skillsData.design.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-white/5 text-slate-300 rounded-lg ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {activeTab === "research" && (
                <div className="flex flex-wrap gap-2 animate-in fade-in duration-300">
                  {skillsData.research.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-white/5 text-slate-300 rounded-lg ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {activeTab === "tools" && (
                <div className="flex flex-wrap gap-2 animate-in fade-in duration-300">
                  {skillsData.tools.design.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-white/5 text-slate-300 rounded-lg ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                  {skillsData.tools.collaboration.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-white/5 text-slate-300 rounded-lg ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                  {skillsData.tools.ai.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-white/5 text-slate-300 rounded-lg ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <CertificationsCarousel />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-orange-500/10 p-12 ring-1 ring-white/10 backdrop-blur-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:Hesham-farag@outlook.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/hesham-farag-b3218052/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={`tel:${phoneNumber}`}
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {showPhonePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-sm rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 ring-1 ring-white/10 shadow-2xl">
            <button
              onClick={() => setShowPhonePopup(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-slate-400 text-sm mb-6">Click the number to copy or dial directly</p>

              <div className="flex items-center justify-center gap-3 rounded-lg bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <span className="text-lg font-mono text-white">{phoneNumber}</span>
                <button
                  onClick={copyToClipboard}
                  className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>

              <a
                href={`tel:${phoneNumber}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                Dial Now
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
