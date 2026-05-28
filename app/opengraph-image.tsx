import { ImageResponse } from 'next/og'

export const alt         = 'Clínica Luciano Noceti — Psicologia em Florianópolis'
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
          backgroundColor: '#7C2C3B',
          padding:         '60px',
        }}
      >
        <span
          style={{
            fontFamily:    'Georgia, serif',
            fontSize:       96,
            fontWeight:     700,
            color:          '#FCECBF',
            letterSpacing: '-4px',
            lineHeight:     1,
            marginBottom:   36,
          }}
        >
          LN
        </span>

        <div
          style={{
            width:           72,
            height:          3,
            backgroundColor: 'rgba(252,236,191,0.5)',
            borderRadius:    2,
            marginBottom:    36,
          }}
        />

        <span
          style={{
            fontFamily:  'Georgia, serif',
            fontSize:     58,
            fontWeight:   700,
            color:        '#FCECBF',
            textAlign:   'center',
            lineHeight:   1.15,
            marginBottom: 20,
          }}
        >
          Clínica Luciano Noceti
        </span>

        <span
          style={{
            fontSize:  28,
            color:     'rgba(252,236,191,0.65)',
            textAlign: 'center',
          }}
        >
          Psicologia · Florianópolis
        </span>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
