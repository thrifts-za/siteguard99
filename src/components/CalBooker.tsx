'use client'

import { useEffect } from 'react'

interface CalBookerProps {
  username: string
  eventSlug: string
}

interface CalInstance {
  (action: string, ...args: unknown[]): void
  ns?: Record<string, CalInstance>
  q?: unknown[]
  loaded?: boolean
}

declare global {
  interface Window {
    Cal?: CalInstance
  }
}

export default function CalBooker({ username, eventSlug }: CalBookerProps) {
  useEffect(() => {
    // Load Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      let d = C.document
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal
          let ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement('script')).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ['initNamespace', namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal?.('init', '30min', { origin: 'https://app.cal.com' })

    const calNs = window.Cal?.ns
    if (calNs?.['30min']) {
      calNs['30min']('inline', {
        elementOrSelector: '#my-cal-inline',
        calLink: 'thewordpressteam/30min',
        config: {
          layout: 'month_view',
          theme: 'dark',
        },
      })

      calNs['30min']('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#e63946' } },
        hideEventTypeDetails: true,
        layout: 'month_view',
      })
    }
  }, [username, eventSlug])

  return (
    <div
      id="my-cal-inline"
      style={{
        width: '100%',
        height: '100%',
        minHeight: 'clamp(400px, 80vh, 600px)',
        overflow: 'auto',
      }}
    />
  )
}
