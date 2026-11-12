'use client'

import { useEffect } from 'react'

const WA_CONVERSION = 'AW-18196512841/poJmCISF37UcEMmA4-RD'

// Conta como conversão só o WhatsApp de vendas das avaliações (48 99190-8715).
// Cliques no WhatsApp de agendamento (48 99805-6893) não entram.
const WA_VENDAS = 'wa.me/5548991908715'

export default function WhatsAppConversionTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest(`a[href*="${WA_VENDAS}"]`)
      if (!anchor) return
      if (typeof (window as { gtag?: Function }).gtag === 'function') {
        ;(window as { gtag?: Function }).gtag!('event', 'conversion', {
          send_to: WA_CONVERSION,
        })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
