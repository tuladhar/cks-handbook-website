import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { Article } from "@/data/articles"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group h-full bg-dark-blue/50 rounded-lg overflow-hidden transition-all hover:shadow-glow border border-purple/20 hover:border-purple">
      <div className="relative h-48 overflow-hidden">
        <Link
          href={article.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-light hover:text-purple font-medium"
        >
          <Image
          src={article.thumbnail || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        </Link>
      </div>
      {/*<div className="p-5">
        <div className="flex items-center mb-2">
          <div className="bg-purple/10 text-purple-light text-xs font-semibold px-2 py-1 rounded-full">
            {article.date}
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2 text-white line-clamp-2">{article.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
        <Link
          href={article.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-light hover:text-purple font-medium"
        >
          Read on LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>
      */}
    </div>
  )
}
