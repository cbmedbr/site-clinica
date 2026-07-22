import type { MetadataRoute } from 'next'
import { profissionais, slugify } from '@/lib/profissionais'

const BASE = 'https://www.lucianonoceti.com.br'
const NOW  = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const perfis = profissionais
    .filter(p => p.nome !== 'Luciano Noceti e Vieira')
    .map(p => ({
      url:             `${BASE}/perfil/${slugify(p.nome)}`,
      lastModified:    NOW,
      changeFrequency: 'monthly' as const,
      priority:        0.7,
    }))

  return [
    {
      url:             BASE,
      lastModified:    NOW,
      changeFrequency: 'weekly',
      priority:        1,
    },
    {
      url:             `${BASE}/avaliacao-neuropsicologica`,
      lastModified:    NOW,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${BASE}/consultorios`,
      lastModified:    NOW,
      changeFrequency: 'monthly',
      priority:        0.7,
    },
    {
      url:             `${BASE}/luciano-noceti-e-vieira`,
      lastModified:    NOW,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    ...perfis,
  ]
}
