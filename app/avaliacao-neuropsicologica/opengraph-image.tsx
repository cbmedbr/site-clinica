import { ImageResponse } from 'next/og'

export const alt         = 'Avaliação Neuropsicológica — Clínica Luciano Noceti'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           1200,
          height:          630,
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          backgroundColor: '#6B2434',
          padding:         '60px',
        }}
      >
        <span
          style={{
            fontSize:      20,
            color:         'rgba(232,185,122,0.65)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom:  36,
          }}
        >
          Clínica Luciano Noceti
        </span>

        <span
          style={{
            fontFamily:  'Georgia, serif',
            fontSize:     64,
            fontWeight:   700,
            color:        '#FCECBF',
            textAlign:   'center',
            lineHeight:   1.15,
            marginBottom: 28,
          }}
        >
          Avaliação Neuropsicológica
        </span>

        <div
          style={{
            width:           80,
            height:          3,
            backgroundColor: 'rgba(232,185,122,0.5)',
            borderRadius:    2,
            marginBottom:    28,
          }}
        />

        <span
          style={{
            fontSize:  26,
            color:     'rgba(232,185,122,0.75)',
            textAlign: 'center',
          }}
        >
          Diagnóstico preciso · Laudo técnico · Florianópolis/SC
        </span>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
