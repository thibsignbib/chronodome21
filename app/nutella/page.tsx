'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from '@supabase/auth-helpers-react'
import LogoutButton from '@/components/LogoutButton'

export default function NutellaAdminPage() {
  const session = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session === null) {
      router.push('/nutella/login')
    } else if (session !== undefined) {
      setLoading(false)
    }
  }, [session, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Chargement...</p>
      </div>
    )
  }

  return (
    <div className="relative p-4 min-h-screen">
      <LogoutButton />
      <h1 className="text-2xl mb-4">Bienvenue sur Nutella Admin 🍫</h1>
      <p>Ici tu pourras créer des articles !</p>
    </div>
  )
}
