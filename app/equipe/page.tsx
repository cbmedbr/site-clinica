import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { equipeVisivel, profissionais, slugify, FUNDADOR_NOME } from '@/lib/profissionais'

export const metadata: Metadata = {
  title: 'Nossa Equipe | Corpo Clínico da Clínica Luciano Noceti',
  description:
    'Conheça os psicólogos e psicanalistas da Clínica Luciano Noceti no Centro de Florianópolis. Equipe multidisciplinar com diversas abordagens terapêuticas. Veja o perfil de cada profissional.',
  alternates: {
    canonical: '/equipe',
  },
  openGraph: {
    title: 'Nossa Equipe | Clínica Luciano Noceti',
    description:
      'Corpo clínico completo da Clínica Luciano Noceti — psicólogos e psicanalistas em Florianópolis.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.lucianonoceti.com.br/equipe',
    siteName: 'Clínica Luciano Noceti',
  },
}

const fundador = profissionais.find(p => p.nome === FUNDADOR_NOME)

export default function EquipePage() {
  const equipe = [...equipeVisivel].sort((a, b) =>
    a.nome.localeCompare(b.nome, 'pt-BR'),
  )

  return (
    <div className="min-h-screen font-sans" style={{ background: '#FAF7F4', color: '#2D1A1E' }}>

      {/* ── Barra topo ── */}
      <div style={{ background: '#1A0B0E' }} className="py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Clínica Luciano Noceti
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/avaliacao-neuropsicologica" className="text-white/50 hover:text-white text-xs font-medium transition-colors">
              Avaliação Neuropsicológica
            </Link>
            <Link href="/consultorios" className="text-white/50 hover:text-white text-xs font-medium transition-colors hidden sm:inline">
              Nossos Espaços
            </Link>
          </div>
        </div>
      </div>

      {/* ── Cabeçalho ── */}
      <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-8 text-center">
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: '#B8883A' }}>
          Corpo Clínico
        </span>
        <h1 className="font-serif font-bold mt-3 mb-4" style={{ fontSize: 'clamp(1.9rem, 5vw, 2.8rem)', color: '#2D1A1E' }}>
          Nossa Equipe
        </h1>
        <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#5a4044' }}>
          {equipe.length} psicólogos e psicanalistas dedicados à sua saúde mental, com diversas
          abordagens terapêuticas. Clique em um profissional para ver o perfil completo.
        </p>
      </header>

      {/* ── Fundador em destaque ── */}
      {fundador && (
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-4">
          <Link
            href="/luciano-noceti-e-vieira"
            className="group flex items-center justify-between gap-4 rounded-2xl p-5 sm:p-6 transition-all hover:shadow-lg"
            style={{ background: '#1A0B0E', boxShadow: '0 4px 24px rgba(26,11,14,0.12)' }}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0" style={{ background: 'rgba(184,136,58,0.18)' }}>
                <Star className="w-5 h-5" style={{ color: '#B8883A' }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5" style={{ color: '#B8883A' }}>
                  Responsável Técnico
                </p>
                <p className="font-serif font-bold text-white text-lg leading-tight">{fundador.nome}</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {fundador.metodo} · {fundador.registro}
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: '#B8883A' }} />
          </Link>
        </section>
      )}

      {/* ── Grid de profissionais ── */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 pt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {equipe.map(p => (
            <li key={p.nome}>
              <Link
                href={`/perfil/${slugify(p.nome)}`}
                className="group flex items-center justify-between gap-3 rounded-xl p-4 h-full transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: 'white', border: '1px solid rgba(124,44,59,0.10)' }}
              >
                <div className="min-w-0">
                  <p className="font-serif font-bold text-sm leading-tight" style={{ color: '#7C2C3B' }}>
                    {p.nome}
                  </p>
                  <p className="text-[11px] mt-0.5 leading-snug line-clamp-2" style={{ color: '#8a6a6e' }}>
                    {p.metodo}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-40 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" style={{ color: '#7C2C3B' }} />
              </Link>
            </li>
          ))}
        </ul>
      </main>

      {/* ── Rodapé ── */}
      <footer style={{ background: '#0E0608' }} className="py-8 px-5 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-4">
          <Link href="/" className="text-xs font-medium transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>Início</Link>
          <Link href="/avaliacao-neuropsicologica" className="text-xs font-medium transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>Avaliação Neuropsicológica</Link>
          <Link href="/consultorios" className="text-xs font-medium transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>Nossos Espaços</Link>
          <Link href="/luciano-noceti-e-vieira" className="text-xs font-medium transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>Luciano Noceti e Vieira</Link>
        </nav>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Clínica Luciano Noceti · Rua Felipe Schmidt, 515, Centro, Florianópolis, SC
        </p>
      </footer>
    </div>
  )
}
