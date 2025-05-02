import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButtonClientWrapper from '@/components/LogoutButtonClientWrapper'
import CreateArticleFormClientWrapper from '@/components/CreateArticleFormClientWrapper'
import AccordionSection from '@/components/AccordionSection'
import ArticleList from '@/components/ArticleList'
import { PlusCircle, Edit } from 'lucide-react'

export default async function NutellaAdminPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/nutella/login')
  }

  return (
    <div className="relative p-4 min-h-screen bg-white text-black">
      <LogoutButtonClientWrapper />
      <div className="max-w-2xl mx-auto text-center mt-12">
        <h1 className="text-4xl font-extrabold text-amber-700 mb-4">
          Interface admin Chronodôme
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Ici tu peux écrire un nouvel article de news ou éditer les précédents !
        </p>
      </div>

      <AccordionSection title="Créer un nouvel article" icon={<PlusCircle className="w-6 h-6" />}>
        <CreateArticleFormClientWrapper />
      </AccordionSection>

      <AccordionSection title="Modifier un article existant" icon={<Edit className="w-6 h-6" />}>
        <ArticleList />
      </AccordionSection>
    </div>
  )
}
