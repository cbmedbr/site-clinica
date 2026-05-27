// components/HeroNeuralBackground.js
// Background animado de rede neural para hero da página /avaliacao-neuropsicologica.
// SVG puro + CSS animations. Server Component. Sem dependências externas.
// 19 nós pulsando em timings únicos (ciclos 3.3s a 5.5s, delays aleatórios).
// Respeita prefers-reduced-motion.

export default function HeroNeuralBackground({ color = "#d4a574" }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMaxYMid slice"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes neuro-bright { 0%, 100% { opacity: 0.50; } 50% { opacity: 0.85; } }
          @keyframes neuro-glow   { 0%, 100% { opacity: 0.08; } 50% { opacity: 0.22; } }
          @keyframes neuro-soft   { 0%, 100% { opacity: 0.28; } 50% { opacity: 0.55; } }
          @keyframes neuro-tiny   { 0%, 100% { opacity: 0.30; } 50% { opacity: 0.60; } }

          .neuro-hb-1 { animation: neuro-bright 3.3s ease-in-out infinite; }
          .neuro-hb-2 { animation: neuro-bright 4.7s ease-in-out infinite; animation-delay: 2.1s; }
          .neuro-hb-3 { animation: neuro-bright 3.8s ease-in-out infinite; animation-delay: 0.9s; }
          .neuro-hb-4 { animation: neuro-bright 5.1s ease-in-out infinite; animation-delay: 3.4s; }
          .neuro-hb-5 { animation: neuro-bright 4.3s ease-in-out infinite; animation-delay: 1.6s; }

          .neuro-hl-1 { animation: neuro-glow 3.3s ease-in-out infinite; }
          .neuro-hl-2 { animation: neuro-glow 4.7s ease-in-out infinite; animation-delay: 2.1s; }
          .neuro-hl-3 { animation: neuro-glow 3.8s ease-in-out infinite; animation-delay: 0.9s; }
          .neuro-hl-4 { animation: neuro-glow 5.1s ease-in-out infinite; animation-delay: 3.4s; }
          .neuro-hl-5 { animation: neuro-glow 4.3s ease-in-out infinite; animation-delay: 1.6s; }

          .neuro-sf-1 { animation: neuro-soft 3.6s ease-in-out infinite; animation-delay: 2.8s; }
          .neuro-sf-2 { animation: neuro-soft 5.3s ease-in-out infinite; animation-delay: 0.4s; }
          .neuro-sf-3 { animation: neuro-soft 4.1s ease-in-out infinite; animation-delay: 4.2s; }
          .neuro-sf-4 { animation: neuro-soft 3.4s ease-in-out infinite; animation-delay: 1.1s; }
          .neuro-sf-5 { animation: neuro-soft 4.9s ease-in-out infinite; animation-delay: 3.7s; }
          .neuro-sf-6 { animation: neuro-soft 3.7s ease-in-out infinite; animation-delay: 0.6s; }
          .neuro-sf-7 { animation: neuro-soft 5.5s ease-in-out infinite; animation-delay: 2.3s; }
          .neuro-sf-8 { animation: neuro-soft 4.4s ease-in-out infinite; animation-delay: 1.9s; }

          .neuro-tn-1 { animation: neuro-tiny 3.5s ease-in-out infinite; animation-delay: 1.4s; }
          .neuro-tn-2 { animation: neuro-tiny 4.6s ease-in-out infinite; animation-delay: 3.2s; }
          .neuro-tn-3 { animation: neuro-tiny 5.0s ease-in-out infinite; animation-delay: 0.5s; }
          .neuro-tn-4 { animation: neuro-tiny 3.9s ease-in-out infinite; animation-delay: 2.6s; }
          .neuro-tn-5 { animation: neuro-tiny 4.5s ease-in-out infinite; animation-delay: 4.0s; }
          .neuro-tn-6 { animation: neuro-tiny 3.3s ease-in-out infinite; animation-delay: 1.7s; }

          @media (prefers-reduced-motion: reduce) {
            .neuro-hb-1, .neuro-hb-2, .neuro-hb-3, .neuro-hb-4, .neuro-hb-5,
            .neuro-hl-1, .neuro-hl-2, .neuro-hl-3, .neuro-hl-4, .neuro-hl-5,
            .neuro-sf-1, .neuro-sf-2, .neuro-sf-3, .neuro-sf-4,
            .neuro-sf-5, .neuro-sf-6, .neuro-sf-7, .neuro-sf-8,
            .neuro-tn-1, .neuro-tn-2, .neuro-tn-3, .neuro-tn-4, .neuro-tn-5, .neuro-tn-6 {
              animation: none;
            }
          }
        `}</style>

        {/* Halos compactos */}
        <g fill={color}>
          <circle className="neuro-hl-1" cx="720" cy="200" r="16" />
          <circle className="neuro-hl-2" cx="920" cy="280" r="20" />
          <circle className="neuro-hl-3" cx="820" cy="380" r="15" />
          <circle className="neuro-hl-4" cx="1050" cy="350" r="18" />
          <circle className="neuro-hl-5" cx="980" cy="480" r="16" />
        </g>

        {/* Sinapses */}
        <g stroke={color} strokeWidth="0.6" fill="none" opacity="0.22">
          <line x1="720" y1="200" x2="640" y2="150" />
          <line x1="720" y1="200" x2="800" y2="120" />
          <line x1="720" y1="200" x2="880" y2="200" />
          <line x1="720" y1="200" x2="700" y2="320" />
          <line x1="640" y1="150" x2="560" y2="220" />
          <line x1="800" y1="120" x2="880" y2="200" />
          <line x1="800" y1="120" x2="960" y2="130" />
          <line x1="880" y1="200" x2="920" y2="280" />
          <line x1="880" y1="200" x2="1000" y2="220" />
          <line x1="920" y1="280" x2="1000" y2="220" />
          <line x1="920" y1="280" x2="820" y2="380" />
          <line x1="920" y1="280" x2="900" y2="410" />
          <line x1="1000" y1="220" x2="1050" y2="350" />
          <line x1="1000" y1="220" x2="1080" y2="260" />
          <line x1="820" y1="380" x2="700" y2="320" />
          <line x1="820" y1="380" x2="900" y2="410" />
          <line x1="820" y1="380" x2="760" y2="460" />
          <line x1="700" y1="320" x2="600" y2="280" />
          <line x1="900" y1="410" x2="1050" y2="350" />
          <line x1="900" y1="410" x2="980" y2="480" />
          <line x1="1050" y1="350" x2="1100" y2="450" />
          <line x1="1050" y1="350" x2="1130" y2="380" />
          <line x1="980" y1="480" x2="1100" y2="450" />
          <line x1="980" y1="480" x2="900" y2="540" />
          <line x1="980" y1="480" x2="760" y2="460" />
          <line x1="760" y1="460" x2="820" y2="510" />
          <line x1="820" y1="510" x2="900" y2="540" />
          <line x1="560" y1="220" x2="600" y2="280" />
          <line x1="600" y1="280" x2="700" y2="320" />
          <line x1="960" y1="130" x2="1080" y2="260" />
          <line x1="1080" y1="260" x2="1130" y2="380" />
        </g>

        {/* Nós pequenos estáticos */}
        <g fill={color} opacity="0.45">
          <circle cx="600" cy="280" r="1.8" />
          <circle cx="660" cy="260" r="1.6" />
          <circle cx="760" cy="180" r="1.8" />
          <circle cx="790" cy="240" r="1.6" />
          <circle cx="840" cy="150" r="1.6" />
          <circle cx="970" cy="170" r="1.6" />
          <circle cx="1020" cy="300" r="1.8" />
          <circle cx="1080" cy="330" r="1.6" />
          <circle cx="1130" cy="380" r="1.8" />
          <circle cx="820" cy="440" r="1.6" />
          <circle cx="760" cy="520" r="1.6" />
          <circle cx="1020" cy="540" r="1.6" />
          <circle cx="1110" cy="510" r="1.6" />
        </g>

        {/* Nós pequenos com pulse leve — timings únicos */}
        <g fill={color}>
          <circle className="neuro-tn-1" cx="560" cy="220" r="1.8" />
          <circle className="neuro-tn-2" cx="850" cy="300" r="1.8" />
          <circle className="neuro-tn-3" cx="960" cy="130" r="1.8" />
          <circle className="neuro-tn-4" cx="1080" cy="260" r="2" />
          <circle className="neuro-tn-5" cx="820" cy="510" r="1.8" />
          <circle className="neuro-tn-6" cx="900" cy="540" r="2" />
        </g>

        {/* Nós médios — cada um com timing único */}
        <g fill={color}>
          <circle className="neuro-sf-1" cx="640" cy="150" r="2.4" />
          <circle className="neuro-sf-2" cx="800" cy="120" r="2.4" />
          <circle className="neuro-sf-3" cx="880" cy="200" r="2.6" />
          <circle className="neuro-sf-4" cx="1000" cy="220" r="2.4" />
          <circle className="neuro-sf-5" cx="700" cy="320" r="2.4" />
          <circle className="neuro-sf-6" cx="900" cy="410" r="2.4" />
          <circle className="neuro-sf-7" cx="1100" cy="450" r="2.6" />
          <circle className="neuro-sf-8" cx="760" cy="460" r="2.4" />
        </g>

        {/* Hubs principais */}
        <g fill={color}>
          <circle className="neuro-hb-1" cx="720" cy="200" r="3.8" />
          <circle className="neuro-hb-2" cx="920" cy="280" r="4" />
          <circle className="neuro-hb-3" cx="820" cy="380" r="3.6" />
          <circle className="neuro-hb-4" cx="1050" cy="350" r="3.8" />
          <circle className="neuro-hb-5" cx="980" cy="480" r="3.6" />
        </g>
      </svg>
    </div>
  );
}
