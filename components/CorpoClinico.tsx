'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, MessageCircle, ChevronRight, ChevronDown, Monitor, MapPin, Search, Star } from 'lucide-react'
import {
  type Prof,
  equipeVisivel,
  profissionais as todosProfissionais,
  slugify,
  FUNDADOR_NOME,
} from '@/lib/profissionais'

// Corpo clínico filtrável = equipe visível (44, sem o fundador).
const profissionais = equipeVisivel
// Fundador tem card em destaque próprio, linkando para /luciano-noceti-e-vieira.
const fundador = todosProfissionais.find(p => p.nome === FUNDADOR_NOME)

const WA_BASE = 'https://wa.me/5548998056893'
function waLink(nome: string) {
  const primeiroNome = nome.split(' ')[0]
  const artigo = primeiroNome.toLowerCase().endsWith('a') ? 'a' : 'o'
  const texto = `Olá, venho do site e tenho interesse em realizar um agendamento com ${artigo} profissional ${nome}. Poderia me auxiliar?`
  return `${WA_BASE}?text=${encodeURIComponent(texto)}`
}

/* ─── Ordem fixa dos filtros ──────────────────────────────── */
const ORDEM_FILTROS = ['Psicanálise', 'TCC', 'Neuropsicologia', 'TEA', 'Gestalt', 'Existencialismo', 'Transpessoal', 'Junguiana', 'Sistêmica Familiar', 'Psicodrama']

// Mapeamento de rótulo de filtro → valor interno nos dados
const FILTRO_MAP: Record<string, string> = { 'TEA': 'ABA' }

/* ─── Foto com fallback ───────────────────────────────────── */
function Foto({ src, nome, className }: { src: string; nome: string; className: string }) {
  const [err, setErr] = useState(false)
  const initials = nome.split(' ').filter((_, i, a) => i === 0 || i === a.length - 1).map(p => p[0]).join('').toUpperCase()
  if (err) return (
    <div className={`${className} bg-[#F4E6E9] flex items-center justify-center`}>
      <span className="font-serif font-bold text-[#7C2C3B]" style={{ fontSize: 'clamp(1rem,4cqw,1.5rem)' }}>{initials}</span>
    </div>
  )
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image src={src} alt={`Foto de ${nome}`} fill className="object-cover"
        onError={() => setErr(true)} sizes="120px" loading="lazy" />
    </div>
  )
}

/* ─── Utilitário: detecta modalidade a partir do campo publico ── */
function detectarModalidade(publico: string) {
  const texto = publico.toLowerCase()
  return {
    online:     /on.?line/.test(texto),
    presencial: /presencial/.test(texto),
  }
}

