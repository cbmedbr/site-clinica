import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Monitor, ArrowLeft } from 'lucide-react'
import DevNav from '@/components/DevNav'
import ScrollReveal from '@/components/ScrollReveal'
import { WhatsAppIcon, InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'
import { gerarProfissionalLD } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Luciano Noceti e Vieira | Psicanalista em Florianópolis, CRP 12/02627',
  description:
    'Psicólogo e psicanalista com 25 anos de experiência em Florianópolis. Atendimento presencial e online. Psicanálise Freudo-Lacaniana. Agende sua consulta.',
  keywords: 'Luciano Noceti, psicanalista Florianópolis, psicanálise, CRP 12/02627',
  alternates: {
    canonical: '/luciano-noceti-e-vieira',
  },
  openGraph: {
    title: 'Luciano Noceti e Vieira | Psicanalista',
    description: '25 anos de Psicanálise Freudo-Lacaniana. Florianópolis.',
    type: 'profile',
    locale: 'pt_BR',
    url: 'https://www.lucianonoceti.com.br/luciano-noceti-e-vieira',
    siteName: 'Clínica Luciano Noceti',
  },
}

const INSTAGRAM_URL = 'https://instagram.com/clinicalucianonoceti'
const LINKEDIN_URL: string | null = null
const WA_LINK =
  'https://wa.me/5548998056893?text=' +
  encodeURIComponent(
    'Olá, venho do site e tenho interesse em realizar um agendamento com o profissional Luciano Noceti e Vieira. Poderia me auxiliar?'
  )

const MANIFESTO: string | null = null

const POS_GRADUACOES: Array<{ tipo: string; curso: string; instituicao: string; ano: string }> | null = null

const ABORDAGEM_NOME = 'Psicanálise Freudo-Lacaniana'
const ABORDAGEM_EXPLICADA: string | null =
  'A Psicanálise Freudo-Lacaniana parte da escuta singular de cada sujeito para compreender o que está por trás dos sintomas, não como defeitos a corrigir, mas como mensagens do inconsciente que pedem decifração. Com Jacques Lacan, a psicanálise se renova: a linguagem ocupa o centro, e o trabalho clínico revela como nossa história, nossas palavras e nossos vínculos moldam quem somos. O espaço analítico permite falar livremente, sem julgamentos, e descobrir novas possibilidades de ser e de se relacionar.'

