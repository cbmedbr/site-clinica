'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export type MembroEquipe = {
  nome: string
  registro: string
  metodo: string
  foto: string
  slug: string
}

// Mostra os primeiros profissionais e um botão para expandir a equipe completa
// sem sair da página. O perfil abre em nova aba para a landing continuar aberta.
export default function EquipeExpansivel({
  membros,
  inicial = 6,
}: {
  membros: MembroEquipe[]
  inicial?: number
}) {
  const [aberto, setAberto] = useState(false)
  const visiveis = aberto ? membros : membros.slice(0, inicial)
  const restantes = membros.length - inicial

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visiveis.map(p => (
          <a
            key={p.slug}
            href={`/perfil/${p.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl p-4 h-full transition-shadow hover:shadow-md"
            style={{ background: '#FAF7F4', border: '1px solid rgba(124,44,59,0.1)' }}
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0" style={{ background: '#F4E6E9' }}>
              <Image src={p.foto} alt={p.nome} fill sizes="56px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="font-serif font-bold text-sm leading-snug">{p.nome}</p>
              <p className="text-[11px] font-semibold" style={{ color: 'rgba(124,44,59,0.6)' }}>{p.registro}</p>
              <p className="text-xs leading-snug" style={{ color: '#7a5a5e' }}>{p.metodo}</p>
            </div>
          </a>
        ))}
      </div>

      {restantes > 0 && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setAberto(v => !v)}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all hover:opacity-90"
            style={{ color: '#7C2C3B', border: '1.5px solid #7C2C3B', background: 'white' }}
            aria-expanded={aberto}
          >
            {aberto ? 'Mostrar menos' : `Ver equipe completa (+${restantes})`}
            <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: aberto ? 'rotate(180deg)' : 'none' }} />
          </button>
        </div>
      )}
    </>
  )
}
