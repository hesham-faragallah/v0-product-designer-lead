import { PenTool } from "lucide-react"
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
              <span className="text-xs font-medium text-slate-200/90">Open to selected opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-100 leading-[1.1] text-balance">
              Designing human-centered products
              <br className="hidden sm:block" />
              that shape the future
            </h1>

            <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-xl">
              I shape products from the ground up, bridging research, system design, and implementation. My focus is
              creating scalable, user-centered solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton href="#contact">Let's connect...</AnimatedButton>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Animated gradient glow effects - increased size for larger image */}
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-teal-500/20 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Profile photo container - increased to full scale (1:1) */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-full overflow-hidden ring-2 ring-purple-500/30 shadow-2xl shadow-purple-500/20">
              {/* Decorative rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping"
                style={{ animationDuration: "3s" }}
              ></div>
              <div className="absolute inset-3 rounded-full border border-fuchsia-500/30"></div>

              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 z-10"></div>

              {/* Profile photo */}
              <Image
                src="/images/avatar.svg"
                alt="Hesham Faragallah - Product Designer Lead"
                fill
                className="object-cover"
                priority
              />

              {/* Bottom gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10"></div>

              {/* Floating badge - increased badge size */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/80 backdrop-blur-md px-4 py-2 shadow-lg">
                  <PenTool className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium text-slate-100">Hesham Faragallah</span>
                </div>
              </div>
            </div>

            {/* Accent glow on edges */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-blue-500/0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
