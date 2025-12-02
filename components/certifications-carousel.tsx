"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Award, GraduationCap, ExternalLink } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    type: "certification",
    title: "Google Project Management – Professional Certificate",
    organization: "Google",
    date: "2021",
    description:
      "Professional certificate covering project management fundamentals, methodologies, and best practices.",
    image: "/images/google-project-management-certificate.png",
    link: "https://www.credly.com/badges/5cd5b128-14ec-4e39-a53a-121d31d2d925",
    color: "from-orange-500/10 to-orange-500/5",
    ringColor: "ring-orange-500/20",
    iconBg: "bg-orange-500/10",
    iconRing: "ring-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    type: "certification",
    title: "Google UX Design – Professional Certificate",
    organization: "Google",
    date: "2021",
    description:
      "Comprehensive UX design program covering user research, wireframing, prototyping, and usability testing.",
    image: "/images/google-20ux-20design.png",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/WACS7U9CYJCD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
    color: "from-sky-500/10 to-sky-500/5",
    ringColor: "ring-sky-500/20",
    iconBg: "bg-sky-500/10",
    iconRing: "ring-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    type: "certification",
    title: "Branding & Customer Experience",
    organization: "IE Business School",
    date: "2023",
    description: "Advanced course on building strong brands and delivering exceptional customer experiences.",
    image: "/images/branding-20and-20customer-20experience-20.png",
    link: "https://www.coursera.org/account/accomplishments/verify/5R6Y7YZ5PF56?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    color: "from-fuchsia-500/10 to-fuchsia-500/5",
    ringColor: "ring-fuchsia-500/20",
    iconBg: "bg-fuchsia-500/10",
    iconRing: "ring-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
  },
  {
    type: "certification",
    title: "UX Management: Strategy and Tactics",
    organization: "Interaction Design Foundation",
    date: "2023",
    description: "Strategic UX management course focusing on leadership, team coordination, and design operations.",
    image: "/images/ux-20managment-20startegy-20and-20tactics.png",
    link: "https://www.interaction-design.org/members/hesham-faragalla/certificate/course/e05766f2-0879-4283-89a7-d4ad30710dc0",
    color: "from-orange-500/10 to-orange-500/5",
    ringColor: "ring-orange-500/20",
    iconBg: "bg-orange-500/10",
    iconRing: "ring-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    type: "certification",
    title: "User Research – Methods and Best Practices",
    organization: "Interaction Design Foundation",
    date: "2022",
    description:
      "In-depth user research methodologies including interviews, surveys, usability testing, and data analysis.",
    image: "/images/user-20research-20methods-20and-20best-20practices.png",
    link: "https://www.interaction-design.org/members/hesham-faragalla/certificate/course/092d0295-deaf-449b-94e4-f6260dfbb370",
    color: "from-sky-500/10 to-sky-500/5",
    ringColor: "ring-sky-500/20",
    iconBg: "bg-sky-500/10",
    iconRing: "ring-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    type: "certification",
    title: "Interaction Design for Usability",
    organization: "Interaction Design Foundation",
    date: "2022",
    description:
      "Advanced interaction design principles focusing on usability, accessibility, and user-centered design. Top 10% in class.",
    image: "/images/interaction-20design-20for-20usablity.png",
    link: "https://www.interaction-design.org/members/hesham-faragalla/certificate/course/88118464-0fd8-4082-b9ec-03401765c2ea",
    color: "from-fuchsia-500/10 to-fuchsia-500/5",
    ringColor: "ring-fuchsia-500/20",
    iconBg: "bg-fuchsia-500/10",
    iconRing: "ring-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
  },
  {
    type: "certification",
    title: "Top 100 Mentor – ADPList",
    organization: "ADPList",
    date: "January - March 2025",
    description:
      "Recognized as one of the top 100 mentors in UX Design on ADPList, helping designers grow their careers.",
    image: "/images/top-20100-20adplist-20mentor.png",
    link: "https://adplist.org/community-certifications/top100fresh-mar-2025-ux-design-a80984",
    color: "from-orange-500/10 to-orange-500/5",
    ringColor: "ring-orange-500/20",
    iconBg: "bg-orange-500/10",
    iconRing: "ring-orange-500/20",
    iconColor: "text-orange-400",
  },
]

export function CertificationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1
  const totalSlides = Math.ceil(certifications.length / itemsPerView)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
  }

  const startIndex = currentIndex * itemsPerView
  const currentItems = certifications.slice(startIndex, startIndex + itemsPerView)

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6">
        {currentItems.map((cert, idx) => (
          <a
            key={startIndex + idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-2xl bg-gradient-to-br ${cert.color} p-6 ring-1 ${cert.ringColor} backdrop-blur-sm overflow-hidden hover:ring-2 transition-all cursor-pointer`}
          >
            {/* Certificate Image */}
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden ring-1 ring-white/10 mb-4">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Certificate Info */}
            <div className="space-y-3">
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${cert.iconBg} ring-1 ${cert.iconRing}`}
              >
                {cert.type === "certification" ? (
                  <Award className={`h-5 w-5 ${cert.iconColor}`} />
                ) : (
                  <GraduationCap className={`h-5 w-5 ${cert.iconColor}`} />
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1 group-hover:underline">{cert.title}</h3>
                <p className={`text-sm ${cert.iconColor} mb-1`}>{cert.organization}</p>
                <p className="text-xs text-slate-400 mb-2">{cert.date}</p>
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{cert.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
        aria-label="Previous certificates"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
        aria-label="Next certificates"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
