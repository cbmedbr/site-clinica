import Link from 'next/link'
import {
  ArrowLeft, Check, ChevronDown, MapPin, MessageCircle, ExternalLink, Star,
  MessageSquare, UserCheck, CalendarCheck,
} from 'lucide-react'
import { gerarFaqLD } from '@/lib/jsonld'
import type { Prof } from '@/lib/profissionais'
import { slugify } from '@/lib/profissionais'
import HeroNeuralBackground from '@/components/HeroNeuralBackground'
import ScrollReveal from '@/components/ScrollReveal'
import WhatsAppFab from '@/components/WhatsAppFab'
import WhatsAppAdsMessage from '@/components/WhatsAppAdsMessage'
import EquipeExpansivel from '@/components/EquipeExpansivel'

// WhatsApp do setor de agendamento (psicoterapia)
export const WA_AGENDAMENTO = '5548998056893'
const GOOGLE_REVIEWS_LINK = 'https://maps.app.goo.gl/mhVodvAMZFhw5gqT8'

export type PsicoterapiaLandingProps = {
  badge: string
  tituloAntes: string
  tituloDestaque: string
  tituloDepois?: string
  subtitulo: string
  textoWhatsApp: string
  textoWhatsAppAnuncio: string
  paraQuemTitulo: string
  paraQuem: string[]
  publicoNota: string
  equipeTitulo: string
  equipeSubtitulo: string
  equipe: Prof[]
  faqItems: { pergunta: string; resposta: string }[]
  ctaTitulo: string
}

const passos = [
  {
    icon: MessageSquare,
    titulo: 'Mande uma mensagem',
    descricao: 'Fale com o nosso setor de agendamento pelo WhatsApp e conte um pouco do que você procura.',
  },
  {
    icon: UserCheck,
    titulo: 'Indicamos o profissional',
    descricao: 'Encontramos o psicólogo com a abordagem e a disponibilidade mais adequadas para você.',
  },
  {
    icon: CalendarCheck,
    titulo: 'Primeira sessão',
    descricao: 'Você escolhe entre atendimento presencial, no Centro de Florianópolis, ou online.',
  },
]

const garantias = [
  'Psicólogos registrados no CRP',
  'Atendimento presencial ou online',
  'Sessão particular de R$ 150',
  'Sigilo profissional absoluto',
  'Clínica no Centro de Florianópolis',
]

