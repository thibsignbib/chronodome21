'use client'

import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Article = {
  id: number
  title: string
  images: string[]
  created_at: string
}

export default function NewsCarousel() {
  const supabase = useSupabaseClient()
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        toast.error("Erreur chargement des news")
        console.error(error)
      } else {
        setArticles(data.filter(a => a.images && a.images.length > 0))
      }
    }

    fetchNews()
  }, [supabase])

  if (articles.length === 0) return null

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <Slider {...settings}>
        {articles.map(article => (
          <div key={article.id} className="px-4">
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={article.images[0]}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <a
                  href="/news"
                  className="inline-block mt-2 text-sm text-amber-600 hover:underline"
                >
                  Voir toutes les actualités →
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
