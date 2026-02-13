'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface KlaviyoPricingProps {
  eyebrow?: string
  title?: string
  titleItalic?: string
  offerName?: string
  offerBadge?: string
  price?: string
  pricePeriod?: string
  priceIncludes?: string[]
  guarantee?: string
  ctaText?: string
  urgencyText?: string
}

export default function KlaviyoPricing({
  eyebrow = 'ZERO SETUP FEES OR MONTHLY RETAINERS',
  title = '100% Commission Only',
  titleItalic = 'Payments',
  offerName = 'Pay Only For The Value You Get',
  offerBadge = 'RISK-FREE',
  price = '$0',
  pricePeriod = 'upfront',
  priceIncludes = [
    'Full Klaviyo account management',
    'Minimum 8 email flows (≈40 emails)',
    '2-4 email campaigns per week',
    'Pop-up management & optimization',
    '2 A/B tests per week (minimum)',
    'Weekly KPIs & updates',
    'Unlimited meetings & revisions',
    '100% commission-based',
  ],
  guarantee = "You don't pay until we generate revenue for you.",
  ctaText = "Let's Scale Your Brand",
  urgencyText = '',
}: KlaviyoPricingProps) {
  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(16, 185, 129, 0.1)' }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase mb-4 block"
            style={{ color: '#6b7280' }}
          >
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #34d399, #14b8a6)' }}
            >
              {titleItalic}
            </span>
          </h2>
          <p className="text-xl" style={{ color: '#9ca3af' }}>{offerName}</p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          {/* Gradient border */}
          <div
            className="absolute -inset-[1px] rounded-3xl"
            style={{ background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.5), rgba(16, 185, 129, 0.2), transparent)' }}
          />

          <div className="relative rounded-3xl overflow-hidden" style={{ background: '#0d0d0d' }}>
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span
                className="px-3 py-1 text-xs font-semibold rounded-full"
                style={{ background: '#10b981', color: '#000' }}
              >
                {offerBadge}
              </span>
            </div>

            <div className="p-8 md:p-12">
              {/* Price Display */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-white">{price}</div>
                    <div style={{ color: '#6b7280' }}>{pricePeriod}</div>
                  </div>
                </div>
                <p className="font-medium" style={{ color: '#10b981' }}>{guarantee}</p>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-3 gap-4 mb-8 py-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">$0</div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>Setup Fees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">$0</div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>Monthly Retainers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: '#34d399' }}>100%</div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>Commission-Based</div>
                </div>
              </div>

              {/* What's included */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-4">Everything included:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {priceIncludes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm" style={{ color: '#9ca3af' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="#book"
                className="block w-full py-4 text-center text-lg font-semibold text-black rounded-full transition-all duration-300 hover:scale-105"
              >
                {ctaText}
              </Link>

              <p className="text-center text-sm mt-4" style={{ color: '#6b7280' }}>
                Book a 15-minute chat and we&apos;ll see how much potential revenue is sitting in your inbox
              </p>
            </div>
          </div>
        </motion.div>

        {/* Qualification note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-6 rounded-xl text-center"
        >
          <h4 className="font-semibold text-white mb-2">To Qualify, You Must:</h4>
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            Run or manage a DTC eCommerce brand doing between $40K - $500K/month
          </p>
        </motion.div>
      </div>
    </section>
  )
}
