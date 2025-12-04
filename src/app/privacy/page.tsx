import { safeFetch } from '@/sanity/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Logo from '@/components/Logo'

const privacyQuery = groq`*[_type == "privacyPolicy"][0] {
  title,
  effectiveDate,
  content
}`

const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  siteName,
  "headerLogoUrl": headerLogo.asset->url,
  headerLogoColor
}`

interface PrivacyData {
  title: string
  effectiveDate: string
  content: any[]
}

interface SiteSettings {
  siteName: string
  headerLogoUrl?: string
  headerLogoColor?: 'red' | 'default'
}

export default async function PrivacyPage() {
  const [privacy, siteSettings] = await Promise.all([
    safeFetch<PrivacyData>(privacyQuery),
    safeFetch<SiteSettings>(siteSettingsQuery),
  ])

  return (
    <div className="legal-page">
      <div className="container">
        <div className="inner-container">
          <div className="legal-header">
            <Link href="/" className="hero__logo-block w-inline-block">
              <Logo
                logoUrl={siteSettings?.headerLogoUrl}
                siteName={siteSettings?.siteName || 'The WordPress Team'}
                variant="header"
                color={siteSettings?.headerLogoColor || 'red'}
              />
            </Link>
          </div>

          <div className="legal-content">
            <h1>{privacy?.title || 'Privacy Policy'}</h1>
            {privacy?.effectiveDate && (
              <p className="legal-date">
                Effective date: {new Date(privacy.effectiveDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}

            {privacy?.content && (
              <div className="legal-body">
                <PortableText value={privacy.content} />
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="legal-cta">
            <h2>Ready to get started?</h2>
            <p>Join The WordPress Team today and let us handle your WordPress maintenance so you can focus on growing your business.</p>
            <div className="legal-cta-buttons">
              <Link href="/#pricing" className="button-filled w-inline-block">
                See Pricing
              </Link>
              <Link href="/#book" className="button-outline w-inline-block">
                Book a Call
              </Link>
            </div>
          </div>

          <div className="legal-footer">
            <Link href="/" className="button-outline w-inline-block">
              ← Back to Home
            </Link>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
