import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const tags = ['TDAH', 'TEA', 'Alzheimer', 'Memória', 'Funções Executivas', 'Demências']

export default function AvaliacaoNeuropsico() {
  return (
    <section id="neuropsicologia" className="w-full bg-[#7C2C3B] section-padding relative overflow-hidden">

      {/* Decorative soft glows */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(252,236,191,0.08) 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(252,236,191,0.06) 0%, transparent 65%)' }}
        />
        {/* Thin decorative ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ border: '1px solid #FCECBF' }}
        />
      </div>

      <div className="container-max relative">

        {/* Badge */}
        <div className="flex justify-center mb-5 md:mb-8">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25
                           rounded-full px-4 py-1.5 text-white text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#FCECBF] animate-pulse" />
            Destaque
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Avaliação Neuropsicológica
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-[#FCECBF] mx-auto" />
          <p className="mt-5 text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Mapeamento cognitivo e emocional profundo para diagnósticos precisos
            e direcionamento terapêutico assertivo.
          </p>
        </div>

        {/* Indication tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{
                background: 'rgba(252,236,191,0.1)',
                border: '1px solid rgba(252,236,191,0.18)',
                color: 'rgba(252,236,191,0.75)',
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/avaliacao-neuropsicologica"
            className="group inline-flex items-center gap-4
                       bg-white/[0.08] hover:bg-white
                       border border-white/25 hover:border-white
                       text-white hover:text-[#7C2C3B]
                       font-semibold text-base sm:text-lg
                       px-9 sm:px-12 py-4 sm:py-5
                       rounded-full
                       transition-all duration-300 ease-out
                       hover:shadow-[0_0_60px_rgba(255,255,255,0.18),0_8px_32px_rgba(0,0,0,0.25)]
                       hover:scale-[1.04]"
          >
            <span className="tracking-wide">Saiba mais sobre a avaliação</span>
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                         border border-white/40 group-hover:border-[#7C2C3B]/30
                         transition-all duration-300
                         group-hover:translate-x-1"
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            </span>
          </Link>

          {/* Subtle trust line */}
          <p className="text-white/30 text-[11px] font-medium tracking-widest uppercase">
            Instrumentos padrão-ouro · Laudo técnico · Florianópolis/SC
          </p>
        </div>

      </div>
    </section>
  )
}
