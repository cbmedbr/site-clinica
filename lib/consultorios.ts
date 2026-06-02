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
  { id: 'sala-204', nome: 'Sala 204', ordem: 3 },
  { id: 'sala-205', nome: 'Sala 205', ordem: 4 },
  { id: 'sala-212', nome: 'Sala 212', ordem: 5 },
]

export const SALAS: Sala[] = [

  // ── Sala 205 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-205-recepcao',
    nome: 'Recepção',
    categoria: 'recepcao',
    descricao: 'Área de recepção da Sala 205.',
    grupo: 'sala-205',
    fotos: [
      { src: '/consultorios/sala-205/recepcao/IMG_20260531_125320134_HDR.jpg.jpeg', alt: 'Recepção — Sala 205' },
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
      { src: '/consultorios/sala-205/consultorio-1/IMG_20260531_130108167_HDR.jpg.jpeg', alt: 'Sala 205 — Consultório 1' },
      { src: '/consultorios/sala-205/consultorio-1/foto-panoramica.jpeg', alt: 'Sala 205 — Consultório 1 (panorâmica)' },
    ],
  },
  {
    id: 'sala-205-c2',
    nome: 'Consultório 2',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 205.',
    grupo: 'sala-205',
    fotos: [
      { src: '/consultorios/sala-205/consultorio-2/IMG_20260531_125416279_HDR.jpg.jpeg', alt: 'Sala 205 — Consultório 2' },
      { src: '/consultorios/sala-205/consultorio-2/IMG_20260531_125443584.jpg.jpeg', alt: 'Sala 205 — Consultório 2' },
      { src: '/consultorios/sala-205/consultorio-2/IMG_20260531_125802536_HDR.jpg.jpeg', alt: 'Sala 205 — Consultório 2' },
    ],
  },
  {
    id: 'sala-205-c3',
    nome: 'Consultório 3',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 205.',
    grupo: 'sala-205',
    fotos: [
      { src: '/consultorios/sala-205/consultorio-3/IMG_20260531_125935107.jpg.jpeg', alt: 'Sala 205 — Consultório 3' },
      { src: '/consultorios/sala-205/consultorio-3/IMG_20260531_125954033.jpg.jpeg', alt: 'Sala 205 — Consultório 3' },
    ],
  },

  // ── Sala 201 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-201-recepcao',
    nome: 'Recepção',
    categoria: 'recepcao',
    descricao: 'Área de recepção da Sala 201.',
    grupo: 'sala-201',
    fotos: [
      { src: '/consultorios/sala-201/recepcao/IMG_20260531_123531006.jpg.jpeg', alt: 'Recepção — Sala 201' },
      { src: '/consultorios/sala-201/recepcao/IMG_20260531_123551621_HDR.jpg.jpeg', alt: 'Recepção — Sala 201' },
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
      { src: '/consultorios/sala-201/consultorio-1/foto1.jpeg', alt: 'Sala 201 — Consultório 1' },
      { src: '/consultorios/sala-201/consultorio-1/foto2.jpeg', alt: 'Sala 201 — Consultório 1' },
      { src: '/consultorios/sala-201/consultorio-1/foto3.jpeg', alt: 'Sala 201 — Consultório 1' },
    ],
  },
  {
    id: 'sala-201-c2',
    nome: 'Consultório 2',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 201.',
    grupo: 'sala-201',
    fotos: [
      { src: '/consultorios/sala-201/consultorio-2/foto4.jpeg', alt: 'Sala 201 — Consultório 2' },
      { src: '/consultorios/sala-201/consultorio-2/foto5.jpeg', alt: 'Sala 201 — Consultório 2' },
      { src: '/consultorios/sala-201/consultorio-2/foto6.jpeg', alt: 'Sala 201 — Consultório 2' },
      { src: '/consultorios/sala-201/consultorio-2/foto7.jpeg', alt: 'Sala 201 — Consultório 2' },
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
      { src: '/consultorios/sala-202/recepcao/IMG_20260531_125157068_HDR.jpg.jpeg', alt: 'Recepção — Sala 202' },
      { src: '/consultorios/sala-202/recepcao/IMG_20260531_125227679_HDR.jpg.jpeg', alt: 'Recepção — Sala 202' },
    ],
  },
  {
    id: 'sala-202-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-202/consultorio-1/IMG_20260531_124920721_HDR.jpg.jpeg', alt: 'Sala 202 — Consultório 1' },
      { src: '/consultorios/sala-202/consultorio-1/IMG_20260531_124929082_HDR.jpg.jpeg', alt: 'Sala 202 — Consultório 1' },
    ],
  },
  {
    id: 'sala-202-c2',
    nome: 'Consultório 2',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    fotos: [
      { src: '/consultorios/sala-202/consultorio-2/IMG_20260531_124543735_HDR.jpg.jpeg', alt: 'Sala 202 — Consultório 2' },
      { src: '/consultorios/sala-202/consultorio-2/IMG_20260531_124556868.jpg.jpeg', alt: 'Sala 202 — Consultório 2' },
      { src: '/consultorios/sala-202/consultorio-2/IMG_20260531_124606170_HDR.jpg.jpeg', alt: 'Sala 202 — Consultório 2' },
      { src: '/consultorios/sala-202/consultorio-2/IMG_20260531_124729821.jpg.jpeg', alt: 'Sala 202 — Consultório 2' },
    ],
  },
  {
    id: 'sala-202-c3',
    nome: 'Consultório 3',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    fotos: [
      { src: '/consultorios/sala-202/consultorio-3/foto1.jpeg', alt: 'Sala 202 — Consultório 3' },
      { src: '/consultorios/sala-202/consultorio-3/foto2.jpeg', alt: 'Sala 202 — Consultório 3' },
    ],
  },
  {
    id: 'sala-202-c4',
    nome: 'Consultório 4',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 202.',
    grupo: 'sala-202',
    fotos: [
      { src: '/consultorios/sala-202/consultorio-4/foto3.jpeg', alt: 'Sala 202 — Consultório 4' },
      { src: '/consultorios/sala-202/consultorio-4/foto4.jpeg', alt: 'Sala 202 — Consultório 4' },
      { src: '/consultorios/sala-202/consultorio-4/foto5.jpeg', alt: 'Sala 202 — Consultório 4' },
      { src: '/consultorios/sala-202/consultorio-4/foto5%20(2).jpeg', alt: 'Sala 202 — Consultório 4' },
    ],
  },

  // ── Sala 204 ──────────────────────────────────────────────────────────────
  {
    id: 'sala-204-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 204.',
    grupo: 'sala-204',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-204/consultorio-1/IMG_20260531_130803403_HDR.jpg.jpeg', alt: 'Sala 204 — Consultório 1' },
      { src: '/consultorios/sala-204/consultorio-1/IMG_20260531_130850166.jpg.jpeg', alt: 'Sala 204 — Consultório 1' },
      { src: '/consultorios/sala-204/consultorio-1/IMG_20260531_130912781.jpg.jpeg', alt: 'Sala 204 — Consultório 1' },
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
      { src: '/consultorios/sala-212/recepcao/IMG_20260531_121054437_HDR.jpg.jpeg', alt: 'Recepção — Sala 212' },
    ],
  },
  {
    id: 'sala-212-c1',
    nome: 'Consultório 1',
    categoria: 'consultorio',
    descricao: 'Consultório individual na Sala 212.',
    grupo: 'sala-212',
    destaque: true,
    fotos: [
      { src: '/consultorios/sala-212/consultorio-1/IMG_20260531_120311778_HDR.jpg.jpeg', alt: 'Sala 212 — Consultório 1' },
      { src: '/consultorios/sala-212/consultorio-1/IMG_20260531_120329534_HDR.jpg.jpeg', alt: 'Sala 212 — Consultório 1' },
      { src: '/consultorios/sala-212/consultorio-1/IMG_20260531_120346637.jpg.jpeg', alt: 'Sala 212 — Consultório 1' },
      { src: '/consultorios/sala-212/consultorio-1/IMG_20260531_120420434.jpg.jpeg', alt: 'Sala 212 — Consultório 1' },
    ],
  },
]
