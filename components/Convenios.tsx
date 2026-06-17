import Image from 'next/image'
import Link from 'next/link'
import { Building2, Camera, CheckCircle2, MessageCircle } from 'lucide-react'
import { SALAS } from '@/lib/consultorios'

const WA_LINK = 'https://wa.me/5548998056893'

// Logos salvas em /public/logo/ (singular)
// scale: aplica transform para logos com muito espaço transparente interno
const convenios = [
  { nome: 'Unimed',      logo: '/logo/unimed.png'     },
  { nome: 'SIM Saúde',   logo: '/logo/sim.png'        },
  { nome: 'SC Saúde',    logo: '/logo/scsaude.png',   scale: 'scale-[1.6]' },
  { nome: 'Petrobras',   logo: '/logo/petrobras.png', scale: 'scale-[1.5]' },
  { nome: 'GEAP Saúde',  logo: '/logo/geapsaude.png' },
  { nome: 'Saudesc',     logo: '/logo/saudesc.jpeg',  scale: 'scale-[1.5]' },
  { nome: 'CASACARESC',  logo: '/logo/casacaresc.png',scale: 'scale-[1.6]' },
  { nome: 'ABEPOM',      logo: '/logo/abepom.avif',   scale: 'scale-[1.5]' },
  { nome: 'EloSaúde',    logo: '/logo/elosaude.jpg'   },
  { nome: 'Celos',       logo: '/logo/celos.avif'     },
  { nome: 'FUSEx',       logo: '/logo/fusex.png',     scale: 'scale-[1.5]' },
  { nome: 'Sidesc',      logo: '/logo/sidesc.jpg',    scale: 'scale-[0.85]' },
  { nome: 'Polícia Militar de SC', logo: '/logo/pmsc.png', scale: 'scale-[1.4]', alt: 'Logo do Plano de Saúde da Polícia Militar de Santa Catarina' },
]

const locacaoItems = [
  'Consultórios climatizados e mobiliados',
  'Sala de espera confortável e privativa',
  'Localização privilegiada no centro de Florianópolis',
  'Flexibilidade de horários e periodicidade',
  'Suporte administrativo e de agendamento',
  'Wi-Fi de alta velocidade incluso',
]

export default function Convenios() {
  const previews = SALAS.filter((s) => s.destaque && s.fotos.length > 0).slice(0, 3)
  const outrosSalas = SALAS.filter((s) => s.fotos.length > 0).length - previews.length

  return (
    <section id="convenios" className="section-padding bg-white">
      <div className="container-max">

        {/* ── Convênios ── */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#7C2C3B] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Planos de Saúde
          </span>
          <h2 className="heading-primary text-3xl sm:text-4xl">
            Convênios
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#7C2C3B] mx-auto" />
          <p className="mt-5 text-body text-base max-w-lg mx-auto">
            Trabalhamos com os principais planos de saúde para que o cuidado
            com sua saúde mental seja acessível.
          </p>
        </div>

        {/* Grid de logos — 3 col no mobile, 4 col no lg */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 mb-8">
          {convenios.map(({ nome, logo, scale, alt }) => (
            <div
              key={nome}
              className="flex items-center justify-center bg-white border border-[#7C2C3B]/15
                         rounded-xl p-2 sm:p-5 overflow-hidden
                         hover:border-[#7C2C3B]/35 hover:-translate-y-0.5
                         transition-all duration-300"
              style={{ boxShadow: '0 1px 6px rgba(124,44,59,0.07), 0 4px 14px rgba(124,44,59,0.05)' }}
            >
              <img
                src={logo}
                alt={alt ?? nome}
                className={`object-contain h-8 sm:h-14 w-auto mx-auto transition-transform ${scale ?? ''}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-neutral-500 text-sm">
            Não encontrou seu plano?{' '}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C2C3B] font-semibold hover:underline"
            >
              Consulte-nos pelo WhatsApp
            </a>{' '}
            — também atendemos particulares.
          </p>
        </div>

        {/* ── Locação de Consultórios ── */}
        <div id="trabalhe-conosco" className="scroll-mt-24 bg-white rounded-3xl p-8 lg:p-12 border border-neutral-100/80"
          style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 8px 40px rgba(0,0,0,0.04)' }}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2.5 bg-[#F4E6E9] rounded-full px-4 py-1.5">
                <Building2 className="w-4 h-4 text-[#7C2C3B]" />
                <span className="text-[#7C2C3B] text-xs font-semibold tracking-wide">
                  Para profissionais da saúde mental
                </span>
              </div>
              <h3 className="heading-serif text-2xl sm:text-3xl text-neutral-800">
                Faça parte da nossa equipe!
              </h3>
              <p className="text-body text-base leading-8">
                Você é psicólogo(a), psicoterapeuta ou profissional da saúde mental e
                busca um espaço estruturado no centro de Florianópolis? Oferecemos
                consultórios prontos para atendimento, em um ambiente profissional,
                acolhedor e com toda a infraestrutura necessária para você focar no
                que importa: seus pacientes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar informações
                </a>
                <Link href="/consultorios" className="btn-outline inline-flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Ver consultórios
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locacaoItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5 bg-neutral-50 rounded-xl p-3.5 border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-[#7C2C3B] flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-600 text-sm leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preview de fotos — só renderiza quando há salas com destaque */}
          {previews.length > 0 && (
            <div className="mt-8 pt-8 border-t border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-neutral-100" />
                <span className="text-neutral-400 text-xs font-medium tracking-wide uppercase px-1">
                  Conheça nossos espaços
                </span>
                <div className="h-px flex-1 bg-neutral-100" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {previews.map((sala) => (
                  <Link
                    key={sala.id}
                    href="/consultorios"
                    className="group relative aspect-video rounded-xl overflow-hidden bg-neutral-100 block"
                  >
                    <Image
                      src={sala.fotos[0].src}
                      alt={sala.fotos[0].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white text-xs font-medium">{sala.nome}</span>
                    </div>
                  </Link>
                ))}
                {outrosSalas > 0 && (
                  <Link
                    href="/consultorios"
                    className="relative aspect-video rounded-xl overflow-hidden bg-[#7C2C3B] flex flex-col items-center justify-center gap-1 hover:bg-[#963347] transition-colors"
                  >
                    <span className="text-[#FCECBF] font-bold text-2xl">+{outrosSalas}</span>
                    <span className="text-[#FCECBF]/70 text-xs font-medium">espaços</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
