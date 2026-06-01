import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft, Check, ChevronDown,
  ClipboardList, Brain, Eye, FileText,
  BookOpen, MessageSquare, Lightbulb, Award, Heart,
  Star, MapPin, Medal, MessageCircle, ExternalLink,
} from 'lucide-react'
import { profissionais, slugify } from '@/lib/profissionais'
import { gerarFaqLD } from '@/lib/jsonld'
import HeroNeuralBackground from '@/components/HeroNeuralBackground'
import ScrollReveal from '@/components/ScrollReveal'
import WhatsAppFab from '@/components/WhatsAppFab'
import DevNav from '@/components/DevNav'

export const metadata: Metadata = {
  title: 'Avaliação Neuropsicológica em Florianópolis | Clínica Luciano Noceti',
  description:
    'Avaliação neuropsicológica completa com instrumentos padrão-ouro. Diagnóstico de TDAH, TEA, demências e déficits cognitivos. Centro de Florianópolis, Sala 204. Agende.',
  keywords: [
    'avaliação neuropsicológica Florianópolis',
    'teste neuropsicológico',
    'TDAH',
    'TEA',
    'demência',
    'Alzheimer',
    'laudo neuropsicológico',
    'Clínica Luciano Noceti',
  ],
  openGraph: {
    title: 'Avaliação Neuropsicológica | Clínica Luciano Noceti',
    description:
      'Investigação detalhada do funcionamento cognitivo e emocional com instrumentos padrão-ouro. Florianópolis/SC.',
    type: 'website',
    locale: 'pt_BR',
  },
}

const WA_NEURO_LINK =
  'https://wa.me/5548991908715?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica'

const paragrafosOQueE = [
  'A avaliação neuropsicológica é um processo clínico que investiga, em profundidade, como funcionam diferentes áreas da mente. Examinamos inteligência, atenção em suas modalidades sustentada, seletiva e alternada, memória imediata, operacional e de longo prazo, e funções executivas como planejamento, controle inibitório e flexibilidade cognitiva.',
  'Também avaliamos linguagem, habilidades visuoespaciais, praxias, velocidade de processamento, aspectos emocionais e comportamentais e habilidades sociais. Esse mapeamento é indicado quando há suspeita ou diagnóstico de dificuldades de aprendizagem, TDAH, TEA, alterações cognitivas, ansiedade, depressão ou outras condições que afetam o desempenho e a qualidade de vida.',
  'Conduzimos cada atendimento com ética, sigilo e rigor técnico, entregando uma devolutiva clara e um laudo detalhado ao final do processo.',
]

const indicacoes = [
  {
    titulo: 'Esquecimentos e confusão mental',
    descricao:
      'Investiga demência, Doença de Alzheimer, Comprometimento Cognitivo Leve e outras demências (vascular, frontotemporal, por Corpos de Lewy).',
  },
  {
    titulo: 'Dificuldade de atenção e foco',
    descricao:
      'Investiga TDAH (Transtorno do Déficit de Atenção e Hiperatividade), transtornos de aprendizagem como dislexia e discalculia.',
  },
  {
    titulo: 'Mudanças de humor ou comportamento',
    descricao:
      'Investiga depressão, transtornos de ansiedade, transtorno bipolar e impacto cognitivo de quadros emocionais.',
  },
  {
    titulo: 'Histórico neurológico',
    descricao:
      'Avalia sequelas de AVC, Traumatismo Cranioencefálico (TCE), tumores, epilepsia, Doença de Parkinson e pós-cirurgia neurológica.',
  },
]

const processosAvaliacao = [
  {
    icon: ClipboardList,
    titulo: 'Anamnese',
    descricao: 'Conversa inicial para entender o histórico de vida, saúde e comportamentos atuais.',
  },
  {
    icon: Brain,
    titulo: 'Aplicação de Testes',
    descricao: 'Testes cognitivos (atenção, memória, raciocínio), emocionais e comportamentais, com base científica.',
  },
  {
    icon: Eye,
    titulo: 'Observação Clínica',
    descricao: 'A psicóloga observa como a pessoa reage emocional e comportamentalmente às tarefas.',
  },
  {
    icon: FileText,
    titulo: 'Entrega do Laudo',
    descricao: 'Devolutiva detalhada e entrega do laudo ao paciente, com orientações e encaminhamentos.',
  },
]

