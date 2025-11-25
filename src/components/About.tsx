'use client'

import Link from 'next/link'
import { AboutSection, SiteSettings } from '@/lib/types'

interface AboutProps {
  about: AboutSection
  settings: SiteSettings
}

export default function About({ about, settings }: AboutProps) {
  const siteName = settings?.siteName || 'SiteGuard99'
  const founderName = about?.founderName || 'Brett'
  const yearFounded = about?.yearFounded || '2017'

  return (
    <div className="services">
      <div className="container p-b-0">
        <div className="inner-container">
          <div className="div-block-32">
            <p className="story-text _4">
              First launched in {yearFounded}, {siteName}{' '}
              <span className="text-italics">revolutionized</span> the design industry with its
              subscription-based model. To this day, {siteName} is run entirely by{' '}
              {about?.founderLink ? (
                <Link href={about.founderLink} target="_blank" className="link">
                  {founderName}
                </Link>
              ) : (
                founderName
              )}
              . {siteName} doesn&apos;t hire extra designers or outsource work—instead, it focuses
              on delivering top-notch quality to a limited roster of clients at a time.
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
              fee, with designs delivered so fast you won&apos;t want to go anywhere else.
            </p>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
