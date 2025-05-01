import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButtonClientWrapper from '@/components/LogoutButtonClientWrapper'
import CreateArticleFormClientWrapper from '@/components/CreateArticleFormClientWrapper'
import AccordionSection from '@/components/AccordionSection'

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
        <AccordionSection title="Créer un nouvel article" defaultOpen={true}>
          <CreateArticleFormClientWrapper />
        </AccordionSection>

        <AccordionSection title="Modifier un article existant">
          <div className="text-gray-500 italic">
            (À venir : ici s’afficheront les articles récents pour les modifier 🔧)
          </div>
        </AccordionSection>
    </div>
  )
}
