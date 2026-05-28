import Image from 'next/image'
import { MessageCircle, Users, Quote } from 'lucide-react'
import { profissionais } from '@/lib/profissionais'

const WA_LINK = 'https://wa.me/5548998056893'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      style={{ backgroundColor: '#FAF8F5' }}
    >
      {/* Blobs decorativos suaves */}
      <div aria-hidden
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full
                   bg-[#F4E6E9] opacity-40 blur-3xl pointer-events-none" />
      <div aria-hidden
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full
                   bg-[#FCECBF] opacity-50 blur-3xl pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Texto ── */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm
                            border border-[#F4E6E9] rounded-full px-4 py-1.5
                            text-[#7C2C3B] text-xs font-semibold tracking-wide shadow-soft">
              <span className="w-2 h-2 rounded-full bg-[#7C2C3B] animate-pulse" />
              Centro de Florianópolis — SC
            </div>

            {/* Headline */}
            <h1 className="heading-serif text-3xl sm:text-5xl xl:text-6xl text-neutral-800 leading-[1.1]">
              Excelência no cuidado com a{' '}
              <br className="hidden sm:block" />
              <span className="text-[#7C2C3B]">saúde mental</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg">
              Seu bem-estar está em boas mãos. Há mais de 9 anos acolhendo crianças,
              adolescentes, adultos e idosos com excelência, ciência e humanidade.
            </p>

            {/* Quote */}
            <blockquote className="relative bg-white/80 backdrop-blur-sm rounded-2xl
                                   border-l-4 border-[#7C2C3B] px-6 py-6"
              style={{ boxShadow: '0 2px 16px rgba(124,44,59,0.08)' }}>
              <Quote className="w-8 h-8 text-[#FCECBF] mb-2" />
              <p className="text-neutral-700 italic leading-relaxed text-sm sm:text-base">
                "O amor é o passo mais importante da cultura; foi através dele que
                o ser humano passou a ser menos egoísta."
              </p>
              <footer className="mt-3 text-[#7C2C3B] font-semibold text-sm">
                — Freud
              </footer>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-3.5"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
              <a href="#equipe" className="btn-outline text-base px-7 py-3.5">
                <Users className="w-5 h-5" />
                Conheça nossa Equipe
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { number: '+20.000', label: 'Pacientes atendidos' },
                { number: '+9',      label: 'anos de experiência' },
                { number: String(profissionais.length), label: 'Profissionais' },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-serif font-bold text-2xl text-[#7C2C3B]">{stat.number}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Imagem lateral — /public/logo/consulta.png ── */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="w-full aspect-[4/5] rounded-3xl shadow-hover overflow-hidden border border-white/60 relative">
                <Image
                  src="/logo/divã.png"
                  alt="Ambiente acolhedor da Clínica Luciano Noceti — divã"
                  fill
                  className="object-cover"
                  priority
                  sizes="448px"
                />
              </div>

              {/* Card avaliações */}
              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-hover
                              p-4 flex items-center gap-3 border border-neutral-100 w-52">
                <div className="flex -space-x-2">
                  {['bg-[#F4E6E9]', 'bg-[#FCECBF]', 'bg-[#F7EDE9]'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white
                                            flex items-center justify-center text-xs font-bold text-[#7C2C3B]`}>
                      {['P', 'M', 'J'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[#7C2C3B] text-xs">★★★★★</div>
                  <p className="text-neutral-500 text-[10px]">+200 avaliações</p>
                </div>
              </div>

              {/* Card disponibilidade */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-hover
                              p-3 flex items-center gap-2.5 border border-neutral-100">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-neutral-700 text-xs font-semibold whitespace-nowrap">
                  Consultas disponíveis
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 wave-divider pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="#F8FAFB" />
        </svg>
      </div>
    </section>
  )
}
