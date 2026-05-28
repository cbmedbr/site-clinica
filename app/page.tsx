'use client'

import { useEffect } from 'react'
import Header      from '@/components/Header'
import Hero        from '@/components/Hero'
import Diferenciais from '@/components/Diferenciais'
import Sobre       from '@/components/Sobre'
import AvaliacaoNeuropsico from '@/components/AvaliacaoNeuropsico'
import Abordagens  from '@/components/Abordagens'
import CorpoClinico from '@/components/CorpoClinico'
import AvaliacoesGoogle from '@/components/AvaliacoesGoogle'
import Convenios   from '@/components/Convenios'
import Footer      from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Home() {
  /* Intersection Observer — animate sections on scroll */
  useEffect(() => {
    const targets = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <CorpoClinico />
        <Abordagens />
        <AvaliacaoNeuropsico />
        <Convenios />
        <Sobre />
        <AvaliacoesGoogle />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
