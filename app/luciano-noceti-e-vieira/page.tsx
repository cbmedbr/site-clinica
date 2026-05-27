import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, MapPin, Monitor, ArrowLeft, Instagram, Linkedin } from 'lucide-react'
import DevNav from '@/components/DevNav'

export const metadata: Metadata = {
  title: 'Luciano Noceti e Vieira | Psicanalista em Florianópolis — CRP 12/02627',
  description:
    'Psicólogo e psicanalista com 25 anos de experiência em Florianópolis. Atendimento presencial e online. Psicanálise Freudo-Lacaniana. Agende sua consulta.',
  keywords:
    'Luciano Noceti, psicanalista Florianópolis, psicanálise, CRP 12/02627',
  openGraph: {
    title: 'Luciano Noceti e Vieira | Psicanalista',
    description: '25 anos de Psicanálise Freudo-Lacaniana. Florianópolis.',
    type: 'profile',
    locale: 'pt_BR',
  },
}

/* ─── Links e contato ─── */
const INSTAGRAM_URL = 'https://instagram.com/clinicalucianonoceti'
const LINKEDIN_URL: string | null = null
const WA_LINK =
  'https://wa.me/5548998056893?text=' +
  encodeURIComponent(
    'Olá, venho do site e tenho interesse em realizar um agendamento com o profissional Luciano Noceti e Vieira. Poderia me auxiliar?'
  )

/* ─── Campos condicionais — null = seção não renderiza ─── */
const MANIFESTO: string | null = null

const POS_GRADUACOES: Array<{
  tipo: string; curso: string; instituicao: string; ano: string
}> | null = null

const ABORDAGEM_NOME = 'Psicanálise Freudo-Lacaniana'
const ABORDAGEM_EXPLICADA: string | null = null

/* ─── Config global da clínica — sempre renderiza ─── */
const PRIMEIRA_SESSAO_PASSOS = [
  'Você entra em contato pelo WhatsApp ou formulário',
  'Agendamos um horário que funcione para você',
  'Na primeira sessão, conversamos sobre o que te trouxe até aqui — sem julgamentos',
]

const DEMANDAS = [
  { categoria: 'Ansiedade & Humor', itens: ['Ansiedade', 'Depressão', 'Transtorno Bipolar', 'TOC', 'Síndrome do Pânico', 'Estresse', 'Burnout', 'Estresse Pós-Traumático', 'Fobia Social', 'Fobias e Medos'] },
  { categoria: 'Traumas & Violências', itens: ['Traumas', 'Violências sexuais', 'TEPT', 'Suicídio', 'Borderline', 'Dor emocional'] },
  { categoria: 'Identidade & Relações', itens: ['Sexualidade e Identidade de Gênero', 'Conflitos conjugais', 'Divórcio e família', 'Pais em adoção', 'Questões de gênero'] },
  { categoria: 'Comportamento & Saúde', itens: ['TDAH', 'Dependência química', 'Alcoolismo', 'Compulsões', 'Obesidade', 'Transtornos alimentares', 'Transtornos do sono', 'Sintomas psicossomáticos', 'Esquizofrenia', 'Paranoia'] },
  { categoria: 'Ciclos de Vida', itens: ['Infância e adolescência', 'Preparação para aposentadoria', 'Aprendizagem'] },
  { categoria: 'Avaliações', itens: ['Avaliação Psicológica', 'Avaliação bariátrica', 'Laqueadura/vasectomia', 'Orientação profissional'] },
]

const CONVENIOS = [
  'Unimed', 'Cartão Acesso + Fácil', 'Saúde Caixa', 'SC Saúde', 'Saudesc',
  'GEAP', 'CELOS', 'Elosaúde', 'ABEPOM', 'CASACARESC', 'Sim Saúde', 'Fusex', 'Particular',
]

