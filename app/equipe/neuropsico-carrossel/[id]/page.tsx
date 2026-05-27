import { profissionais, Prof } from '@/lib/profissionais'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

// ─── Tokens de identidade visual ────────────────────────────────────────────
const GOLD        = 'rgba(252,236,191,0.9)'
const GOLD_DIM    = 'rgba(252,236,191,0.65)'
const GOLD_FAINT  = 'rgba(252,236,191,0.15)'
const GOLD_BORDER = 'rgba(252,236,191,0.35)'
const WHITE_DIM   = 'rgba(255,255,255,0.78)'
const WHITE_FAINT = 'rgba(255,255,255,0.5)'
const WHITE_GHOST = 'rgba(255,255,255,0.1)'
const SERIF       = 'var(--font-playfair, "Playfair Display", Georgia, serif)'
const NEURO_PHONE = '(48) 99190-8715'
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'

// ─── Header Completo (ids 1 e 9) — compactado para 1080×1080 ─────────────────
function HeaderCompleto() {
  return (
    <div style={{
      padding: '40px 80px 0', flexShrink: 0,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <img
          src="/logo/clinica.jpeg"
          alt="Clínica Luciano Noceti"
          style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }}
        />
        <div>
          <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '0.5px', color: 'rgba(252,236,191,0.95)', lineHeight: 1.2 }}>
            Clínica Luciano Noceti
          </div>
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '3px' }}>
            Psicologia
          </div>
        </div>
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '40px', padding: '10px 22px',
        fontSize: '17px', fontWeight: 600, color: 'rgba(252,236,191,0.85)',
        letterSpacing: '0.5px', textAlign: 'center', lineHeight: 1.3,
      }}>
        Avaliação<br />Neuropsicológica
      </div>
    </div>
  )
}

// ─── Header Minimalista (ids 2-8) ────────────────────────────────────────────
function HeaderMinimalista() {
  return (
    <div style={{
      padding: '36px 80px 0', flexShrink: 0,
      display: 'flex', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <img
          src="/logo/clinica.jpeg"
          alt="Clínica Luciano Noceti"
          style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }}
        />
        <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '0.5px', color: 'rgba(252,236,191,0.95)' }}>
          Clínica Luciano Noceti
        </div>
      </div>
    </div>
  )
}

// ─── Footer Escuro (ids 1 e 9) — compactado para 1080×1080 ───────────────────
function FooterEscuro() {
  return (
    <div style={{
      flexShrink: 0,
      background: 'rgba(0,0,0,0.35)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '24px 80px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <svg style={{ flexShrink: 0, marginTop: '3px' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <div>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5px', lineHeight: 1.45 }}>Rua Felipe Schmidt, 515 — Centro</div>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5px', lineHeight: 1.45 }}>Edifício Pórtico, Florianópolis — SC</div>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5px', lineHeight: 1.45 }}>Sala 204 — 2º andar</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(252,236,191,0.6)">
          <path d={WA_PATH} />
        </svg>
        <div style={{ fontSize: '18px', color: 'rgba(252,236,191,0.6)', fontWeight: 600, letterSpacing: '0.5px' }}>
          {NEURO_PHONE}
        </div>
      </div>
    </div>
  )
}

// ─── Card 1 — Capa ───────────────────────────────────────────────────────────
function Card1Capa() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '32px 80px',
      textAlign: 'center', position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: SERIF, lineHeight: 1 }}>
        <div style={{ fontSize: '60px', fontWeight: 700, color: 'white' }}>Avaliações</div>
        <div style={{ fontSize: '44px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', marginTop: '12px' }}>
          Neuropsicológicas
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', margin: '40px 0', width: '100%' }}>
        <div style={{ flex: 1, height: '1px', background: GOLD_FAINT }} />
        <div style={{ width: '12px', height: '12px', flexShrink: 0, background: GOLD_DIM, transform: 'rotate(45deg)' }} />
        <div style={{ flex: 1, height: '1px', background: GOLD_FAINT }} />
      </div>

      <div style={{ fontSize: '26px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
        Uma investigação detalhada do funcionamento cognitivo e emocional
      </div>

      <div style={{ fontSize: '26px', fontWeight: 500, color: GOLD_DIM, lineHeight: 1.4, textAlign: 'center', maxWidth: '760px', margin: '40px auto 0' }}>
        Saiba como funciona e conheça nossas profissionais
      </div>
    </div>
  )
}

