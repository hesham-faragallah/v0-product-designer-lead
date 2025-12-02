import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { ShareButton } from "@/components/share-button"

export default function DesignTokensProductionPage() {
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://heshamfaragallah.com"}/insights/design-tokens-production`

  return (
    <main className="min-h-screen bg-black">
      <ShareButton title="Design Tokens Built for Production" url={pageUrl} />

      <article className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <div className="mb-12">
            <p className="text-sm font-medium tracking-widest text-purple-400 mb-4">GUIDE</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Design Tokens Built for Production: A Scalable Foundation for Modern Design Systems
            </h1>
            <p className="text-xl text-neutral-400 text-pretty">
              In today's digital products, consistency is no longer a "nice to have"—it is a competitive advantage.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-neutral-500">
              <span>By Hesham Faragallah</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Updated Jan 2025</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 overflow-hidden rounded-2xl ring-1 ring-neutral-200/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
              alt="Design tokens visualization"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-neutral-300 leading-relaxed mb-6 text-xl">
              As interfaces grow across platforms, teams, and markets, maintaining visual and functional alignment
              becomes increasingly challenging. Design tokens solve this problem by transforming design decisions into
              structured, reusable, machine-readable variables that can be implemented directly in code.
            </p>

            <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-xl p-6 my-8">
              <p className="text-white text-lg font-medium italic mb-0">
                "In my work building scalable design systems, I focus on one key principle: Design tokens must be built
                to ship—cleanly, reliably, and without friction—to production."
              </p>
            </div>

            {/* What Are Design Tokens */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Are Design Tokens?</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Design tokens are the smallest pieces of a design system—the single source of truth for values such as:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {[
                "Colors",
                "Typography",
                "Spacing & Sizing",
                "Elevation",
                "Radii & Borders",
                "Motion",
                "Component States",
                "Semantic Roles",
              ].map((item) => (
                <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">
              Each token represents a decision that developers can apply directly, ensuring alignment between Figma,
              code, and live production environments.
            </p>

            {/* Why Ship-Ready Tokens Matter */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why "Ship-Ready" Tokens Matter</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Many organizations create beautiful token frameworks in design tools—but they never make it into code or
              get out of sync over time.
            </p>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">A token is only successful when:</h3>
              <ul className="space-y-3 text-neutral-300">
                {[
                  "It is defined clearly",
                  "It maps correctly to coded output",
                  "It supports light/dark modes",
                  "It can scale across teams and products",
                  "It is automatically exported and version-controlled",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-center">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">
              Ship-ready tokens ensure every design update becomes a development update—without manual interpretation.
            </p>

            {/* Three-Layer Token Architecture */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">My Approach: A Three-Layer Token Architecture</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              To ensure production-ready quality, I use a three-layer architecture that reduces complexity and increases
              flexibility.
            </p>

            {/* Layer 1 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-semibold">
                  1
                </span>
                <h3 className="text-xl font-semibold text-white">Brand Layer (Source Tokens)</h3>
              </div>
              <p className="text-neutral-300 mb-4">
                The core brand identity—colors, elevations, spacing, typography—defined once and rarely changed.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-purple-400">
                  brand.blue.600 = <span className="text-white">#1F87E6</span>
                </div>
                <div className="text-purple-400">
                  brand.font.family.primary = <span className="text-white">"Inter"</span>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold">
                  2
                </span>
                <h3 className="text-xl font-semibold text-white">Alias Layer (Semantic Tokens)</h3>
              </div>
              <p className="text-neutral-300 mb-4">
                Meaning-based tokens that support UX logic and state behavior. These tokens make it easy to update an
                entire theme with a single change.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-400">color.primary</div>
                <div className="text-blue-400">color.on-primary</div>
                <div className="text-blue-400">color.success-background</div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold">
                  3
                </span>
                <h3 className="text-xl font-semibold text-white">Component Layer (Mapped Tokens)</h3>
              </div>
              <p className="text-neutral-300 mb-4">Final values consumed by components and engineering teams.</p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-emerald-400">
                  button.primary.background = <span className="text-neutral-400">{"{ alias: color.primary }"}</span>
                </div>
                <div className="text-emerald-400">
                  input.focus.border = <span className="text-neutral-400">{"{ alias: color.primary }"}</span>
                </div>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">
              This hierarchy ensures flexibility, scalability, and direct compatibility with production code.
            </p>

            {/* How I Ship Tokens */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">How I Ship Tokens to Production</h2>

            {/* Step 1 */}
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Clear Naming Conventions</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              I follow a structured naming logic that ensures readability for both designers and developers.
            </p>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 my-4 font-mono">
              <span className="text-neutral-400">Example format: </span>
              <span className="text-white">category.role.scale.state</span>
            </div>

            {/* Step 2 */}
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2. JSON-Based Token Packages</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Tokens are exported as organized JSON files—ready for dev build systems:
            </p>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto">
              <pre className="text-neutral-300">{`{
  "color": {
    "primary": { "value": "#1F87E6" },
    "primary-dark": { "value": "#0E62A2" }
  }
}`}</pre>
            </div>

            {/* Step 3 */}
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3. Automated Pipelines</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Using tools like Style Dictionary, GitHub Actions, and Figma Variables API, I automate:
            </p>
            <ul className="space-y-2 text-neutral-300 mb-6">
              <li className="flex gap-3">
                <span className="text-purple-400">•</span>Exporting tokens from Figma
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">•</span>Transforming tokens into platform-specific formats (CSS, JS,
                iOS, Android)
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">•</span>Version control
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">•</span>Deployment to the production codebase
              </li>
            </ul>
            <p className="text-neutral-400 italic">This eliminates human error and speeds up delivery.</p>

            {/* Step 4 */}
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">4. Multi-Theme Support</h3>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Design tokens include light, dark, and high-contrast variations. Developers can switch themes instantly
              without rewriting any UI styles.
            </p>

            {/* Step 5 */}
            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">5. Continuous Sync Between Figma & Code</h3>
            <p className="text-neutral-300 leading-relaxed mb-6">
              As the design evolves, tokens remain the single source of truth. When tokens update → components update →
              UI updates. No inconsistencies, no surprises during QA.
            </p>

            {/* Impact Section */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Impact: Faster Delivery, Consistent Visuals, and Better Collaboration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">For Designers</h4>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• All components remain consistent</li>
                  <li>• Faster iterations</li>
                  <li>• Clean system thinking</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">For Developers</h4>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• No more manual style overrides</li>
                  <li>• Predictable, repeatable design logic</li>
                  <li>• Reduced front-end complexity</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">For Product Teams</h4>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Faster releases</li>
                  <li>• Less UI debt</li>
                  <li>• Stronger brand expression</li>
                </ul>
              </div>
            </div>

            {/* Final Thought */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Final Thought</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Design tokens are more than technical variables—they're the heartbeat of a scalable design system. When
              built correctly, tokens bridge the gap between design and development, improve reliability, and ensure the
              experience users see in production is exactly what was intended in Figma.
            </p>

            <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-xl p-6 my-8">
              <p className="text-white text-lg font-medium italic mb-0">
                "Design tokens that ship to production don't just create consistency; they create alignment, speed, and
                trust. That's the foundation I build into every design system I lead."
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Want to discuss design systems?</h3>
                <p className="text-neutral-400">Let's talk about scaling design in your organization.</p>
              </div>
              <a
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