export default function LucianoPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <style>{`
        html { scrollbar-color: #000 #f5f5f5; scrollbar-width: thin; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f5f5f5; }
        ::-webkit-scrollbar-thumb { background: #000; border-radius: 4px; }
      `}</style>

      {/* ── Barra topo ── */}
      <div className="bg-[#7C2C3B] text-white text-center py-2 px-4">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-medium opacity-80 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-3 h-3" />
          Voltar para a Clínica Luciano Noceti
        </Link>
      </div>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative py-10 px-4 sm:px-6 overflow-hidden">
        <Image
          src="/hero_landing_page.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.15) 100%)' }} />
        <div className="relative max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-7">

          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white"
              style={{ boxShadow: '0 0 0 5px rgba(124,44,59,0.12), 0 12px 40px rgba(0,0,0,0.14)' }}>
              <Image src="/equipe/luciano_psico.avif" alt="Foto de Luciano Noceti e Vieira, psicanalista"
                fill className="object-cover" priority sizes="176px" />
            </div>
          </div>

          {/* Texto */}
          <div className="text-center sm:text-left flex-1">
            <span className="inline-block text-[#7C2C3B] text-[10px] font-bold tracking-[0.22em] uppercase mb-1">
              Psicólogo · Psicanalista · CRP 12/02627
            </span>
            <h1 className="font-serif font-bold text-slate-800 text-3xl sm:text-4xl leading-tight">
              Luciano <span className="text-[#7C2C3B]">Noceti e Vieira</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium mt-1 mb-3">
              Psicanálise Freudo-Lacaniana · 25 anos de experiência
            </p>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
              <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold bg-[#F4E6E9] text-[#7C2C3B] border border-[#7C2C3B]/20">
                <MapPin className="w-3 h-3" /> Presencial — Florianópolis
              </span>
              <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                <Monitor className="w-3 h-3" /> Online
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center sm:justify-start">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                aria-label="Agendar consulta com Luciano Noceti via WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02]"
                style={{ background: '#7C2C3B', boxShadow: '0 2px 12px rgba(124,44,59,0.3)' }}>
                <MessageCircle className="w-4 h-4" />
                Agendar consulta via WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                aria-label="Instagram da Clínica Luciano Noceti"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#7C2C3B] border-2 border-[#7C2C3B]/30 hover:border-[#7C2C3B] hover:bg-[#FBF0F1] transition-all">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="Perfil LinkedIn de Luciano Noceti e Vieira"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#0A66C2] border-2 border-[#0A66C2]/30 hover:border-[#0A66C2] hover:bg-blue-50 transition-all">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MANIFESTO (condicional)
      ══════════════════════════════════════════════ */}
      {MANIFESTO && (
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-[700px] mx-auto text-center">
            <span className="block font-serif text-[#7C2C3B] text-6xl leading-none mb-2 select-none">&ldquo;</span>
            <p className="font-serif text-slate-700 text-xl sm:text-2xl leading-relaxed italic">
              {MANIFESTO}
            </p>
            <span className="block font-serif text-[#7C2C3B] text-6xl leading-none mt-2 select-none" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>&ldquo;</span>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          STATS + SOBRE (seção unificada)
      ══════════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* Stats strip */}
          <div className="grid grid-cols-4 gap-3 mb-8 p-4 rounded-2xl"
            style={{ background: '#7C2C3B' }}>
            {[
              { v: '25+', l: 'anos de carreira' },
              { v: 'UFSC', l: 'graduação' },
              { v: '1999', l: 'em atividade desde' },
              { v: '6', l: 'perfis atendidos' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="font-serif font-bold text-white text-xl sm:text-2xl">{v}</div>
                <div className="text-white/55 text-[10px] mt-0.5 leading-tight">{l}</div>
              </div>
            ))}
          </div>

          {/* Formação + Atendimento lado a lado */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Formação */}
            <div className="bg-[#FBF0F1] rounded-2xl p-5 border border-[#7C2C3B]/10">
              <p className="text-[10px] font-bold text-[#7C2C3B] uppercase tracking-widest mb-3">Formação</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Graduação em Psicologia na UFSC desde 14/09/1999, com formação em Psicanálise pela escola Maiêutica
                Florianópolis Instituição Psicanalítica. Com 25 anos de carreira, foi professor pela Escola Maiêutica,
                Palestrante e Consultor de empresas.
              </p>
              {POS_GRADUACOES && POS_GRADUACOES.length > 0 && (
                <ul className="mt-3 space-y-1 border-t border-[#7C2C3B]/10 pt-3">
                  {POS_GRADUACOES.map((pg, i) => (
                    <li key={i} className="text-xs text-slate-500 leading-snug">
                      <span className="font-semibold text-slate-600">{pg.tipo}</span>
                      {' '}em {pg.curso} —{' '}
                      <span className="text-slate-400">{pg.instituicao} ({pg.ano})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Atendimento */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-neutral-100">
              <p className="text-[10px] font-bold text-[#7C2C3B] uppercase tracking-widest mb-3">Atendimento</p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-lg bg-[#F4E6E9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7C2C3B]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Presencial</p>
                    <p className="text-xs text-slate-500 leading-relaxed">Rua Felipe Schmidt, 515 — Ed. Pórtico, Sala 204<br />Centro, Florianópolis — SC</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Monitor className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Online</p>
                    <p className="text-xs text-slate-500">Para todo o Brasil, via videochamada</p>
                  </div>
                </div>
                <div className="pt-1 border-t border-neutral-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Público</p>
                  <p className="text-xs text-slate-600">Crianças (10+), Adolescentes, Adultos, Idosos, Casais e Grupos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABORDAGEM (condicional)
      ══════════════════════════════════════════════ */}
      {ABORDAGEM_EXPLICADA && (
        <section className="py-8 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FBF0F1] rounded-2xl p-6 border border-[#7C2C3B]/10">
              <p className="text-[10px] font-bold text-[#7C2C3B] uppercase tracking-widest mb-2">
                Abordagem terapêutica
              </p>
              <p className="font-serif font-bold text-slate-800 text-lg mb-3">{ABORDAGEM_NOME}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{ABORDAGEM_EXPLICADA}</p>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          ÁREAS DE ATUAÇÃO — tag cloud flat
      ══════════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold text-[#7C2C3B] uppercase tracking-widest mb-4 text-center">
            Áreas de atuação
          </p>
          <div className="space-y-4">
            {DEMANDAS.map(({ categoria, itens }) => (
              <div key={categoria}>
                <p className="text-[10px] font-bold text-[#7C2C3B] uppercase tracking-widest mb-2">{categoria}</p>
                <div className="flex flex-wrap gap-1.5">
                  {itens.map((item) => (
                    <span key={item}
                      className="inline-block rounded-full bg-white border border-[#7C2C3B]/12 text-neutral-600 text-xs px-3 py-1 font-medium shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRIMEIRA SESSÃO (sempre renderiza)
      ══════════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold text-[#7C2C3B] uppercase tracking-widest mb-4 text-center">
            Como é a primeira sessão
          </p>
          <div className="bg-slate-50 rounded-2xl p-6 border border-neutral-100 shadow-sm max-w-xl mx-auto">
            <ol className="space-y-4">
              {PRIMEIRA_SESSAO_PASSOS.map((passo, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: '#7C2C3B' }}>
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed pt-0.5">{passo}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONVÊNIOS + CTA (seção unificada)
      ══════════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold text-[#7C2C3B] uppercase tracking-widest mb-3 text-center">
            Convênios aceitos
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CONVENIOS.map((c) => (
              <span key={c}
                className="inline-block rounded-full bg-white text-[#7C2C3B] text-xs px-3.5 py-1 font-medium border border-[#7C2C3B]/15">
                {c}
              </span>
            ))}
          </div>

          {/* CTA inline */}
          <div className="rounded-2xl p-6 text-center"
            style={{ background: 'linear-gradient(135deg, #6B2235 0%, #7C2C3B 60%, #963347 100%)' }}>
            <p className="font-serif font-bold text-white text-xl sm:text-2xl mb-1">Pronto para começar?</p>
            <p className="text-white/70 text-sm mb-4">Entre em contato e agende sua primeira consulta.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                aria-label="Agendar consulta com Luciano Noceti via WhatsApp"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#7C2C3B] font-bold rounded-full px-6 py-2.5 text-sm hover:bg-[#FEF8E6] transition-colors shadow-md">
                <MessageCircle className="w-4 h-4" />
                Agendar via WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                aria-label="Instagram da Clínica Luciano Noceti"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-white/20 border border-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <DevNav currentPath="/luciano-noceti-e-vieira" />

      {/* ── Rodapé ── */}
      <footer className="bg-neutral-900 py-5 px-4 text-center">
        <p className="text-neutral-500 text-xs">
          © {new Date().getFullYear()} Clínica Luciano Noceti · Rua Felipe Schmidt, 515, Centro — Florianópolis, SC ·{' '}
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
            Ver todos os profissionais
          </Link>
        </p>
        <p className="text-neutral-600 text-[10px] mt-1.5">
          Sigilo profissional garantido conforme o Código de Ética do Psicólogo (CFP).{' '}
          <Link href="/politica-de-privacidade" className="underline hover:text-neutral-400 transition-colors">
            Política de Privacidade
          </Link>
        </p>
      </footer>

    </div>
  )
}
