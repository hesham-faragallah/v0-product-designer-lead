"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface DesignSystemSlide {
  title: string
  content: React.ReactNode
}

export function DesignSystemSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: DesignSystemSlide[] = [
    {
      title: "Color Palette",
      content: (
        <div className="flex justify-center items-center gap-4 py-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-2xl shadow-lg" style={{ backgroundColor: "#8C6735" }}></div>
            <p className="text-sm text-neutral-400">#8C6735</p>
            <p className="text-xs text-neutral-600">Primary Brown</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-2xl shadow-lg" style={{ backgroundColor: "#A17C3E" }}></div>
            <p className="text-sm text-neutral-400">#A17C3E</p>
            <p className="text-xs text-neutral-600">Secondary Brown</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-2xl shadow-lg" style={{ backgroundColor: "#127F46" }}></div>
            <p className="text-sm text-neutral-400">#127F46</p>
            <p className="text-xs text-neutral-600">Success Green</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-2xl shadow-lg" style={{ backgroundColor: "#D02239" }}></div>
            <p className="text-sm text-neutral-400">#D02239</p>
            <p className="text-xs text-neutral-600">Error Red</p>
          </div>
        </div>
      ),
    },
    {
      title: "Typography",
      content: (
        <div className="py-8 space-y-8">
          <div className="text-center">
            <p className="text-sm text-neutral-500 mb-3">English Typeface</p>
            <p className="text-4xl font-light mb-2" style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
              Helvetica Neue
            </p>
            <p className="text-neutral-600 text-sm">Light, Regular, Medium, Bold</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-neutral-500 mb-3">Arabic Typeface</p>
            <p className="text-4xl font-medium mb-2">Droid Arabic Kufi</p>
            <p className="text-neutral-600 text-sm">Regular, Medium, Bold</p>
          </div>
        </div>
      ),
    },
    {
      title: "UI Components",
      content: (
        <div className="py-8 space-y-6">
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: "#8C6735" }}>
              Primary Button
            </button>
            <button className="px-6 py-3 rounded-lg border-2 text-white font-medium" style={{ borderColor: "#8C6735" }}>
              Secondary Button
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <div className="w-48 h-12 rounded-lg border border-white/20 flex items-center px-4 text-neutral-500">
              Input Field
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative">
      <div className="bg-neutral-900/30 border border-white/10 rounded-2xl p-8 min-h-[400px]">
        <h3 className="text-2xl font-medium mb-6 text-center">{slides[currentSlide].title}</h3>
        <div className="relative">{slides[currentSlide].content}</div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50"
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-neutral-500 mt-4">
        {currentSlide + 1} / {slides.length}
      </p>
    </div>
  )
}
