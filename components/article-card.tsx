import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"

interface ArticleCardProps {
  article: {
    id: string
    title: string
    excerpt: string
    category: string
    readTime: string
    date: string
    image: string
    author: string
  }
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`}>
      <article className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
            <time>{article.date}</time>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-neutral-400 mb-4 line-clamp-3 flex-1">{article.excerpt}</p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-purple-400 font-medium group-hover:gap-3 transition-all">
            Read Article
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  )
}
