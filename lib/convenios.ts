// Planos de saúde atendidos pela clínica.
// Usado na home (components/Convenios.tsx) e nas landings de psicoterapia.
// Logos salvas em /public/logo/ (singular)
// scale: aplica transform para logos com muito espaço transparente interno
export type Convenio = { nome: string; logo: string; scale?: string; alt?: string }

export const convenios: Convenio[] = [
  { nome: 'Unimed',      logo: '/logo/unimed.png'     },
  { nome: 'SIM Saúde',   logo: '/logo/sim.jpeg'        },
  { nome: 'SC Saúde',    logo: '/logo/scsaude.png',   scale: 'scale-[1.6]' },
  { nome: 'Petrobras',   logo: '/logo/petrobras.png', scale: 'scale-[1.5]' },
  { nome: 'GEAP Saúde',  logo: '/logo/geapsaude.png' },
  { nome: 'Saudesc',     logo: '/logo/saudesc.jpeg',  scale: 'scale-[1.5]' },
  { nome: 'CASACARESC',  logo: '/logo/casacaresc.png',scale: 'scale-[1.6]' },
  { nome: 'ABEPOM',      logo: '/logo/abepom.avif',   scale: 'scale-[1.5]' },
  { nome: 'EloSaúde',    logo: '/logo/elosaude.jpg'   },
  { nome: 'Celos',       logo: '/logo/celos.avif'     },
  { nome: 'FUSEx',       logo: '/logo/fusex.png',     scale: 'scale-[1.5]' },
  { nome: 'Sidesc',      logo: '/logo/sidesc.jpg',    scale: 'scale-[0.85]' },
  { nome: 'Polícia Militar de SC', logo: '/logo/pmsc.png', scale: 'scale-[1.4]', alt: 'Logo do Plano de Saúde da Polícia Militar de Santa Catarina' },
]
