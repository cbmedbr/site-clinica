import { ImageResponse } from 'next/og'
import { profissionais, slugify } from '@/lib/profissionais'

export const alt         = 'Profissional na Clínica Luciano Noceti'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image({ params }: { params: { slug: string } }) {
  const prof     = profissionais.find(p => slugify(p.nome) === params.slug)
  const nome     = prof?.nome     ?? 'Clínica Luciano Noceti'
  const metodo   = prof?.metodo   ?? 'Psicologia · Florianópolis'
  const registro = prof?.registro ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width:           1200,
          height:          630,
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'flex-start',
          justifyContent:  'center',
          backgroundColor: '#7C2C3B',
          padding:         '80px 90px',
        }}
      >
        <span
          style={{
            fontSize:      20,
            color:         'rgba(252,236,191,0.55)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom:  36,
          }}
        >
          Clínica Luciano Noceti
        </span>

        <span
          style={{
            fontFamily:  'Georgia, serif',
            fontSize:     nome.length > 24 ? 52 : 64,
            fontWeight:   700,
            color:        '#FCECBF',
            lineHeight:   1.1,
            marginBottom: 28,
          }}
        >
          {nome}
        </span>

        <div
          style={{
            width:           56,
            height:          3,
            backgroundColor: 'rgba(252,236,191,0.35)',
            borderRadius:    2,
            marginBottom:    28,
          }}
        />

        <span
          style={{
            fontSize:     26,
            color:        'rgba(252,236,191,0.72)',
            marginBottom: 14,
          }}
        >
          {metodo}
        </span>

        {registro && (
          <span style={{ fontSize: 20, color: 'rgba(252,236,191,0.4)' }}>
            {registro}
          </span>
        )}
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
