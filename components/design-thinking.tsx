import { Users, Target, Sparkles, Box, FlaskConical, Send, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Empathize",
    description: "Interviews, shadowing, and data to understand real motivations and pain points.",
    icon: Users,
    gradient: "from-amber-400 to-yellow-500",
    shadowColor: "rgba(245,158,11,0.25)",
    textColor: "text-amber-300/80",
    link: "Research snapshots",
  },
  {
    number: "02",
    title: "Define",
    description: "Synthesize insights into clear problem statements and success metrics.",
    icon: Target,
    gradient: "from-fuchsia-500 to-violet-500",
    shadowColor: "rgba(168,85,247,0.25)",
    textColor: "text-fuchsia-300/80",
    link: "Problem framing",
  },
  {
    number: "03",
    title: "Ideate",
    description: "Diverge with sketches and concept sprints; converge on the strongest solution.",
    icon: Sparkles,
    gradient: "from-sky-500 to-cyan-400",
    shadowColor: "rgba(56,189,248,0.25)",
    textColor: "text-cyan-300/80",
    link: "Concept gallery",
  },
  {
    number: "04",
    title: "Prototype",
    description: "Clickable flows and micro-interactions built to learn fast and align stakeholders.",
    icon: Box,
    gradient: "from-indigo-500 to-purple-500",
    shadowColor: "rgba(99,102,241,0.25)",
    textColor: "text-indigo-300/80",
    link: "Interactive demo",
  },
  {
    number: "05",
    title: "Test",
    description: "Usability sessions and analytics to validate desirability, feasibility, and viability.",
    icon: FlaskConical,
    gradient: "from-emerald-500 to-teal-400",
    shadowColor: "rgba(16,185,129,0.25)",
    textColor: "text-emerald-300/80",
    link: "Study results",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Ship production-ready designs with documentation and developer handoff.",
    icon: Send,
    gradient: "from-indigo-500 to-purple-500",
    shadowColor: "rgba(99,102,241,0.25)",
    textColor: "text-indigo-300/80",
    link: "Final deliverables",
  },
]

export function DesignThinking() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28 md:py-32">
      <div className="mx-auto max-w-7xl relative">
        {/* Pill */}
        <div className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300/90 backdrop-blur">
          Our process
        </div>

        {/* Title */}
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl tracking-tight font-semibold text-slate-100">Design Thinking</h2>
          <p className="mt-4 text-sm md:text-base text-slate-300/90">
            A structured path from insight to impact—de-risk decisions, align teams, and ship what matters.
          </p>
        </div>

        {/* Decorative background */}
        <div className="pointer-events-none absolute left-1/2 top-[28%] -z-10 h-[800px] w-[1200px] -translate-x-1/2 rounded-[40px] bg-[radial-gradient(closest-side,rgba(168,85,247,0.18),transparent)] blur-2xl"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-14 gap-6">
          {steps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessCard({
  number,
  title,
  description,
  icon: Icon,
  gradient,
  shadowColor,
  textColor,
  link,
}: {
  number: string
  title: string
  description: string
  icon: any
  gradient: string
  shadowColor: string
  textColor: string
  link: string
}) {
  return (
    <article className="group relative w-full">
      <div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${gradient.replace("from-", "from-").replace("to-", "to-")}/30 opacity-75 blur transition duration-500 group-hover:opacity-100`}
      ></div>
      <div className="relative h-full rounded-2xl bg-[#0a0f16]/80 ring-1 ring-white/10 p-6 backdrop-blur">
        <div className="absolute inset-0 rounded-2xl [background:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>

        <div className="flex items-start justify-between">
          <div className="relative">
            <div
              className={`size-12 rounded-xl bg-gradient-to-br ${gradient} ring-1 ring-white/20 grid place-items-center`}
              style={{ boxShadow: `0 0 30px 6px ${shadowColor}` }}
            >
              <Icon className="size-6 text-[#0b0b0b]" />
            </div>
          </div>
          <span className={`text-xs ${textColor}`}>{number}</span>
        </div>

        <h3 className="mt-5 text-lg font-medium tracking-tight text-slate-100">{title}</h3>
        <p className="mt-2 text-sm text-slate-300/90">{description}</p>

        <div className={`mt-6 flex items-center gap-2 text-xs ${textColor}`}>
          <ArrowRight className="size-4" />
          <span>{link}</span>
        </div>
      </div>
    </article>
  )
}