export default function PsicoterapiaLanding(props: PsicoterapiaLandingProps) {
  const waLink = `https://wa.me/${WA_AGENDAMENTO}?text=${encodeURIComponent(props.textoWhatsApp)}`
  const faqLD = gerarFaqLD(props.faqItems)

  const botaoWhats = (texto: string) => (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
      style={{ background: '#7C2C3B', color: 'white', boxShadow: '0 4px 24px rgba(124,44,59,0.45)' }}
    >
      <MessageCircle className="w-4 h-4" />
      {texto}
    </a>
  )

  const rotulo = (texto: string) => (
    <span className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3" style={{ color: '#8A6224' }}>
      {texto}
    </span>
  )

  const h2Style = { fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }

  return (
    <div className="min-h-screen font-sans" style={{ background: '#FAF7F4', color: '#2D1A1E' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLD) }} />
      <style>{`
        details > summary { list-style: none; cursor: pointer; }
        details > summary::-webkit-details-marker { display: none; }
        .faq-chevron { transition: transform 0.25s ease; }
        details[open] .faq-chevron { transform: rotate(180deg); }
        details[open] > summary { color: #7C2C3B; }
      `}</style>

      {/* BARRA TOPO */}
      <div style={{ background: '#7C2C3B', borderBottom: '2px solid #5E1F2C' }} className="py-2.5 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Acessar site da clínica
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px', background: '#6B2434' }}>
        <HeroNeuralBackground />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(107,36,52,0.97) 0%, rgba(107,36,52,0.93) 40%, rgba(107,36,52,0.58) 62%, rgba(107,36,52,0.0) 80%)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-8 md:py-12 flex flex-col items-start">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCECBF] animate-pulse" />
            {props.badge}
          </span>
          <h1 className="font-serif font-bold text-white leading-tight mb-4 max-w-2xl" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)' }}>
            {props.tituloAntes}{' '}
            <span style={{ color: '#E8B97A' }}>{props.tituloDestaque}</span>
            {props.tituloDepois ? <> {props.tituloDepois}</> : null}
          </h1>
          <p className="text-white/70 text-base sm:text-lg mb-5 max-w-xl leading-relaxed">{props.subtitulo}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(184,136,58,0.15)', color: '#E8B97A', border: '1px solid rgba(184,136,58,0.3)' }}
            >
              <MapPin className="w-3 h-3" /> Presencial ou online
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Centro · Sala 204
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Sessão particular R$ 150
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {botaoWhats('Agendar via WhatsApp')}
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors"
              style={{ color: 'rgba(255,255,255,0.7)', border: '1.5px solid rgba(255,255,255,0.2)' }}
            >
              Como funciona ↓
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            {rotulo('COMO FUNCIONA')}
            <h2 className="font-serif font-bold mb-10" style={h2Style}>Do primeiro contato à primeira sessão</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {passos.map(({ icon: Icon, titulo, descricao }, i) => (
              <ScrollReveal key={titulo} delay={i * 80}>
                <div className="rounded-2xl p-6 h-full" style={{ background: '#FAF7F4', border: '1px solid rgba(124,44,59,0.1)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: '#7C2C3B' }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: '#8A6224' }}>Passo {i + 1}</p>
                  <h3 className="font-serif font-bold text-lg mb-2">{titulo}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>{descricao}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {garantias.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#5a4044' }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#7C2C3B' }}>
                    <Check className="w-3 h-3" style={{ color: '#FCECBF' }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            {rotulo('PARA QUEM É')}
            <h2 className="font-serif font-bold mb-8" style={h2Style}>{props.paraQuemTitulo}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {props.paraQuem.map(item => (
                <span
                  key={item}
                  className="text-sm font-medium px-4 py-2 rounded-full"
                  style={{ background: 'white', color: '#5a4044', border: '1px solid rgba(124,44,59,0.15)' }}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs mt-6 font-medium" style={{ color: '#9a7a7e' }}>{props.publicoNota}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            {rotulo('EQUIPE')}
            <h2 className="font-serif font-bold mb-2" style={h2Style}>{props.equipeTitulo}</h2>
            <p className="text-sm mb-10" style={{ color: '#7a5a5e' }}>{props.equipeSubtitulo}</p>
          </ScrollReveal>
          <EquipeExpansivel
            membros={props.equipe.map(p => ({
              nome: p.nome,
              registro: p.registro,
              metodo: p.metodo,
              foto: p.foto,
              slug: slugify(p.nome),
            }))}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            {rotulo('FAQ')}
            <h2 className="font-serif font-bold mb-10" style={h2Style}>Perguntas frequentes</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-2">
            {props.faqItems.map(({ pergunta, resposta }, i) => (
              <ScrollReveal key={pergunta} delay={i * 40}>
                <details className="rounded-2xl overflow-hidden" style={{ background: 'white', border: '1px solid rgba(124,44,59,0.1)' }}>
                  <summary className="flex items-center justify-between gap-4 p-5 font-semibold text-sm select-none" style={{ color: '#2D1A1E' }}>
                    <span>{pergunta}</span>
                    <ChevronDown className="faq-chevron w-4 h-4 flex-shrink-0" style={{ color: '#7C2C3B' }} />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed pt-4" style={{ color: '#5a4044', borderTop: '1px solid rgba(124,44,59,0.08)' }}>
                      {resposta}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES GOOGLE */}
      <section className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
        <ScrollReveal className="max-w-5xl mx-auto text-center">
          {rotulo('AVALIAÇÕES')}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map(i => (
                <Star key={i} className="w-5 h-5" style={{ color: '#B8883A', fill: '#B8883A' }} />
              ))}
            </div>
            <span className="font-serif font-bold text-3xl">4,6</span>
          </div>
          <p className="font-semibold mb-6" style={{ color: '#5a4044' }}>+200 avaliações verificadas no Google</p>
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90"
            style={{ background: '#7C2C3B', color: 'white' }}
          >
            Ver avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs max-w-md mx-auto mt-4" style={{ color: '#b09a9e' }}>
            Em respeito ao Código de Ética do Psicólogo (CFP), não exibimos depoimentos individuais de pacientes.
          </p>
        </ScrollReveal>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FEF8E6' }}>
        <ScrollReveal className="max-w-5xl mx-auto text-center">
          <p className="font-serif font-bold mb-2" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#2D1A1E' }}>
            {props.ctaTitulo}
          </p>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: '#7a5a5e' }}>
            Sessão particular de R$ 150, presencial ou online, com ética e sigilo absoluto.
          </p>
          <div className="flex justify-center mb-8">{botaoWhats('Agendar pelo WhatsApp')}</div>
          <p className="text-xs font-semibold" style={{ color: '#5a4044' }}>(48) 99805-6893</p>
          <p className="text-xs mt-1" style={{ color: '#9a7a7e' }}>
            Rua Felipe Schmidt, 515 · Edifício Pórtico · 2º andar · Sala 204 · Centro · Florianópolis/SC
          </p>
        </ScrollReveal>
      </section>

      {/* RODAPÉ */}
      <footer className="py-8 px-5 text-center" style={{ background: '#2D1A1E' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Clínica Luciano Noceti · Florianópolis, SC · Sigilo profissional garantido conforme o Código de Ética do Psicólogo (CFP).{' '}
          <Link href="/politica-de-privacidade" className="underline">Política de Privacidade</Link>
        </p>
      </footer>

      <WhatsAppFab href={waLink} />
      <WhatsAppAdsMessage numero={WA_AGENDAMENTO} textoAnuncio={props.textoWhatsAppAnuncio} />
    </div>
  )
}
