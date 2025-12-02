"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react"
import Image from "next/image"

const allTestimonials = [
  {
    name: "Muna AlMehairibi",
    role: "Head of Planning and Design of Digital Services",
    company: "RTA",
    image: "/muna-avatar.png",
    quote:
      "Hesham, I can confidently say you are an exceptionally talented and experienced professional in the UX field. The amazing achievements within short time is well noticed within the organization. You have strong foundation in design principles and keen eye for details, I like the creativity that you add in each project which creates unique product.",
  },
  {
    name: "Rodrigo de Mingo",
    role: "Chief of Digital Experience | CX/UX/UI | AI & MaaS Innovation",
    company: "RTA",
    image: "/rodrigo-avatar.png",
    quote:
      "Hesham is a talented designer and great person to work with. He is very innovative and always looking for new solutions and fresh ideas that can advance his knowledge to exceed his client's expectations and goals. He has multiple workshops and usability sessions together, he is an enthusiastic and driven UX Designer with excellent UI skills.",
  },
  {
    name: "Ahmed Moneim",
    role: "Regional Customer Engagement Manager",
    company: "EdTech, AI & Digital Services",
    image: "/ahmed-avatar.png",
    quote:
      "Hesham is not only a creative UX engineer who understands well the user experience principles, tools, and techniques, but also a strong team player, customer-driven, and value-driven passionate. Thanks, Hesham; I'm lucky to have you on the team.",
  },
  {
    name: "Mohammad Hamdan",
    role: "Manager",
    company: "Web & Mobile Projects",
    image: "/mohammad-avatar.png",
    quote:
      "Hesham is very Really amazing Designer who Take care about his tasks and doing very well. I worked with him more than 5 years, I never reject his work at all because he is submitted it at right way, also he is very hard worker never say no for work.",
  },
  {
    name: "Amr Osama",
    role: "Digital Transformation Expert",
    company: "",
    image: "/amr-avatar.png",
    quote:
      "While we were working on website I was impressed by his professionalism and readiness to help. No matter of task complexity he jumps straight ahead into finding solution. I highly recommend hesham for UX design!",
  },
  {
    name: "Abdulfattah Omar",
    role: "IT Project Manager",
    company: "",
    image: "/abdulfattah-avatar.png",
    quote:
      "It was very pleasure to work with Mr. Hesham, extremely valuable person to have on your network. His responses are timely, value-added, and he's open to working with new people. He has a very impressive background in as a designer and profile and I recommend Mr.hesham as an expert to connect with and consider for everything appropriate.",
  },
  {
    name: "Mahmoud Eid Abdellatif",
    role: "Senior Technical Team Lead",
    company: "Digital Transformation",
    image: "/mahmoud-avatar.png",
    quote:
      "Hesham is a talented designer and great to work with. Not only he is an amazing designer, but he has ingenious web skills with an eye for detail.",
  },
  {
    name: "Mustafa Elmagar",
    role: "Product Owner",
    company: "",
    image: "/mustafa-avatar.png",
    quote:
      "I worked with Hesham in many freelancing projects. He is one of the most recommended ui developers and designers that I recommend for my clients as he always came out with a very beautiful designs that make the clients are totally satisfied. Hesham also working with agile mindset and fast learner for new technologies, we worked on long terms projects side to side and he is totally agile in executing the sprints and always giving a constructive feedback that power everything.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const totalSlides = isMobile ? allTestimonials.length : Math.ceil(allTestimonials.length / 3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalSlides])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)

  return (
    <section className="overflow-hidden px-4 sm:px-6 py-12 sm:py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-12 sm:pt-16">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-sky-300" />
            <span className="text-xs font-medium text-slate-200/90">What they Say</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-slate-100">
            Real stories from people
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {isMobile
                ? // Mobile: Individual testimonials
                  allTestimonials.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-full px-2">
                      <TestimonialCard {...testimonial} />
                    </div>
                  ))
                : // Desktop: Groups of 3
                  Array.from({ length: Math.ceil(allTestimonials.length / 3) }).map((_, groupIndex) => (
                    <div key={groupIndex} className="flex-shrink-0 w-full">
                      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                        {allTestimonials.slice(groupIndex * 3, groupIndex * 3 + 3).map((testimonial, index) => (
                          <TestimonialCard key={index} {...testimonial} />
                        ))}
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6 sm:mt-8 px-2">
            <button
              onClick={prevSlide}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-slate-300 hover:text-slate-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/30"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-slate-300 hover:text-slate-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  role,
  company,
  image,
  quote,
}: {
  name: string
  role: string
  company: string
  image: string
  quote: string
}) {
  return (
    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-white/10 bg-white/5 p-4 sm:p-5 md:p-6">
      <div className="flex items-center gap-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={36}
          height={36}
          className="rounded-full ring-1 ring-white/10 object-cover"
        />
      </div>
      <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed">{quote}</p>
      <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10">
        <p className="text-sm font-medium text-slate-200 tracking-tight">
          {name} • {role}
        </p>
        <p className="text-xs text-slate-400 mt-1">{company}</p>
      </div>
    </div>
  )
}
