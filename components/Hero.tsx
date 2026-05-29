import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/5548998056893'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/principal-hero4.avif"
          alt="Silhueta em campo aberto ao pôr do sol"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Gradient overlay — desktop leve, tablet médio, mobile quase opaco */}
      <div
        aria-hidden
        className="absolute inset-0 hero-gradient"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-24 pb-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">

        {/* Location badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm
                           border border-white/20 rounded-full px-4 py-1.5
                           text-[#FCECBF] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#FCECBF] opacity-80" />
            Centro de Florianópolis — SC
          </span>
        </div>

        {/* Text column — left third on desktop, full width on mobile */}
        <div className="max-w-xl space-y-6">

          {/* Headline */}
          <h1 className="heading-serif text-4xl sm:text-5xl xl:text-6xl text-[#FCECBF] leading-[1.1]">
            Excelência no cuidado com a{' '}
            <br className="hidden sm:block" />
            saúde mental
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-[#FCECBF]/85 leading-relaxed">
            Há mais de 9 anos acolhendo crianças, adolescentes, adultos e idosos
            com excelência, ciência e humanidade.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5
                         bg-[#FCECBF] text-[#7C2C3B] font-semibold text-base
                         transition-all duration-300 ease-in-out
                         hover:bg-[#FFF5D6] hover:scale-[1.02] active:scale-[0.98]
                         shadow-[0_4px_20px_rgba(252,236,191,0.40)]"
                        /* VARIAÇÃO B: bg-[#A84055] text-[#FCECBF] border border-[#FCECBF]/60 hover:bg-[#8F3347] shadow-lg */
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              Agendamento Rápido
            </a>
          </div>

          {/* Lacan quote */}
          <blockquote className="max-w-lg pt-2">
            <span className="text-[#FCECBF]/50 font-serif text-3xl leading-none select-none" aria-hidden>&ldquo;</span>
            <p className="text-[#FCECBF]/75 italic text-sm sm:text-base leading-relaxed -mt-2">
              O amor é o passo mais importante da cultura; foi através dele que
              o ser humano passou a ser menos egoísta.
            </p>
            <footer className="mt-2 text-[#FCECBF]/55 text-xs font-medium tracking-wide">
              — Lacan
            </footer>
          </blockquote>

        </div>
      </div>
    </section>
  )
}
