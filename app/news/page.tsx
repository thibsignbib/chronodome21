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
      <div className="max-w-5xl mx-auto px-4 py-10" style={{ paddingTop: '6rem' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Actualités</h1>
        {loading ? (
          <p className="text-gray-500 italic">Chargement en cours...</p>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                href={`/news/${article.id}`}
                key={article.id}
                className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {article.images?.length > 0 && (
                  <img
                    src={article.images[0]}
                    alt={article.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {article.content?.slice(0, 200)}{article.content?.length > 200 && '...'}
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
