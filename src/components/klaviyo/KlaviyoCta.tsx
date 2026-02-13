'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const CalBooker = dynamic(() => import('@/components/CalBooker'), { ssr: false })

interface KlaviyoCtaProps {
  title?: string
  subtitle?: string
  buttonText?: string
  urgencyText?: string
  calUsername?: string
  calEventSlug?: string
}

export default function KlaviyoCta({
  title = "This Time Next Month...",
  subtitle = "You could have a fully optimized email system generating revenue on autopilot.",
  urgencyText = "Limited spots available — We only onboard 5 new brands per month",
  calUsername = 'thewordpressteam',
  calEventSlug = '30min',
}: KlaviyoCtaProps) {
  return (
    <section
      id="book"
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.05), transparent, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(16, 185, 129, 0.1)' }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-6" style={{ color: '#9ca3af' }}>
            {subtitle}
          </p>
          {urgencyText && (
            <span
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#34d399' }}
              />
              {urgencyText}
            </span>
          )}
        </motion.div>

        {/* Calendar Container */}
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
            style={{ background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.1), transparent)' }}
          />

          <div className="relative rounded-3xl overflow-hidden" style={{ background: '#0d0d0d' }}>
            <div className="p-4 md:p-8">
              <CalBooker
                username={calUsername}
                eventSlug={calEventSlug}
              />
            </div>
          </div>
        </motion.div>

        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm"
          style={{ color: '#6b7280' }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% Free Consultation
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No Obligation
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            15 Minute Call
          </div>
        </motion.div>
      </div>
    </section>
  )
}
