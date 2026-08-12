import { profissionais, slugify } from '@/lib/profissionais'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

function detectarModalidade(publico: string) {
  const t = publico.toLowerCase()
  return { online: /on.?line/.test(t), presencial: /presencial/.test(t) }
}

export function generateStaticParams() {
  return profissionais.map(p => ({ slug: slugify(p.nome) }))
}

export default function CardExport({ params }: Props) {
  if (process.env.NODE_ENV === 'production' && !process.env.ALLOW_CARD_EXPORT) {
    notFound()
  }

  const p = profissionais.find(p => slugify(p.nome) === params.slug)
  if (!p) notFound()

  const { online, presencial } = detectarModalidade(p.publico)

  const demandas = p.demandas
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const nomePartes = p.nome.split(' ')
  const primeiroNome = nomePartes[0]
  const restoNome = nomePartes.slice(1).join(' ')

  return (
    <main style={{ margin: 0, padding: 0, background: '#1a0a0f', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: '1080px',
        height: '1920px',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(160deg, #8B3245 0%, #6B2235 40%, #4A1520 80%, #2D0D14 100%)',
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Texture overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 20% 10%, rgba(252,236,191,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(124,44,59,0.4) 0%, transparent 50%)',
        }} />

        {/* Top bar */}
        <div style={{ padding: '72px 150px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img
              src="/logo/clinica.jpeg"
              alt="Clínica Luciano Noceti"
              style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.5px', color: 'rgba(252,236,191,0.95)', lineHeight: 1.2 }}>
                Clínica Luciano Noceti
              </div>
              <div style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
                Psicologia
              </div>
            </div>
          </div>
          {/* CRP badge */}
          {p.registro && (
            <div style={{
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '40px', padding: '12px 28px',
              fontSize: '22px', fontWeight: 600, color: 'rgba(252,236,191,0.85)',
              letterSpacing: '1px',
            }}>
              {p.registro}
            </div>
          )}
        </div>

        {/* Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '72px', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '340px', height: '340px', borderRadius: '50%', overflow: 'hidden',
            border: '6px solid rgba(252,236,191,0.35)',
            boxShadow: '0 0 0 12px rgba(252,236,191,0.08), 0 40px 80px rgba(0,0,0,0.5)',
          }}>
            <img
              src={p.foto}
              alt={p.nome}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Name */}
        <div style={{ textAlign: 'center', marginTop: '56px', padding: '0 150px', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
            lineHeight: 1.05,
          }}>
            <span style={{ display: 'block', fontSize: '80px', fontWeight: 700, color: 'white' }}>
              {primeiroNome}
            </span>
            <span style={{ display: 'block', fontSize: '60px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', marginTop: '-8px' }}>
              {restoNome}
            </span>
          </div>

          {/* Method */}
          <div style={{ marginTop: '28px', fontSize: '30px', color: 'rgba(252,236,191,0.8)', lineHeight: 1.4, fontWeight: 400 }}>
            {p.metodo}
          </div>

          {/* Modality badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
            {online && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(125,192,228,0.15)', border: '1.5px solid rgba(125,192,228,0.4)',
                borderRadius: '40px', padding: '12px 28px',
                fontSize: '24px', fontWeight: 600, color: 'rgba(180,225,255,0.9)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
                On-line
              </div>
            )}
            {presencial && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(252,236,191,0.12)', border: '1.5px solid rgba(252,236,191,0.35)',
                borderRadius: '40px', padding: '12px 28px',
                fontSize: '24px', fontWeight: 600, color: 'rgba(252,236,191,0.9)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Presencial
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ margin: '56px 150px 0', height: '1px', background: 'rgba(255,255,255,0.15)', position: 'relative', zIndex: 1 }} />

        {/* Demandas */}
        <div id="demandas-container" style={{ margin: '48px 150px 0', flex: 1, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontSize: '18px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase',
            color: 'rgba(252,236,191,0.55)', marginBottom: '24px',
          }}>
            Áreas de atuação
          </div>
          <div id="demandas-text" style={{
            fontSize: '29px', lineHeight: 1.6, color: 'rgba(255,255,255,0.78)',
          }}>
            {demandas}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          flexShrink: 0,
          background: 'rgba(0,0,0,0.35)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '44px 150px',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px',
          position: 'relative', zIndex: 1,
        }}>
          {/* Endereço */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
            <svg style={{ flexShrink: 0, marginTop: '5px' }} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>
                Rua Felipe Schmidt, 515 — Centro
              </div>
              <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>
                Edifício Pórtico, Florianópolis — SC
              </div>
              <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', lineHeight: 1.45 }}>
                Sala 204 — 2º andar
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(252,236,191,0.6)">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div style={{ fontSize: '26px', color: 'rgba(252,236,191,0.6)', fontWeight: 600, letterSpacing: '1px', whiteSpace: 'nowrap' }}>
              (48) 99805-6893
            </div>
          </div>
        </div>

      </div>

      {/* Auto-shrink: reduz a fonte das áreas de atuação até o texto caber sem ser clipado */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function () {
          function autoShrink() {
            var container = document.getElementById('demandas-container');
            var text = document.getElementById('demandas-text');
            if (!container || !text) return;
            var size = parseFloat(getComputedStyle(text).fontSize) || 29;
            var min = 18;
            while (size > min && container.scrollHeight > container.clientHeight) {
              size -= 1;
              text.style.fontSize = size + 'px';
            }
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
              requestAnimationFrame(autoShrink);
            });
          } else {
            requestAnimationFrame(autoShrink);
          }
        })();
      ` }} />
    </main>
  )
}
