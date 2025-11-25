'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FooterSection, SiteSettings } from '@/lib/types'
import { urlFor } from '@/sanity/image'

interface FooterProps {
  footer: FooterSection
  settings: SiteSettings
}

export default function Footer({ footer, settings }: FooterProps) {
  return (
    <section id="book" className="footer-dark">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-8">
              {settings?.logo ? (
                <Image
                  src={urlFor(settings.logo).width(150).url()}
                  alt={settings.siteName || 'SiteGuard99'}
                  width={150}
                  height={40}
                  className="h-8 w-auto invert"
                />
              ) : (
                <span className="text-xl font-semibold text-white">
                  {settings?.siteName || 'SiteGuard99'}
                </span>
              )}
            </Link>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              {footer?.ctaTitle || 'See if SiteGuard99 is the right fit for you'}{' '}
              <span className="text-italics">{footer?.ctaTitleItalic || '(it totally is)'}</span>
            </h2>
            <p className="text-gray-400 mb-8">
              {footer?.ctaSubtitle || 'Schedule a quick, 15 minute guided tour through SiteGuard99.'}
            </p>

            {/* Smiley Faces Decoration */}
            <div className="mb-8">
              <div className="flex gap-2 mb-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl ${
                      ['bg-yellow-400', 'bg-orange-400', 'bg-red-400', 'bg-pink-400',
                       'bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-cyan-400'][i]
                    }`}
                  >
                    {['😊', '🙂', '😄', '😃', '😀', '😁', '🤗', '😆'][i]}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className="text-gray-500 text-sm space-y-2">
              <p>{footer?.headquarters || 'Headquartered in Phoenix, Arizona'}</p>
              <div className="flex gap-4">
                {footer?.termsUrl && (
                  <Link href={footer.termsUrl} target="_blank" className="hover:text-white transition">
                    Terms of service
                  </Link>
                )}
                {footer?.privacyUrl && (
                  <Link href={footer.privacyUrl} target="_blank" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right - Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Notice */}
            {footer?.noticeText && (
              <div className="bg-white/5 rounded-2xl p-4 mb-6 text-sm text-gray-300">
                {footer.noticeText}
              </div>
            )}

            {/* Cal.com Embed */}
            <div className="bg-white/5 rounded-3xl p-4 h-[500px]">
              {settings?.calendarBookingUrl ? (
                <iframe
                  src={`https://cal.com/${settings.calendarBookingUrl}?embed=true&theme=dark`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-2xl"
                  title="Book a call"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p className="mb-4">Calendar booking not configured</p>
                    <Link
                      href={`mailto:${settings?.contactEmail || 'hello@siteguard99.com'}`}
                      className="btn-primary bg-white text-black"
                    >
                      Email us instead
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
