'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from '@supabase/auth-helpers-react'
import LogoutButton from '@/components/LogoutButton'

export default function NutellaAdminPage() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/nutella/login')
    }
  }, [session, router])

  if (!session) {
    return <div>Chargement...</div>
  }

  return (
    <div className="relative p-4 min-h-screen">
      <LogoutButton />
      <h1 className="text-2xl mb-4">Bienvenue sur Nutella Admin 🍫</h1>
      <p>Ici tu pourras créer des articles !</p>
    </div>
  )
}
