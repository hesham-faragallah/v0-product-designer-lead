import { PenTool, Timer } from "lucide-react"
import Image from "next/image"
import { AnimatedButton } from "./animated-button"
import { UnicornBackground } from "./unicorn-background"

export function Hero() {
  return (
    <section id="hero" className="relative z-10 overflow-hidden px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
      <UnicornBackground />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-200/90">Available for select projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-100 leading-[1.1]">
              Designing human-centered products that ship
            </h1>

            <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-xl">
              I lead end-to-end product design—from discovery to systems and production-ready prototypes. I partner
              closely with engineering to deliver measurable outcomes for public mobility and payments at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="#contact">Schedule call</AnimatedButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-sky-500/10 blur-3xl"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-tr from-slate-900 to-slate-900/60">
              <Image
                src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop"
                alt="Futuristic 3D render of a designer wearing a headset"
                fill
                className="object-cover opacity-90 mix-blend-screen"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                    <PenTool className="h-4 w-4 text-sky-300" />
                  </span>
                  <p className="text-sm text-slate-200/90">From vision to validated MVP</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                  <Timer className="h-4 w-4" />
                  <span>2–6 week sprints</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
