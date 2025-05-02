'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function NewsCarousel() {
  const supabase = useSupabaseClient()
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6)

      if (!error && data) {
        setArticles(data)
      }
    }

    fetchArticles()
  }, [supabase])

  const NextArrow = (props: any) => (
    <div className="arrow next" onClick={props.onClick}>
      <ArrowRight size={24} />
    </div>
  )

  const PrevArrow = (props: any) => (
    <div className="arrow prev" onClick={props.onClick}>
      <ArrowLeft size={24} />
    </div>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  if (!articles || articles.length === 0) return null

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {articles.map((article) => (
          <a
            href={`/news/${article.id}`}
            key={article.id}
            className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            {article.images?.length > 0 ? (
              <img
                src={article.images[0]}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
            ) : (
              <img
                src="/siteicon.jpg"
                alt="Image par défaut"
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold text-amber-600 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-700 text-sm">
                {article.content?.slice(0, 200)}{article.content?.length > 200 && '...'}
              </p>
            </div>
          </a>
        ))}
      </Slider>

      <div className="text-center mt-4">
        <a
          href="/news"
          className="inline-block px-4 py-2 border border-black text-black rounded hover:bg-gray-100 transition"
        >
          Voir toutes les actualités
        </a>
      </div>
    </div>
  )
}
