"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Calendar, Award, Lock, ChevronLeft, ChevronRight, Eye, EyeOff, Mail } from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Search, Palette, TestTube, Rocket } from "lucide-react"
import { useScroll, useTransform } from "framer-motion"
import { ContactCTA } from "@/components/contact-cta"

const heroImages = [
  {
    src: "/images/1.png",
    alt: "RTA Dubai Mobile App - Multiple Screen Views",
  },
  {
    src: "/images/12.png",
    alt: "RTA Now - Public Ridership Dashboard & Analytics",
  },
  {
    src: "/images/21slide.png",
    alt: "RTA Internal App for Employees - Attendance & Services",
  },
  {
    src: "/images/22.png",
    alt: "Shared Channel - Dubai Transport Website",
  },
  {
    src: "/images/20slide.png",
    alt: "RTA NEW - E-Scooter Permit Application",
  },
]

const designProcessStages = [
  {
    number: "01",
    title: "Empathize",
    subtitle: "Analysis & Study",
    purpose: "Deeply understand users, their needs, behaviors, and pain points before any design work.",
    iconColor: "from-cyan-400 to-blue-500",
    icon: Search,
    activities: [
      "Secondary Research",
      "First-round User Research",
      "Competitor & market analysis",
      "Field observations",
    ],
    outcome: "A clear empathy-driven understanding of user problems, motivations, and contexts.",
  },
  {
    number: "02",
    title: "Define, Ideate & Design",
    subtitle: "Initial Design → Ideation → UI/DS → Prototype",
    purpose: "Transform research insights into validated design solutions.",
    iconColor: "from-orange-400 to-amber-500",
    icon: Palette,
    sections: [
      {
        name: "Define",
        items: [
          "Synthesise research",
          "Identify problems",
          "Prioritize opportunities",
          "Create user problem statements",
        ],
      },
      {
        name: "Ideate",
        items: [
          "Explore multiple possibilities",
          "Brainstorm solutions",
          "Sketch low-fidelity variations",
          "Select best direction based on user impact",
        ],
      },
      {
        name: "Initial Design",
        items: ["Convert ideas into structured flows", "Early wireframes and low-fidelity screens"],
      },
      {
        name: "Internal Review",
        items: ["Quick alignment with stakeholders", "Ensure direction fits RTA expectations"],
      },
      {
        name: "UI Design + DS",
        items: ["Apply S'hail DS components", "Tokens, spacing, color, accessibility", "High-fidelity interfaces"],
      },
      { name: "Prototype", items: ["Interactive prototype ready for user testing"] },
    ],
    outcome: "A high-fidelity prototype aligned with design system and ready for testing.",
  },
  {
    number: "03",
    title: "Test, Improve, Validate",
    subtitle: "Design Testing → Prototype Enhancement → Validation",
    purpose: "Validate designs with real users and iterate until problems are solved.",
    iconColor: "from-purple-400 to-pink-500",
    icon: TestTube,
    sections: [
      {
        name: "Design Testing",
        items: ["Moderated sessions", "Unmoderated online testing", "Capture real user friction points"],
      },
      { name: "Enhance Prototype", items: ["Improve clarity", "Fix flow issues", "Adjust interactions and feedback"] },
      { name: "Validate", items: ["Confirm iterations solved problems", "Optional second round of testing"] },
    ],
    outcome: "A fully validated prototype ready for development.",
  },
  {
    number: "04",
    title: "Implement & Launch",
    subtitle: "Deliver to Dev → Usability Testing → Go Live",
    purpose: "Ensure smooth handoff to development and successful product launch.",
    iconColor: "from-green-400 to-emerald-500",
    icon: Rocket,
    sections: [
      { name: "Deliver to Dev", items: ["Provide specs, design tokens, redlines", "Support developers during build"] },
      {
        name: "Usability Testing",
        items: [
          "Validate the built experience",
          "Ensure it matches intended design",
          "Identify issues for next sprint",
        ],
      },
      {
        name: "Go Live",
        items: ["Launch the feature", "Monitor performance", "Collect insights for future improvements"],
      },
    ],
    outcome: "Live feature with validated user experience and ongoing improvement loop.",
  },
]

