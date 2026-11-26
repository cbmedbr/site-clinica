import type { Metadata } from 'next'
import { profissionais } from '@/lib/profissionais'
import PsicoterapiaLanding from '@/components/PsicoterapiaLanding'
import { WHATSAPP_PAGINAS } from '@/lib/whatsapp-origem'

export const metadata: Metadata = {
  title: 'Psicólogo em Florianópolis | Terapia para Ansiedade | Clínica Luciano Noceti',
  description:
    'Psicoterapia para adultos em Florianópolis: ansiedade, depressão, luto e estresse. Presencial no Centro (Sala 204) ou online. Agende pelo WhatsApp.',
  alternates: { canonical: '/psicologo-florianopolis' },
  openGraph: {
    title: 'Psicólogo em Florianópolis | Clínica Luciano Noceti',
    description: 'Psicoterapia presencial ou online, no Centro de Florianópolis.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.lucianonoceti.com.br/psicologo-florianopolis',
    siteName: 'Clínica Luciano Noceti',
  },
}

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const equipe = profissionais
  .filter(p => !p.ocultarDaEquipe && /adulto/.test(norm(p.publico)) && /ansiedad/.test(norm(p.demandas)))

const faqItems = [
  {
    pergunta: 'Quanto custa a sessão?',
    resposta:
      'Os valores e as condições são informados pelo nosso setor de agendamento no WhatsApp. Atendemos particular e diversos planos de saúde.',
  },
  {
    pergunta: 'O atendimento é presencial ou online?',
    resposta:
      'Você escolhe. O atendimento presencial é no Centro de Florianópolis (Rua Felipe Schmidt, 515, Edifício Pórtico, 2º andar, Sala 204), e também atendemos online.',
  },
  {
    pergunta: 'Como escolho o psicólogo?',
    resposta:
      'Ao entrar em contato pelo WhatsApp, nosso setor de agendamento entende o que você procura e indica o profissional com a abordagem e a disponibilidade mais adequadas. Se preferir, você também pode conhecer a equipe e escolher.',
  },
  {
    pergunta: 'Quais abordagens a equipe atende?',
    resposta:
      'A equipe reúne psicólogos de diferentes abordagens, como Terapia Cognitivo-Comportamental (TCC), Psicanálise, Gestalt, Psicologia Junguiana e Terapia Sistêmica Familiar.',
  },
  {
    pergunta: 'Vocês atendem por plano de saúde?',
    resposta:
      'Sim. Atendemos os planos listados nesta página, além de atendimento particular. Confirme a cobertura do seu plano pelo WhatsApp.',
  },
  {
    pergunta: 'O atendimento é sigiloso?',
    resposta: 'Sim. Todo o atendimento segue o sigilo profissional previsto no Código de Ética do Psicólogo (CFP).',
  },
]

export default function PsicologoFlorianopolisPage() {
  return (
    <PsicoterapiaLanding
      badge="Psicoterapia para adultos"
      tituloAntes="Psicólogo em"
      tituloDestaque="Florianópolis"
      subtitulo="Terapia para ansiedade, depressão, luto e estresse, com psicólogos de várias abordagens. Presencial no Centro ou online."
      whatsApp={WHATSAPP_PAGINAS.psicologo}
      paraQuemTitulo="Psicoterapia para adultos"
      paraQuem={['Ansiedade', 'Depressão', 'Luto', 'Estresse e burnout', 'Síndrome do pânico', 'Traumas', 'Relacionamentos', 'Autoconhecimento']}
      publicoNota="Atendemos adultos, idosos e também adolescentes."
      equipeTitulo="Nossos psicólogos"
      equipeSubtitulo="Mais de 40 psicólogos com diferentes abordagens. O agendamento indica o profissional para você."
      equipe={equipe}
      faqItems={faqItems}
      ctaTitulo="Pronto para dar o primeiro passo?"
    />
  )
}
