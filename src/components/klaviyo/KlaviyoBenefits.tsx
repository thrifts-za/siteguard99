'use client'

import { motion } from 'framer-motion'
import { KlaviyoBenefit } from '@/types/klaviyo'

interface KlaviyoBenefitsProps {
  eyebrow?: string
  title?: string
  benefits: KlaviyoBenefit[]
}

const defaultBenefits: KlaviyoBenefit[] = [
  { _id: '1', title: 'Full Service Klaviyo Account Management', description: 'We handle everything from strategy to execution.', icon: '🎯', colorScheme: 'green' },
  { _id: '2', title: 'Minimum 8 Email Flows (≈40 emails)', description: 'Welcome, abandoned cart, post-purchase, win-back & more.', icon: '🔄', colorScheme: 'green' },
  { _id: '3', title: '2-4 Email Campaigns Per Week', description: 'Consistent revenue-driving campaigns every week.', icon: '📧', colorScheme: 'green' },
  { _id: '4', title: 'Pop-up Management & Optimization', description: 'High-converting lead capture to grow your list.', icon: '📈', colorScheme: 'green' },
  { _id: '5', title: '2 A/B Tests Per Week (Minimum)', description: 'Data-driven optimization for maximum performance.', icon: '🧪', colorScheme: 'green' },
  { _id: '6', title: 'Weekly KPIs & Updates', description: 'Full transparency with regular performance reports.', icon: '📊', colorScheme: 'green' },
  { _id: '7', title: 'Campaign Management & Planning', description: 'Strategic calendar aligned with your business goals.', icon: '📅', colorScheme: 'green' },
  { _id: '8', title: 'Unlimited Meetings, Revisions & Emails', description: "We're your partner, not just a vendor.", icon: '♾️', colorScheme: 'green' },
]

export default function KlaviyoBenefits({
  eyebrow = "WHAT YOU'RE GETTING WHEN YOU WORK WITH US",
  title = 'All of This. ZERO Upfront Cost.',
  benefits = defaultBenefits,
}: KlaviyoBenefitsProps) {
  const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits

  return (
    <section
      className="py-28 relative bg-[#050505]"
    >
      {/* Gradient accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(16, 185, 129, 0.05)' }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase mb-4 block"
            style={{ color: '#6b7280' }}
          >
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p style={{ color: '#9ca3af' }}>
            Most agencies charge $5K-$15K/month for this level of service.
            <br />
            <span style={{ color: '#10b981' }}>You? You pay $0 until we start generating revenue for you.</span>
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {displayBenefits.map((benefit, index) => (
            <motion.div
              key={benefit._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(16, 185, 129, 0.1)' }}
              >
                <svg className="w-5 h-5" style={{ color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm" style={{ color: '#6b7280' }}>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
