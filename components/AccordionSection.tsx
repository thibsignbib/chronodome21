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
    <div className="max-w-3xl mx-auto mb-6">
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm transition">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-5 py-4 rounded-xl hover:bg-gray-50 transition"
        >
          <span className="text-lg font-semibold text-gray-800">{title}</span>
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
          <div className="px-5 pb-6 pt-2">{children}</div>
        </div>
      </div>
    </div>
  )
}
