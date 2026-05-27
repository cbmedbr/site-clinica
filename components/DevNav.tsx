'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import { profissionais, slugify } from '@/lib/profissionais'

const PAGES = [
  { nome: 'Luciano Noceti e Vieira', path: '/luciano-noceti-e-vieira' },
  ...profissionais
    .filter(p => p.nome !== 'Luciano Noceti e Vieira')
    .map(p => ({ nome: p.nome, path: `/perfil/${slugify(p.nome)}` })),
]

interface DevNavProps {
  currentPath: string
}

export default function DevNav({ currentPath }: DevNavProps) {
  if (process.env.NODE_ENV !== 'development') return null

  const router = useRouter()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const idx = PAGES.findIndex(p => p.path === currentPath)
  const prev = idx > 0 ? PAGES[idx - 1] : null
  const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null
  const current = PAGES[idx]

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}
      className="flex items-stretch shadow-2xl rounded-t-xl overflow-visible"
      ref={dropdownRef}
    >
      {/* Dropdown — abre para cima */}
      {open && (
        <div
          className="absolute bottom-full left-0 right-0 mb-1 bg-neutral-900 border border-neutral-700 rounded-xl overflow-y-auto shadow-2xl"
          style={{ maxHeight: '18rem', minWidth: '320px' }}
        >
          {PAGES.map((page, i) => (
            <button
              key={page.path}
              onClick={() => { router.push(page.path); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                page.path === currentPath
                  ? 'bg-[#7C2C3B] text-white font-semibold'
                  : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <span className="text-neutral-500 text-xs mr-2">{String(i + 1).padStart(2, '0')}</span>
              {page.nome}
            </button>
          ))}
        </div>
      )}

      {/* Barra principal */}
      <div className="flex items-stretch bg-neutral-900/95 backdrop-blur border border-neutral-700 rounded-t-xl text-white text-xs font-medium select-none">

        {/* Prev */}
        <button
          onClick={() => prev && router.push(prev.path)}
          disabled={!prev}
          className="flex items-center gap-1.5 px-4 py-3 hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-tl-xl border-r border-neutral-700"
          title={prev?.nome}
        >
          <ChevronLeft className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="hidden sm:inline max-w-[140px] truncate">{prev?.nome ?? '—'}</span>
        </button>

        {/* Centro — nome atual + toggle dropdown */}
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 px-5 py-3 hover:bg-neutral-800 transition-colors min-w-[180px] justify-center"
        >
          <span className="text-neutral-400 text-[10px] mr-1">{idx + 1}/{PAGES.length}</span>
          <span className="text-white font-semibold truncate max-w-[180px]">{current?.nome ?? '?'}</span>
          {open
            ? <ChevronDown className="w-3.5 h-3.5 flex-shrink-0 text-neutral-400" />
            : <ChevronUp className="w-3.5 h-3.5 flex-shrink-0 text-neutral-400" />
          }
        </button>

        {/* Next */}
        <button
          onClick={() => next && router.push(next.path)}
          disabled={!next}
          className="flex items-center gap-1.5 px-4 py-3 hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-tr-xl border-l border-neutral-700"
          title={next?.nome}
        >
          <span className="hidden sm:inline max-w-[140px] truncate">{next?.nome ?? '—'}</span>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
        </button>
      </div>
    </div>
  )
}
