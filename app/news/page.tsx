'use client';

import styles from "../page.module.css";
import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsListPage() {
  const supabase = useSupabaseClient();
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast.error("Erreur lors du chargement des articles");
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [supabase]);

  return (
    <div className={styles.shortPage}>
      <Navbar darkBackground />
      <div className="max-w-5xl mx-auto px-4 py-10 bg-white text-black" style={{ paddingTop: '6rem' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Les dernières news Chronodôme 21 !</h1>
        {loading ? (
          <p className="text-gray-500 italic">Chargement en cours...</p>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
              href={`/news/${article.id}`}
              key={article.id}
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              {article.type !== 'text' && article.images?.[0] && (
                <img
                  src={article.images[0]}
                  alt={article.title}
                  className="w-full sm:w-48 h-48 object-cover sm:object-cover"
                />
              )}
            
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition">
                    {article.title}
                  </h2>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {new Date(article.created_at).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {article.content?.slice(0, 200)}
                  {article.content?.length > 200 && '...'}
                </p>
              </div>
            </Link>
                
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
