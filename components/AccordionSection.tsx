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
    <div className="border rounded-lg overflow-hidden shadow mb-6">
      <button
        type="button"
        className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-amber-50 transition text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg text-amber-700">{title}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && <div className="p-4 bg-gray-50">{children}</div>}
    </div>
  )
}
