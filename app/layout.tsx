import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { clinicaLD } from '@/lib/jsonld'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lucianonoceti.com.br'),
  title: 'Clínica Luciano Noceti | Psicologia em Florianópolis',
  description:
    'Clínica de Psicologia e Psicanálise no Centro de Florianópolis. Mais de 20.000 pacientes atendidos. Equipe multidisciplinar com 9 abordagens terapêuticas. Atendimento presencial e online. Aceita os principais convênios.',
  keywords:
    'psicologia, psicanálise, terapia, Florianópolis, Luciano Noceti, saúde mental, TCC, Gestalt, Equoterapia, TEA, neuropsicologia',
  openGraph: {
    title: 'Clínica Luciano Noceti | Psicologia',
    description:
      'Cuidando da saúde mental com dedicação e humanidade. Mais de 20.000 pacientes atendidos no Centro de Florianópolis.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.lucianonoceti.com.br',
    siteName: 'Clínica Luciano Noceti',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-neutral-50 antialiased font-sans text-neutral-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicaLD) }}
        />
        {children}
      </body>
    </html>
  )
}
