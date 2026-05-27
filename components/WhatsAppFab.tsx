'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WA_DEFAULT = 'https://wa.me/5548998056893?text=Olá! Gostaria de agendar uma consulta.'

export default function WhatsAppFab({ href = WA_DEFAULT }: { href?: string }) {
  const [visible, setVisible]   = useState(false)
  const [tooltip, setTooltip]   = useState(true)

  /* Show FAB after scrolling 300px */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Auto-hide tooltip after 4s */
  useEffect(() => {
    const t = setTimeout(() => setTooltip(false), 4000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {tooltip && (
        <div className="relative flex items-center gap-2 bg-white rounded-2xl
                        shadow-hover border border-neutral-100 px-4 py-2.5 pr-8 max-w-[220px]">
          <p className="text-neutral-700 text-sm font-medium leading-snug">
            Agende sua consulta agora! 👋
          </p>
          <button
            onClick={() => setTooltip(false)}
            className="absolute top-1.5 right-1.5 p-0.5 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-3 h-3 text-neutral-400" />
          </button>
          {/* Tail */}
          <span
            className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-b border-r
                       border-neutral-100 rotate-45"
            aria-hidden
          />
        </div>
      )}

      {/* Main FAB button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-emerald-500 shadow-hover
                   flex items-center justify-center
                   hover:bg-emerald-600 hover:scale-110 active:scale-95
                   transition-all duration-300"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30"
          aria-hidden
        />
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </a>
    </div>
  )
}
