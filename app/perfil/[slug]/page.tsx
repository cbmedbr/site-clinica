import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Monitor, ArrowLeft } from 'lucide-react'
import { profissionais, slugify } from '@/lib/profissionais'
import { gerarProfissionalLD } from '@/lib/jsonld'
import DevNav from '@/components/DevNav'
import ScrollReveal from '@/components/ScrollReveal'
import { WhatsAppIcon, InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'

const INSTAGRAM_URL = 'https://instagram.com/clinicalucianonoceti'

const PRIMEIRA_SESSAO_PASSOS = [
  'Você entra em contato pelo WhatsApp ou formulário',
  'Agendamos um horário que funcione para você',
  'Na primeira sessão, conversamos sobre o que te trouxe até aqui, sem julgamentos',
]

/* ─── Abordagem auto-text ─── */
const ABORDAGEM_MAP: Record<string, string> = {
  'Psicanálise': 'A Psicanálise parte da escuta singular de cada sujeito para compreender o que está por trás dos sintomas, não como defeitos a corrigir, mas como mensagens do inconsciente que pedem decifração. O trabalho analítico abre espaço para que você fale livremente, sem julgamentos, e descubra os vínculos entre sua história, seus padrões e seus sofrimentos.',
  'TCC': 'A Terapia Cognitivo-Comportamental (TCC) trabalha com a relação entre pensamentos, emoções e comportamentos: identifica padrões que geram sofrimento e constrói, de forma colaborativa, estratégias práticas e eficazes para mudá-los. Focada no presente, com técnicas claras e resultados mensuráveis.',
  'Neuropsicologia': 'A Neuropsicologia investiga como o funcionamento cerebral se expressa nas capacidades cognitivas: atenção, memória, linguagem, planejamento e aprendizagem. Por meio de avaliações precisas e intervenções baseadas em evidências, orienta tratamentos e adaptações para uma vida mais funcional.',
  'ABA': 'A Análise do Comportamento Aplicada (ABA) é uma abordagem científica que compreende o comportamento em sua relação com o ambiente. Desenvolve habilidades funcionais, sociais e comunicativas de forma estruturada e individualizada, partindo sempre das forças únicas de cada pessoa.',
  'AC': 'A Análise do Comportamento Clínico aplica os princípios da análise do comportamento ao contexto da psicoterapia com adultos. O trabalho terapêutico é conduzido com base em evidências, examinando como padrões de comportamento se formaram ao longo da história de vida e como podem ser transformados no presente, com foco em funcionalidade, autonomia e qualidade de vida.',
  'Gestalt': 'A Gestalt-Terapia convida para uma presença plena no aqui e agora, trabalhando com o que emerge no encontro terapêutico, nas sensações do corpo e nas emoções. Facilita o contato genuíno consigo mesmo, promovendo consciência, responsabilidade e integração.',
  'Junguiana': 'A Psicologia Analítica (Junguiana) explora as camadas profundas da psique: arquétipos, complexos e símbolos. Por meio de sonhos, imagens e narrativas, o processo analítico favorece a individuação, o movimento de tornar-se quem você verdadeiramente é.',
  'Existencialismo': 'A Psicologia Existencialista parte das grandes questões da existência humana: liberdade, responsabilidade, sentido e finitude. Inspirada na filosofia de Sartre, o processo terapêutico convida cada pessoa a se reconhecer como autora de sua própria vida, construindo significado diante das escolhas e dos desafios cotidianos.',
  'Transpessoal': 'A Psicologia Transpessoal amplia o olhar terapêutico para além do ego, integrando dimensões espirituais, estados de consciência e o potencial humano em sua totalidade. O processo acolhe experiências de sentido profundo, transformação e autoconhecimento que transcendem as narrativas cotidianas.',
  'Psicodrama': 'O Psicodrama traz a criatividade e a ação para dentro do espaço terapêutico. Por meio de dramatizações e cenas da vida, é possível reviver e ressignificar experiências de forma viva e transformadora, uma abordagem que fala ao corpo e à emoção.',
  'Sistêmica Familiar': 'A Terapia Sistêmica Familiar compreende cada pessoa inserida em uma rede de relações: família, cultura, história. Os sintomas fazem parte de padrões relacionais que se repetem entre gerações; o trabalho terapêutico revela esses padrões e abre espaço para novas formas de se conectar.',
}

function getAbordagemTexto(filtros: string[], abordagem_explicada?: string | null): string | null {
  if (abordagem_explicada) return abordagem_explicada
  for (const f of filtros) {
    if (ABORDAGEM_MAP[f]) return ABORDAGEM_MAP[f]
  }
  return null
}

/* ─── Categorização automática de demandas ─── */
const CATEGORIAS_CONFIG = [
  { nome: 'Ansiedade & Humor', keywords: ['ansiedade', 'depress', 'bipolar', 'toc', 'transtorno obsessivo', 'panico', 'sindrome do panico', 'fobia', 'estresse', 'burnout', 'esgotamento', 'tept', 'tristeza', 'humor', 'melanc', 'angustia', 'medo', 'preocup', 'obsessao', 'obsessiv', 'compuls'] },
  { nome: 'Traumas & Violências', keywords: ['trauma', 'violencia', 'abuso', 'assedio', 'borderline', 'suicid', 'autolesao', 'automutilacao', 'dor emocional', 'agressao', 'vitima', 'bullying', 'preconceito'] },
  { nome: 'Identidade & Relações', keywords: ['genero', 'sexualidade', 'lgbtq', 'identidade', 'conjugal', 'casal', 'divorcio', 'separacao', 'familia', 'adocao', 'relacionamento', 'amoroso', 'afetiv', 'sexual', 'transicao de genero', 'orientacao sexual'] },
  { nome: 'Comportamento & Saúde', keywords: ['tdah', 'dependencia', 'alcool', 'alimentar', 'sono', 'psicossomatico', 'esquizofrenia', 'paranoia', 'autismo', 'tea', 'aba', 'aprendizagem', 'obesidade', 'imagem corporal', 'psicose', 'emdr', 'neurodesenvolvimento'] },
  { nome: 'Ciclos de Vida', keywords: ['infancia', 'adolescencia', 'crianca', 'aposentadoria', 'idoso', 'envelhecimento', 'luto', 'perda', 'maternidade', 'gestante', 'puerpério', 'puerperio', 'parentalidade', 'orientacao parental', 'perinatal'] },
  { nome: 'Avaliações', keywords: ['avaliacao', 'bariatrica', 'laqueadura', 'vasectomia', 'orientacao profissional', 'pericia', 'readequacao', 'transplante', 'esterilizacao', 'anticoncep'] },
]

function norm(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

// Divide em vírgula/ponto-e-vírgula, mas nunca dentro de parênteses —
// evita fatiar listas como "(anorexia, bulimia)" em tags quebradas.
function splitDemandas(s: string): string[] {
  const partes: string[] = []
  let atual = ''
  let profundidade = 0
  for (const ch of s) {
    if (ch === '(') profundidade++
    if (ch === ')') profundidade = Math.max(0, profundidade - 1)
    if ((ch === ',' || ch === ';') && profundidade === 0) {
      partes.push(atual)
      atual = ''
    } else {
      atual += ch
    }
  }
  if (atual) partes.push(atual)
  return partes
}

function categorizarDemandas(demandas: string) {
  const tags = splitDemandas(demandas.replace(/\.$/, ''))
    .map(s => s.trim())
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .filter(s => s.length > 2)
  const grupos: Record<string, string[]> = {}
  const semCategoria: string[] = []

  for (const tag of tags) {
    const n = norm(tag)
    let found = false
    for (const cat of CATEGORIAS_CONFIG) {
      if (cat.keywords.some(kw => n.includes(kw))) {
        if (!grupos[cat.nome]) grupos[cat.nome] = []
        grupos[cat.nome].push(tag)
        found = true
        break
      }
    }
    if (!found) semCategoria.push(tag)
  }

  const result = CATEGORIAS_CONFIG
    .filter(cat => grupos[cat.nome]?.length)
    .map(cat => ({ categoria: cat.nome, itens: grupos[cat.nome] }))

  if (semCategoria.length > 0) result.push({ categoria: 'Geral', itens: semCategoria })
  return result
}

export function generateStaticParams() {
  return profissionais
    .filter(p => p.nome !== 'Luciano Noceti e Vieira')
    .map(p => ({ slug: slugify(p.nome) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const prof = profissionais.find(p => slugify(p.nome) === params.slug)
  if (!prof) return { title: 'Profissional não encontrado' }
  return {
    title: `${prof.nome} | ${prof.metodo}, ${prof.registro}`,
    description: `${prof.metodo}. ${prof.publico}`,
    keywords: `${prof.nome}, ${prof.metodo}, psicólogo Florianópolis, ${prof.registro}`,
    alternates: {
      canonical: `/perfil/${params.slug}`,
    },
    openGraph: {
      title: `${prof.nome} | ${prof.metodo}`,
      description: prof.publico,
      type: 'profile',
      locale: 'pt_BR',
      url: `https://www.lucianonoceti.com.br/perfil/${params.slug}`,
      siteName: 'Clínica Luciano Noceti',
    },
  }
}

export default function PerfilPage({ params }: { params: { slug: string } }) {
  const prof = profissionais.find(p => slugify(p.nome) === params.slug)
  if (!prof) notFound()

  const convenios = prof.atendimento.replace(/\.$/, '').split(',').map(s => s.trim()).filter(Boolean)
  const grupos = categorizarDemandas(prof.demandas)
  const isPresencial = /presencial/i.test(prof.publico)
  const isOnline = /on-?line/i.test(prof.publico)
  const abordagemTexto = getAbordagemTexto(prof.filtros, prof.abordagem_explicada)

  const waLink =
    'https://wa.me/5548998056893?text=' +
    encodeURIComponent(
      `Olá, venho do site e tenho interesse em realizar um agendamento com o profissional ${prof.nome}. Poderia me auxiliar?`
    )

  const jsonLd = gerarProfissionalLD(prof, params.slug)

  return (
    <div className="min-h-screen font-sans" style={{ background: '#FAF7F4', color: '#2D1A1E' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          {prof.registro && (
            <span className="text-white/30 text-[10px] font-mono tracking-wide">{prof.registro}</span>
          )}
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
        {/* gradient overlay — dark left, transparent right */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(26,11,14,0.81) 0%, rgba(26,11,14,0.73) 45%, rgba(26,11,14,0.35) 75%, rgba(26,11,14,0.05) 100%)' }}
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-center gap-10">

          {/* Foto — mobile topo, desktop direita */}
          <div className="order-first sm:order-last flex-shrink-0">
            <div
              className="relative w-36 h-36 sm:w-52 sm:h-52 overflow-hidden"
              style={{
                borderRadius: '18px',
                boxShadow: '0 0 0 3px rgba(184,136,58,0.4), 0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src={prof.foto}
                alt={`Foto de ${prof.nome}`}
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
              Psicólogo{prof.registro ? ` · ${prof.registro}` : ''}
            </span>

            <h1 className="font-serif font-bold leading-tight mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              {prof.nome.split(' ').slice(0, 1).join(' ')}{' '}
              <span style={{ color: '#E8B97A' }}>{prof.nome.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="text-white/60 text-sm font-medium mb-5">{prof.metodo}</p>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
              {isPresencial && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(184,136,58,0.15)', color: '#E8B97A', border: '1px solid rgba(184,136,58,0.3)' }}>
                  <MapPin className="w-3 h-3" /> Presencial · Florianópolis
                </span>
              )}
              {isOnline && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <Monitor className="w-3 h-3" /> Online
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center sm:justify-start">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                aria-label={`Agendar consulta com ${prof.nome} via WhatsApp`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: '#7C2C3B', color: 'white', boxShadow: '0 4px 20px rgba(124,44,59,0.45)' }}>
                <WhatsAppIcon className="w-4 h-4" />
                Agendar via WhatsApp
              </a>
              <a href={prof.instagram_url ?? INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                aria-label={prof.instagram_url ? `Instagram profissional de ${prof.nome}` : 'Instagram da Clínica Luciano Noceti'}
                className="btn-ghost-white inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{ color: 'rgba(255,255,255,0.75)', border: '1.5px solid rgba(255,255,255,0.2)' }}>
                <InstagramIcon className="w-4 h-4" style={{ color: '#E4405F' }} />
                Instagram
              </a>
              {prof.linkedin_url && (
                <a href={prof.linkedin_url} target="_blank" rel="noopener noreferrer"
                  aria-label={`Perfil LinkedIn de ${prof.nome}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ color: '#60A5FA', border: '1.5px solid rgba(10,102,194,0.45)' }}>
                  <LinkedInIcon className="w-4 h-4" style={{ color: '#0A66C2' }} />
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
      {prof.manifesto && (
        <section className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <div className="w-px h-10 mx-auto mb-6" style={{ background: 'linear-gradient(to bottom, transparent, #B8883A)' }} />
            <p className="font-serif text-xl sm:text-2xl leading-relaxed italic" style={{ color: '#2D1A1E' }}>
              &ldquo;{prof.manifesto}&rdquo;
            </p>
            <div className="w-px h-10 mx-auto mt-6" style={{ background: 'linear-gradient(to bottom, #B8883A, transparent)' }} />
          </ScrollReveal>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          STATS (condicional)
      ══════════════════════════════════════════════ */}
      {prof.stats && prof.stats.length > 0 && (
        <section className="py-8 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
          <ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, #1A0B0E 0%, #2D1A1E 100%)',
                  display: 'grid',
                  gridTemplateColumns: `repeat(${prof.stats.length}, 1fr)`,
                  gap: '1rem',
                }}
              >
                {prof.stats.map(({ v, l }, i) => (
                  <div key={i} className="text-center px-2">
                    <div className="font-serif font-bold text-2xl sm:text-3xl mb-1" style={{ color: '#E8B97A' }}>{v}</div>
                    <div className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.45)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          ABORDAGEM TERAPÊUTICA
      ══════════════════════════════════════════════ */}
      {abordagemTexto && (
        <section className="py-14 px-5 sm:px-8" style={{ background: 'white' }}>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="sm:w-48 flex-shrink-0">
                  <div className="w-8 h-px mb-3" style={{ background: '#B8883A' }} />
                  <span className="text-[10px] font-bold tracking-[0.22em] uppercase block mb-2" style={{ color: '#B8883A' }}>
                    Abordagem
                  </span>
                  <p className="font-serif font-bold text-lg leading-snug" style={{ color: '#2D1A1E' }}>{prof.metodo}</p>
                </div>
                <div className="flex-1 sm:pl-8 sm:border-l" style={{ borderColor: 'rgba(184,136,58,0.2)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>{abordagemTexto}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          PUBLICAÇÕES (condicional)
      ══════════════════════════════════════════════ */}
      {prof.publicacoes && prof.publicacoes.length > 0 && (
        <section className="py-14 px-5 sm:px-8" style={{ background: 'white' }}>
          <div className="max-w-3xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase block mb-4" style={{ color: '#B8883A' }}>Publicações</span>
            <ol className="space-y-3">
              {prof.publicacoes.map((pub, i) => (
                <li key={i} className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>
                  <span className="font-semibold" style={{ color: '#2D1A1E' }}>{i + 1}.</span> {pub}
                </li>
              ))}
            </ol>
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
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#5a4044' }}>{prof.formacao}</p>
              {prof.pos_graduacoes && prof.pos_graduacoes.length > 0 && (
                <ul className="space-y-2 pt-4" style={{ borderTop: '1px solid rgba(124,44,59,0.08)' }}>
                  {prof.pos_graduacoes.map((pg, i) => (
                    <li key={i} className="text-xs leading-snug" style={{ color: '#7a5a5e' }}>
                      <span className="font-semibold" style={{ color: '#2D1A1E' }}>{pg.tipo}</span>
                      {' '}em {pg.curso}{' '}
                      {(pg.instituicao || pg.ano) && (
                        <span style={{ color: '#9a7a7e' }}>
                          {pg.instituicao ? `, ${pg.instituicao}` : ''}{pg.ano ? ` (${pg.ano})` : ''}
                        </span>
                      )}
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
                {isPresencial && (
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: '#FAF7F4' }}>
                      <MapPin className="w-3.5 h-3.5" style={{ color: '#7C2C3B' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: '#2D1A1E' }}>Presencial</p>
                      <p className="text-xs leading-relaxed" style={{ color: '#7a5a5e' }}>
                        Rua Felipe Schmidt, 515, Ed. Pórtico, 2º andar, {prof.salaPresencial || 'Sala 204'}<br />
                        Centro, Florianópolis, SC
                      </p>
                    </div>
                  </div>
                )}
                {isOnline && (
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: '#F0F7FF' }}>
                      <Monitor className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: '#2D1A1E' }}>Online</p>
                      <p className="text-xs" style={{ color: '#7a5a5e' }}>Para todo o Brasil, via videochamada</p>
                    </div>
                  </div>
                )}
                <div className="pt-3" style={{ borderTop: '1px solid rgba(124,44,59,0.08)' }}>
                  <p className="text-[10px] font-bold tracking-wider uppercase mb-1.5" style={{ color: '#B8883A' }}>Público</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5a4044' }}>{prof.publico}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ÁREAS DE ATUAÇÃO
      ══════════════════════════════════════════════ */}
      {grupos.length > 0 && (
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
              {grupos.map(({ categoria, itens }, gi) => (
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
      )}

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
              {/* connecting line */}
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
              {convenios.map((c) => (
                <span key={c}
                  className="inline-block rounded-full text-xs px-3.5 py-1.5 font-medium"
                  style={{
                    background: 'white',
                    color: '#5a4044',
                    border: '1px solid rgba(124,44,59,0.12)',
                  }}>
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
            Entre em contato e agende sua primeira consulta com {prof.nome.split(' ')[0]}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              aria-label={`Agendar consulta com ${prof.nome} via WhatsApp`}
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

      <DevNav currentPath={`/perfil/${params.slug}`} />

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
