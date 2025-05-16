"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ArticleCard } from "@/components/article-card"
import type { Article } from "@/data/articles"

interface ArticleCarouselProps {
  articles: Article[]
}

export function ArticleCarousel({ articles }: ArticleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, articles.length - 3)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Get the current visible articles (3 at a time)
  const visibleArticles = []
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % articles.length
    visibleArticles.push(articles[index])
  }

  return (
    <div className="relative">
      <div className="overflow-hidden py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleArticles.map((article, index) => (
            <div key={`${article.id}-${index}`} className="w-full">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          prevSlide()
          resetTimer()
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-purple text-white rounded-full p-2 shadow-glow hover:bg-purple-dark transition-colors"
        aria-label="Previous articles"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => {
          nextSlide()
          resetTimer()
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple text-white rounded-full p-2 shadow-glow hover:bg-purple-dark transition-colors"
        aria-label="Next articles"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              resetTimer()
            }}
            className={`h-2 w-8 rounded-full transition-colors ${index === currentIndex ? "bg-purple" : "bg-gray-600"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
