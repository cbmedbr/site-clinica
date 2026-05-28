import type { Prof } from './profissionais'

const BASE    = 'https://www.lucianonoceti.com.br'
const CLINICA = {
  '@type': 'MedicalClinic',
  name:    'Clínica Luciano Noceti',
  url:     BASE,
}

/** JSON-LD MedicalClinic — para injetar na home / layout */
export const clinicaLD = {
  '@context': 'https://schema.org',
  '@type':    'MedicalClinic',
  name:       'Clínica Luciano Noceti',
  url:        BASE,
  telephone:  '+55 48 99805-6893',
  address: {
    '@type':         'PostalAddress',
    streetAddress:   'Rua Felipe Schmidt, 515, Edifício Pórtico, 2º andar',
    addressLocality: 'Florianópolis',
    addressRegion:   'SC',
    postalCode:      '88010-001',
    addressCountry:  'BR',
  },
  medicalSpecialty: 'Psicologia e Psicanálise',
}

/** JSON-LD Person — para injetar na página de cada profissional */
export function gerarProfissionalLD(prof: Prof, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Person',
    name:       prof.nome,
    jobTitle:   'Psicólogo(a)',
    identifier: prof.registro,
    knowsAbout: prof.metodo,
    url:        `${BASE}/perfil/${slug}`,
    worksFor:   CLINICA,
  }
}

/** JSON-LD FAQPage — para injetar na página de avaliação */
export function gerarFaqLD(items: Array<{ pergunta: string; resposta: string }>) {
  return {
    '@context':   'https://schema.org',
    '@type':      'FAQPage',
    mainEntity:   items.map(({ pergunta, resposta }) => ({
      '@type': 'Question',
      name:    pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    resposta,
      },
    })),
  }
}
