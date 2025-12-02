import Link from "next/link"
import { ArrowLeft, CheckCircle2, GitPullRequest, Code, FileCode, BookOpen, Settings } from "lucide-react"
import { ShareButton } from "@/components/share-button"

export default function SemanticPRsPage() {
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://heshamfaragallah.com"}/insights/semantic-prs`

  return (
    <main className="min-h-screen bg-black">
      <ShareButton title="Semantic PRs: Speed Up UI Reviews" url={pageUrl} />

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
            <p className="text-sm font-medium tracking-widest text-blue-400 mb-4">WORKFLOW</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Semantic PRs: The Fastest Way to Speed Up UI Reviews
            </h1>
            <p className="text-xl text-neutral-400 text-pretty">
              A systematic way of grouping and naming code changes so designers and developers can review UI updates
              quickly, confidently, and collaboratively.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-neutral-500">
              <span>By Hesham Faragallah</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Updated Jan 2025</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
              As digital products grow, teams often struggle with long UI review cycles, unclear changes, and unexpected
              visual regressions that appear late in development. One highly effective solution is adopting{" "}
              <strong className="text-white">Semantic Pull Requests (Semantic PRs)</strong> — a systematic way of
              grouping and naming code changes so designers and developers can review UI updates quickly, confidently,
              and collaboratively.
            </p>

            <p className="text-neutral-300 leading-relaxed mb-8">
              Semantic PRs transform UI review from a time-consuming back-and-forth process into a clear, predictable
              workflow that improves quality and accelerates shipping.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Are Semantic PRs?</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              A Semantic PR is a pull request that uses a clear, meaningful naming structure to describe its purpose and
              impact. Instead of vague titles like:
            </p>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 my-6">
              <p className="text-red-400 font-mono text-sm mb-2">"UI fixes"</p>
              <p className="text-red-400 font-mono text-sm mb-2">"Button update"</p>
              <p className="text-red-400 font-mono text-sm">"Map screen changes"</p>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">
              Semantic PRs use structured categories that directly reflect the intent of the change:
            </p>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 my-6">
              <p className="text-emerald-400 font-mono text-sm mb-2">feat(button): add new primary button token</p>
              <p className="text-emerald-400 font-mono text-sm mb-2">fix(input): correct padding on text fields</p>
              <p className="text-emerald-400 font-mono text-sm mb-2">refactor(navbar): simplify component structure</p>
              <p className="text-emerald-400 font-mono text-sm">
                style(card): update border radius for new design spec
              </p>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-8">
              This semantic structure mirrors the logic of design systems, making every UI change easier to understand,
              track, and review.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Semantic PRs Speed Up UI Reviews</h2>

            <div className="space-y-8 my-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  Designers instantly understand what changed
                </h3>
                <p className="text-neutral-300 mb-4">
                  Instead of reading long diffs and guessing the purpose, designers can see the intent directly in the
                  PR title.
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-2">
                  <p className="text-neutral-400">
                    "feat(color): introduce semantic success colors" →{" "}
                    <span className="text-blue-400">design change</span>
                  </p>
                  <p className="text-neutral-400">
                    "refactor(grid): move layout logic into tokens" →{" "}
                    <span className="text-purple-400">structural change</span>
                  </p>
                  <p className="text-neutral-400">
                    "fix(modal): overlap issue on small screens" → <span className="text-amber-400">bug fix</span>
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  Reduces the cognitive load on reviewers
                </h3>
                <p className="text-neutral-300 mb-4">
                  Semantic PRs break large updates into clear, focused chunks. Instead of reviewing one huge PR with 60
                  files, semantic PRs encourage:
                </p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> One PR per component
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> One PR per fix
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> One PR per token update
                  </li>
                </ul>
                <p className="text-neutral-400 text-sm mt-4">
                  Small, semantic PRs are easier to test, easier to approve, and less likely to introduce UI bugs.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  Improves traceability and documentation
                </h3>
                <p className="text-neutral-300 mb-4">
                  Every UI change becomes well-documented through its PR name and category. You can easily answer
                  questions like:
                </p>
                <ul className="space-y-2 text-neutral-400 text-sm">
                  <li>• When did we update the primary button radius?</li>
                  <li>• Which release introduced the new color palette?</li>
                  <li>• Who changed the elevation tokens?</li>
                </ul>
                <p className="text-neutral-300 mt-4">
                  Semantic PRs act as a historical record of the design system evolving over time.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                    4
                  </span>
                  Helps enforce design-system discipline
                </h3>
                <p className="text-neutral-300 mb-4">
                  Because the PR titles follow a structured format, it becomes obvious when changes violate the system.
                </p>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-sm">
                  <p className="text-red-400 font-mono mb-2">fix: add custom border color to card</p>
                  <p className="text-neutral-400">
                    Red flag: This should use a semantic token, not a custom, one-off color.
                  </p>
                </div>
                <p className="text-neutral-300 mt-4">
                  Semantic PRs naturally encourage developers to follow the design system rules.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                    5
                  </span>
                  Pairs perfectly with design tokens
                </h3>
                <p className="text-neutral-300 mb-4">
                  <strong className="text-white">Semantic PRs + design tokens = frictionless UI updates.</strong>
                </p>
                <p className="text-neutral-400 mb-4">Tokens update → Semantic PR documents it → UI syncs everywhere.</p>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-3">
                    feat(tokens): update spacing scale for v2 system
                  </p>
                  <ul className="space-y-1 text-neutral-400 text-sm">
                    <li>✓ Designers know exactly what changed</li>
                    <li>✓ Developers know the update is safe</li>
                    <li>✓ QA knows what to test</li>
                    <li>✓ Product knows what's included in the release</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">How I Structure Semantic PRs in My Workflow</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              I use a consistent, scalable naming system inspired by conventional commits:
            </p>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <span className="text-white font-mono">feat:</span>
                    <span className="text-neutral-400 ml-2">New feature or new UI component</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-red-400 mt-0.5" />
                  <div>
                    <span className="text-white font-mono">fix:</span>
                    <span className="text-neutral-400 ml-2">Bug fix</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCode className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <span className="text-white font-mono">style:</span>
                    <span className="text-neutral-400 ml-2">Visual or UI-only update</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GitPullRequest className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <span className="text-white font-mono">refactor:</span>
                    <span className="text-neutral-400 ml-2">Code restructuring without changing UI</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-neutral-400 mt-0.5" />
                  <div>
                    <span className="text-white font-mono">chore:</span>
                    <span className="text-neutral-400 ml-2">Maintenance work</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="text-white font-mono">docs:</span>
                    <span className="text-neutral-400 ml-2">Documentation updates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Naming Pattern</h3>
              <div className="bg-black/50 rounded-lg p-4 mb-4">
                <code className="text-cyan-400">{`<type>(<scope>): <short summary>`}</code>
              </div>
              <h4 className="text-white font-medium mb-3">Examples:</h4>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-emerald-400">feat(button): introduce new semantic primary button</p>
                <p className="text-red-400">fix(card): correct shadow levels in dark mode</p>
                <p className="text-purple-400">style(form): update radio group spacing according to spec</p>
                <p className="text-amber-400">refactor(grid): migrate layout to 8px spatial scale</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Result: Faster Reviews, Cleaner UI, and Happier Teams
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-white font-medium">Faster review turnaround</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white font-medium">Clearer communication between design & development</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
                <p className="text-white font-medium">Reduced UI regressions</p>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-amber-400 mb-2" />
                <p className="text-white font-medium">Stronger design-system governance</p>
              </div>
              <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-rose-400 mb-2" />
                <p className="text-white font-medium">Predictable delivery and release cycles</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-indigo-400 mb-2" />
                <p className="text-white font-medium">Scalable, maintainable codebase</p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-8">
              By adopting this structured approach, teams spend less time struggling with messy PRs and more time
              building meaningful product value.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Final Thought</h2>
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8 my-8">
              <p className="text-xl text-neutral-200 leading-relaxed italic">
                "Semantic PRs may seem like a small process change — but in reality, they transform how teams ship UI.
                By aligning developer workflows with design language, they reduce friction, improve clarity, and bring
                design systems closer to production quality."
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Interested in design-engineering collaboration?
                </h3>
                <p className="text-neutral-400">Let's discuss how to improve your team's workflow.</p>
              </div>
              <a
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