const PRIMEIRA_SESSAO_PASSOS = [
  'Você entra em contato pelo WhatsApp ou formulário',
  'Agendamos um horário que funcione para você',
  'Na primeira sessão, conversamos sobre o que te trouxe até aqui, sem julgamentos',
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

const lucianoLD = gerarProfissionalLD(
  {
    nome: 'Luciano Noceti e Vieira', registro: 'CRP 12/02627',
    metodo: 'Psicanálise Freudo-Lacaniana',
    filtros: ['Psicanálise'], formacao: '', publico: '', demandas: '',
    atendimento: '', foto: '/equipe/luciano_psico.avif',
  },
  'luciano-noceti-e-vieira',
)

export default function LucianoPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#FAF7F4', color: '#2D1A1E' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lucianoLD) }}
      />
      <style>{`
        html { scrollbar-color: #7C2C3B #FAF7F4; scrollbar-width: thin; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #FAF7F4; }
        ::-webkit-scrollbar-thumb { background: #7C2C3B; border-radius: 3px; }
        .tag-pill { transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease; }
        .tag-pill:hover { background: #7C2C3B; color: white; border-color: #7C2C3B; }
        .btn-ghost-white { transition: border-color 0.18s ease, color 0.18s ease; }
        .btn-ghost-white:hover { border-color: rgba(255,255,255,0.5) !important; color: white !important; }
      `}</style>

      {/* ── Barra topo ── */}
      <div style={{ background: '#1A0B0E' }} className="py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Clínica Luciano Noceti
          </Link>
          <span className="text-white/30 text-[10px] font-mono tracking-wide">CRP 12/02627</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          HERO — dark cinematic
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '480px' }}>
        <Image
          src="/hero_landing_page.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(26,11,14,0.81) 0%, rgba(26,11,14,0.73) 45%, rgba(26,11,14,0.35) 75%, rgba(26,11,14,0.05) 100%)' }}
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-center gap-10">

          {/* Foto */}
          <div className="order-first sm:order-last flex-shrink-0">
            <div
              className="relative w-36 h-36 sm:w-52 sm:h-52 overflow-hidden"
              style={{
                borderRadius: '18px',
                boxShadow: '0 0 0 3px rgba(184,136,58,0.4), 0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src="/equipe/luciano_psico.avif"
                alt="Foto de Luciano Noceti e Vieira, psicanalista"
                fill
                className="object-cover"
                priority
                sizes="208px"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 text-white text-center sm:text-left">
            <span
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase mb-3"
              style={{ color: '#B8883A' }}
            >
              Psicólogo · Psicanalista · CRP 12/02627
            </span>

            <h1 className="font-serif font-bold leading-tight mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Luciano{' '}
              <span style={{ color: '#E8B97A' }}>Noceti e Vieira</span>
            </h1>

            <p className="text-white/60 text-sm font-medium mb-5">
              Psicanálise Freudo-Lacaniana · 25 anos de experiência
            </p>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(184,136,58,0.15)', color: '#E8B97A', border: '1px solid rgba(184,136,58,0.3)' }}>
                <MapPin className="w-3 h-3" /> Presencial · Florianópolis
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Monitor className="w-3 h-3" /> Online
              </span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center sm:justify-start">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                aria-label="Agendar consulta com Luciano Noceti via WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: '#7C2C3B', color: 'white', boxShadow: '0 4px 20px rgba(124,44,59,0.45)' }}>
                <WhatsAppIcon className="w-4 h-4" />
                Agendar via WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                aria-label="Instagram da Clínica Luciano Noceti"
                className="btn-ghost-white inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{ color: 'rgba(255,255,255,0.75)', border: '1.5px solid rgba(255,255,255,0.2)' }}>
                <InstagramIcon className="w-4 h-4" style={{ color: '#E4405F' }} />
                Instagram
              </a>
              {LINKEDIN_URL ? (
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="Perfil LinkedIn de Luciano Noceti e Vieira"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ color: '#60A5FA', border: '1.5px solid rgba(10,102,194,0.45)' }}>
                  <LinkedInIcon className="w-4 h-4" style={{ color: '#0A66C2' }} />
                  LinkedIn
                </a>
              ) : (
                <span
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold cursor-not-allowed"
                  style={{ color: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.08)' }}
                  title="LinkedIn não informado">
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MANIFESTO (condicional)
      ══════════════════════════════════════════════ */}
      {MANIFESTO && (
        <section className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <div className="w-px h-10 mx-auto mb-6" style={{ background: 'linear-gradient(to bottom, transparent, #B8883A)' }} />
            <p className="font-serif text-xl sm:text-2xl leading-relaxed italic" style={{ color: '#2D1A1E' }}>
              &ldquo;{MANIFESTO}&rdquo;
            </p>
            <div className="w-px h-10 mx-auto mt-6" style={{ background: 'linear-gradient(to bottom, #B8883A, transparent)' }} />
          </ScrollReveal>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════ */}
      <section className="py-8 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, #1A0B0E 0%, #2D1A1E 100%)',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }}
            >
              {[
                { v: '25+', l: 'anos de carreira' },
                { v: 'UFSC', l: 'graduação' },
                { v: '1999', l: 'em atividade desde' },
                { v: '6', l: 'perfis atendidos' },
              ].map(({ v, l }) => (
                <div key={l} className="text-center px-2">
                  <div className="font-serif font-bold text-2xl sm:text-3xl mb-1" style={{ color: '#E8B97A' }}>{v}</div>
                  <div className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.45)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════
          ABORDAGEM TERAPÊUTICA
      ══════════════════════════════════════════════ */}
      {ABORDAGEM_EXPLICADA && (
        <section className="py-14 px-5 sm:px-8" style={{ background: 'white' }}>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="sm:w-48 flex-shrink-0">
                  <div className="w-8 h-px mb-3" style={{ background: '#B8883A' }} />
                  <span className="text-[10px] font-bold tracking-[0.22em] uppercase block mb-2" style={{ color: '#B8883A' }}>
                    Abordagem
                  </span>
                  <p className="font-serif font-bold text-lg leading-snug" style={{ color: '#2D1A1E' }}>{ABORDAGEM_NOME}</p>
                </div>
                <div className="flex-1 sm:pl-8 sm:border-l" style={{ borderColor: 'rgba(184,136,58,0.2)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>{ABORDAGEM_EXPLICADA}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          FORMAÇÃO + ATENDIMENTO
      ══════════════════════════════════════════════ */}
      <section className="py-14 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">

          <ScrollReveal delay={0} direction="left">
            <div className="rounded-2xl p-6 h-full" style={{ background: 'white', border: '1px solid rgba(124,44,59,0.08)', boxShadow: '0 2px 16px rgba(26,11,14,0.05)' }}>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase block mb-4" style={{ color: '#B8883A' }}>Formação</span>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#5a4044' }}>
                Graduação em Psicologia na UFSC desde 14/09/1999, com formação em Psicanálise pela escola Maiêutica
                Florianópolis Instituição Psicanalítica. Com 25 anos de carreira, foi professor pela Escola Maiêutica,
                Palestrante e Consultor de empresas.
              </p>
              {POS_GRADUACOES && POS_GRADUACOES.length > 0 && (
                <ul className="space-y-2 pt-4" style={{ borderTop: '1px solid rgba(124,44,59,0.08)' }}>
                  {POS_GRADUACOES.map((pg, i) => (
                    <li key={i} className="text-xs leading-snug" style={{ color: '#7a5a5e' }}>
                      <span className="font-semibold" style={{ color: '#2D1A1E' }}>{pg.tipo}</span>
                      {' '}em {pg.curso}{' '}
                      <span style={{ color: '#9a7a7e' }}>, {pg.instituicao} ({pg.ano})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} direction="right">
            <div className="rounded-2xl p-6 h-full" style={{ background: 'white', border: '1px solid rgba(124,44,59,0.08)', boxShadow: '0 2px 16px rgba(26,11,14,0.05)' }}>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase block mb-4" style={{ color: '#B8883A' }}>Atendimento</span>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#FAF7F4' }}>
                    <MapPin className="w-3.5 h-3.5" style={{ color: '#7C2C3B' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: '#2D1A1E' }}>Presencial</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#7a5a5e' }}>
                      Rua Felipe Schmidt, 515, Ed. Pórtico, 2º andar, Sala 204<br />
                      Centro, Florianópolis, SC
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#F0F7FF' }}>
                    <Monitor className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: '#2D1A1E' }}>Online</p>
                    <p className="text-xs" style={{ color: '#7a5a5e' }}>Para todo o Brasil, via videochamada</p>
                  </div>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid rgba(124,44,59,0.08)' }}>
                  <p className="text-[10px] font-bold tracking-wider uppercase mb-1.5" style={{ color: '#B8883A' }}>Público</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5a4044' }}>
                    Crianças (a partir de 10 anos), Adolescentes, Adultos, Idosos, Casais e Grupos
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ÁREAS DE ATUAÇÃO
      ══════════════════════════════════════════════ */}
      <section className="py-14 px-5 sm:px-8" style={{ background: '#1A0B0E' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px" style={{ background: '#B8883A' }} />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: '#B8883A' }}>
                Áreas de atuação
              </span>
            </div>
          </ScrollReveal>

          <div className="space-y-7">
            {DEMANDAS.map(({ categoria, itens }, gi) => (
              <ScrollReveal key={categoria} delay={gi * 60}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {categoria}
                </p>
                <div className="flex flex-wrap gap-2">
                  {itens.map((item) => (
                    <span key={item}
                      className="tag-pill inline-block rounded-full text-xs px-3.5 py-1.5 font-medium cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.72)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}>
                      {item}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRIMEIRA SESSÃO — timeline
      ══════════════════════════════════════════════ */}
      <section className="py-14 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px" style={{ background: '#B8883A' }} />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: '#B8883A' }}>
                Como é a primeira sessão
              </span>
            </div>
          </ScrollReveal>

          <div className="max-w-xl mx-auto sm:mx-0">
            <ol className="relative pl-1">
              <div
                className="absolute left-5 top-5"
                style={{
                  width: '1px',
                  bottom: '20px',
                  background: 'linear-gradient(to bottom, #B8883A, rgba(124,44,59,0.15))',
                }}
              />
              {PRIMEIRA_SESSAO_PASSOS.map((passo, i) => (
                <ScrollReveal key={i} delay={i * 120} direction="left">
                  <li className="relative flex gap-5 pb-9 last:pb-0">
                    <div
                      className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: '#7C2C3B', boxShadow: '0 0 0 4px rgba(124,44,59,0.12)' }}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-2.5 flex-1">
                      <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>{passo}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONVÊNIOS
      ══════════════════════════════════════════════ */}
      <section className="py-10 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase block mb-5 text-center" style={{ color: '#B8883A' }}>
              Convênios aceitos
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {CONVENIOS.map((c) => (
                <span key={c}
                  className="inline-block rounded-full text-xs px-3.5 py-1.5 font-medium"
                  style={{ background: 'white', color: '#5a4044', border: '1px solid rgba(124,44,59,0.12)' }}>
                  {c}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#1A0B0E' }}>
        <ScrollReveal className="max-w-5xl mx-auto text-center">
          <div className="w-px h-8 mx-auto mb-8" style={{ background: 'linear-gradient(to bottom, transparent, #B8883A)' }} />
          <p className="font-serif font-bold text-white mb-2" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            Pronto para começar?
          </p>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Entre em contato e agende sua primeira consulta com Luciano.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              aria-label="Agendar consulta com Luciano Noceti via WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: '#7C2C3B', color: 'white', boxShadow: '0 4px 24px rgba(124,44,59,0.4)' }}>
              <WhatsAppIcon className="w-4 h-4" />
              Agendar via WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              aria-label="Instagram da Clínica Luciano Noceti"
              className="btn-ghost-white inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              style={{ color: 'rgba(255,255,255,0.65)', border: '1.5px solid rgba(255,255,255,0.15)' }}>
              <InstagramIcon className="w-4 h-4" style={{ color: '#E4405F' }} />
              Seguir no Instagram
            </a>
          </div>
          <div className="w-px h-8 mx-auto mt-8" style={{ background: 'linear-gradient(to bottom, #B8883A, transparent)' }} />
        </ScrollReveal>
      </section>

      <DevNav currentPath="/luciano-noceti-e-vieira" />

      {/* ── Rodapé ── */}
      <footer style={{ background: '#0E0608' }} className="py-6 px-5 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mb-3">
          <Link href="/" className="text-xs font-medium hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Início</Link>
          <Link href="/#equipe" className="text-xs font-medium hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Nossa Equipe</Link>
          <Link href="/avaliacao-neuropsicologica" className="text-xs font-medium hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Avaliação Neuropsicológica</Link>
        </nav>
        <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Clínica Luciano Noceti · Rua Felipe Schmidt, 515, Centro, Florianópolis, SC
        </p>
        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Sigilo profissional garantido conforme o Código de Ética do Psicólogo (CFP).{' '}
          <Link href="/politica-de-privacidade" className="underline hover:text-white transition-colors">
            Política de Privacidade
          </Link>
        </p>
      </footer>
    </div>
  )
}
