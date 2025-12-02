"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Persona {
  name: string
  age: number
  nationality: string
  workplace: string
  painPoints: string[]
}

interface PersonaSliderProps {
  personas: Persona[]
}

export function PersonaSlider({ personas }: PersonaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 2
  const maxIndex = Math.max(0, personas.length - itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6">
        {personas.slice(currentIndex, currentIndex + itemsPerView).map((persona, index) => (
          <div
            key={currentIndex + index}
            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/10"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">{persona.name}</h3>
                <div className="space-y-1 text-sm text-neutral-400">
                  <p>Age: {persona.age}</p>
                  <p>Nationality: {persona.nationality}</p>
                  <p className="text-neutral-300">Works at: {persona.workplace}</p>
                </div>
              </div>
              <div className="text-5xl">👤</div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-neutral-200">Pain Points & Concerns</h4>
              <ul className="space-y-2">
                {persona.painPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="text-red-400 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
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
          {Array.from({
            length: Math.floor(personas.length / itemsPerView) + (personas.length % itemsPerView !== 0 ? 1 : 0),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-2 h-2 rounded-full transition-all ${
                index * itemsPerView === currentIndex ? "bg-emerald-400 w-8" : "bg-neutral-600"
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
        {currentIndex + 1}-{Math.min(currentIndex + itemsPerView, personas.length)} / {personas.length}
      </div>
    </div>
  )
}
