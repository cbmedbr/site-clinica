import {
  MapPin, Phone, Mail, AlertTriangle,
  Instagram, Facebook, Clock, MessageCircle,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const WA_LINK   = 'https://wa.me/5548998056893'
const IG_LINK   = 'https://www.instagram.com/clinicalucianonoceti/'
const FB_LINK   = 'https://www.facebook.com/clinicalucianonoceti/'
const MAPS_LINK = 'https://maps.google.com/?q=Rua+Felipe+Schmidt+515+Florianópolis+SC'

const navLinks = [
  { label: 'Início',     href: '#inicio'     },
  { label: 'Sobre',      href: '#sobre'      },
  { label: 'Abordagens', href: '#abordagens' },
  { label: 'Equipe',     href: '#equipe'     },
  { label: 'Nossos Espaços', href: '/consultorios' },
  { label: 'Convênios',  href: '#convenios'  },
  { label: 'Contato',    href: '#contato'    },
]

export default function Footer() {
  return (
    <footer id="contato">

      {/* ── Emergency Banner ── */}
      <div className="bg-[#7C2C3B]">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start sm:items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FCECBF] flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-[#FCECBF] text-sm leading-relaxed">
              <strong>Aviso de segurança:</strong> Esta clínica não oferece atendimento emergencial.
              Em caso de crise ou risco à vida, ligue para o{' '}
              <strong>CVV (188)</strong> — disponível 24h gratuitamente — ou procure o
              pronto-socorro mais próximo.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="bg-neutral-800 text-neutral-300">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1 space-y-4">
              {/* Logo — arquivo: /public/logo/clinica.jpeg */}
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 overflow-hidden rounded-xl flex-shrink-0">
                  <Image
                    src="/logo/clinica.jpeg"
                    alt="Clínica Luciano Noceti"
                    fill
                    sizes="56px"
                    className="object-cover scale-[1.35]"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-sm leading-tight">
                    Clínica Luciano Noceti
                  </p>
                  <p className="text-[#FCECBF] text-[10px] font-medium tracking-widest uppercase leading-tight">
                    Clínica de Psicologia
                  </p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Cuidando da saúde mental com dedicação, ciência e humanidade há mais
                de 9 anos no coração de Florianópolis.
              </p>
              {/* Social */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={IG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-neutral-700 hover:bg-[#7C2C3B]
                             flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={FB_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-neutral-700 hover:bg-[#7C2C3B]
                             flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-neutral-700 hover:bg-emerald-600
                             flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm tracking-wide">Navegação</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-neutral-400 text-sm hover:text-[#FCECBF] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-neutral-400 text-sm hover:text-[#FCECBF] transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm tracking-wide">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#FCECBF] flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-300 hover:text-white transition-colors block"
                    >
                      (48) 9 9805-6893
                    </a>
                    <span className="text-neutral-500 text-xs">WhatsApp</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#FCECBF] flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="mailto:centraldeagendamento@lucianonoceti.com.br"
                      className="text-sm text-neutral-300 hover:text-white transition-colors block break-all"
                    >
                      centraldeagendamento@lucianonoceti.com.br
                    </a>
                    <span className="text-neutral-500 text-xs">Central de Agendamento</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#FCECBF] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-neutral-300">
                    <p>Segunda a Sexta, das 08h às 21h</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm tracking-wide">Localização</h4>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FCECBF] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-neutral-300 leading-relaxed">
                  <p>Rua Felipe Schmidt, 515</p>
                  <p>Edifício Pórtico - 2º andar</p>
                  <p>Salas 201, 202, 203, 204, 205, 206, 210 e 212</p>
                  <p>Centro - Florianópolis - SC</p>
                  <p className="text-neutral-500">CEP 88010-001</p>
                </div>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FCECBF]
                           hover:text-white transition-colors"
              >
                <MapPin className="w-3 h-3" />
                Ver no Google Maps
              </a>

              {/* Google Maps embed */}
              <iframe
                src="https://maps.google.com/maps?q=Rua+Felipe+Schmidt,+515,+Centro,+Florianópolis,+SC,+88010-001&output=embed"
                title="Localização da Clínica Luciano Noceti"
                width="100%"
                height="112"
                loading="lazy"
                className="rounded-xl mt-2"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-neutral-700 flex flex-col sm:flex-row
                          items-center justify-between gap-3 text-neutral-500 text-xs">
            <p>
              © {new Date().getFullYear()} Clínica Luciano Noceti. Todos os direitos reservados.
            </p>
            <p className="text-center">
              CRP 12/02627 · Responsável Técnico: Luciano Noceti e Vieira
              <span className="mx-2 opacity-40">·</span>
              CRP 12/0565-PJ · Pessoa Jurídica
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
