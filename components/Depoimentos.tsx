import { Quote } from 'lucide-react'

// ─── CONFIGURAÇÃO — atualize com os dados reais do Google Meu Negócio ────────
const notaGoogle      = 4.6    // Nota média (aceita decimais: 4.8, 4.9, etc.)
const totalAvaliacoes = '200+' // Quantidade total de avaliações
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// ADICIONE AVALIAÇÕES REAIS DO GOOGLE AQUI
// Cole abaixo os depoimentos extraídos do Google Business Profile.
// Formato de cada objeto:
//   texto     → texto completo do comentário
//   autor     → nome ou iniciais do paciente
//   descricao → ex: "Avaliação Google" ou "Paciente"
//   iniciais  → 2 letras para o avatar
//   nota      → número de 1 a 5 (estrelas)
// ─────────────────────────────────────────────────────────────────────────────
const depoimentos = [
  {
    texto:
      'Tive uma das melhores experiências em relação ao agendamento, rápido, completo e orientador. A muito tempo não sou tão bem atendida mesmo com o distanciamento que uma relação por whatsapp nos coloca.',
    autor: 'A. G.',
    descricao: 'Avaliação Google',
    iniciais: 'AG',
    nota: 5,
  },
  {
    texto:
      'A Fabiana Reis é uma psicoterapeuta muito atenciosa, empática e profissional. Desde o início, demonstra escuta ativa e sensibilidade, criando um espaço seguro e acolhedor para se expressar sem julgamentos. As sessões são conduzidas com clareza e cuidado, sempre trazendo reflexões importantes que contribuem de forma real para o autoconhecimento, equilíbrio emocional e bem-estar. Recomento o trabalho dela!',
    autor: 'D. K.',
    descricao: 'Avaliação Google',
    iniciais: 'DK',
    nota: 5,
  },
  {
    texto:
      'Sempre muito bem recebidos e atendidos na clínica. Dra Thayse Silveira, é a melhor profissional que poderíamos ter encontrado para o acompanhamento do meu filho. Recomendo de olhos fechados!',
    autor: 'M. B.',
    descricao: 'Avaliação Google',
    iniciais: 'MB',
    nota: 5,
  },
  {
    texto:
      'Sou paciente da Francielle Silva, uma profissional maravilhosa! As sessões de terapia com ela mudaram totalmente minha vida! Recomendo os atendimentos com ela, pois ela sabe deixar os pacientes 100% confortáveis!!',
    autor: 'L. P.',
    descricao: 'Avaliação Google',
    iniciais: 'LP',
    nota: 5,
  },
  {
    texto:
      'Catarina Geoffroy e Rosângela Mezari são ótimas profissionais, super atenciosas, pacientes, e tivemos muita evolução nas terapias com a duplinha de gêmeos!! Encerramos o ciclo para um dos meninos com a tia Rosângela, e seguimos firmes e fortes ainda com a Tia Catarina!!',
    autor: 'F. S.',
    descricao: 'Avaliação Google',
    iniciais: 'FS',
    nota: 5,
  },
]

// Renderiza estrelas cheias + meia estrela para notas quebradas (4.8, 4.9, etc.)
function Stars({ nota }: { nota: number }) {
  const cheias = Math.floor(nota)
  const meia   = nota - cheias >= 0.25 && nota - cheias < 0.85
  const vazias = 5 - cheias - (meia ? 1 : 0)
  return (
    <div className="text-[#7C2C3B] text-base tracking-tight" aria-label={`${nota} de 5 estrelas`}>
      {'★'.repeat(cheias)}
      {meia ? '½' : ''}
      {'☆'.repeat(vazias < 0 ? 0 : vazias)}
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section className="section-padding bg-[#FCECBF]">
      <div className="container-max">

        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block text-[#7C2C3B] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Avaliações
          </span>
          <h2 className="heading-primary text-2xl sm:text-4xl">
            O que dizem nossos pacientes
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#7C2C3B] mx-auto" />

          {/* Nota agregada */}
          <div className="mt-6 inline-flex items-center gap-3 bg-neutral-50 rounded-full px-5 py-2.5 border border-neutral-100">
            <Stars nota={notaGoogle} />
            <span className="text-neutral-700 font-semibold text-sm">{notaGoogle.toFixed(1)}</span>
            <span className="text-neutral-400 text-sm">·</span>
            <span className="text-neutral-500 text-sm">{totalAvaliacoes} avaliações no Google</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            COLOQUE O SCRIPT DO WIDGET AQUI
            Se preferir automatizar (sem API), cole abaixo o <iframe> ou
            <script> de um widget como Trustindex ou Elfsight.
            Remova o grid de cards manuais abaixo quando ativar o widget.
        ───────────────────────────────────────────────────────────────── */}

        {/* Cards manuais | Mobile: scroll horizontal | md+: grid */}
        <div className="snap-cards flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4
                        md:grid md:grid-cols-2 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0
                        lg:grid-cols-3 md:gap-6">
          {depoimentos.map((d) => (
            <article key={d.autor + d.texto.slice(0, 20)}
              className="card p-6 flex flex-col gap-4
                         flex-shrink-0 snap-start w-[82vw] min-w-[280px]
                         md:w-auto md:min-w-0">
              {/* Top: stars + quote icon */}
              <div className="flex items-center justify-between">
                <Stars nota={d.nota} />
                <Quote className="w-6 h-6 text-neutral-200" />
              </div>

              {/* Text */}
              <p className="text-neutral-600 text-sm leading-relaxed flex-1 italic">
                "{d.texto}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-[#F4E6E9] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif font-bold text-sm text-[#7C2C3B]">
                    {d.iniciais}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{d.autor}</p>
                  <p className="text-neutral-400 text-xs">{d.descricao}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-neutral-400 text-xs mt-8 max-w-md mx-auto">
          * Depoimentos de pacientes reais coletados no Google. Identidades preservadas
          conforme ética profissional.
        </p>
      </div>
    </section>
  )
}
