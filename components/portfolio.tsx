import type React from "react"
import { Monitor, Smartphone, Palette, Play, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Portfolio() {
  return (
    <section id="case-study" className="relative z-10 px-6 py-8 lg:px-8 mt-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-zinc-950/10 backdrop-blur p-6 sm:p-8">
        {/* Header */}
        <div className="flex gap-6 items-center">
          <span className="text-4xl font-medium text-white">Case Study</span>
          <span className="w-px h-10 bg-white/10"></span>
          <span className="text-sm text-neutral-300">featured work</span>
        </div>
        <div className="h-px bg-white/10 mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start mt-6 sm:mt-8">
          {/* Left Copy */}
          <div className="flex flex-col min-h-full lg:col-span-5 justify-between">
            <div>
              <h2 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">
                Creative solutions that make impact.
              </h2>

              <div className="h-px bg-white/10 mt-6"></div>

              {/* Skills */}
              <div className="mt-6">
                <p className="text-sm font-medium text-white tracking-tight">Skills & Expertise</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { icon: "💻", label: "Frontend Development" },
                    { icon: "🎨", label: "UI/UX Design" },
                    { icon: "📸", label: "Photography" },
                    { icon: "🎯", label: "Brand Identity" },
                  ].map((skill) => (
                    <span
                      key={skill.label}
                      className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200"
                    >
                      <span>{skill.icon}</span>
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {/* Large featured project */}
              <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7050fd5-9b66-45d7-a30a-569d8f5e9017_800w.jpg"
                    alt="Creative web design project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
                      <Monitor className="h-3.5 w-3.5" />
                      Web Design
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-medium text-white tracking-tight">E-commerce Platform</h3>
                  <p className="text-sm text-neutral-400 mt-1">Modern marketplace with seamless UX</p>
                </div>
              </div>

              {/* Mobile app project */}
              <ProjectCard
                image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg"
                icon={<Smartphone className="w-3.5 h-3.5" />}
                title="Banking App"
                description="Fintech mobile solution"
              />

              {/* Brand identity */}
              <ProjectCard
                image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c987757e-3c22-4afb-8315-50113caa4754_800w.jpg"
                icon={<Palette className="w-3.5 h-3.5" />}
                title="Brand Identity"
                description="Complete visual system"
              />

              {/* Dashboard */}
              <ProjectCard
                image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg"
                icon={<Palette className="w-3.5 h-3.5" />}
                title="Dashboard Design"
                description="Analytics platform"
              />

              {/* Video project */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dcb7f82e-bf8a-4d5c-8c36-ce765f8a2932_800w.jpg"
                    alt="Video platform"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
                      <Play className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-white tracking-tight">Video Platform</h3>
                  <p className="text-xs text-neutral-400 mt-1">Streaming interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  image,
  icon,
  title,
  description,
}: {
  image: string
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
            {icon}
          </span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-white tracking-tight">{title}</h3>
        <p className="text-xs text-neutral-400 mt-1">{description}</p>
      </div>
    </div>
  )
}
