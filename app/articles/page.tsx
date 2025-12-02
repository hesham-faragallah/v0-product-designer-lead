import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticleCard } from "@/components/article-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const articles = [
  {
    id: "design-systems-scale",
    title: "Building Design Systems That Scale",
    excerpt:
      "Learn how to create and maintain design systems that grow with your product and team, ensuring consistency across platforms.",
    category: "Design Systems",
    readTime: "8 min read",
    date: "March 15, 2024",
    image: "/design-system-article.jpg",
    author: "Hesham Faragallah",
  },
  {
    id: "user-research-methods",
    title: "Essential User Research Methods for Product Design",
    excerpt:
      "A comprehensive guide to user research methodologies that help you understand your users and make data-driven design decisions.",
    category: "Research",
    readTime: "10 min read",
    date: "March 8, 2024",
    image: "/user-research-article.jpg",
    author: "Hesham Faragallah",
  },
  {
    id: "mobile-first-design",
    title: "Mobile-First Design in Public Transportation Apps",
    excerpt:
      "Exploring the challenges and solutions in designing mobile-first experiences for public transportation systems.",
    category: "Mobile Design",
    readTime: "12 min read",
    date: "February 28, 2024",
    image: "/mobile-first-article.jpg",
    author: "Hesham Faragallah",
  },
  {
    id: "accessibility-best-practices",
    title: "Accessibility Best Practices for Digital Products",
    excerpt: "Making your digital products accessible to everyone: practical tips and guidelines for inclusive design.",
    category: "Accessibility",
    readTime: "7 min read",
    date: "February 20, 2024",
    image: "/accessibility-article.jpg",
    author: "Hesham Faragallah",
  },
  {
    id: "prototyping-techniques",
    title: "Advanced Prototyping Techniques for Complex Interactions",
    excerpt:
      "Master advanced prototyping methods to communicate complex interactions and validate design decisions early.",
    category: "Prototyping",
    readTime: "9 min read",
    date: "February 12, 2024",
    image: "/prototyping-article.jpg",
    author: "Hesham Faragallah",
  },
  {
    id: "design-engineering-collaboration",
    title: "Bridging the Gap: Design and Engineering Collaboration",
    excerpt: "How to foster effective collaboration between design and engineering teams for better product outcomes.",
    category: "Collaboration",
    readTime: "6 min read",
    date: "February 5, 2024",
    image: "/collaboration-article.jpg",
    author: "Hesham Faragallah",
  },
]

export default function ArticlesPage() {
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

      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Articles & Insights
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Thoughts on design, research, and building products that matter. Sharing lessons learned from years of
              experience in UX design and product development.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
