'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-2xl bg-white shadow-lg mb-6 border border-gray-200 transition-all">
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-amber-50 transition rounded-2xl"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-semibold text-amber-700">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-amber-700 transform transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  )
}