export default function RTAPublicTransportCaseStudy() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentPersonaSlide, setCurrentPersonaSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [personaSlide, setPersonaSlide] = useState(0)
  const [processSlide, setProcessSlide] = useState(0)

  const processContainerRef = useRef<HTMLDivElement>(null)
  const processLineRef = useRef<HTMLDivElement>(null)
  const [processHeight, setProcessHeight] = useState(0)

  useEffect(() => {
    if (processLineRef.current) {
      const rect = processLineRef.current.getBoundingClientRect()
      setProcessHeight(rect.height)
    }
  }, [])

  const { scrollYProgress: processScrollProgress } = useScroll({
    target: processContainerRef,
    offset: ["start 10%", "end 50%"],
  })

  const processHeightTransform = useTransform(processScrollProgress, [0, 1], [0, processHeight])
  const processOpacityTransform = useTransform(processScrollProgress, [0, 0.1], [0, 1])

  const handleUnlock = () => {
    if (password === "Malek_Hesham") {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
    }
  }

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextPersonaSlide = () => {
    setCurrentPersonaSlide((prev) => (prev + 1) % Math.ceil(personas.length / 2))
  }

  const prevPersonaSlide = () => {
    setCurrentPersonaSlide((prev) => (prev - 1 + Math.ceil(personas.length / 2)) % Math.ceil(personas.length / 2))
  }

  const nextProcessSlide = () => {
    setProcessSlide((prev) => (prev + 1) % designProcessStages.length)
  }

  const prevProcessSlide = () => {
    setProcessSlide((prev) => (prev - 1 + designProcessStages.length) % designProcessStages.length)
  }

  const getTraitColor = (color: string) => {
    const colors: Record<string, string> = {
      purple: "bg-purple-500/20 text-purple-300",
      blue: "bg-blue-500/20 text-blue-300",
      emerald: "bg-emerald-500/20 text-emerald-300",
      pink: "bg-pink-500/20 text-pink-300",
      rose: "bg-rose-500/20 text-rose-300",
      teal: "bg-teal-500/20 text-teal-300",
      indigo: "bg-indigo-500/20 text-indigo-300",
      amber: "bg-amber-500/20 text-amber-300",
      orange: "bg-orange-500/20 text-orange-300",
      cyan: "bg-cyan-500/20 text-cyan-300",
      sky: "bg-sky-500/20 text-sky-300",
      violet: "bg-violet-500/20 text-violet-300",
      fuchsia: "bg-fuchsia-500/20 text-fuchsia-300",
    }
    return colors[color] || "bg-neutral-500/20 text-neutral-300"
  }

  const personas = [
    {
      name: "Ahmed",
      role: "Daily Commuter (Resident)",
      emoji: "👨‍💼",
      age: "Age 32",
      job: "IT Consultant",
      bio: "Recently moved to Dubai for work and relies on public transportation daily. Tech-savvy but still adapting to Dubai's routes, tolls, and traffic rules.",
      needs: "Efficient routes, accurate arrival times, real-time traffic updates, convenient parking",
      frustrations: "Unexpected tolls, unclear speed limits, missing navigation alerts",
      traits: [
        { label: "Curious", color: "purple" },
        { label: "Digital Native", color: "blue" },
        { label: "Achiever", color: "emerald" },
      ],
      gradient: "from-purple-500/10 to-blue-500/10",
      borderHover: "hover:border-purple-500/30",
      avatarBg: "bg-purple-500/20",
      roleColor: "text-purple-400",
    },
    {
      name: "Sara",
      role: "Student (Young User)",
      emoji: "👩‍🎓",
      age: "Age 19",
      job: "University Student",
      bio: "Budget-conscious, tech-savvy student who depends on public transport for classes and social life.",
      needs: "Easy route planning, affordable fares, predictable arrival times, simple UI",
      frustrations: "Unclear schedules, delays affecting class timing, difficulty comparing routes",
      traits: [
        { label: "Adventurous", color: "pink" },
        { label: "Budget-Conscious", color: "rose" },
      ],
      gradient: "from-pink-500/10 to-rose-500/10",
      borderHover: "hover:border-pink-500/30",
      avatarBg: "bg-pink-500/20",
      roleColor: "text-pink-400",
    },
    {
      name: "Maya",
      role: "Tourist Commuter (Female)",
      emoji: "👩‍💻",
      age: "Age 29",
      job: "Marketing Specialist",
      bio: "Travel-loving professional visiting Dubai, depends on public transportation to explore the city efficiently.",
      needs: "Reliable transit, real-time updates, easy taxi communication, save time",
      frustrations: "Missed connections, slow app info, difficulty finding stops",
      traits: [
        { label: "Explorer", color: "emerald" },
        { label: "Achiever", color: "teal" },
      ],
      gradient: "from-emerald-500/10 to-teal-500/10",
      borderHover: "hover:border-emerald-500/30",
      avatarBg: "bg-emerald-500/20",
      roleColor: "text-emerald-400",
    },
    {
      name: "Jordan",
      role: "Tourist Commuter (Male)",
      emoji: "🧳",
      age: "Age 25",
      job: "Marketing Specialist",
      bio: "Adventure seeker exploring new cultures and destinations. Relies heavily on the app for navigation.",
      needs: "Offline trip planning, easy navigation, multi-modal support",
      frustrations: "Limited night transport, inaccurate schedules, language barriers",
      traits: [
        { label: "Adventurous", color: "blue" },
        { label: "Independent", color: "indigo" },
      ],
      gradient: "from-blue-500/10 to-indigo-500/10",
      borderHover: "hover:border-blue-500/30",
      avatarBg: "bg-blue-500/20",
      roleColor: "text-blue-400",
    },
    {
      name: "Fatima",
      role: "Person of Determination",
      emoji: "♿",
      age: "UAE National",
      job: "Chief Specialist",
      bio: "Government professional who uses a wheelchair and needs reliable, accessible public transport.",
      needs: "Accessible stations, trained drivers, reliable communication",
      frustrations: "Unsafe conditions, lack of POD-trained drivers, low awareness",
      traits: [
        { label: "Assertive", color: "amber" },
        { label: "Responsible", color: "orange" },
      ],
      gradient: "from-amber-500/10 to-orange-500/10",
      borderHover: "hover:border-amber-500/30",
      avatarBg: "bg-amber-500/20",
      roleColor: "text-amber-400",
    },
    {
      name: "Hoda Mohamed",
      role: "Chronic Illness (POD)",
      emoji: "🩺",
      age: "Arab National",
      job: "Chief Specialist",
      bio: "Government employee with a chronic condition requiring flexible, non-stressful travel.",
      needs: "Flexible scheduling, non-visible disability sensitivity, discreet support",
      frustrations: "Lack of support for non-visible conditions, long wait times",
      traits: [
        { label: "Patient", color: "cyan" },
        { label: "Safety-Conscious", color: "sky" },
      ],
      gradient: "from-cyan-500/10 to-sky-500/10",
      borderHover: "hover:border-cyan-500/30",
      avatarBg: "bg-cyan-500/20",
      roleColor: "text-cyan-400",
    },
    {
      name: "Savita Bolwani",
      role: "Mother of Autistic Child",
      emoji: "👩‍👦",
      age: "Indian National",
      job: "Housewife",
      bio: "Mother managing her autistic child's needs; prioritizes calm and predictable transportation.",
      needs: "Predictable routines, trained empathetic drivers, real-time monitoring",
      frustrations: "Untrained drivers, lack of accommodation, stressful coordination",
      traits: [
        { label: "Caring", color: "violet" },
        { label: "Protective", color: "purple" },
      ],
      gradient: "from-violet-500/10 to-purple-500/10",
      borderHover: "hover:border-violet-500/30",
      avatarBg: "bg-violet-500/20",
      roleColor: "text-violet-400",
    },
    {
      name: "Emily",
      role: "Tourist Driver",
      emoji: "🚗",
      age: "Age 34",
      job: "Freelance Designer",
      bio: "International visitor who prefers renting a car but needs navigation help and traffic updates.",
      needs: "Clear road signage info, speed limit alerts, parking availability, toll integration",
      frustrations: "Confusing road layouts, unexpected fines, lack of real-time parking info",
      traits: [
        { label: "Independent", color: "rose" },
        { label: "Tech-Savvy", color: "fuchsia" },
      ],
      gradient: "from-rose-500/10 to-fuchsia-500/10",
      borderHover: "hover:border-rose-500/30",
      avatarBg: "bg-rose-500/20",
      roleColor: "text-rose-400",
    },
  ]

  const totalPersonaSlides = Math.ceil(personas.length / 2)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Mobile App
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Public Transportation
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                UAE Government
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-balance">
              RTA Dubai Transportation Mobile App & Web
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl text-pretty">
              Redesigning the public transportation experience for Dubai residents and visitors, making bus travel more
              accessible, efficient, and user-friendly.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Role</p>
                  <p className="text-sm font-medium">Chief UX/UI Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neutral-500" />
                <div>
                  <p className="text-xs text-neutral-500">Timeline</p>
                  <p className="text-sm font-medium">6 months (2022)</p>
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

      <section className="pb-20 sm:pb-28">
        <div className="relative w-full">
          {/* Slider Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                prevSlide()
                setIsAutoPlaying(false)
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => {
                nextSlide()
                setIsAutoPlaying(false)
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-4 sm:left-8 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-sm text-white">
              {currentSlide + 1} / {heroImages.length}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-gradient-to-r from-orange-500 to-amber-500"
                    : "w-2 bg-neutral-600 hover:bg-neutral-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blurred Content */}
      <div className="relative">
        <div className={`${isUnlocked ? "" : "blur-sm pointer-events-none select-none"}`}>
          {/* Problem Statement */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
            <div className="mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight">The Challenge</h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    The existing RTA Dubai app suffered from poor usability, outdated design, and limited functionality.
                    Users struggled to find bus routes, check schedules, and plan their journeys effectively.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                      <p className="text-4xl font-light text-red-400 mb-2">68%</p>
                      <p className="text-sm text-neutral-400">Users found the app confusing</p>
                    </div>
                    <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                      <p className="text-4xl font-light text-red-400 mb-2">2.1★</p>
                      <p className="text-sm text-neutral-400">Average app store rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research & Discovery */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Research & Discovery</h2>
                </div>
                <div className="lg:col-span-8 space-y-8">
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    I applied a mix of qualitative and field research methods, conducting interviews with regular
                    commuters, observing real behaviors across major bus stations, and benchmarking S'hail against top
                    mobility apps worldwide.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Key Insights</h3>
                    <div className="space-y-3">
                      {[
                        "Users need real-time bus tracking to reduce waiting anxiety",
                        "Journey planning should be simple and require minimal steps",
                        "Multilingual support is essential for diverse user base",
                        "Offline functionality needed for areas with poor connectivity",
                      ].map((insight, index) => (
                        <div key={index} className="flex gap-3 items-start">
                          <ChevronLeft className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <p className="text-neutral-300">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Personas */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">User Personas</h2>
                  <p className="text-neutral-400 max-w-2xl">
                    Research-driven personas representing the diverse user base of Dubai's public transportation system.
                  </p>
                </div>
                {/* Carousel Navigation Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-neutral-500">
                    {currentPersonaSlide + 1} / {totalPersonaSlides}
                  </span>
                  <button
                    onClick={prevPersonaSlide}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    aria-label="Previous personas"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextPersonaSlide}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    aria-label="Next personas"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Carousel Showing 2 Items */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentPersonaSlide * 100}%)` }}
                >
                  {Array.from({ length: totalPersonaSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 px-1">
                      {personas.slice(slideIndex * 2, slideIndex * 2 + 2).map((persona, idx) => (
                        <div
                          key={idx}
                          className={`flex-1 p-8 rounded-2xl bg-gradient-to-br ${persona.gradient} border border-white/10 ${persona.borderHover} transition-all min-w-0`}
                        >
                          <div className="flex items-center gap-4 mb-5">
                            <div
                              className={`w-16 h-16 rounded-full ${persona.avatarBg} flex items-center justify-center text-3xl`}
                            >
                              {persona.emoji}
                            </div>
                            <div>
                              <h3 className="text-xl font-medium">{persona.name}</h3>
                              <p className={`text-sm ${persona.roleColor}`}>{persona.role}</p>
                            </div>
                          </div>
                          <div className="space-y-4 text-sm">
                            <div className="flex flex-wrap gap-2 text-xs">
                              <span className="px-3 py-1.5 rounded-full bg-neutral-800">{persona.age}</span>
                              <span className="px-3 py-1.5 rounded-full bg-neutral-800">{persona.job}</span>
                            </div>
                            <p className="text-neutral-400 leading-relaxed text-base">{persona.bio}</p>
                            <div>
                              <p className="text-xs text-neutral-500 mb-1.5">Core Needs</p>
                              <p className="text-neutral-300">{persona.needs}</p>
                            </div>
                            <div>
                              <p className="text-xs text-neutral-500 mb-1.5">Frustrations</p>
                              <p className="text-red-400/80">{persona.frustrations}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-3">
                              {persona.traits.map((trait, traitIdx) => (
                                <span
                                  key={traitIdx}
                                  className={`px-3 py-1 text-xs rounded-full ${getTraitColor(trait.color)}`}
                                >
                                  {trait.label}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPersonaSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPersonaSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentPersonaSlide ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to persona slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section ref={processContainerRef} className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 flex items-end justify-between"
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Design Process</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl">
                    A structured approach from research to launch, ensuring every decision is validated and
                    user-centered.
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                  <span className="text-sm text-muted-foreground mr-2">
                    {processSlide + 1} / {designProcessStages.length}
                  </span>
                  <button
                    onClick={prevProcessSlide}
                    className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProcessSlide}
                    className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              <div className="relative overflow-hidden hidden lg:block">
                {/* Gradient fade on right edge */}
                <div className="absolute right-0 top-0 bottom-0 w-48 z-10 pointer-events-none bg-gradient-to-l from-background via-background/80 to-transparent" />

                {/* Carousel container */}
                <div className="overflow-hidden">
                  <motion.div
                    className="flex gap-6"
                    animate={{ x: `calc(-${processSlide * 75}% - ${processSlide * 24}px)` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {designProcessStages.map((stage, index) => {
                      const Icon = stage.icon
                      const isActive = index === processSlide
                      return (
                        <motion.div
                          key={stage.number}
                          className="relative shrink-0"
                          style={{ width: "75%" }}
                          animate={{
                            opacity: isActive ? 1 : 0.4,
                            scale: isActive ? 1 : 0.95,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <div
                            className={`rounded-2xl border ${isActive ? "border-white/15" : "border-white/5"} bg-zinc-900/80 p-8 backdrop-blur-sm transition-all duration-300`}
                          >
                            {/* Header row */}
                            <div className="flex items-center gap-4 mb-6">
                              <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.iconColor} flex items-center justify-center shrink-0`}
                              >
                                <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                              </div>
                              <div>
                                <span
                                  className={`text-xs font-medium bg-gradient-to-r ${stage.iconColor} bg-clip-text text-transparent uppercase tracking-wider`}
                                >
                                  Stage {stage.number}
                                </span>
                                <h3 className="text-xl font-semibold text-foreground">{stage.title}</h3>
                              </div>
                            </div>

                            {/* Purpose */}
                            <p className="text-muted-foreground mb-6 leading-relaxed">{stage.purpose}</p>

                            {/* Simple list of activities or sections */}
                            <div className="space-y-2 mb-6">
                              {stage.activities
                                ? stage.activities.map((activity, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.iconColor}`} />
                                      <span className="text-sm text-foreground/80">{activity}</span>
                                    </div>
                                  ))
                                : stage.sections
                                  ? stage.sections.map((section, i) => (
                                      <div key={i} className="flex items-start gap-3">
                                        <div
                                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.iconColor} mt-2 shrink-0`}
                                        />
                                        <div>
                                          <span className="text-sm font-medium text-foreground">{section.name}</span>
                                          <span className="text-sm text-muted-foreground">
                                            {" "}
                                            — {section.items.join(", ")}
                                          </span>
                                        </div>
                                      </div>
                                    ))
                                  : null}
                            </div>

                            {/* Outcome */}
                            <div className="pt-5 border-t border-white/10">
                              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Outcome
                              </span>
                              <p className="text-sm text-foreground/90 mt-1">{stage.outcome}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {designProcessStages.map((stage, index) => (
                    <button
                      key={index}
                      onClick={() => setProcessSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === processSlide
                          ? `w-8 bg-gradient-to-r ${stage.iconColor}`
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:hidden space-y-4">
                {designProcessStages.map((stage, index) => {
                  const Icon = stage.icon
                  return (
                    <motion.div
                      key={stage.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-xl border border-white/10 bg-zinc-900/80 p-5"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stage.iconColor} flex items-center justify-center`}
                        >
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span
                            className={`text-xs font-medium bg-gradient-to-r ${stage.iconColor} bg-clip-text text-transparent`}
                          >
                            Stage {stage.number}
                          </span>
                          <h3 className="text-base font-semibold text-foreground">{stage.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{stage.purpose}</p>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-xs text-foreground/80">{stage.outcome}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Artifact Gallery section with video and images */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950/50">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Artifact Gallery</h2>
              <p className="text-neutral-400 mb-12 max-w-2xl">
                Behind-the-scenes moments from user research sessions, field observations, and usability testing.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Video - Takes left half */}
                <div className="rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                  <div className="aspect-[4/3] lg:aspect-[3/4]">
                    <iframe
                      src="https://drive.google.com/file/d/1fB_nPI7SOWqpYS8lm0G1kV_-U-pg_qMV/preview"
                      className="w-full h-full min-h-[400px]"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden group border border-white/10">
                  <div className="aspect-[4/3] lg:aspect-[3/4]">
                    <Image
                      src="/images/screenshot-202025-12-01-20at-2011.png"
                      alt="Research collage showing field interviews, usability testing, and station observations"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">Results & Impact</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                  <p className="text-4xl font-light text-emerald-400 mb-2">4.6★</p>
                  <p className="text-sm text-neutral-400">App Store Rating</p>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <p className="text-4xl font-light text-blue-400 mb-2">580K</p>
                  <p className="text-sm text-neutral-400">Daily Active Users</p>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                  <p className="text-4xl font-light text-cyan-400 mb-2">6M+</p>
                  <p className="text-sm text-neutral-400">App Downloads</p>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <p className="text-4xl font-light text-purple-400 mb-2">85%</p>
                  <p className="text-sm text-neutral-400">User Satisfaction</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Credential Overlay */}
        {!isUnlocked && (
          <div className="absolute inset-0 flex items-start justify-center pt-16 bg-gradient-to-b from-black/80 via-black/60 to-black/40">
            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-md shadow-2xl max-w-md w-full mx-4">
              <div className="p-4 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                <Lock className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">Credential Required</h3>
                <p className="text-sm text-neutral-400 max-w-xs">
                  This case study content is protected. Enter your password to view the full project details.
                </p>
              </div>

              {!showPasswordInput ? (
                <button
                  onClick={() => setShowPasswordInput(true)}
                  className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-sm hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25"
                >
                  Request Access
                </button>
              ) : (
                <div className="w-full space-y-4 mt-2">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError("")
                      }}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 pr-12 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {error && <p className="text-sm text-red-400 text-center">{error}</p>}

                  <button
                    onClick={handleUnlock}
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-sm hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25"
                  >
                    Show me
                  </button>

                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-700"></div>
                    </div>
                    <span className="relative px-3 text-xs text-neutral-500 bg-neutral-900">or</span>
                  </div>

                  <Link
                    href="/#contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-300 font-medium text-sm hover:bg-neutral-700 hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Contact me
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section - Replaced by shared ContactCTA component */}
      <ContactCTA />
    </div>
  )
}
