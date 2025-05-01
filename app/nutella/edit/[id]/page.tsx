import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import EditArticleForm from '@/components/EditArticleForm'

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
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-amber-700 mb-6">Modifier l’article</h1>
      <EditArticleForm article={article} />
    </div>
  )
}
