'use client'

import { motion } from 'framer-motion'
import { KlaviyoFeature } from '@/types/klaviyo'

interface KlaviyoFeaturesProps {
  eyebrow?: string
  title?: string
  titleItalic?: string
  features: KlaviyoFeature[]
}

const timeline = [
  {
    week: 'Week 1',
    title: 'Discovery & Setup',
    items: [
      'Align on brand values and review brand assets',
      'Attend kickoff call with me personally',
      'Analyze competitors\' email strategies and perform niche research',
      'Develop initial email design mockups for review',
    ],
  },
  {
    week: 'Week 2-4',
    title: 'Build & Launch',
    items: [
      'Build 8 custom automated email flows (40+ emails)',
      'Create a detailed 30-day email campaign calendar',
      'Design and implement an optimized pop-up for lead capture',
      'Send 3+ high-performing email campaigns per week',
    ],
  },
  {
    week: 'Week 5+',
    title: 'Scale & Optimize',
    items: [
      'Create brand-specific segmented email flows',
      'Run at minimum 2 A/B tests per week to enhance performance',
      'Provide multiple progress reports per week with insights and results',
      'Continuous optimization based on data',
    ],
  },
]

export default function KlaviyoFeatures({
  eyebrow = 'WHAT WE\'LL DO FOR YOUR BRAND',
  title = 'From Setup to Success',
  titleItalic = 'In Weeks, Not Months',
  features = [],
}: KlaviyoFeaturesProps) {
  return (
    <section
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Gradient accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {title}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #34d399, #14b8a6)' }}
            >
              {titleItalic}
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {timeline.map((phase, phaseIndex) => (
            <motion.div
              key={phase.week}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phaseIndex * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div
                className="relative p-6 md:p-8 rounded-2xl transition-colors duration-300"
              >
                {/* Week badge */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="px-4 py-1.5 text-sm font-semibold rounded-full"
                  >
                    {phase.week}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                </div>

                {/* Items grid */}
                <div className="grid md:grid-cols-2 gap-3">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(16, 185, 129, 0.1)' }}
                      >
                        <svg className="w-3 h-3" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: '#9ca3af' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
