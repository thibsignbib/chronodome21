'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionSection({
  title,
  children,
  icon,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="max-w-3xl mx-auto mb-6">
      <div className="rounded-2xl bg-white border-2 border-gray-200 shadow-md transition">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-6 py-5 rounded-2xl hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            {icon && <span className="text-amber-500">{icon}</span>}
            <span className="text-xl font-semibold text-gray-800">{title}</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            open ? 'max-h-[2000px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
          } overflow-hidden`}
        >
          <div className="px-6 pb-6 pt-2">{children}</div>
        </div>
      </div>
    </div>
  )
}
