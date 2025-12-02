import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function ResearchInsights() {
  return (
    <section id="resources" className="relative px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold text-white">
          Articles & insights
        </h2>
        <p className="mt-3 text-base sm:text-lg text-neutral-400">
          Deep dives, experiments, and guides at the intersection of design and engineering.
        </p>
      </div>

      <div className="mt-10 md:mt-14 border-y border-neutral-200/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Featured */}
            <article className="md:col-span-1 border-b md:border-b-0 md:border-r border-neutral-200/10 relative">
              <div className="p-6 sm:p-10 relative">
                <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-yellow-300 via-amber-300 to-yellow-500 opacity-20 blur-3xl"></div>

                <p className="text-xs font-medium tracking-widest text-neutral-400">GUIDE</p>
                <h3 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold text-white">
                  Design tokens that ship to production
                </h3>
                <p className="mt-4 text-neutral-400 text-base sm:text-lg">
                  A practical map for syncing Figma variables with code safely, versioning changes, and keeping
                  platforms in lockstep.
                </p>

                <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-neutral-200/10">
                  <Image
                    src="/design-tokens-color-palette-typography-spacing-var.jpg"
                    alt="Design tokens and variables visualization"
                    width={600}
                    height={300}
                    className="w-full h-44 object-cover"
                  />
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-white">
                  <a
                    href="/insights/design-tokens-production"
                    className="inline-flex items-center gap-2 font-medium hover:text-neutral-300 transition-colors"
                  >
                    Read the guide
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>

            {/* Middle */}
            <article className="relative border-b md:border-b-0 md:border-r border-neutral-200/10">
              <div className="p-6 sm:p-10 relative">
                <p className="text-xs font-medium tracking-widest text-neutral-400">RESEARCH</p>
                <h3 className="mt-4 text-3xl tracking-tight font-semibold text-white">
                  Semantic PRs speed up UI reviews
                </h3>
                <p className="mt-4 text-neutral-400 text-base sm:text-lg">
                  We measured the impact of naming conventions, visual diffs, and component metadata on review time
                  across three teams.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {["/git-pull-request-code-diff-green-red-lines-dark-th.jpg", "/code-review-comments-github-interface-dark-mode.jpg", "/version-control-branches-merge-diagram-dark.jpg"].map(
                    (src, i) => (
                      <Image
                        key={i}
                        src={src || "/placeholder.svg"}
                        alt="Semantic PR visual"
                        width={200}
                        height={150}
                        className="h-24 w-full object-cover rounded-lg ring-1 ring-neutral-200/10"
                      />
                    ),
                  )}
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-white">
                  <a
                    href="/insights/semantic-prs"
                    className="inline-flex items-center gap-2 font-medium hover:text-neutral-300 transition-colors"
                  >
                    See findings
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>

            {/* Right */}
            <article className="relative">
              <div className="relative p-6 sm:p-10">
                <p className="text-xs font-medium tracking-widest text-neutral-400">CASE STUDY</p>
                <h3 className="mt-4 text-3xl tracking-tight font-semibold text-white">
                  Accessible components at scale
                </h3>
                <p className="mt-4 text-neutral-400 text-base sm:text-lg">
                  How a lightweight audit loop and semantic tokens helped a platform team reduce contrast regressions by
                  62%.
                </p>

                <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-neutral-200/10">
                  <Image
                    src="/accessibility-a11y-wcag-contrast-checker-inclusive.jpg"
                    alt="Accessibility and contrast checking interface"
                    width={600}
                    height={300}
                    className="w-full h-44 object-cover"
                  />
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-white">
                  <a
                    href="/insights/accessible-components-scale"
                    className="inline-flex items-center gap-2 font-medium hover:text-neutral-300 transition-colors"
                  >
                    Read case study
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Footer link */}
          <div className="border-t border-neutral-200/10">
            <div className="flex p-6 items-center justify-center">
              <a
                href="/insights"
                className="inline-flex items-center gap-3 text-base sm:text-lg font-medium text-white hover:text-neutral-300 transition-colors"
              >
                Explore all insights
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
