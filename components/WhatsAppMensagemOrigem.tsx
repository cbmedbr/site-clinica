'use client'

import { useEffect } from 'react'
import {
  montarLinkWhatsApp, registrarOrigemAds, sessionStorageSeguro, type WhatsAppPagina,
} from '@/lib/whatsapp-origem'

// Monta a mensagem do WhatsApp no clique: textoAnuncio ("Oi!...") para quem veio
// do Google Ads, textoSite ("Olá! Vim pelo site...") para os demais.
// Usa a fase de captura para trocar o link antes de o navegador abrir o WhatsApp.
// A conversão do Google Ads (WhatsAppConversionTracker / WhatsAppConversaoAgendamento)
// escuta depois, na fase de bubble, e continua casando o link pelo número.
export default function WhatsAppMensagemOrigem({ pagina }: { pagina: WhatsAppPagina }) {
  const { numero, textoSite, textoAnuncio } = pagina
  useEffect(() => {
    const seletor = `a[href*="wa.me/${numero}"]`
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element | null)?.closest?.(seletor) as HTMLAnchorElement | null
      if (!anchor) return
      const origemGoogle = registrarOrigemAds(window.location.search, sessionStorageSeguro())
      anchor.href = montarLinkWhatsApp({ numero, textoSite, textoAnuncio }, origemGoogle)
    }
    document.addEventListener('click', handleClick, true)
    document.addEventListener('auxclick', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
      document.removeEventListener('auxclick', handleClick, true)
    }
  }, [numero, textoSite, textoAnuncio])

  return null
}
