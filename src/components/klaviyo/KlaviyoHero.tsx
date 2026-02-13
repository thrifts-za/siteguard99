'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { KlaviyoHeroStat } from '@/types/klaviyo'

interface KlaviyoHeroProps {
  eyebrow?: string
  headline?: string
  headlineItalic?: string
  subheadline?: string
  ctaText?: string
  stats?: KlaviyoHeroStat[]
}

export default function KlaviyoHero({
  eyebrow = 'FOR AMBITIOUS ECOMMERCE BRANDS',
  headline = '100%-Commission Email Marketing',
  headlineItalic = 'For Ecommerce Brands',
  subheadline = 'Zero Setup Fees. Zero Monthly Retainers. We only get paid when you make money.',
  ctaText = 'Book Your Free Strategy Call',
  stats = [
    { value: '$2.7M+', label: 'Revenue Generated' },
    { value: '40%', label: 'Avg. Revenue Lift' },
    { value: '127+', label: 'Brands Scaled' },
  ],
}: KlaviyoHeroProps) {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Gradient orb - top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-widest rounded-full border"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10b981' }} />
            {eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
        >
          <span className="block">{headline}</span>
          <span
            className="block bg-clip-text text-transparent whitespace-nowrap"
            style={{ backgroundImage: 'linear-gradient(to right, #34d399, #10b981, #14b8a6)' }}
          >
            {headlineItalic}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#9ca3af' }}
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <Link
            href="#book"
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-black rounded-full transition-all duration-300 hover:scale-105"
          >
            {ctaText}
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-5 text-sm" style={{ color: '#6b7280' }}>
            Free 30-minute strategy session • No obligation
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mb-20"
        >
          <div
            className="relative rounded-2xl overflow-hidden p-[1px]"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ background: '#0a0a0a' }}>
              {/* Mock dashboard header */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.8)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(234, 179, 8, 0.8)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(34, 197, 94, 0.8)' }} />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs" style={{ color: '#6b7280' }}>Klaviyo Dashboard</span>
                </div>
              </div>
              {/* Mock dashboard content */}
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '$127,450', label: 'Email Revenue', highlight: true },
                    { value: '45.2%', label: 'Open Rate', highlight: false },
                    { value: '8.7%', label: 'Click Rate', highlight: false },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: stat.highlight ? '#10b981' : '#fff' }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm mt-1" style={{ color: '#6b7280' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Chart mockup */}
                <div
                  className="h-40 rounded-xl flex items-end justify-around px-6 pb-6"
                >
                  {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="w-5 rounded-t transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div
            className="absolute -inset-8 blur-3xl -z-10 opacity-30"
            style={{ background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.4), transparent 70%)' }}
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-12 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: '#6b7280' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="w-7 h-11 rounded-full flex justify-center pt-2"
          style={{ border: '2px solid rgba(255,255,255,0.15)' }}
        >
          <div className="w-1.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </motion.div>
    </section>
  )
}
