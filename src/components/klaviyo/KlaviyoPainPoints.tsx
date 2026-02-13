'use client'

import { motion } from 'framer-motion'
import { KlaviyoPainPoint } from '@/types/klaviyo'

interface KlaviyoPainPointsProps {
  title?: string
  subtitle?: string
  painPoints: KlaviyoPainPoint[]
}

const defaultPainPoints: KlaviyoPainPoint[] = [
  { _id: '1', title: "Your email list keeps growing but revenue stays flat", description: "", icon: '📉' },
  { _id: '2', title: "Open rates are dropping and emails land in spam", description: "", icon: '📭' },
  { _id: '3', title: "You don't have time to learn Klaviyo properly", description: "", icon: '⏰' },
  { _id: '4', title: "Abandoned cart emails aren't recovering sales", description: "", icon: '🛒' },
  { _id: '5', title: "You're guessing instead of using data", description: "", icon: '🎲' },
  { _id: '6', title: "Competitors are crushing it with email while you fall behind", description: "", icon: '😤' },
]

export default function KlaviyoPainPoints({
  title = 'Sound Familiar?',
  subtitle = "If you're nodding along, you're leaving money on the table...",
  painPoints = defaultPainPoints,
}: KlaviyoPainPointsProps) {
  const displayPainPoints = painPoints.length > 0 ? painPoints : defaultPainPoints

  return (
    <section
      className="py-24 bg-[#050505]"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="whitespace-nowrap" style={{ color: '#9ca3af' }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Pain Points List - Centered */}
        <div className="space-y-4 mb-12 max-w-xl mx-auto">
          {displayPainPoints.map((painPoint, index) => (
            <motion.div
              key={painPoint._id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center gap-4 p-4 rounded-xl transition-colors"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(239, 68, 68, 0.1)' }}
              >
                <svg className="w-5 h-5" style={{ color: '#f87171' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-center" style={{ color: '#d1d5db' }}>{painPoint.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xl mb-2" style={{ color: '#9ca3af' }}>What if it didn&apos;t have to be this way?</p>
          <p className="font-medium" style={{ color: '#10b981' }}>There&apos;s a better approach →</p>
        </motion.div>
      </div>
    </section>
  )
}
