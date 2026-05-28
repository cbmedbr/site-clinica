import { ImageResponse } from 'next/og'

export const size        = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           512,
          height:          512,
          borderRadius:    112,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          backgroundColor: '#7C2C3B',
        }}
      >
        <span
          style={{
            fontFamily:    'Georgia, serif',
            fontSize:      210,
            fontWeight:    700,
            color:         '#FCECBF',
            letterSpacing: '-8px',
            lineHeight:    1,
          }}
        >
          LN
        </span>
      </div>
    ),
    { width: 512, height: 512 },
  )
}
