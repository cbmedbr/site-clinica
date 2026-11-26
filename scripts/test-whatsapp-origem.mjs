// Teste das mensagens de WhatsApp por origem (Google Ads x site).
// Rodar: node scripts/test-whatsapp-origem.mjs   (Node 22.18+ importa .ts direto)
import assert from 'node:assert/strict'
import {
  WHATSAPP_PAGINAS, montarLinkWhatsApp, registrarOrigemAds, urlVeioDoGoogleAds, ORIGEM_ADS_KEY,
} from '../lib/whatsapp-origem.ts'

function memoria() {
  const m = new Map()
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)) }
}

// Simula a sessão: chegou em `entrada` e depois clicou no WhatsApp em `pagina`
function linkNoClique(entrada, pagina) {
  const storage = memoria()
  registrarOrigemAds(entrada, storage)            // OrigemAdsDetector no layout
  const origem = registrarOrigemAds('', storage)  // clique em outra página, sem query
  return montarLinkWhatsApp(WHATSAPP_PAGINAS[pagina], origem)
}

const casos = [
  ['/avaliacao-neuropsicologica', 'neuro', '5548991908715',
    'Olá! Vim pelo site e gostaria de informações sobre a avaliação neuropsicológica.',
    'Oi! Gostaria de saber mais sobre a avaliação neuropsicológica.'],
  ['/avaliacao-autismo-florianopolis', 'autismo', '5548991908715',
    'Olá! Vim pelo site e gostaria de saber sobre a avaliação de autismo (TEA).',
    'Oi! Gostaria de saber mais sobre a avaliação de autismo (TEA).'],
  ['/psicologo-florianopolis', 'psicologo', '5548998056893',
    'Olá! Vim pelo site e gostaria de agendar uma sessão de psicoterapia.',
    'Oi! Gostaria de agendar uma sessão de psicoterapia.'],
  ['/psicologo-infantil-florianopolis', 'psicologoInfantil', '5548998056893',
    'Olá! Vim pelo site e gostaria de agendar psicoterapia para meu filho(a).',
    'Oi! Gostaria de agendar psicoterapia para meu filho(a).'],
]

for (const [rota, chave, numero, textoSite, textoAnuncio] of casos) {
  for (const query of ['', '?gclid=teste']) {
    const url = linkNoClique(query, chave)
    const u = new URL(url)
    const msg = u.searchParams.get('text')
    assert.equal(u.host + u.pathname, `wa.me/${numero}`)
    assert.equal(msg, query ? textoAnuncio : textoSite)
    assert.ok(!msg.includes('(G'), `mensagem com código: ${msg}`)
    console.log(`${rota}${query}
  ${decodeURIComponent(url)}`)
  }
}

// Detecção
assert.ok(urlVeioDoGoogleAds('?gbraid=x'))
assert.ok(urlVeioDoGoogleAds('?wbraid=x'))
assert.ok(urlVeioDoGoogleAds('?utm_source=google&utm_medium=cpc'))
assert.ok(!urlVeioDoGoogleAds('?utm_source=google&utm_medium=organic'))
assert.ok(!urlVeioDoGoogleAds('?utm_source=facebook&utm_medium=cpc'))
const s = memoria(); registrarOrigemAds('?gclid=1', s); assert.equal(s.getItem(ORIGEM_ADS_KEY), 'google')
// sessionStorage que lança erro não quebra
const quebrado = { getItem() { throw new Error('x') }, setItem() { throw new Error('x') } }
assert.equal(registrarOrigemAds('?gclid=1', quebrado), true)
assert.equal(registrarOrigemAds('', quebrado), false)
assert.equal(registrarOrigemAds('', undefined), false)

console.log('\nOK: todos os testes passaram')
