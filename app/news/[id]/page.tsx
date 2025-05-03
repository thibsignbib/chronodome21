'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../news.module.css';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const supabase = useSupabaseClient();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        toast.error("Erreur lors du chargement de l'article");
      } else {
        setArticle(data);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [id, supabase]);

  if (loading) {
    return <div className={styles.contentSectionGallery}><Navbar darkBackground /><p>Chargement...</p><Footer /></div>;
  }

  if (!article) {
    return <div className={styles.contentSectionGallery}><Navbar darkBackground /><p>Article non trouvé.</p><Footer /></div>;
  }

  const { title, content, created_at, images, type } = article;
  const formattedDate = new Date(created_at).toLocaleDateString('fr-FR');

  return (
    <div className={styles.shortPage}>

      <Navbar darkBackground />

      <div className={styles.contentSectionGallery}>
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-sm text-gray-500 mb-6">Publié le {formattedDate}</p>

          {type === 'text-image-side' && images?.[0] ? (
            <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 text-justify text-left whitespace-pre-line">
                {article.content}
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src={article.images?.[0] || '/siteicon.jpg'}
                alt={article.title}
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
          ) : type === 'text-image-bottom' && images?.length > 0 ? (
            <>
              <p className="galleryIntro text-gray-800 mb-6">{content}</p>
              <section className={styles.gallerySection}>
                <div className={styles.galleryGrid}>
                  {images.map((src: string, i: number) => (
                    <img key={i} src={src} alt={`photo-${i}`} className={styles.galleryImage} />
                  ))}
                </div>
              </section>
            </>
          ) : (
            <p className="text-gray-800 text-justify">{content}</p>
          )}
        </div>
      </div>
      if (!article) {
      <div className="min-h-screen flex justify-center items-center">
        <p>Chargement en cours...</p>
      </div>
      }
      <Footer />
    </div>
  );
}