/* ─── Selos de modalidade ─────────────────────────────────── */
function SelosModalidade({ publico }: { publico: string }) {
  const { online, presencial } = detectarModalidade(publico)
  if (!online && !presencial) return null
  return (
    <div className="flex flex-wrap justify-center gap-1 pt-1">
      {online && (
        <span className="inline-flex items-center gap-1 rounded-full text-[10px] px-2 py-0.5
                         font-semibold bg-sky-50 text-sky-600 border border-sky-100">
          <Monitor className="w-2.5 h-2.5" />
          Online
        </span>
      )}
      {presencial && (
        <span className="inline-flex items-center gap-1 rounded-full text-[10px] px-2 py-0.5
                         font-semibold bg-[#F4E6E9] text-[#7C2C3B] border border-[#7C2C3B]/20">
          <MapPin className="w-2.5 h-2.5" />
          Presencial
        </span>
      )}
    </div>
  )
}

/* ─── Modal ───────────────────────────────────────────────── */
function Modal({ p, onClose }: { p: Prof; onClose: () => void }) {
  const [fotoExpandida, setFotoExpandida] = useState(false)

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (fotoExpandida) setFotoExpandida(false)
        else onClose()
      }
    }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose, fotoExpandida])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose} role="dialog" aria-modal="true" aria-label={`Perfil de ${p.nome}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden />

      <div
        className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl
                   shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header fixo */}
        <div className="flex-shrink-0 bg-[#FBF0F1] rounded-t-3xl sm:rounded-t-3xl px-5 pt-5 pb-4">
          {/* Drag handle mobile */}
          <div className="w-10 h-1 bg-[#7C2C3B]/20 rounded-full mx-auto mb-4 sm:hidden" />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white
                       flex items-center justify-center shadow transition-colors z-10"
            aria-label="Fechar modal">
            <X className="w-4 h-4 text-neutral-500" />
          </button>

          {/* Foto + acesso à landing page, lado a lado no desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={() => setFotoExpandida(true)}
              className="rounded-full focus:outline-none focus:ring-2 focus:ring-[#7C2C3B]/40 hover:opacity-90 transition-opacity flex-shrink-0"
              aria-label={`Ver foto de ${p.nome} em tamanho real`}
            >
              <Foto src={p.foto} nome={p.nome}
                className="w-32 h-32 rounded-full border-4 border-white shadow-md" />
            </button>

            <Link
              href={`/perfil/${slugify(p.nome)}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5
                         bg-[#7C2C3B] text-white text-xs font-bold shadow-sm
                         hover:bg-[#963347] transition-colors text-center"
            >
              Acessar página do profissional
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            </Link>
          </div>

          <div className="text-center mt-3">
            <h3 className="font-serif font-bold text-[#7C2C3B] text-base leading-tight">{p.nome}</h3>
            <p className="text-[#7C2C3B] text-xs font-semibold mt-0.5 opacity-80">Psicólogo(a) · {p.registro}</p>
            <p className="text-neutral-600 text-xs mt-1 font-medium">{p.metodo}</p>
            <div className="mt-1.5">
              <SelosModalidade publico={p.publico} />
            </div>
          </div>
        </div>

        {/* Corpo com scroll */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 space-y-5">

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Formação</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.formacao}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Público atendido</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.publico}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Demandas</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.demandas}</p>
          </div>

          <div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Convênios aceitos</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{p.atendimento}</p>
          </div>
        </div>

        {/* Botão de agendamento — fixo fora do scroll, sempre visível */}
        <div className="flex-shrink-0 px-5 py-4 border-t border-neutral-100 bg-white rounded-b-3xl">
          <a href={waLink(p.nome)} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp justify-center w-full">
            <MessageCircle className="w-4 h-4" />
            Agendar com {p.nome.split(' ')[0]}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {fotoExpandida && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onClick={() => setFotoExpandida(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto de ${p.nome} em tamanho real`}
        >
          <button
            onClick={() => setFotoExpandida(false)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30
                       flex items-center justify-center transition-colors"
            aria-label="Fechar foto"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.foto}
            alt={`Foto de ${p.nome}`}
            className="w-[280px] h-[460px] object-cover rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

/* ─── Card ────────────────────────────────────────────────────
   É um <Link> real para /perfil/{slug} (âncora presente no HTML de
   servidor, essencial para SEO). O clique simples abre o modal;
   Ctrl/Cmd+clique e botão do meio seguem abrindo a página normalmente.
──────────────────────────────────────────────────────────────── */
function Card({ p, display, onOpen }: { p: Prof; display: string; onOpen: () => void }) {
  return (
    <Link
      href={`/perfil/${slugify(p.nome)}`}
      onClick={e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        onOpen()
      }}
      className={`${display} flex-col items-center text-center bg-[#FAF0F2] rounded-xl border border-[#7C2C3B]/40
                 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#7C2C3B]/60
                 transition-all duration-300 p-5 gap-3`}
    >
      <Foto src={p.foto} nome={p.nome}
        className="w-20 h-20 rounded-full border-4 border-[#F4E6E9]" />
      <div className="w-full space-y-0.5">
        <h3 className="font-serif font-bold text-[#7C2C3B] text-sm leading-tight line-clamp-2">{p.nome}</h3>
        <p className="text-[11px] font-semibold text-[#7C2C3B] opacity-60">Psicólogo(a) · {p.registro}</p>
        <p className="text-[11px] text-neutral-500 leading-snug line-clamp-2">{p.metodo}</p>
        <SelosModalidade publico={p.publico} />
        {(p.filtros as readonly string[]).includes('AC') && (
          <span
            title="Análise do Comportamento Clínico"
            className="inline-flex items-center rounded-full text-[10px] px-2 py-0.5
                       font-semibold bg-teal-50 text-teal-700 border border-teal-200">
            AC
          </span>
        )}
      </div>
      <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#7C2C3B] mt-auto">
        Ver perfil <ChevronRight className="w-3 h-3" />
      </span>
    </Link>
  )
}

/* ─── Visibilidade colapsada: mostra 6 no mobile / 10 no desktop, resto oculto por CSS ── */
function classeVisibilidade(colapsado: boolean, i: number): string {
  if (!colapsado) return 'flex'
  if (i < 6) return 'flex'
  if (i < 10) return 'hidden xl:flex'
  return 'hidden'
}

/* ─── Seção principal ─────────────────────────────────────── */
export default function CorpoClinico() {
  const [filtro, setFiltro] = useState('Todos')
  const [busca, setBusca] = useState('')
  const [aberto, setAberto] = useState<Prof | null>(null)
  const [expandido, setExpandido] = useState(false)
  const fechar = useCallback(() => setAberto(null), [])

  const filtros = useMemo(() => {
    const set = new Set<string>()
    profissionais.forEach(p => p.filtros.forEach(f => set.add(f)))
    return ['Todos', ...ORDEM_FILTROS.filter(f => set.has(FILTRO_MAP[f] ?? f))]
  }, [])

  const visíveis = useMemo(() => {
    return profissionais.filter(p => {
      const filtroInterno = FILTRO_MAP[filtro] ?? filtro
      const okFiltro = filtro === 'Todos' || (p.filtros as readonly string[]).includes(filtroInterno)
      const okBusca = busca === '' ||
        p.nome.toLowerCase().includes(busca.toLowerCase()) ||
        p.metodo.toLowerCase().includes(busca.toLowerCase()) ||
        p.demandas.toLowerCase().includes(busca.toLowerCase())
      return okFiltro && okBusca
    })
  }, [filtro, busca])

  // Sem filtro/busca ativos → colapsado (mostra 6/10, resto oculto por CSS até expandir).
  const semFiltroAtivo = filtro === 'Todos' && busca === ''
  const colapsado = semFiltroAtivo && !expandido
  const mostrarBotaoExpandir = semFiltroAtivo && visíveis.length > 6

  return (
    <section id="equipe" className="section-padding bg-slate-50">
      <div className="container-max">

        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <span className="inline-block text-[#7C2C3B] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Profissionais
          </span>
          <h2 className="heading-primary text-3xl sm:text-4xl">Nosso Corpo Clínico</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#7C2C3B] mx-auto" />
          <p className="mt-5 text-body text-sm md:text-base max-w-xl mx-auto">
            {profissionais.length} profissionais qualificados e comprometidos com a sua saúde mental.
            Clique em qualquer card para ver o perfil completo.
          </p>
        </div>

        {/* Fundador — card em destaque (Responsável Técnico) */}
        {fundador && (
          <div className="max-w-2xl mx-auto mb-10">
            <Link
              href="/luciano-noceti-e-vieira"
              className="group flex items-center gap-4 sm:gap-5 bg-[#1A0B0E] rounded-2xl p-5 sm:p-6
                         shadow-md hover:shadow-lg transition-all"
            >
              <Foto src={fundador.foto} nome={fundador.nome}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#B8883A]/30 flex-shrink-0" />
              <div className="flex-1 min-w-0 text-left">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.18em] uppercase text-[#B8883A] mb-1">
                  <Star className="w-3 h-3" /> Responsável Técnico
                </span>
                <h3 className="font-serif font-bold text-white text-base sm:text-lg leading-tight">{fundador.nome}</h3>
                <p className="text-white/55 text-xs mt-0.5 line-clamp-1">{fundador.metodo} · {fundador.registro}</p>
              </div>
              <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#B8883A] flex-shrink-0
                               transition-transform group-hover:translate-x-0.5">
                Ver perfil <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        )}

        {/* Busca */}
        <div className="relative max-w-sm mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por nome, método ou demanda..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-neutral-200
                       text-sm text-neutral-700 placeholder:text-neutral-400
                       focus:outline-none focus:border-[#7C2C3B] focus:ring-2 focus:ring-[#7C2C3B]/20
                       transition-all"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filtros.map(f => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                ${filtro === f
                  ? 'bg-[#7C2C3B] text-white border-[#7C2C3B] shadow-md'
                  : 'bg-white text-[#7C2C3B] border-[#7C2C3B]/30 hover:border-[#7C2C3B] hover:bg-[#FBF0F1]'
                }`}
            >
              {f}
              {f !== 'Todos' && (
                <span className={`ml-1.5 text-[10px] ${filtro === f ? 'opacity-70' : 'opacity-50'}`}>
                  ({profissionais.filter(p => (p.filtros as readonly string[]).includes(FILTRO_MAP[f] ?? f)).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Contador */}
        <p className="text-center text-neutral-400 text-xs mb-6">
          {visíveis.length === profissionais.length
            ? `${profissionais.length} profissionais`
            : `${visíveis.length} de ${profissionais.length} profissionais`}
        </p>

        {/* Grid — todos os cards existem no HTML; excedentes ocultos por CSS quando colapsado */}
        {visíveis.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {visíveis.map((p, i) => (
                <Card
                  key={p.registro + p.nome}
                  p={p}
                  display={classeVisibilidade(colapsado, i)}
                  onOpen={() => setAberto(p)}
                />
              ))}
            </div>

            {/* Botão expandir — só aparece quando não há filtro/busca ativos */}
            {mostrarBotaoExpandir && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setExpandido(!expandido)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                             border-2 border-[#7C2C3B]/40 text-[#7C2C3B] text-sm font-semibold
                             hover:border-[#7C2C3B] hover:bg-[#FBF0F1]
                             transition-all duration-200"
                >
                  {expandido
                    ? 'Ver menos'
                    : `Ver todos os ${visíveis.length} profissionais`}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200
                                            ${expandido ? 'rotate-180' : ''}`} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 text-neutral-400">
            <p className="text-sm">Nenhum profissional encontrado.</p>
            <button onClick={() => { setFiltro('Todos'); setBusca('') }}
              className="mt-3 text-[#7C2C3B] text-xs font-semibold hover:underline">
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {aberto && <Modal p={aberto} onClose={fechar} />}
    </section>
  )
}
