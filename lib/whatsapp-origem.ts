// Identifica no WhatsApp os contatos que vieram do Google Ads e de qual página.
// Funções puras (sem window) para poder testar fora do navegador:
// scripts/test-whatsapp-origem.mjs

export const ORIGEM_ADS_KEY = 'origem_ads'
export const ORIGEM_GOOGLE = 'google'

export type WhatsAppPagina = { numero: string; textoSite: string; textoAnuncio: string }

// Mensagens das páginas de anúncio. Quem veio do Google Ads manda textoAnuncio ("Oi!..."),
// os demais mandam textoSite ("Olá! Vim pelo site..."). Assim a recepção distingue a origem.
export const WHATSAPP_PAGINAS = {
  neuro: {
    numero: '5548991908715',
    textoAnuncio: 'Oi! Gostaria de saber mais sobre a avaliação neuropsicológica.',
    textoSite: 'Olá! Vim pelo site e gostaria de informações sobre a avaliação neuropsicológica.',
  },
  autismo: {
    numero: '5548991908715',
    textoAnuncio: 'Oi! Gostaria de saber mais sobre a avaliação de autismo (TEA).',
    textoSite: 'Olá! Vim pelo site e gostaria de saber sobre a avaliação de autismo (TEA).',
  },
  psicologo: {
    numero: '5548998056893',
    textoAnuncio: 'Oi! Gostaria de agendar uma sessão de psicoterapia.',
    textoSite: 'Olá! Vim pelo site e gostaria de agendar uma sessão de psicoterapia.',
  },
  psicologoInfantil: {
    numero: '5548998056893',
    textoAnuncio: 'Oi! Gostaria de agendar psicoterapia para meu filho(a).',
    textoSite: 'Olá! Vim pelo site e gostaria de agendar psicoterapia para meu filho(a).',
  },
} satisfies Record<string, WhatsAppPagina>

// gclid / gbraid / wbraid, ou utm_source=google com utm_medium=cpc
export function urlVeioDoGoogleAds(search: string): boolean {
  const params = new URLSearchParams(search)
  return (
    ['gclid', 'gbraid', 'wbraid'].some(k => params.has(k)) ||
    (params.get('utm_source') === 'google' && params.get('utm_medium') === 'cpc')
  )
}

export function montarLinkWhatsApp(pagina: WhatsAppPagina, origemGoogle: boolean): string {
  const texto = origemGoogle ? pagina.textoAnuncio : pagina.textoSite
  return `https://wa.me/${pagina.numero}?text=${encodeURIComponent(texto)}`
}

type Storage = Pick<globalThis.Storage, 'getItem' | 'setItem'>

// Grava a origem se a URL atual for de anúncio e devolve se a sessão veio do Google Ads.
export function registrarOrigemAds(search: string, storage: Storage | undefined): boolean {
  const agora = urlVeioDoGoogleAds(search)
  try {
    if (agora) storage?.setItem(ORIGEM_ADS_KEY, ORIGEM_GOOGLE)
    return agora || storage?.getItem(ORIGEM_ADS_KEY) === ORIGEM_GOOGLE
  } catch {
    return agora
  }
}

// sessionStorage pode lançar erro (modo privado, cookies bloqueados)
export function sessionStorageSeguro(): Storage | undefined {
  try {
    return typeof window === 'undefined' ? undefined : window.sessionStorage
  } catch {
    return undefined
  }
}
