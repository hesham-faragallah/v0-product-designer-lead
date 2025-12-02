import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function InsightsPage() {
  const insights = [
    {
      type: "GUIDE",
      title: "Design tokens that ship to production",
      description:
        "A practical map for syncing Figma variables with code safely, versioning changes, and keeping platforms in lockstep.",
      image: "/design-tokens-color-palette-typography-spacing-var.jpg",
      href: "/insights/design-tokens-production",
      color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
    },
    {
      type: "RESEARCH",
      title: "Semantic PRs speed up UI reviews",
      description:
        "We measured the impact of naming conventions, visual diffs, and component metadata on review time across three teams.",
      image: "/git-pull-request-code-diff-semantic-versioning-git.jpg",
      href: "/insights/semantic-prs",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      type: "CASE STUDY",
      title: "Accessible components at scale",
      description:
        "How a lightweight audit loop and semantic tokens helped a platform team reduce contrast regressions by 62%.",
      image: "/accessibility-a11y-wcag-contrast-checker-inclusive.jpg",
      href: "/insights/accessible-components-scale",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <div className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#resources"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Articles & insights</h1>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Deep dives, experiments, and guides at the intersection of design and engineering. Real-world learnings
              from building products at scale.
            </p>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Link
                key={index}
                href={insight.href}
                className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium tracking-widest text-neutral-400 mb-3">{insight.type}</p>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-neutral-300 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-neutral-400 mb-4">{insight.description}</p>
                  <div className="flex items-center gap-2 text-white font-medium">
                    Read more
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
