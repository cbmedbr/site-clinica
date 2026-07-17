'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Início',       href: '#inicio'                        },
  { label: 'Equipe',       href: '#equipe'                        },
  { label: 'Abordagens',   href: '#abordagens'                    },
  { label: 'Testes Neuro', href: '/avaliacao-neuropsicologica', novo: true },
  { label: 'Nossas Salas', href: '/consultorios'                  },
  { label: 'Nossa Equipe', href: '/equipe'                        },
  { label: 'Convênios',    href: '#convenios'                     },
  { label: 'Trabalhe conosco', href: '#trabalhe-conosco'         },
  { label: 'Sobre',        href: '#sobre'                         },
  { label: 'Contato',      href: '#contato'                       },
]

const WA_LINK = 'https://wa.me/5548998056893'

export default function Header() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-soft border-b border-neutral-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo — arquivo: /public/logo/logo.png */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNav('#inicio') }}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl flex-shrink-0">
            <Image
              src="/logo/clinica.jpeg"
              alt="Clínica Luciano Noceti"
              fill
              className="object-cover scale-[1.35]"
              priority
            />
          </div>
          <div className="block">
            <p className="font-serif font-bold text-[#7C2C3B] text-sm leading-tight whitespace-nowrap">
              Clínica Luciano Noceti
            </p>
            <p className="text-[#7C2C3B] text-[10px] font-medium tracking-widest uppercase leading-tight opacity-70">
              Clínica de Psicologia
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-2.5 py-2 text-sm font-medium text-neutral-600 hover:text-[#7C2C3B]
                           rounded-lg hover:bg-[#FBF0F1] transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
                {link.novo && (
                  <span className="absolute -top-1.5 -right-1 bg-[#7C2C3B] text-white
                                   text-[9px] font-bold leading-none px-1.5 py-0.5 rounded-full">
                    Novo
                  </span>
                )}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="relative px-2.5 py-2 text-sm font-medium text-neutral-600 hover:text-[#7C2C3B]
                           rounded-lg hover:bg-[#FBF0F1] transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
                {link.novo && (
                  <span className="absolute -top-1.5 -right-1 bg-[#7C2C3B] text-white
                                   text-[9px] font-bold leading-none px-1.5 py-0.5 rounded-full">
                    Novo
                  </span>
                )}
              </a>
            )
          )}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3 flex-shrink-0 sm:-mr-2 lg:-mr-4">
          {/* Mobile: só ícone redondo | Desktop: botão completo */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp p-2 rounded-full sm:px-6 sm:rounded-full sm:gap-2"
            aria-label="Agendar pelo WhatsApp"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span className="hidden sm:inline text-sm">Agendamento</span>
          </a>

          <button
            className="xl:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-neutral-100 px-4 pt-2 pb-24 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative px-4 py-3 text-sm font-medium text-neutral-700 hover:text-[#7C2C3B]
                           hover:bg-[#FBF0F1] rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                {link.label}
                {link.novo && (
                  <span className="bg-[#7C2C3B] text-white text-[9px] font-bold
                                   leading-none px-1.5 py-0.5 rounded-full">
                    Novo
                  </span>
                )}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="relative px-4 py-3 text-sm font-medium text-neutral-700 hover:text-[#7C2C3B]
                           hover:bg-[#FBF0F1] rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                {link.label}
                {link.novo && (
                  <span className="bg-[#7C2C3B] text-white text-[9px] font-bold
                                   leading-none px-1.5 py-0.5 rounded-full">
                    Novo
                  </span>
                )}
              </a>
            )
          )}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center mt-2"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
