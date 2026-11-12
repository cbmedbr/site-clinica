import { MessageCircle } from 'lucide-react'

// Barra fixa no rodapé do celular, sempre visível, com o botão grande de WhatsApp.
// No computador some (lá fica o botão redondo do WhatsAppFab).
export default function WhatsAppBarraMobile({
  href,
  texto = 'Agendar pelo WhatsApp',
}: {
  href: string
  texto?: string
}) {
  return (
    <>
      {/* espaço para a barra não cobrir o fim da página */}
      <div className="h-24 md:hidden" aria-hidden />
      <div
        className="md:hidden fixed inset-x-0 bottom-0 z-50 px-4 pt-3"
        style={{
          paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
          background: 'linear-gradient(to top, rgba(250,247,244,1) 70%, rgba(250,247,244,0))',
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full rounded-full py-4 text-base font-bold text-white active:scale-[0.98] transition-transform"
          style={{ background: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.45)' }}
        >
          <MessageCircle className="w-6 h-6" />
          {texto}
        </a>
      </div>
    </>
  )
}
