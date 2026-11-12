import type { Metadata } from 'next'
import { profissionais } from '@/lib/profissionais'
import PsicoterapiaLanding from '@/components/PsicoterapiaLanding'

export const metadata: Metadata = {
  title: 'Psicólogo Infantil em Florianópolis | Crianças e Adolescentes | Clínica Luciano Noceti',
  description:
    'Psicoterapia para crianças a partir de 2 anos e adolescentes em Florianópolis. Presencial no Centro (Sala 204) ou online. Sessão particular R$ 150. Agende pelo WhatsApp.',
  alternates: { canonical: '/psicologo-infantil-florianopolis' },
  openGraph: {
    title: 'Psicólogo Infantil em Florianópolis | Clínica Luciano Noceti',
    description: 'Psicoterapia para crianças e adolescentes no Centro de Florianópolis. Sessão particular R$ 150.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.lucianonoceti.com.br/psicologo-infantil-florianopolis',
    siteName: 'Clínica Luciano Noceti',
  },
}

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const equipe = profissionais.filter(p => !p.ocultarDaEquipe && /crianc/.test(norm(p.publico)))

const faqItems = [
  {
    pergunta: 'A partir de qual idade vocês atendem?',
    resposta:
      'Temos psicólogas que atendem crianças a partir de 2 anos. A idade mínima varia conforme o profissional, e o setor de agendamento indica quem atende a faixa etária do seu filho.',
  },
  {
    pergunta: 'Vocês atendem adolescentes?',
    resposta: 'Sim. Boa parte da equipe atende adolescentes.',
  },
  {
    pergunta: 'Os pais participam?',
    resposta:
      'Vários profissionais da equipe oferecem orientação parental, com momentos de conversa com os pais ao longo do acompanhamento.',
  },
  {
    pergunta: 'Quanto custa a sessão?',
    resposta: 'A sessão particular custa R$ 150.',
  },
  {
    pergunta: 'É presencial ou online?',
    resposta:
      'O atendimento presencial é no Centro de Florianópolis (Rua Felipe Schmidt, 515, Edifício Pórtico, 2º andar, Sala 204). Também há atendimento online; o setor de agendamento orienta a melhor opção conforme a idade e o profissional.',
  },
  {
    pergunta: 'Vocês atendem por plano de saúde?',
    resposta:
      'Esta página é para atendimento particular. Alguns profissionais da equipe também atendem por planos de saúde; consulte o setor de agendamento.',
  },
]

export default function PsicologoInfantilFlorianopolisPage() {
  return (
    <PsicoterapiaLanding
      badge="Crianças e adolescentes"
      tituloAntes="Psicólogo"
      tituloDestaque="Infantil"
      tituloDepois="em Florianópolis"
      subtitulo="Psicoterapia para crianças a partir de 2 anos e adolescentes, com orientação para os pais. Presencial no Centro ou online."
      textoWhatsApp="Olá! Gostaria de agendar psicoterapia para meu filho(a)."
      textoWhatsAppAnuncio="Olá! Vim pelo site e gostaria de agendar psicoterapia para meu filho(a)."
      paraQuemTitulo="Quando procurar um psicólogo infantil"
      paraQuem={['Ansiedade e medos', 'Comportamento', 'Dificuldades na escola', 'Luto e separação dos pais', 'Socialização', 'Adolescência']}
      publicoNota="Atendemos crianças a partir de 2 anos e adolescentes. A idade mínima varia conforme o profissional."
      equipeTitulo="Psicólogos que atendem crianças"
      equipeSubtitulo="Profissionais da equipe com atendimento infantil. O agendamento indica quem atende a idade do seu filho."
      equipe={equipe}
      faqItems={faqItems}
      ctaTitulo="Vamos cuidar juntos do seu filho?"
    />
  )
}
