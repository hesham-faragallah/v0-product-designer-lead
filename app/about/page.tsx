import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Linkedin, Award, Briefcase, GraduationCap, Palette, Users, Smartphone } from "lucide-react"
import { ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 antialiased">
      {/* Background Effects */}
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

      {/* Gradient Blur from Top */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                Hesham Faragallah
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto text-pretty leading-relaxed">
              UX UI Designer with over 11 years of experience designing magical solutions that match users' needs with
              impactful results.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-12 ring-1 ring-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I have over 11 years of work experience designing and creating magical solutions for clients that wanted
                impactful results matching with users' needs. My journey has taken me from drafting and 3D design to
                becoming a Chief UX Designer at the Roads and Transport Authority in UAE.
              </p>
              <p>
                I use my skills in the best possible way to develop complex things into easy and creative solutions for
                end-users by embracing new technology while keeping up with finalized designed and architected
                strategies for Mobile and Website Design.
              </p>
              <p>
                Throughout my career, I've worked with government entities, municipalities, and private companies across
                UAE, Saudi Arabia, Egypt, and Oman, delivering user-centered design solutions that improve people's
                daily lives through better digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-gradient-to-br from-sky-500/10 to-sky-500/5 p-8 ring-1 ring-sky-500/20 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-500/20 mb-4">
                <Palette className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• User Interface Design</li>
                <li>• User Experience Design</li>
                <li>• Material Design</li>
                <li>• iOS/Android UI</li>
                <li>• Responsive Design</li>
                <li>• Design Guidelines</li>
                <li>• Logos and Icons</li>
                <li>• SVG, Lottie</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 p-8 ring-1 ring-fuchsia-500/20 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-fuchsia-500/10 ring-1 ring-fuchsia-500/20 mb-4">
                <Users className="h-6 w-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Research</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• User Centered Design</li>
                <li>• User Research</li>
                <li>• Usability Testing</li>
                <li>• Wireframing</li>
                <li>• User Flows</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-8 ring-1 ring-orange-500/20 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 ring-1 ring-orange-500/20 mb-4">
                <Smartphone className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tools</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Figma</li>
                <li>• Adobe XD</li>
                <li>• Sketch</li>
                <li>• Adobe Photoshop</li>
                <li>• Adobe Illustrator</li>
                <li>• Adobe After Effects</li>
                <li>• InVision Studio</li>
                <li>• Zeplin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500 ring-1 ring-white/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">Chief UX Designer</h3>
                  <p className="text-sky-400 mb-2">Roads and Transport Authority (RTA) • May 2022 - Present</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Leading UX design initiatives for government transportation services. Designed user interfaces for
                    web-based products and mobile apps, conducted strategic user research studies, created design
                    guidelines, and provided user experience solutions to improve products.
                  </p>
                  <a
                    href="https://rta.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300"
                  >
                    rta.ae <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-orange-500 ring-1 ring-white/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">UI/UX Designer Lead</h3>
                  <p className="text-fuchsia-400 mb-2">Blackstone • October 2021 - April 2022</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Led design team to create interactive prototypes and UI specifications. Conducted user research
                    studies and usability testing to provide consumer insights and improve product experiences.
                  </p>
                  <a
                    href="https://www.blackstoneeit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-fuchsia-400 hover:text-fuchsia-300"
                  >
                    blackstoneeit.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-sky-500 ring-1 ring-white/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">UI/UX Designer Lead</h3>
                  <p className="text-orange-400 mb-2">Intertecsys • 2020 - September 2021</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Designed user interfaces for web and mobile applications. Identified user needs and business
                    requirements, created wireframes and mock-ups, and collaborated with product management and
                    development teams.
                  </p>
                  <a
                    href="https://www.intertecsystems.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300"
                  >
                    intertecsystems.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500 ring-1 ring-white/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">UI/UX Designer</h3>
                  <p className="text-sky-400 mb-2">Freelancer • 2016 - 2020</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Worked with various clients on mobile and web design projects. Created user-centered design
                    solutions for diverse industries and requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-orange-500 ring-1 ring-white/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">UI/UX Designer</h3>
                  <p className="text-fuchsia-400 mb-2">E-Sar • 2014 - 2016</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Designed user interfaces and experiences for digital products. Conducted user research and created
                    design deliverables including wireframes and prototypes.
                  </p>
                  <a
                    href="http://e-saris.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-fuchsia-400 hover:text-fuchsia-300"
                  >
                    e-saris.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-sky-500 ring-1 ring-white/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">Draftsman</h3>
                  <p className="text-orange-400 mb-2">Global Geobits • October 2010 - January 2014</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Created technical drawings and designs. Developed skills in 3D modeling and visualization.
                  </p>
                  <a
                    href="https://www.globalgeobits.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300"
                  >
                    globalgeobits.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-6">
                <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 ring-1 ring-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-500/20 shrink-0">
                      <GraduationCap className="h-5 w-5 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Bachelor of Commerce</h3>
                      <p className="text-sm text-slate-400 mb-1">Cairo University • 2011 - 2014</p>
                      <p className="text-xs text-slate-500">Major: Accounting and Auditing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              <div className="space-y-6">
                <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 ring-1 ring-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 ring-1 ring-orange-500/20 shrink-0">
                      <Award className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Google UX Design Certificate</h3>
                      <p className="text-sm text-slate-400">Google • June 2021 - 4 months</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 ring-1 ring-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-500/20 shrink-0">
                      <Award className="h-5 w-5 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Interaction Design Foundation</h3>
                      <p className="text-sm text-slate-400">IDF • In Progress</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 ring-1 ring-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/10 ring-1 ring-fuchsia-500/20 shrink-0">
                      <Award className="h-5 w-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">3D MAX Training</h3>
                      <p className="text-sm text-slate-400">Cambridge Training • June 2010 - 2 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-orange-500/10 p-12 ring-1 ring-white/10 backdrop-blur-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:Hesham-farag@outlook.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/hesham-farag-b3218052/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/hesham-farag"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" />
                Behance
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
