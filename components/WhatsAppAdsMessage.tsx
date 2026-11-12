'use client'

import { useEffect } from 'react'

// Quem chega pelo anúncio do Google Ads manda uma mensagem com "Vim pelo site",
// (padrão: WhatsApp de vendas das avaliações; psicoterapia usa o do agendamento)
// e quem chega pelo site normal manda a mensagem sem essa frase.
// Assim a recepção identifica no WhatsApp os leads que vieram do anúncio.
const STORAGE_KEY = 'cln_veio_do_anuncio'

function veioDoAnuncio(): boolean {
  const params = new URLSearchParams(window.location.search)
  const agora =
    ['gclid', 'gbraid', 'wbraid'].some(k => params.has(k)) ||
    (params.get('utm_source') === 'google' && params.get('utm_medium') === 'cpc')
  try {
    if (agora) sessionStorage.setItem(STORAGE_KEY, '1')
    return agora || sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return agora
  }
}

export default function WhatsAppAdsMessage({
  textoAnuncio,
  numero = '5548991908715',
}: {
  textoAnuncio: string
  numero?: string
}) {
  useEffect(() => {
    if (!veioDoAnuncio()) return
    const WA_VENDAS = `wa.me/${numero}`
    const linkAnuncio = `https://${WA_VENDAS}?text=${encodeURIComponent(textoAnuncio)}`
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest(`a[href*="${WA_VENDAS}"]`) as HTMLAnchorElement | null
      if (anchor) anchor.href = linkAnuncio
    }
    // captura: troca o link antes do navegador abrir o WhatsApp
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [textoAnuncio, numero])

  return null
}
