"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, BadgeCheck, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  [
    {
      name: "Sarah Chen",
      role: "CMO",
      company: "TechFlow Solutions",
      image:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0f3907b-87b7-4671-99d8-ab70af2fa691_320w.jpg",
      quote:
        "FluxScale increased our ROAS by 340% in just 3 months. Their data‑driven approach and creative testing methodology transformed our acquisition strategy.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Growth Lead",
      company: "Velocity Commerce",
      image:
        "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg",
      quote:
        "The team reduced our CAC by 65% while scaling spend 4×. Their transparent reporting and rapid iteration cycle keeps us ahead of the competition.",
      rating: 5,
    },
    {
      name: "Jessica Park",
      role: "Founder",
      company: "Peak Performance Co",
      image:
        "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2201bb49-ba9d-4655-9360-c0350107a9fd_320w.jpg",
      quote:
        "From launch to scale in 6 weeks. FluxScale's systematic approach to creative testing and performance optimization delivered results beyond our expectations.",
      rating: 5,
    },
  ],
  [
    {
      name: "David Kim",
      role: "VP Marketing",
      company: "Nexus Digital",
      image:
        "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg",
      quote:
        "FluxScale transformed our entire funnel optimization approach. We saw 280% improvement in conversion rates within the first quarter of working together.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "CEO",
      company: "Apex Ventures",
      image:
        "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg",
      quote:
        "Working with FluxScale has been game‑changing. Their strategic approach to creative testing helped us break through our growth plateau and achieve sustainable scale.",
      rating: 5,
    },
    {
      name: "Ryan Mitchell",
      role: "Co‑Founder",
      company: "Scale Dynamics",
      image:
        "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_320w.jpg",
      quote:
        "The ROI improvements speak for themselves—450% increase in 8 weeks. FluxScale's data‑driven methodology and execution speed are unmatched in the industry.",
      rating: 5,
    },
  ],
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 5000)
    return () => clearInterval(timer)
  }, [total])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total)

  return (
    <section className="overflow-hidden px-6 py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-sky-300" />
            <span className="text-xs font-medium text-slate-200/90">Client Success</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold text-slate-100">
            What our partners say about driving growth.
          </h2>
          <p className="mt-4 text-base text-slate-300/90 leading-relaxed">
            Real results from real brands. See how we've helped companies scale their acquisition and maximize ROI.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((group, groupIndex) => (
                <div key={groupIndex} className="flex-shrink-0 w-full">
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                    {group.map((testimonial, index) => (
                      <TestimonialCard key={index} {...testimonial} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevSlide}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-slate-300 hover:text-slate-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/30"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-slate-300 hover:text-slate-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
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
  rating,
}: {
  name: string
  role: string
  company: string
  image: string
  quote: string
  rating: number
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={36}
          height={36}
          className="rounded-full ring-1 ring-white/10 object-cover"
        />
      </div>
      <div className="mt-3 flex items-center gap-1 text-slate-100">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-white" />
        ))}
      </div>
      <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed">{quote}</p>
      <div className="mt-5 pt-3 border-t border-white/10">
        <p className="text-sm font-medium text-slate-200 tracking-tight">
          {name} • {role}
        </p>
        <p className="text-xs text-slate-400 mt-1">{company}</p>
      </div>
    </div>
  )
}