const dominiosCognitivos = [
  {
    icon: Brain,
    titulo: 'Atenção e Concentração',
    descricao: 'Capacidade de focar, sustentar e alternar atenção.',
  },
  {
    icon: BookOpen,
    titulo: 'Memória',
    descricao: 'Habilidade de reter e recordar informações imediatas e de longo prazo.',
  },
  {
    icon: MessageSquare,
    titulo: 'Linguagem',
    descricao: 'Compreensão, comunicação e expressão verbal.',
  },
  {
    icon: Lightbulb,
    titulo: 'Raciocínio Lógico',
    descricao: 'Resolver problemas, tomar decisões e raciocínio abstrato.',
  },
  {
    icon: Award,
    titulo: 'Funções Executivas',
    descricao: 'Planejamento, organização, controle inibitório e flexibilidade cognitiva.',
  },
  {
    icon: Heart,
    titulo: 'Emoções e Comportamento',
    descricao: 'Regulação emocional, humor e interações sociais.',
  },
]

const instrumentos = [
  {
    sigla: 'WASI',
    nome: 'Escala Wechsler Abreviada de Inteligência',
    avalia: 'inteligência geral (QI estimado), raciocínio verbal e não verbal',
    tempo: '15 a 30 min',
  },
  {
    sigla: 'WAIS',
    nome: 'Escala Wechsler de Inteligência para Adultos',
    avalia: 'inteligência global, compreensão verbal, raciocínio perceptual, memória operacional e velocidade de processamento',
    tempo: '60 a 120 min',
  },
  {
    sigla: 'SON-R 2½–7',
    nome: 'Teste Não Verbal de Inteligência',
    avalia: 'inteligência não verbal, raciocínio abstrato e habilidades visuoespaciais',
    tempo: '45 a 60 min',
  },
  {
    sigla: 'TENA',
    nome: 'Teste de Atenção',
    avalia: 'atenção concentrada e sustentada',
    tempo: '10 a 20 min',
  },
  {
    sigla: 'BDEFS',
    nome: 'Barkley Deficits in Executive Functioning Scale',
    avalia: 'funções executivas no cotidiano (organização, autocontrole, planejamento, gestão do tempo)',
    tempo: '10 a 15 min',
  },
  {
    sigla: 'BDI-II',
    nome: 'Inventário de Depressão de Beck',
    avalia: 'sintomas de depressão',
    tempo: '5 a 10 min',
  },
  {
    sigla: 'BAI',
    nome: 'Inventário de Ansiedade de Beck',
    avalia: 'sintomas de ansiedade',
    tempo: '5 a 10 min',
  },
  {
    sigla: 'Pfister',
    nome: 'Pirâmides Coloridas de Pfister',
    avalia: 'aspectos emocionais, afetivos e de personalidade',
    tempo: '20 a 30 min',
  },
  {
    sigla: 'TAVIS',
    nome: 'Teste de Atenção Visual',
    avalia: 'atenção sustentada, seletiva e alternada',
    tempo: '20 a 30 min',
  },
  {
    sigla: 'SRS-2',
    nome: 'Escala de Responsividade Social (2ª edição)',
    avalia: 'habilidades sociais e traços associados ao TEA',
    tempo: '15 a 20 min',
  },
  {
    sigla: 'NEUPSILIN',
    nome: 'Instrumento de Avaliação Neuropsicológica Breve',
    avalia: 'orientação, atenção, memória, linguagem, praxias e funções executivas',
    tempo: '40 a 60 min',
  },
  {
    sigla: 'BPA-2',
    nome: 'Bateria Psicológica para Avaliação da Atenção',
    avalia: 'atenção concentrada, dividida e alternada',
    tempo: '20 a 30 min',
  },
  {
    sigla: 'SSRS',
    nome: 'Sistema de Avaliação de Habilidades Sociais',
    avalia: 'habilidades sociais, problemas de comportamento e competência social',
    tempo: '15 a 25 min',
  },
  {
    sigla: 'THCP',
    nome: 'Teste de Habilidades Cognitivas e de Processamento',
    avalia: 'processamento cognitivo, raciocínio e habilidades cognitivas gerais',
    tempo: '30 a 50 min',
  },
  {
    sigla: 'PROTEA-R',
    nome: 'Protocolo de Avaliação do Transtorno do Espectro Autista – Revisado',
    avalia: 'comportamentos e sinais relacionados ao TEA em crianças',
    tempo: '60 a 90 min',
  },
  {
    sigla: 'IDADI',
    nome: 'Inventário de Desenvolvimento Infantil',
    avalia: 'marcos do desenvolvimento infantil (cognitivo, motor, linguagem e socioemocional)',
    tempo: '20 a 30 min',
  },
]

