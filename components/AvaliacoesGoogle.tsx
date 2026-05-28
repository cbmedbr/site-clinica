import { ExternalLink } from 'lucide-react'

const GOOGLE_LINK = 'https://maps.app.goo.gl/mhVodvAMZFhw5gqT8'

export default function AvaliacoesGoogle() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center">
          <span
            className="text-[10px] font-bold tracking-[0.25em] uppercase block mb-3"
            style={{ color: '#B8883A' }}
          >
            AVALIAÇÕES
          </span>
          <h2
            className="font-serif font-bold mb-5"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#2D1A1E' }}
          >
            O que dizem sobre nós
          </h2>

          {/* Rating */}
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl px-8 py-6 mb-6"
            style={{ background: '#FAF7F4', border: '1px solid rgba(124,44,59,0.08)' }}
          >
            <div className="flex flex-col items-center gap-1">
              <div
                className="flex gap-1"
                aria-hidden="true"
              >
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-7 h-7 fill-[#F59E0B]" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
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

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={GOOGLE_LINK}
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
        </div>
      </div>
    </section>
  )
}
