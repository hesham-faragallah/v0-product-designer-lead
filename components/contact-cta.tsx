import { Mail, Calendar } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="z-10 overflow-hidden mt-24 px-6 py-12 relative" id="contact">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl text-center">
          <div className="inline-flex gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
            <span className="text-xs text-white/70">Let's Collaborate</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white mb-4 font-semibold tracking-tighter">
            Have a project in mind?
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            I'm currently available for select freelance projects. Let's discuss how we can work together to create
            something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href="mailto:hello@alexchen.design"
              className="inline-flex items-center gap-2 hover:bg-emerald-300/90 transition text-sm font-semibold text-black bg-emerald-400 rounded-full px-6 py-3 shadow-lg"
            >
              Send Email
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3 border border-white/10"
            >
              Schedule a Call
              <Calendar className="w-4 h-4 text-white/70" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8 text-sm text-white/60">
            <a href="https://linkedin.com" className="hover:text-white transition inline-flex items-center gap-1">
              LinkedIn
            </a>
            <a href="https://dribbble.com" className="hover:text-white transition inline-flex items-center gap-1">
              Dribbble
            </a>
            <a href="https://behance.net" className="hover:text-white transition inline-flex items-center gap-1">
              Behance
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
