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
          src="/principal-hero3.avif"
          alt="Ambiente acolhedor da Clínica Luciano Noceti"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Gradient overlay — véu claro/quente à esquerda para contraste do texto bordô */}
      <div
        aria-hidden
        className="absolute inset-0 hero-gradient"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-24 pb-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">

        {/* Location badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-[#FAF3EC]/80 backdrop-blur-sm
                           border border-[#7C2C3B]/20 rounded-full px-4 py-1.5
                           text-[#7C2C3B] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#7C2C3B] opacity-70" />
            Centro de Florianópolis — SC
          </span>
        </div>

        {/* Text column */}
        <div className="max-w-xl space-y-6">

          {/* Headline */}
          <h1 className="heading-serif text-4xl sm:text-5xl xl:text-6xl text-[#7C2C3B] leading-[1.1]">
            Excelência no cuidado com a{' '}
            <br className="hidden sm:block" />
            saúde mental
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-[#5A1E2A] leading-relaxed">
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
                         bg-[#7C2C3B] text-[#FCECBF] font-semibold text-base
                         transition-all duration-300 ease-in-out
                         hover:bg-[#963347] hover:scale-[1.02] active:scale-[0.98]
                         shadow-lg"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              Agendamento Rápido
            </a>
          </div>

          {/* Lacan quote */}
          <blockquote className="max-w-lg pt-2">
            <span className="text-[#7C2C3B]/40 font-serif text-3xl leading-none select-none" aria-hidden>&ldquo;</span>
            <p className="text-[#5A1E2A]/80 italic text-sm sm:text-base leading-relaxed -mt-2">
              O amor é o passo mais importante da cultura; foi através dele que
              o ser humano passou a ser menos egoísta.
            </p>
            <footer className="mt-2 text-[#7C2C3B]/60 text-xs font-medium tracking-wide">
              — Lacan
            </footer>
          </blockquote>

        </div>
      </div>
    </section>
  )
}
