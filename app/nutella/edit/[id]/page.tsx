import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import EditArticleForm from '@/components/EditArticleForm'
import { ArrowLeft } from 'lucide-react'

export default async function EditPage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params

  const supabase = createServerComponentClient({ cookies })
  const { data: article } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single()

  if (!article) notFound()

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen bg-white text-black">
      <a
        href="/nutella"
        className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-amber-600 transition font-medium mb-4 no-underline focus:outline-none"
      >
        <ArrowLeft className="w-4 h-4" />
          Retour à l’interface admin
      </a>
      <h1 className="text-3xl font-bold text-amber-700 mb-6">Modifier l’article</h1>
      <EditArticleForm article={article} />
    </div>
  )
}
