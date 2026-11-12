'use client'

import { useEffect } from 'react'

// Conversão do Google Ads da campanha de psicoterapia:
// clique no WhatsApp do agendamento (48 99805-6893) nas páginas de psicoterapia.
const CONVERSAO = 'AW-18196512841/sgEzCIrB6bYdEMmA4-RD'
const WA_AGENDAMENTO = 'wa.me/5548998056893'

export default function WhatsAppConversaoAgendamento() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest(`a[href*="${WA_AGENDAMENTO}"]`)
      if (!anchor) return
      const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag
      if (typeof gtag === 'function') gtag('event', 'conversion', { send_to: CONVERSAO })
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
