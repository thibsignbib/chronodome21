'use client'

import { useRouter } from 'next/navigation'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function LogoutButton() {
  const router = useRouter()
  const supabase = useSupabaseClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/nutella/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer"
    >
      Déconnexion
    </button>
  )
}
