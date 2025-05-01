'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

type Article = {
  id: number
  title: string
  created_at: string
  type: string
}

export default function ArticleList() {
  const supabase = useSupabaseClient()
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('id, title, created_at, type')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Erreur lors du chargement des articles :', error)
        toast.error("Erreur lors du chargement des articles")
      } else {
        setArticles(data)
      }
      setLoading(false)
    }

    fetchArticles()
  }, [supabase])

  if (loading) {
    return <p className="text-gray-500 italic">Chargement des articles...</p>
  }

  if (articles.length === 0) {
    return <p className="text-gray-500 italic">Aucun article trouvé.</p>
  }

  return (
    <ul className="space-y-4">
      {articles.map((article) => (
        <li key={article.id} className="p-4 border rounded-lg bg-white shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-amber-700">{article.title}</h3>
              <p className="text-sm text-gray-500">
                {new Date(article.created_at).toLocaleDateString('fr-FR')} — Type : {article.type}
              </p>
            </div>
            <button
              className="text-sm text-blue-600 hover:underline"
              onClick={() => toast('Fonctionnalité de modification à venir')}
            >
              Modifier
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
