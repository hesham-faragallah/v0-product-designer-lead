"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const personas = [
  {
    name: "Fatima",
    title: "The Family House Manager",
    segment: "Household / Main Persona",
    age: 34,
    location: "Riyadh",
    familyStatus: "Married, 2 kids",
    overview:
      "Fatima manages her home and prefers reliable services. She values health for her family and wants a smooth way to order household essentials like water without calling or dealing with delivery delays.",
    goals: [
      "Keep consistent stock of healthy drinking water at home",
      "Place recurring orders easily",
      "Track delivery time accurately",
      "Get notifications when bottles are delivered or empty",
    ],
    frustrations: [
      "Delayed or unpredictable delivery timing",
      "No clear delivery instructions or driver updates",
      "Difficulty canceling or modifying orders",
    ],
  },
  {
    name: "Asma",
    title: "The Working Professional",
    segment: "Professional Women / Busy Lifestyle",
    age: 29,
    location: "Jeddah",
    occupation: "Project Manager",
    familyStatus: "Married",
    overview:
      "Asma is busy with work and kids. She needs services that save time, automate orders, and give her control when she needs it. She prefers a clean, quick, mobile experience.",
    goals: [
      "Maintain water supply without manually reordering",
      "Manage orders across home & office",
      "Adjust delivery times when schedule changes",
      "See driver status and estimated time of arrival",
    ],
    frustrations: [
      "No ability to change delivery slot",
      "Orders processed incorrectly",
      "Missing or late delivery updates",
    ],
  },
  {
    name: "Jamal",
    title: "The Student Gamer",
    segment: "Youth / Students",
    age: 19,
    location: "Dammam",
    status: "Student",
    overview:
      "Jamal lives with his family and relies on online services for everything. He values speed, convenience, and clarity. If something doesn't work smoothly, he switches apps fast.",
    goals: [
      "Order water quickly with minimal steps",
      "Have multiple payment methods",
      "Track orders in real-time",
      "Receive notifications when bottles arrive so he can pick them up",
    ],
    frustrations: [
      "No ability to cancel when driver is late",
      "Not knowing if an order was accepted",
      "No clear delivery ETA",
      "No support/chat to ask simple questions",
    ],
  },
  {
    name: "Saeed",
    title: "The Busy Executive",
    segment: "High-income, High-demand",
    age: 40,
    location: "Riyadh",
    occupation: "Managing Director",
    familyStatus: "Married",
    overview:
      "Saeed manages a full-time schedule and expects premium service. He orders for home and office and wants a reliable, predictable experience without having to follow up.",
    goals: [
      "Order anytime (day or night)",
      "Get priority delivery",
      "Easily reorder or set auto-renew",
      "Manage orders for multiple locations",
    ],
    frustrations: [
      "Delivery windows that don't match his schedule",
      "Drivers arriving late or not following instructions",
      "Difficulty updating quantity or delivery address",
    ],
  },
]

export default function PersonaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 2
  const totalPages = Math.ceil(personas.length / itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1))
  }

  const visiblePersonas = personas.slice(currentIndex * itemsPerView, (currentIndex + 1) * itemsPerView)

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6">
        {visiblePersonas.map((persona, index) => (
          <div
            key={persona.name}
            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-medium mb-1">
                  {persona.name} — {persona.title}
                </h3>
                <p className="text-sm text-cyan-400 mb-3">{persona.segment}</p>
                <div className="space-y-1 text-sm text-neutral-400">
                  <p>
                    Age: {persona.age} | Location: {persona.location}
                  </p>
                  {persona.occupation && <p>Occupation: {persona.occupation}</p>}
                  {persona.familyStatus && <p>Family Status: {persona.familyStatus}</p>}
                  {persona.status && <p>Status: {persona.status}</p>}
                </div>
              </div>
              <div className="text-4xl">👤</div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-cyan-400 mb-2">Overview</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{persona.overview}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-emerald-400 mb-2">Goals</h4>
                <ul className="space-y-1">
                  {persona.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} className="flex items-start gap-2 text-sm text-neutral-300">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-red-400 mb-2">Frustrations</h4>
                <ul className="space-y-1">
                  {persona.frustrations.map((frustration, frustrationIndex) => (
                    <li key={frustrationIndex} className="flex items-start gap-2 text-sm text-neutral-300">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>{frustration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors"
          aria-label="Previous personas"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-cyan-400 w-8" : "bg-neutral-600"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 transition-colors"
          aria-label="Next personas"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-neutral-500">
        {currentIndex * itemsPerView + 1}-{Math.min((currentIndex + 1) * itemsPerView, personas.length)} /{" "}
        {personas.length}
      </div>
    </div>
  )
}
