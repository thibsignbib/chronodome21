import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/LogoutButton'
import CreateArticleForm from '@/components/CreateArticleForm'

export default async function NutellaAdminPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/nutella/login')
  }

  return (
    <div className="relative p-4 min-h-screen">
      <LogoutButton />
      <h1 className="text-2xl mb-4">Bienvenue sur Nutella Admin 🍫</h1>
      <p>Ici tu pourras créer des articles !</p>
      <CreateArticleForm />
    </div>
  )
}
