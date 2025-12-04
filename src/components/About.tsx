'use client'

import { AboutSection, SiteSettings } from '@/lib/types'

interface AboutProps {
  about: AboutSection
  settings: SiteSettings
}

export default function About({ about, settings }: AboutProps) {
  const siteName = settings?.siteName || 'The WordPress Team'
  const storyText = about?.storyText || "First launched in 2024, The WordPress Team revolutionized WordPress maintenance with its subscription-based model. Run by WordPress experts who focus on delivering top-notch security and performance to a limited roster of clients at a time. No outsourcing, no offshore teams—just dedicated expert care."

  return (
    <div className="services">
      <div className="container p-b-0">
        <div className="inner-container">
          <div className="div-block-32">
            <p className="story-text _4">
              {storyText}
            </p>
          </div>
          <div className="hiw__header-wrapper">
            <div className="eyebrow">Membership benefits</div>
            <h1 className="max">
              It&apos;s <span className="text-italics">&quot;you&apos;ll never go back&quot;</span>{' '}
              <span>better</span>
            </h1>
            <p className="benefits__p">
              {siteName} replaces unreliable freelancers and expensive agencies for one flat monthly
              fee, with fixes delivered so fast that your WordPress site just works—without you thinking about it.
            </p>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
