'use client'

import { useEffect } from 'react'

const WA_CONVERSION = 'AW-18196512841/poJmCISF37UcEMmA4-RD'

export default function WhatsAppConversionTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a[href*="wa.me"]')
      if (!anchor) return
      if (typeof (window as { gtag?: Function }).gtag === 'function') {
        ;(window as { gtag?: Function }).gtag!('event', 'conversion', {
          send_to: WA_CONVERSION,
        })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
