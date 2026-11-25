'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { registrarOrigemAds, sessionStorageSeguro } from '@/lib/whatsapp-origem'

// Em qualquer página: se a URL tem gclid/gbraid/wbraid ou utm google/cpc,
// grava sessionStorage "origem_ads" = "google" para as mensagens do WhatsApp.
export default function OrigemAdsDetector() {
  const pathname = usePathname()
  useEffect(() => {
    registrarOrigemAds(window.location.search, sessionStorageSeguro())
  }, [pathname])
  return null
}
