import type { Metadata } from 'next'
import ConsultoriosClient from './ConsultoriosClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lucianonoceti.com.br'),
  title: 'Nossos Espaços | Clínica Luciano Noceti',
  description:
    'Conheça os consultórios e espaços da Clínica Luciano Noceti no Centro de Florianópolis. Ambientes climatizados, mobiliados e projetados para o bem-estar do paciente.',
  openGraph: {
    title: 'Nossos Espaços | Clínica Luciano Noceti',
    description:
      'Consultórios climatizados e acolhedores no Centro de Florianópolis. Conheça nossa estrutura.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.lucianonoceti.com.br/consultorios',
    siteName: 'Clínica Luciano Noceti',
  },
}

export default function ConsultoriosPage() {
  return <ConsultoriosClient />
}