const especialistas = profissionais
  .filter(p => p.fazNeuropsico)
  .map(p => ({ ...p, slug: slugify(p.nome) }))

const GOOGLE_REVIEWS_LINK = 'https://maps.app.goo.gl/mhVodvAMZFhw5gqT8'

const faqItems = [
  {
    pergunta: 'A avaliação neuropsicológica é coberta por convênio?',
    resposta:
      'O atendimento é particular. Dependendo do seu plano de saúde, pode haver reembolso parcial; recomendamos verificar diretamente com o seu convênio.',
  },
  {
    pergunta: 'Quanto tempo dura o processo completo?',
    resposta:
      'Entre 7 e 10 sessões presenciais de 1 hora cada, realizadas semanalmente. O laudo técnico é entregue em 4 a 6 semanas após o término das sessões.',
  },
  {
    pergunta: 'A avaliação é feita para crianças também?',
    resposta:
      'Sim, realizamos avaliações a partir de 5 anos de idade, com instrumentos adequados a cada faixa etária, inclusive testes não verbais para crianças menores ou com dificuldades de linguagem.',
  },
  {
    pergunta: 'Qual a diferença entre avaliação neuropsicológica e avaliação psicológica?',
    resposta:
      'A avaliação neuropsicológica foca especificamente nas funções cognitivas (atenção, memória, funções executivas, linguagem e percepção) e sua relação com o funcionamento do cérebro. A avaliação psicológica é mais ampla, voltada para aspectos emocionais e de personalidade.',
  },
  {
    pergunta: 'O laudo tem validade para escolas, médicos ou outros profissionais?',
    resposta:
      'Sim. O laudo neuropsicológico é um documento técnico-científico reconhecido por escolas, médicos, psiquiatras e outros especialistas. Serve para orientar diagnósticos, adaptações escolares, planejamentos terapêuticos e encaminhamentos.',
  },
  {
    pergunta: 'Preciso de encaminhamento médico para realizar a avaliação?',
    resposta:
      'Não. Qualquer pessoa pode solicitar a avaliação diretamente, sem necessidade de encaminhamento médico. Basta entrar em contato com nossa equipe.',
  },
  {
    pergunta: 'Como funciona o pagamento?',
    resposta:
      'O valor da avaliação completa é informado no contato com nossa equipe. Aceitamos pagamento particular, com parcelamento em até 12x no cartão de crédito.',
  },
  {
    pergunta: 'O que acontece na devolutiva final?',
    resposta:
      'Na última sessão, a psicóloga explica os resultados em detalhes, apresenta o laudo completo e oferece orientações sobre cuidados, tratamentos ou encaminhamentos recomendados. Todo o processo é conduzido com sigilo absoluto, conforme o Código de Ética do Psicólogo (CFP).',
  },
]

