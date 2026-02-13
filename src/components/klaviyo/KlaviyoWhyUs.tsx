'use client'

import { motion } from 'framer-motion'

export default function KlaviyoWhyUs() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-[#050505]"
    >
      {/* Gradient accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(16, 185, 129, 0.08)' }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
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
            WHY CHOOSE US?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We Stake 100% Of Our Income{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #34d399, #14b8a6)' }}
            >
              On Your Success
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative p-8 md:p-12 rounded-2xl"
        >
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
            <p>
              In 2026, email marketing is <span className="text-white font-medium">STILL</span> the highest-ROI profit lever in e-commerce, especially as ad costs rise further and further year on year.
            </p>

            <p>
              But the industry has become a money pit. Most agencies hit you with <span className="text-white">$3K–$5K/month</span>, <span className="text-white">$2K–$3K setup fees</span>, revenue share on top, and lock you into 6–12 month contracts.
            </p>

            <p>
              That&apos;s <span className="font-medium" style={{ color: '#f87171' }}>$5K–$8K just to get started</span> — with zero guarantees.
            </p>

            <div
              className="py-5 my-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="text-base text-white italic">
                &ldquo;Show me the incentives, and I&apos;ll show you the outcome.&rdquo;
              </p>
              <p className="text-xs mt-2" style={{ color: '#6b7280' }}>— Charlie Munger</p>
            </div>

            <p>
              We believe incentives should align with yours. That&apos;s why{' '}
              <span className="font-semibold" style={{ color: '#10b981' }}>we don&apos;t get paid unless you do</span>.
            </p>

            <p className="text-white font-medium text-base">
              Unlimited revisions. Unlimited improvements. Unlimited effort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
