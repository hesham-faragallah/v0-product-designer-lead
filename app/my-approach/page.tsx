"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useScroll, useTransform, motion } from "framer-motion"
import {
  Search,
  Heart,
  Target,
  Lightbulb,
  Layout,
  CheckCircle,
  Users,
  BarChart3,
  RefreshCw,
  ArrowRight,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function MyApproachPage() {
  const designThinkingSteps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      subtitle: "Understand the problem & context",
      description:
        "I start by aligning with stakeholders, exploring the business context, and mapping constraints and opportunities. This phase sets the foundation for everything that follows.",
      whatIDo: [
        "Stakeholder interviews & alignment",
        "Business context analysis",
        "Competitive landscape review",
        "Constraint mapping",
      ],
      whatYouGet: [
        "Problem framing document",
        "Opportunity areas identified",
        "Research plan & timeline",
        "Key success metrics",
      ],
      iconColor: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: Heart,
      title: "Empathy",
      subtitle: "Connect with real user needs",
      description:
        "Through direct observation and conversation, I uncover the underlying motivations, pain points, and behaviors that shape user experience. This isn't about what people say—it's about what they do.",
      whatIDo: [
        "User interviews & contextual inquiry",
        "Journey mapping workshops",
        "Behavioral observation",
        "Pain point documentation",
      ],
      whatYouGet: [
        "User personas with real quotes",
        "Empathy maps & journey maps",
        "Pain point inventory",
        "Opportunity insights",
      ],
      iconColor: "from-purple-500 to-fuchsia-500",
    },
    {
      number: "03",
      icon: Target,
      title: "Define",
      subtitle: "Frame the right problem",
      description:
        "I synthesize research insights into clear problem statements and design principles. This creates alignment across teams and ensures we're solving the right problem before jumping to solutions.",
      whatIDo: [
        "Insight synthesis workshops",
        "Problem statement crafting",
        "Design principle definition",
        "Success criteria mapping",
      ],
      whatYouGet: [
        "POV statements & HMW questions",
        "Design principles doc",
        "Success metrics framework",
        "Aligned team understanding",
      ],
      iconColor: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "Ideation",
      subtitle: "Explore possibilities without limits",
      description:
        "Through structured brainstorming and rapid sketching, I generate a wide range of solutions. The goal is quantity over quality at this stage—diverge before we converge on the best ideas.",
      whatIDo: [
        "Crazy 8s & rapid sketching",
        "Brainstorming workshops",
        "Concept mapping sessions",
        "Solution prioritization",
      ],
      whatYouGet: [
        "Concept sketches (20-30 ideas)",
        "Solution options matrix",
        "Feature prioritization",
        "Top 3 concepts to prototype",
      ],
      iconColor: "from-amber-500 to-orange-500",
    },
    {
      number: "05",
      icon: Layout,
      title: "Design & Prototype",
      subtitle: "Build to learn, not to finish",
      description:
        "I create prototypes at the right fidelity for the question at hand. From paper sketches to interactive prototypes, each iteration brings us closer to a solution worth building.",
      whatIDo: [
        "Wireframing & user flows",
        "Interactive prototypes",
        "Design system integration",
        "Iterative refinement",
      ],
      whatYouGet: ["High-fidelity mockups", "Clickable prototypes", "Design specifications", "Component library"],
      iconColor: "from-pink-500 to-rose-500",
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "Usability Testing",
      subtitle: "Validate with real feedback",
      description:
        "I put designs in front of real users early and often. Testing reveals what works, what doesn't, and what we missed. Every test is a chance to learn and improve before launch.",
      whatIDo: ["Moderated usability tests", "A/B testing setup", "Analytics review", "Iteration recommendations"],
      whatYouGet: ["Test reports with findings", "Iteration roadmap", "Launch-ready designs", "Success benchmarks"],
      iconColor: "from-cyan-500 to-sky-500",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (lineRef.current) {
      const rect = lineRef.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
            radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,.16), transparent 60%),
            radial-gradient(800px 400px at 80% 10%, rgba(249,115,22,.14), transparent 60%),
            radial-gradient(1000px 600px at 50% 100%, rgba(0,0,0,.08), transparent 70%)
          `,
          }}
        />
      </div>

      <Navbar />

      <section className="relative px-6 pt-32 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 text-sky-400 text-sm font-medium tracking-wider rounded-full ring-1 ring-sky-500/20">
              DESIGN THINKING
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
              My Design{" "}
              <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                Approach
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              A structured path from insight to impact—de-risk decisions, align teams, and ship what matters.
            </p>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="w-full bg-transparent font-sans px-6 md:px-10 lg:px-12 py-24">
        <div ref={lineRef} className="relative max-w-7xl mx-auto pb-20">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-border/30" />

            {/* Animated fill line */}
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-cyan-400 to-blue-500 rounded-full"
            />
          </div>

          {designThinkingSteps.map((step, index) => {
            const Icon = step.icon
            const isLeft = index % 2 === 0

            return (
              <div key={step.number} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-16 lg:gap-20 items-center pb-28 md:pb-36 last:pb-0">
                  {/* Left Column - Content for even index, Icon for odd index */}
                  <div className={`${isLeft ? "md:col-start-1" : "md:col-start-1"}`}>
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4 text-left">
                          <div className="text-xs font-mono text-primary tracking-widest uppercase">
                            STEP {step.number}
                          </div>
                          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground tracking-tight text-balance">
                            {step.title}
                          </h3>
                          <p className="text-lg text-muted-foreground/80 italic font-light">{step.subtitle}</p>
                        </div>

                        <p className="text-base lg:text-lg text-foreground/90 leading-relaxed text-pretty max-w-xl text-left">
                          {step.description}
                        </p>

                        <div className="space-y-6 pt-4">
                          <div className="space-y-3 text-left">
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70">
                              What I Do
                            </h4>
                            <ul className="space-y-2.5">
                              {step.whatIDo.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm lg:text-base text-muted-foreground flex items-start gap-3 text-pretty"
                                >
                                  <span className="text-primary/60 mt-1.5 font-bold">•</span>
                                  <span className="flex-1 text-left">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3 text-left">
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70">
                              What You Get
                            </h4>
                            <ul className="space-y-2.5">
                              {step.whatYouGet.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm lg:text-base text-muted-foreground flex items-start gap-3 text-pretty"
                                >
                                  <ArrowRight className="w-4 h-4 text-primary/70 mt-1 shrink-0" />
                                  <span className="flex-1 text-left">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="hidden md:flex items-center justify-end h-full"
                      >
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-background border border-border/40 shadow-sm flex items-center justify-center">
                          <Icon
                            className="w-10 h-10 lg:w-12 lg:h-12 text-muted-foreground/40 stroke-[1.5]"
                            strokeWidth={1.5}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Column - Timeline */}
                  <div className="hidden md:flex flex-col items-center relative md:col-start-2">
                    {/* Horizontal connector line */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "left-full" : "right-full"} w-16 h-[2px] bg-gradient-to-${isLeft ? "r" : "l"} from-primary/40 via-primary/20 to-transparent`}
                    />

                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="relative z-10"
                    >
                      <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center ring-4 ring-background shadow-lg">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                          viewport={{ once: true, amount: 0.8 }}
                          className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.iconColor} shadow-md`}
                          animate={{
                            boxShadow: [
                              `0 0 0 0 rgba(6, 182, 212, 0)`,
                              `0 0 0 12px rgba(6, 182, 212, 0.15)`,
                              `0 0 0 0 rgba(6, 182, 212, 0)`,
                            ],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1.5,
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - Icon for even index, Content for odd index */}
                  <div className={`${isLeft ? "md:col-start-3" : "md:col-start-3"}`}>
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4 text-left">
                          <div className="text-xs font-mono text-primary tracking-widest uppercase">
                            STEP {step.number}
                          </div>
                          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground tracking-tight text-balance">
                            {step.title}
                          </h3>
                          <p className="text-lg text-muted-foreground/80 italic font-light">{step.subtitle}</p>
                        </div>

                        <p className="text-base lg:text-lg text-foreground/90 leading-relaxed text-pretty max-w-xl text-left">
                          {step.description}
                        </p>

                        <div className="space-y-6 pt-4">
                          <div className="space-y-3 text-left">
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70">
                              What I Do
                            </h4>
                            <ul className="space-y-2.5">
                              {step.whatIDo.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm lg:text-base text-muted-foreground flex items-start gap-3 text-pretty"
                                >
                                  <span className="text-primary/60 mt-1.5 font-bold">•</span>
                                  <span className="flex-1 text-left">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3 text-left">
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70">
                              What You Get
                            </h4>
                            <ul className="space-y-2.5">
                              {step.whatYouGet.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm lg:text-base text-muted-foreground flex items-start gap-3 text-pretty"
                                >
                                  <ArrowRight className="w-4 h-4 text-primary/70 mt-1 shrink-0" />
                                  <span className="flex-1 text-left">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="hidden md:flex items-center justify-start h-full"
                      >
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-background border border-border/40 shadow-sm flex items-center justify-center">
                          <Icon
                            className="w-10 h-10 lg:w-12 lg:h-12 text-muted-foreground/40 stroke-[1.5]"
                            strokeWidth={1.5}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-28 px-6 lg:px-12 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
              How It Feels to Work With Me
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Process alone doesn't make great products. It's how we collaborate, make decisions, and iterate together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 pt-8">
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-sky-500/20">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Transparent Collaboration</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                You'll always know where we are, what's next, and why. No surprises, no black box.
              </p>
            </div>

            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-fuchsia-500/20">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Evidence-Based Decisions</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                Every choice is backed by research, data, or user feedback—not opinion or ego.
              </p>
            </div>

            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-orange-500/20">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Iteration, Not Guesswork</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                I design to learn. Each version gets us closer to something users actually want.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Ready to explore your next project?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how this approach can help solve your product challenges.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Let's discuss your product
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