export default function AvaliacaoNeuropsicologicaPage() {
  const faqLD = gerarFaqLD(faqItems)

  return (
    <div className="min-h-screen font-sans" style={{ background: '#FAF7F4', color: '#2D1A1E' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLD) }}
      />
      <style>{`
        html { scrollbar-color: #7C2C3B #FAF7F4; scrollbar-width: thin; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #FAF7F4; }
        ::-webkit-scrollbar-thumb { background: #7C2C3B; border-radius: 3px; }
        details > summary { list-style: none; cursor: pointer; }
        details > summary::-webkit-details-marker { display: none; }
        .faq-chevron { transition: transform 0.25s ease; }
        details[open] .faq-chevron { transform: rotate(180deg); }
        details[open] > summary { color: #7C2C3B; }
        .faq-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s ease; }
        details[open] .faq-body { grid-template-rows: 1fr; }
        .faq-inner { overflow: hidden; }
      `}</style>

      {/* ── BARRA TOPO ── */}
      <div style={{ background: '#7C2C3B', borderBottom: '2px solid #1A0B0E' }} className="py-2.5 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Acessar site da clínica
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px', background: '#1A0B0E' }}>
        <HeroNeuralBackground />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(26,11,14,0.98) 0%, rgba(26,11,14,0.95) 40%, rgba(26,11,14,0.55) 62%, rgba(26,11,14,0.0) 80%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-8 md:py-12 flex flex-col items-start">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCECBF] animate-pulse" />
            Avaliação Especializada
          </span>

          {/* Título */}
          <h1
            className="font-serif font-bold text-white leading-tight mb-4 max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)' }}
          >
            Avaliação{' '}
            <span style={{ color: '#E8B97A' }}>Neuropsicológica</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg mb-5 max-w-xl leading-relaxed">
            Uma investigação detalhada do funcionamento cognitivo e emocional: clareza sobre o que
            está acontecendo e direção terapêutica assertiva.
          </p>

          {/* Badges localização */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(184,136,58,0.15)',
                color: '#E8B97A',
                border: '1px solid rgba(184,136,58,0.3)',
              }}
            >
              <MapPin className="w-3 h-3" /> Presencial · Florianópolis
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              Centro · Sala 204
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA_NEURO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: '#7C2C3B',
                color: 'white',
                boxShadow: '0 4px 24px rgba(124,44,59,0.45)',
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar via WhatsApp
            </a>
            <a
              href="#o-que-e"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors"
              style={{
                color: 'rgba(255,255,255,0.7)',
                border: '1.5px solid rgba(255,255,255,0.2)',
              }}
            >
              Saiba mais ↓
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          O QUE É
      ══════════════════════════════════════════════ */}
      <section id="o-que-e" className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              O QUE É
            </span>
            <h2
              className="font-serif font-bold mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
            >
              O que é a Avaliação Neuropsicológica?
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-10 items-start">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                {paragrafosOQueE.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80} direction="right">
              <div
                className="rounded-2xl p-6"
                style={{ background: '#1A0B0E', border: '1px solid rgba(184,136,58,0.2)' }}
              >
                <span
                  className="text-[10px] font-bold tracking-[0.22em] uppercase block mb-4"
                  style={{ color: '#B8883A' }}
                >
                  Garantias do processo
                </span>
                <div className="space-y-3">
                  {[
                    'Instrumentos padrão-ouro validados pelo CFP',
                    'Laudo técnico completo e fundamentado',
                    'Regulamentado pelo Conselho Federal de Psicologia',
                    'Sigilo profissional absoluto',
                    'Devolutiva clara e orientada para o paciente',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(124,44,59,0.3)' }}
                      >
                        <Check className="w-3 h-3" style={{ color: '#FCECBF' }} />
                      </div>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.75)' }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-5 pt-5 text-xs italic leading-relaxed"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  &ldquo;A avaliação é conduzida com ética, sigilo absoluto e cuidado integral,
                  respeitando a história e o ritmo de cada pessoa.&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARA QUEM É INDICADA
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              INDICAÇÕES
            </span>
            <h2
              className="font-serif font-bold mb-3"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
            >
              Quando a avaliação é recomendada
            </h2>
            <p className="text-sm mb-10" style={{ color: '#7a5a5e' }}>
              A avaliação é indicada para pessoas com:
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {indicacoes.map(({ titulo, descricao }, i) => (
              <ScrollReveal key={titulo} delay={i * 60}>
                <div
                  className="rounded-2xl p-5 h-full"
                  style={{
                    background: 'white',
                    borderLeft: '3px solid #7C2C3B',
                    boxShadow: '0 2px 12px rgba(26,11,14,0.06)',
                  }}
                >
                  <h3
                    className="font-serif font-bold mb-2 text-base"
                    style={{ color: '#7C2C3B' }}
                  >
                    {titulo}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>
                    {descricao}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Card largo */}
          <ScrollReveal>
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'white',
                borderLeft: '3px solid #7C2C3B',
                boxShadow: '0 2px 12px rgba(26,11,14,0.06)',
              }}
            >
              <h3
                className="font-serif font-bold mb-2 text-base"
                style={{ color: '#7C2C3B' }}
              >
                Diagnóstico ou suspeita de TEA, TDAH, Alzheimer ou pós-AVC
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>
                Confirma ou investiga Transtorno do Espectro Autista (TEA), TDAH, demências e
                atrasos no neurodesenvolvimento, com precisão diagnóstica para orientar o
                tratamento.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-xs mt-6 font-medium" style={{ color: '#9a7a7e' }}>
              Atendemos crianças (a partir de 5 anos), adolescentes, adultos e idosos
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COMO FUNCIONA
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              PROCESSO
            </span>
            <h2
              className="font-serif font-bold mb-12"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
            >
              Como é feita a avaliação
            </h2>
          </ScrollReveal>

          <div className="relative max-w-2xl">
            {/* Linha vertical conectando os passos */}
            <div
              className="absolute left-5 top-5 hidden sm:block"
              style={{
                width: '1px',
                bottom: '20px',
                background: 'linear-gradient(to bottom, #B8883A, rgba(124,44,59,0.1))',
              }}
            />

            <ol className="space-y-0">
              {processosAvaliacao.map(({ icon: Icon, titulo, descricao }, i) => (
                <ScrollReveal key={titulo} delay={i * 100} direction="left">
                  <li className="relative flex gap-5 pb-9 last:pb-0">
                    <div
                      className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                      style={{
                        background: '#7C2C3B',
                        boxShadow: '0 0 0 4px rgba(124,44,59,0.1)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-1.5 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4" style={{ color: '#7C2C3B' }} />
                        <h3
                          className="font-serif font-bold text-base"
                          style={{ color: '#2D1A1E' }}
                        >
                          {titulo}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>
                        {descricao}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          O QUE SERÁ AVALIADO
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              DOMÍNIOS COGNITIVOS
            </span>
            <h2
              className="font-serif font-bold mb-3"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
            >
              Funções cognitivas e emocionais analisadas
            </h2>
            <p className="text-sm mb-10" style={{ color: '#7a5a5e' }}>
              Análise detalhada das funções que impactam o dia a dia:
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dominiosCognitivos.map(({ icon: Icon, titulo, descricao }, i) => (
              <ScrollReveal key={titulo} delay={i * 50}>
                <div
                  className="rounded-2xl p-5 h-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(124,44,59,0.08)',
                    boxShadow: '0 2px 12px rgba(26,11,14,0.05)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: '#F4E6E9' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#7C2C3B' }} />
                  </div>
                  <h3
                    className="font-serif font-bold mb-1.5 text-sm"
                    style={{ color: '#7C2C3B' }}
                  >
                    {titulo}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#7a5a5e' }}>
                    {descricao}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INSTRUMENTOS PADRÃO-OURO
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#1A0B0E' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              RIGOR TÉCNICO
            </span>
            <h2
              className="font-serif font-bold mb-3"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'white' }}
            >
              Instrumentos utilizados nas avaliações
            </h2>
            <p className="text-sm mb-4 max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Utilizamos instrumentos de referência mundial e nacional, reconhecidos como{' '}
              <span className="font-semibold" style={{ color: '#E8B97A' }}>
                Padrão Ouro
              </span>{' '}
              em avaliação neuropsicológica, garantindo diagnósticos de alta precisão e validade
              médica e escolar.
            </p>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-10"
              style={{
                background: 'rgba(184,136,58,0.15)',
                border: '1px solid rgba(184,136,58,0.25)',
              }}
            >
              <Medal className="w-3.5 h-3.5" style={{ color: '#E8B97A' }} />
              <span className="text-[10px] font-semibold" style={{ color: '#E8B97A' }}>
                Todos os instrumentos têm aprovação do CFP (Conselho Federal de Psicologia)
              </span>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {instrumentos.map((inst, i) => (
              <ScrollReveal key={inst.sigla} delay={i * 30}>
                <div
                  className="rounded-xl p-4 h-full"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                    <span
                      className="font-serif font-bold text-base"
                      style={{ color: '#FCECBF' }}
                    >
                      {inst.sigla}
                    </span>
                    <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {inst.nome}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed mb-1"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      Avalia:
                    </span>{' '}
                    {inst.avalia}
                  </p>
                  <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    ⏱ {inst.tempo}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DURAÇÃO E ENTREGA
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#7C2C3B' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: 'rgba(252,236,191,0.7)' }}
            >
              RESUMO PRÁTICO
            </span>
            <h2
              className="font-serif font-bold text-white mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}
            >
              Quanto tempo dura e o que você recebe
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                valor: '7 a 10',
                label: 'sessões presenciais',
                sublabel: '1h cada, semanalmente',
              },
              {
                valor: '4 a 6',
                label: 'semanas para o laudo',
                sublabel: 'após o término das sessões',
              },
              {
                valor: '5+ anos',
                label: 'de especialização',
                sublabel: 'Crianças, adultos e idosos',
              },
            ].map(({ valor, label, sublabel }, i) => (
              <ScrollReveal key={label} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <div
                    className="font-serif font-bold text-3xl mb-1"
                    style={{ color: '#FCECBF' }}
                  >
                    {valor}
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {sublabel}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Card investimento */}
          <ScrollReveal>
            <div
              className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              style={{ background: 'rgba(255,255,255,0.97)' }}
            >
              <div className="flex-1">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: '#B8883A' }}
                >
                  Investimento
                </p>
                <p
                  className="font-serif font-bold text-2xl sm:text-3xl"
                  style={{ color: '#7C2C3B' }}
                >
                  Valor sob consulta
                </p>
                <p className="text-xs mt-1" style={{ color: '#9a7a7e' }}>
                  O valor da avaliação completa é informado no contato com nossa equipe.
                </p>
              </div>
              <div
                className="flex-shrink-0 rounded-xl px-6 py-4 text-center"
                style={{ background: '#1A0B0E' }}
              >
                <p
                  className="text-[10px] font-bold tracking-widest uppercase mb-1"
                  style={{ color: '#B8883A' }}
                >
                  Parcele em até
                </p>
                <p className="font-serif font-bold text-3xl" style={{ color: 'white' }}>
                  12x
                </p>
                <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  no cartão
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ESPECIALISTAS
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              QUEM REALIZA
            </span>
            <h2
              className="font-serif font-bold mb-3"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
            >
              Psicólogas especializadas
            </h2>
            <p className="text-sm mb-10" style={{ color: '#7a5a5e' }}>
              Profissionais com formação especializada em avaliação neuropsicológica
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {especialistas.map((esp, i) => (
              <ScrollReveal key={esp.nome} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(124,44,59,0.1)',
                    boxShadow: '0 2px 16px rgba(26,11,14,0.06)',
                  }}
                >
                  <div className="flex items-start gap-5 mb-4">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
                      style={{ boxShadow: '0 0 0 3px rgba(252,236,191,0.5)' }}
                    >
                      <Image
                        src={esp.foto}
                        alt={`Foto de ${esp.nome}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3
                        className="font-serif font-bold text-lg leading-snug mb-0.5"
                        style={{ color: '#7C2C3B' }}
                      >
                        {esp.nome}
                      </h3>
                      <p
                        className="text-xs font-semibold mb-1"
                        style={{ color: 'rgba(124,44,59,0.6)' }}
                      >
                        {esp.registro}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: '#7a5a5e' }}>
                        {esp.metodo}
                      </p>
                    </div>
                  </div>

                  <div
                    className="rounded-xl p-3 mb-4 flex items-start gap-2"
                    style={{ background: '#F4E6E9' }}
                  >
                    <Award
                      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                      style={{ color: '#7C2C3B' }}
                    />
                    <p className="text-xs" style={{ color: '#5a4044' }}>
                      {esp.formacaoNeuro}
                    </p>
                  </div>

                  <Link
                    href={`/perfil/${esp.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all hover:gap-2.5"
                    style={{ color: '#7C2C3B' }}
                  >
                    Ver perfil completo →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              FAQ
            </span>
            <h2
              className="font-serif font-bold mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
            >
              Perguntas frequentes
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-2">
            {faqItems.map(({ pergunta, resposta }, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <details
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: '#FAF7F4',
                    border: '1px solid rgba(124,44,59,0.1)',
                  }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 p-5 font-semibold text-sm select-none"
                    style={{ color: '#2D1A1E' }}
                  >
                    <span>{pergunta}</span>
                    <ChevronDown
                      className="faq-chevron w-4 h-4 flex-shrink-0"
                      style={{ color: '#7C2C3B' }}
                    />
                  </summary>
                  <div className="faq-body">
                    <div className="faq-inner">
                      <div className="px-5 pb-5">
                        <div
                          className="pt-4"
                          style={{ borderTop: '1px solid rgba(124,44,59,0.08)' }}
                        >
                          <p className="text-sm leading-relaxed" style={{ color: '#5a4044' }}>
                            {resposta}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          AVALIAÇÕES GOOGLE
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#FAF7F4' }}>
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
              style={{ color: '#B8883A' }}
            >
              AVALIAÇÕES
            </span>
            <h2
              className="font-serif font-bold mb-8"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
            >
              O que dizem sobre nós
            </h2>

            <div
              className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl px-8 py-6 mb-8"
              style={{ background: 'white', border: '1px solid rgba(124,44,59,0.08)' }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#F59E0B' }} />
                  ))}
                </div>
                <span className="sr-only">Avaliação 4,6 de 5 estrelas no Google</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span
                    className="font-serif font-bold"
                    style={{ fontSize: '2.5rem', color: '#2D1A1E', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    4,6
                  </span>
                  <span className="text-sm font-medium" style={{ color: '#9a7a7e' }}>de 5</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-14" style={{ background: 'rgba(124,44,59,0.12)' }} />

              <div className="text-center sm:text-left">
                <p className="font-semibold text-base" style={{ color: '#2D1A1E' }}>
                  +200 avaliações verificadas
                </p>
                <p className="text-sm" style={{ color: '#9a7a7e' }}>no Google</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold
                           transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: '#7C2C3B',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(124,44,59,0.3)',
                }}
              >
                Ver avaliações no Google
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-xs max-w-md" style={{ color: '#b09a9e' }}>
                Em respeito ao Código de Ética do Psicólogo (CFP), não exibimos
                depoimentos individuais de pacientes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#1A0B0E' }}>
        <ScrollReveal className="max-w-5xl mx-auto text-center">
          <div
            className="w-px h-8 mx-auto mb-8"
            style={{ background: 'linear-gradient(to bottom, transparent, #B8883A)' }}
          />

          <p
            className="font-serif font-bold text-white mb-2"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
          >
            Pronto para dar clareza ao que está acontecendo?
          </p>
          <p
            className="text-sm mb-8 max-w-md mx-auto"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Atendimento particular, com cuidado, ética e sigilo absoluto.
          </p>

          <div className="flex justify-center mb-10">
            <a
              href={WA_NEURO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: '#7C2C3B',
                color: 'white',
                boxShadow: '0 4px 24px rgba(124,44,59,0.4)',
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Avaliação via WhatsApp
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>
              (48) 99190-8715
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Rua Felipe Schmidt, 515 · Edifício Pórtico · 2º andar · Sala 204 · Centro · Florianópolis/SC
            </p>
          </div>

          <div
            className="w-px h-8 mx-auto mt-8"
            style={{ background: 'linear-gradient(to bottom, #B8883A, transparent)' }}
          />
        </ScrollReveal>
      </section>

      <DevNav currentPath="/avaliacao-neuropsicologica" />

      {/* ── Rodapé ── */}
      <footer style={{ background: '#0E0608' }} className="py-6 px-5 text-center">
        <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Clínica Luciano Noceti · Rua Felipe Schmidt, 515, Centro,
          Florianópolis, SC ·{' '}
          <Link
            href="/"
            className="hover:text-white transition-colors"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            Ver todos os profissionais
          </Link>
        </p>
        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Sigilo profissional garantido conforme o Código de Ética do Psicólogo (CFP).{' '}
          <Link
            href="/politica-de-privacidade"
            className="underline hover:text-white transition-colors"
          >
            Política de Privacidade
          </Link>
        </p>
      </footer>

      <WhatsAppFab href={WA_NEURO_LINK} />
    </div>
  )
}