// ─── Card 2 — Anna ───────────────────────────────────────────────────────────
function Card2Anna({ anna }: { anna?: Prof }) {
  if (!anna) return null
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px 80px', position: 'relative', zIndex: 1,
    }}>
      <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: `3px solid ${GOLD_BORDER}`, flexShrink: 0 }}>
        <img src={anna.foto} alt={anna.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ fontFamily: SERIF, fontSize: '46px', fontWeight: 700, color: 'white', textAlign: 'center', lineHeight: 1.1, marginTop: '20px' }}>
        {anna.nome}
      </div>

      <div style={{ fontSize: '22px', color: GOLD_DIM, textAlign: 'center', marginTop: '10px' }}>
        Psicóloga — TCC e Neuropsicóloga
      </div>

      <div style={{ display: 'inline-block', padding: '7px 18px', borderRadius: '40px', background: WHITE_GHOST, border: `1px solid ${GOLD_BORDER}`, color: 'white', fontSize: '22px', marginTop: '14px' }}>
        {anna.registro}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'flex-start', maxWidth: '860px', width: '100%', marginTop: '36px' }}>
        {[
          'Formada CESUSC (2014)',
          'Pós em TCC (Instituto Cognitio, 2020)',
          'Pós em Neuropsicologia (UNIASSELVI, 2024)',
          'Atendimento clínico infantil, incluindo equoterapia',
          'Foco em TEA, TDAH e neurodesenvolvimento',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '18px', fontSize: '24px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>
            <span style={{ color: GOLD_DIM, fontSize: '22px', flexShrink: 0 }}>✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 3 — Catarina ───────────────────────────────────────────────────────
function Card3Catarina({ catarina }: { catarina?: Prof }) {
  if (!catarina) return null
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px 80px', position: 'relative', zIndex: 1,
    }}>
      <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: `3px solid ${GOLD_BORDER}`, flexShrink: 0 }}>
        <img src={catarina.foto} alt={catarina.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ fontFamily: SERIF, fontSize: '46px', fontWeight: 700, color: 'white', textAlign: 'center', lineHeight: 1.1, marginTop: '20px' }}>
        {catarina.nome}
      </div>

      <div style={{ fontSize: '22px', color: GOLD_DIM, textAlign: 'center', marginTop: '10px' }}>
        Psicóloga — Atendimento TEA
      </div>

      <div style={{ display: 'inline-block', padding: '7px 18px', borderRadius: '40px', background: WHITE_GHOST, border: `1px solid ${GOLD_BORDER}`, color: 'white', fontSize: '22px', marginTop: '14px' }}>
        {catarina.registro}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'flex-start', maxWidth: '860px', width: '100%', marginTop: '36px' }}>
        {[
          'Formada UFF/RJ (2004)',
          'Pós em Autismo, ABA, TCC e Neuropsicologia (IPOG)',
          '20+ anos de atuação clínica',
          'Equipe multidisciplinar do Centro de Referência em Autismo (RJ)',
          'Foco em transtornos do neurodesenvolvimento',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '18px', fontSize: '24px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>
            <span style={{ color: GOLD_DIM, fontSize: '22px', flexShrink: 0 }}>✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 4 — O que é ────────────────────────────────────────────────────────
function Card4OQueE() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 80px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: SERIF, fontSize: '42px', fontWeight: 700, color: GOLD, lineHeight: 1.15 }}>
        O que é a Avaliação Neuropsicológica?
      </div>
      <div style={{ fontSize: '24px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginTop: '20px' }}>
        Investigação detalhada das funções cognitivas e emocionais. Atenção, memória, linguagem, comportamento. Traz clareza sobre o que está acontecendo.
      </div>

      <div style={{ height: '1px', background: GOLD_FAINT, margin: '32px 0' }} />

      <div style={{ fontFamily: SERIF, fontSize: '30px', fontWeight: 700, color: GOLD, lineHeight: 1.15, marginBottom: '22px' }}>
        Para quem é indicada?
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          'Esquecimentos ou confusão mental',
          'Dificuldade de atenção ou foco',
          'Mudanças de humor ou comportamento',
          'Histórico de AVC ou traumatismo craniano',
          'Suspeita de TDAH, TEA ou Alzheimer',
        ].map((text, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, background: GOLD_DIM, marginTop: '10px' }} />
            <div style={{ fontSize: '22px', lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 5 — Como é feita ───────────────────────────────────────────────────
function Card5ComoFeita() {
  const steps = [
    { num: '01', title: 'Anamnese', desc: 'Conversa inicial sobre histórico de vida, saúde e comportamento.' },
    { num: '02', title: 'Aplicação de testes', desc: 'Testes cognitivos, emocionais e comportamentais com base científica.' },
    { num: '03', title: 'Observação clínica', desc: 'Análise de como você reage às tarefas durante a avaliação.' },
  ]
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 80px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: SERIF, fontSize: '42px', fontWeight: 700, color: GOLD, lineHeight: 1.15, marginBottom: '28px' }}>
        Como é feita a avaliação?
      </div>
      <div>
        {steps.map((step, i) => (
          <div key={i}>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', padding: '28px 0' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%', flexShrink: 0,
                border: `2px solid ${GOLD_BORDER}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: SERIF, fontSize: '24px', fontWeight: 700, color: GOLD_DIM,
              }}>
                {step.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: SERIF, fontSize: '30px', fontWeight: 700, color: GOLD, lineHeight: 1.1, marginBottom: '10px' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '22px', lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>
                  {step.desc}
                </div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ height: '1px', background: GOLD_FAINT }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 6 — O que será avaliado ────────────────────────────────────────────
function Card6OQueAvaliado() {
  const items = [
    { bold: 'Atenção', text: 'focar e sustentar' },
    { bold: 'Memória', text: 'reter e recordar' },
    { bold: 'Linguagem', text: 'compreensão e expressão' },
    { bold: 'Raciocínio Lógico', text: 'resolver problemas' },
    { bold: 'Funções Executivas', text: 'planejar e organizar' },
    { bold: 'Emoções', text: 'regulação, humor, relações' },
  ]
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 80px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: SERIF, fontSize: '42px', fontWeight: 700, color: GOLD, lineHeight: 1.15, marginBottom: '14px' }}>
        O que será avaliado?
      </div>
      <div style={{ fontSize: '22px', color: WHITE_FAINT, lineHeight: 1.5, marginBottom: '28px' }}>
        Funções cognitivas e emocionais que impactam o dia a dia:
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, background: GOLD_DIM, marginTop: '10px' }} />
            <div style={{ fontSize: '22px', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>
              <strong style={{ color: GOLD, fontWeight: 600 }}>{item.bold}</strong>{' — '}{item.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '24px', fontSize: '20px', lineHeight: 1.6, color: 'rgba(252,236,191,0.75)', fontStyle: 'italic' }}>
        Visão clara do funcionamento cognitivo e emocional, orientando intervenções terapêuticas.
      </div>
    </div>
  )
}

// ─── Card 7 — Tempo + Devolutiva ─────────────────────────────────────────────
function Card7Tempo() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 80px',
      position: 'relative', zIndex: 1,
    }}>
      <div>
        <div style={{ fontFamily: SERIF, fontSize: '36px', fontWeight: 700, color: GOLD, lineHeight: 1.15, marginBottom: '20px' }}>
          Quanto tempo dura?
        </div>
        <div style={{ fontSize: '24px', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>
          <strong style={{ color: GOLD, fontWeight: 700 }}>7 a 10 sessões presenciais</strong> de 1 hora, realizadas semanalmente.
        </div>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '28px 0' }} />

      <div>
        <div style={{ fontFamily: SERIF, fontSize: '36px', fontWeight: 700, color: GOLD, lineHeight: 1.15, marginBottom: '20px' }}>
          Análise e devolutiva
        </div>
        <div style={{ fontSize: '24px', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>
          Os resultados são comparados com padrões de idade e escolaridade, e na última sessão você recebe{' '}
          <strong style={{ color: GOLD, fontWeight: 700 }}>laudo</strong> com{' '}
          <strong style={{ color: GOLD, fontWeight: 700 }}>sugestões de cuidados</strong> e encaminhamentos.
        </div>
      </div>
    </div>
  )
}

// ─── Card 8 — Benefícios ─────────────────────────────────────────────────────
function Card8Beneficios() {
  const items = [
    'Ajuda no diagnóstico de doenças neurológicas e psicológicas',
    'Orienta tratamentos',
    'Esclarece dúvidas sobre dificuldades cognitivas ou emocionais',
    'Ajuda a entender mudanças no comportamento',
    'Ajuda a explorar potencialidades e habilidades',
  ]
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 80px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: SERIF, fontSize: '42px', fontWeight: 700, color: GOLD, lineHeight: 1.15, marginBottom: '36px' }}>
        Benefícios da Avaliação Neuropsicológica
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0, background: GOLD_DIM, marginTop: '11px' }} />
            <div style={{ fontSize: '24px', lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Card 9 — CTA ────────────────────────────────────────────────────────────
function Card9CTA() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '32px 80px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: SERIF, fontSize: '50px', fontWeight: 700, color: GOLD, lineHeight: 1.15, marginBottom: '16px' }}>
        Cuidado individualizado para cada pessoa
      </div>
      <div style={{ fontSize: '22px', lineHeight: 1.6, color: WHITE_DIM, marginBottom: '28px' }}>
        Na Clínica Luciano Noceti, prezamos pela saúde mental com respeito, empatia e ética, oferecendo cuidado individualizado para cada paciente.
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '28px' }} />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '28px' }}>
        <svg style={{ flexShrink: 0, marginTop: '5px' }} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <div>
          <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: GOLD, marginBottom: '6px' }}>
            Onde acontece
          </div>
          <div style={{ fontSize: '22px', color: WHITE_DIM, lineHeight: 1.5 }}>
            Rua Felipe Schmidt, 515 — Edifício Pórtico<br />
            2º andar, Sala 204 — Centro — Florianópolis/SC
          </div>
        </div>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '28px' }} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD, marginBottom: '16px' }}>
          Agende sua avaliação
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '16px',
          background: GOLD_FAINT, borderRadius: '56px',
          border: `2px solid ${GOLD_BORDER}`,
          padding: '14px 32px', alignSelf: 'flex-start',
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(37,211,102,0.85)">
            <path d={WA_PATH} />
          </svg>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'rgba(252,236,191,0.95)', letterSpacing: '1px' }}>
            {NEURO_PHONE}
          </div>
        </div>

        <div style={{ marginTop: '22px' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: GOLD, marginBottom: '16px' }}>
            Visite nosso site
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            background: GOLD_FAINT, borderRadius: '56px',
            border: `2px solid ${GOLD_BORDER}`,
            padding: '14px 32px', alignSelf: 'flex-start',
          }}>
            <span style={{ fontSize: '30px', lineHeight: 1 }}>🌐</span>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'rgba(252,236,191,0.95)', letterSpacing: '1px' }}>
              lucianonoceti.com.br
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Placeholder ─────────────────────────────────────────────────────────────
function Placeholder({ n }: { n: number }) {
  return (
    <div style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontSize: '36px', color: WHITE_FAINT }}>Card {n} — em breve</div>
    </div>
  )
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function NeuroCarrosselExport({ params }: Props) {
  if (process.env.NODE_ENV === 'production' && !process.env.ALLOW_CARD_EXPORT) {
    notFound()
  }

  const id = parseInt(params.id, 10)
  if (isNaN(id) || id < 1 || id > 9) notFound()

  const anna     = profissionais.find(p => p.fazNeuropsico && p.nome === 'Anna de Lima Estanislau')
  const catarina = profissionais.find(p => p.fazNeuropsico && p.nome === 'Catarina Geoffroy')

  const fullLayout = id === 1 || id === 9

  return (
    <main style={{ margin: 0, padding: 0, background: '#1a0a0f', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: '1080px',
        height: '1080px',
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

        {fullLayout ? <HeaderCompleto /> : <HeaderMinimalista />}
        {id === 1 ? <Card1Capa />
          : id === 2 ? <Card2Anna anna={anna} />
          : id === 3 ? <Card3Catarina catarina={catarina} />
          : id === 4 ? <Card4OQueE />
          : id === 5 ? <Card5ComoFeita />
          : id === 6 ? <Card6OQueAvaliado />
          : id === 7 ? <Card7Tempo />
          : id === 8 ? <Card8Beneficios />
          : id === 9 ? <Card9CTA />
          : <Placeholder n={id} />}
        {fullLayout && <FooterEscuro />}

      </div>
    </main>
  )
}
