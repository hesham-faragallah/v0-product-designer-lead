import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { ShareButton } from "@/components/share-button"

export default function AccessibleComponentsPage() {
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://heshamfaragallah.com"}/insights/accessible-components-scale`

  return (
    <main className="min-h-screen bg-black">
      <ShareButton title="Designing for Everyone: The Real Impact of Accessibility" url={pageUrl} />

      <article className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-medium tracking-widest text-emerald-400 mb-4">ARTICLE</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Designing for Everyone: The Real Impact of Accessibility in Digital Products
            </h1>
            <div className="flex items-center gap-4 mt-8 text-sm text-neutral-500">
              <span>By Hesham Faragallah</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Updated Jan 2025</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-xl text-neutral-300 leading-relaxed mb-6">
              Accessibility is not a feature. It is not an option, a nice-to-have, or a "phase two" task.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Accessibility is a responsibility — and one of the strongest indicators of product maturity and
              user-centered design.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-6">
              In a world where digital products serve millions of people with diverse abilities, designing for everyone
              is no longer a competitive edge; it is a baseline expectation. Accessible design ensures that all users —
              including people with visual, auditory, cognitive, or motor impairments — can experience a product with
              clarity, comfort, and dignity.
            </p>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6 my-8">
              <p className="text-lg text-white font-medium m-0">
                But the real impact goes far beyond compliance.
                <br />
                <span className="text-emerald-400">Accessible products are better products.</span>
              </p>
            </div>

            {/* Why Accessibility Matters */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Accessibility Matters</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Accessibility is rooted in the belief that people should be able to use technology equally — regardless of
              their abilities, context, or limitations.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">1. Accessibility expands reach</h3>
                <p className="text-neutral-300 m-0">
                  Products with accessible experiences tap into a wider audience, including users with disabilities,
                  aging populations, and anyone navigating challenging environments (low light, noise, motion, etc.).
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2. Accessibility improves usability</h3>
                <p className="text-neutral-300 mb-4">What helps a user with a disability often helps everyone:</p>
                <ul className="space-y-2 text-neutral-400 text-sm m-0">
                  <li>• Clear typography</li>
                  <li>• Sufficient color contrast</li>
                  <li>• Keyboard navigation</li>
                  <li>• Simple interactions</li>
                </ul>
                <p className="text-neutral-400 text-sm mt-4 m-0">
                  These improvements make the product easier and more intuitive for all users.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">3. Accessibility reduces risk</h3>
                <p className="text-neutral-300 m-0">
                  Meeting WCAG and ADA guidelines protects organizations from legal risks and financial penalties. More
                  importantly, it builds trust with customers, communities, and regulators.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">4. Accessibility is brand leadership</h3>
                <p className="text-neutral-300 m-0">
                  Companies that value accessibility signal inclusivity, empathy, and responsibility — core values of
                  strong brands and modern digital ecosystems.
                </p>
              </div>
            </div>

            {/* POUR Framework */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Four Core Principles of Accessibility (WCAG)
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Accessibility guidelines follow the <strong className="text-white">POUR</strong> framework:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">1. Perceivable</h3>
                <p className="text-neutral-300 mb-4 text-sm">
                  Information must be presented in ways users can perceive.
                </p>
                <ul className="space-y-1 text-neutral-400 text-sm m-0">
                  <li>• High color contrast</li>
                  <li>• Alt text for images</li>
                  <li>• Captions for videos</li>
                  <li>• Clear hierarchy and spacing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2. Operable</h3>
                <p className="text-neutral-300 mb-4 text-sm">
                  Users must be able to navigate and interact with the interface.
                </p>
                <ul className="space-y-1 text-neutral-400 text-sm m-0">
                  <li>• Keyboard navigation</li>
                  <li>• Focus states</li>
                  <li>• Skip navigation links</li>
                  <li>• Sufficient hit-area sizes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">3. Understandable</h3>
                <p className="text-neutral-300 mb-4 text-sm">
                  The interface should be easy to understand and predictable.
                </p>
                <ul className="space-y-1 text-neutral-400 text-sm m-0">
                  <li>• Clear labels</li>
                  <li>• Consistent component patterns</li>
                  <li>• Assistive error messages</li>
                  <li>• Plain language</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">4. Robust</h3>
                <p className="text-neutral-300 mb-4 text-sm">Content must be compatible with assistive technologies.</p>
                <ul className="space-y-1 text-neutral-400 text-sm m-0">
                  <li>• Screen reader support</li>
                  <li>• Semantic HTML</li>
                  <li>• Correct ARIA roles</li>
                  <li>• Well-structured code</li>
                </ul>
              </div>
            </div>

            {/* How I Apply Accessibility */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">How I Apply Accessibility in My Design Work</h2>

            <div className="space-y-8 my-8">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">1. Accessible Design Tokens</h3>
                <p className="text-neutral-300 mb-4">My design systems include:</p>
                <ul className="space-y-2 text-neutral-400 m-0">
                  <li>• Contrast-checked color palettes</li>
                  <li>• Text size + line height rules</li>
                  <li>• Minimum tap target sizes</li>
                  <li>• Focus state tokens</li>
                  <li>• Status colors with semantic meaning</li>
                </ul>
                <p className="text-neutral-500 text-sm mt-4 m-0">
                  These guarantee accessible components at the root level.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. Components Built with Accessibility by Default
                </h3>
                <p className="text-neutral-300 mb-4">I define accessibility behavior for each component:</p>
                <ul className="space-y-2 text-neutral-400 m-0">
                  <li>• Buttons with clear focus rings</li>
                  <li>• Inputs with error states, helper text, and labels</li>
                  <li>• Cards with keyboard accessibility</li>
                  <li>• Navigation patterns with screen-reader support</li>
                </ul>
                <p className="text-neutral-500 text-sm mt-4 m-0">
                  Design systems become accessibility engines when components enforce best practices automatically.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">3. Inclusive UX Research</h3>
                <p className="text-neutral-300 mb-4">Real insights come from observing:</p>
                <ul className="space-y-2 text-neutral-400 m-0">
                  <li>• People of Determination (POD)</li>
                  <li>• Users with temporary or situational disabilities</li>
                  <li>• Older adults</li>
                  <li>• Users navigating difficult environments</li>
                </ul>
                <p className="text-neutral-500 text-sm mt-4 m-0">
                  This ensures features work for everyone — not only perfect-condition scenarios.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">4. Accessibility Audits & WCAG Reviews</h3>
                <p className="text-neutral-300 mb-4">Before delivery, I review:</p>
                <ul className="space-y-2 text-neutral-400 m-0">
                  <li>• Contrast ratios</li>
                  <li>• Typography scaling</li>
                  <li>• Responsiveness</li>
                  <li>• Keyboard flow</li>
                  <li>• ARIA attributes</li>
                  <li>• Screen reader output</li>
                </ul>
                <p className="text-neutral-500 text-sm mt-4 m-0">
                  Accessibility becomes part of the QA cycle, not an afterthought.
                </p>
              </div>
            </div>

            {/* Practical Examples */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Practical Accessibility Examples That Make a Huge Difference
            </h2>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Color contrast ≥ 4.5:1",
                  "Interactive elements ≥ 44px",
                  "Descriptive alt text",
                  "Meaningful link labels",
                  "Visible focus outlines",
                  "Consistent spacing & typography",
                  "Motion reduction options",
                  "Proper heading structure (H1 → H2 → H3)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-neutral-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-neutral-500 text-sm mt-6 m-0">
                These small improvements significantly enhance usability and comfort for everyone.
              </p>
            </div>

            {/* Business Impact */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Accessibility = Better Business + Better Design
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">Accessible products deliver measurable value:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
              {[
                "Higher user satisfaction",
                "More conversion and engagement",
                "Better SEO",
                "Reduced customer support issues",
                "Lower development rework",
                "Stronger compliance and lower legal risk",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-neutral-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Final Thought */}
            <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-8 my-12">
              <p className="text-xl text-white font-medium text-center m-0">
                Most importantly, accessible design reflects{" "}
                <span className="text-emerald-400">respect for every human being</span> who uses the product.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Need help with accessibility?</h3>
                <p className="text-neutral-400">Let's discuss how to build accessible products at scale.</p>
              </div>
              <a
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
