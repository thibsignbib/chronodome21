'use client'

import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Article = {
  id: number
  title: string
  images: string[]
  created_at: string
}

function NextArrow(props: any) {
  const { onClick } = props
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2 z-10 cursor-pointer hover:bg-amber-100 transition"
      onClick={onClick}
    >
      <ChevronRight className="w-5 h-5 text-amber-600" />
    </div>
  )
}

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2 z-10 cursor-pointer hover:bg-amber-100 transition"
      onClick={onClick}
    >
      <ChevronLeft className="w-5 h-5 text-amber-600" />
    </div>
  )
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
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <section className="max-w-3xl mx-auto py-10 px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-4 text-amber-700">Dernières actualités</h2>
      <Slider {...settings}>
        {articles.map(article => (
          <div key={article.id} className="px-4">
          <a
            href={`/news/${article.id}`}
            className="block bg-white rounded-xl shadow overflow-hidden hover:shadow-lg hover:scale-[1.01] transition-transform"
          >
            <img
              src={article.images[0]}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
              <p className="text-sm text-amber-600 mt-2">→ Lire l’article</p>
            </div>
          </a>
        </div>
        
        ))}
      </Slider>
    </section>
  )
}
