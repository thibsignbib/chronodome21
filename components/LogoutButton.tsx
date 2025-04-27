'use client'

import { useRouter } from 'next/navigation'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { LogOut } from 'lucide-react'

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
      className="absolute top-4 right-4 flex items-center gap-2 bg-transparent border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 rounded-full px-3 py-1 text-sm transition"
    >
      <LogOut className="w-4 h-4" />
      <span className="hidden sm:inline">Déconnexion</span>
    </button>
  )
}
