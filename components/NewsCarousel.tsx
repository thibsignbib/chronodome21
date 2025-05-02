'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from 'react-hot-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsCarousel() {
  const supabase = useSupabaseClient();
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) {
        toast.error("Erreur lors du chargement des articles");
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [supabase]);

  if (loading || articles.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10 w-full sm:w-4/5 lg:w-1/2">
      <Slider {...settings}>
        {articles.map((article) => (
          <div key={article.id} className="px-6">
            <a
              href={`/news/${article.id}`}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:scale-[1.01] overflow-hidden"
            >
              <img
                src={article.images?.[0] || '/siteicon.jpg'}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                <p className="text-gray-700 text-sm">
                  {article.content?.slice(0, 200)}{article.content?.length > 200 && '...'}
                </p>
              </div>
            </a>
          </div>
        ))}
      </Slider>

      <div className="text-center mt-6">
        <a
          href="/news"
          className="inline-block text-gray-800 text-sm font-medium hover:underline mt-20"
        >
          Voir toutes les actualités →
        </a>
      </div>
    </div>
  );
}

function CustomArrow({ direction, onClick }: { direction: 'left' | 'right'; onClick?: () => void }) {
  const positionClass = direction === 'left' ? 'left-[-30px]' : 'right-[-30px]';
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${positionClass} bg-white shadow p-2 rounded-full hover:bg-amber-100 transition hidden sm:block`}
    >
      {direction === 'left' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
    </button>
  );
}




