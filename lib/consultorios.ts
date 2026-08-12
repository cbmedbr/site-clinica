export type CategoriaSala = 'consultorio' | 'sala-espera' | 'recepcao' | 'area-comum'

export interface FotoSala {
  src: string
  alt: string
}

export interface Sala {
  id: string
  nome: string
  categoria: CategoriaSala
  descricao: string
  fotos: FotoSala[]
  grupo: string
  destaque?: boolean
}

export interface GrupoSala {
  id: string
  nome: string
  ordem: number
}

export const GRUPOS: GrupoSala[] = [
  { id: 'sala-201', nome: 'Sala 201', ordem: 1 },
  { id: 'sala-202', nome: 'Sala 202', ordem: 2 },
  { id: 'sala-203', nome: 'Sala 203', ordem: 3 },
  { id: 'sala-204', nome: 'Sala 204', ordem: 4 },
  { id: 'sala-205', nome: 'Sala 205', ordem: 5 },
  { id: 'sala-212', nome: 'Sala 212', ordem: 6 },
]

export const SALAS: Sala[] = [

  // ── Sala 201 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-201-recepcao',
    nome: 'Recepção',
    categoria: 'recepcao',
    descricao: 'Área de recepção da Sala 201.',
    grupo: 'sala-201',
    fotos: [
      { src: '/consultorios/sala-201/recepcao/IMG_20260531_123531006.jpg.avif', alt: 'Recepção — Sala 201' },
      { src: '/consultorios/sala-201/recepcao/IMG_20260531_123551621_HDR.jpg.avif', alt: 'Recepção — Sala 201' },
    ],
  },
  {
    id: 'sala-201-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 201.',
    grupo: 'sala-201',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-201/consultorio-1/consultorio1-201-3.avif', alt: 'Sala 201 — Consultório 1' },
      { src: '/consultorios/sala-201/consultorio-1/consultorio-1-201.avif', alt: 'Sala 201 — Consultório 1' },
      { src: '/consultorios/sala-201/consultorio-1/consultorio1-201-2.avif', alt: 'Sala 201 — Consultório 1' },
    ],
  },
  {
    id: 'sala-201-c2',
    nome: 'Consultório 2',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 201.',
    grupo: 'sala-201',
    fotos: [
      { src: '/consultorios/sala-201/consultorio-2/consultorio-2-201.avif', alt: 'Sala 201 — Consultório 2' },
      { src: '/consultorios/sala-201/consultorio-2/consultorio2-201-2.avif', alt: 'Sala 201 — Consultório 2' },
      { src: '/consultorios/sala-201/consultorio-2/consultorio2-201-3.avif', alt: 'Sala 201 — Consultório 2' },
    ],
  },

  // ── Sala 202 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-202-recepcao',
    nome: 'Recepção',
    categoria: 'recepcao',
    descricao: 'Área de recepção da Sala 202.',
    grupo: 'sala-202',
    fotos: [
      { src: '/consultorios/sala-202/recepcao/IMG_20260531_125157068_HDR.jpg.avif', alt: 'Recepção — Sala 202' },
      { src: '/consultorios/sala-202/recepcao/IMG_20260531_125227679_HDR.jpg.avif', alt: 'Recepção — Sala 202' },
    ],
  },
  {
    id: 'sala-202-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    fotos: [
      { src: '/consultorios/sala-202/consultorio-1/202-consultorio1.avif', alt: 'Sala 202 — Consultório 1' },
      { src: '/consultorios/sala-202/consultorio-1/202-consultorio1-2.avif', alt: 'Sala 202 — Consultório 1' },
      { src: '/consultorios/sala-202/consultorio-1/202-consultorio1-3.avif', alt: 'Sala 202 — Consultório 1' },
    ],
  },
  {
    id: 'sala-202-c2',
    nome: 'Consultório 2',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-202/consultorio-2/202-consultorio2-4.avif', alt: 'Sala 202 — Consultório 2' },
      { src: '/consultorios/sala-202/consultorio-2/202-consultorio2.avif', alt: 'Sala 202 — Consultório 2' },
      { src: '/consultorios/sala-202/consultorio-2/202-consultorio2-2.avif', alt: 'Sala 202 — Consultório 2' },
      { src: '/consultorios/sala-202/consultorio-2/202-consultorio2-3.avif', alt: 'Sala 202 — Consultório 2' },
    ],
  },
  {
    id: 'sala-202-c3',
    nome: 'Consultório 3',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    fotos: [
      { src: '/consultorios/sala-202/consultorio-3/202-consultorio3.avif', alt: 'Sala 202 — Consultório 3' },
    ],
  },
  {
    id: 'sala-202-c4',
    nome: 'Consultório 4',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    fotos: [
      { src: '/consultorios/sala-202/consultorio-4/202-consultorio4-2.avif', alt: 'Sala 202 — Consultório 4' },
      { src: '/consultorios/sala-202/consultorio-4/202-consultorio4-3.avif', alt: 'Sala 202 — Consultório 4' },
    ],
  },

  // ── Sala 203 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-203-recepcao',
    nome: 'Recepção',
    categoria: 'recepcao',
    descricao: 'Área de recepção da Sala 203.',
    grupo: 'sala-203',
    fotos: [
      { src: '/consultorios/sala-203/recepcao/203-recepcao.avif', alt: 'Recepção — Sala 203' },
    ],
  },
  {
    id: 'sala-203-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 203.',
    grupo: 'sala-203',
    fotos: [],
  },
  {
    id: 'sala-203-c2',
    nome: 'Consultório 2',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 203.',
    grupo: 'sala-203',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-203/consultorio-2/203-consultorio2-2.avif', alt: 'Sala 203 — Consultório 2' },
      { src: '/consultorios/sala-203/consultorio-2/203-consultorio2.avif', alt: 'Sala 203 — Consultório 2' },
      { src: '/consultorios/sala-203/consultorio-2/203-consultorio2-3.avif', alt: 'Sala 203 — Consultório 2' },
    ],
  },

  // ── Sala 204 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-204-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 204.',
    grupo: 'sala-204',
    fotos: [
      { src: '/consultorios/sala-204/consultorio-1/consultorio-1-204.avif', alt: 'Sala 204 — Consultório 1' },
    ],
  },

  // ── Sala 205 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-205-recepcao',
    nome: 'Recepção',
    categoria: 'recepcao',
    descricao: 'Área de recepção da Sala 205.',
    grupo: 'sala-205',
    fotos: [
      { src: '/consultorios/sala-205/recepcao/IMG_20260531_125320134_HDR.jpg.avif', alt: 'Recepção — Sala 205' },
    ],
  },
  {
    id: 'sala-205-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 205.',
    grupo: 'sala-205',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-205/consultorio-1/205-consultorio1.avif', alt: 'Sala 205 — Consultório 1' },
      { src: '/consultorios/sala-205/consultorio-1/205-consultorio1-2.avif', alt: 'Sala 205 — Consultório 1' },
    ],
  },
  {
    id: 'sala-205-c2',
    nome: 'Consultório 2',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 205.',
    grupo: 'sala-205',
    fotos: [
      { src: '/consultorios/sala-205/consultorio-2/205-consultorio2.avif', alt: 'Sala 205 — Consultório 2' },
      { src: '/consultorios/sala-205/consultorio-2/205-consultorio2-2.avif', alt: 'Sala 205 — Consultório 2' },
    ],
  },
  {
    id: 'sala-205-c3',
    nome: 'Consultório 3',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 205.',
    grupo: 'sala-205',
    fotos: [
      { src: '/consultorios/sala-205/consultorio-3/205-consultorio3.avif', alt: 'Sala 205 — Consultório 3' },
      { src: '/consultorios/sala-205/consultorio-3/205-consultorio3-2.avif', alt: 'Sala 205 — Consultório 3' },
    ],
  },

  // ── Sala 212 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-212-recepcao',
    nome: 'Recepção',
    categoria: 'recepcao',
    descricao: 'Área de recepção da Sala 212.',
    grupo: 'sala-212',
    fotos: [
      { src: '/consultorios/sala-212/recepcao/IMG_20260531_121054437_HDR.jpg.avif', alt: 'Recepção — Sala 212' },
    ],
  },
  {
    id: 'sala-212-c1',
    nome: 'Freud',
    categoria: 'consultorio',
    descricao: 'Sala de avaliação neuropsicológica na Sala 212 (consultório Freud).',
    grupo: 'sala-212',
    fotos: [
      { src: '/consultorios/sala-212/Freud/freud-1.jpeg', alt: 'Sala 212 — Freud (Avaliação Neuropsicológica)' },
      { src: '/consultorios/sala-212/Freud/freud-2.jpeg', alt: 'Sala 212 — Freud (Avaliação Neuropsicológica)' },
    ],
  },
  {
    id: 'sala-212-c2',
    nome: 'Lacan',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 212.',
    grupo: 'sala-212',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-212/Lacan/lacan-1.jpeg', alt: 'Sala 212 — Lacan' },
      { src: '/consultorios/sala-212/Lacan/lacan-2.jpeg', alt: 'Sala 212 — Lacan' },
      { src: '/consultorios/sala-212/Lacan/lacan-3.jpeg', alt: 'Sala 212 — Lacan' },
      { src: '/consultorios/sala-212/Lacan/lacan-4.jpeg', alt: 'Sala 212 — Lacan' },
      { src: '/consultorios/sala-212/Lacan/lacan-5.jpeg', alt: 'Sala 212 — Lacan' },
    ],
  },
]
