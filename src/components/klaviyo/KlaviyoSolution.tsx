'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface KlaviyoSolutionProps {
  eyebrow?: string
  title?: string
  titleItalic?: string
  description?: string
  imageUrl?: string
}

const steps = [
  {
    number: '01',
    title: 'We Audit Your Account',
    description: 'Deep-dive into your Klaviyo setup to find revenue leaks and quick wins.',
  },
  {
    number: '02',
    title: 'Build Your Flow System',
    description: 'Custom automated flows that generate revenue 24/7 while you sleep.',
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description: 'Data-driven campaigns with continuous A/B testing for maximum ROI.',
  },
]

export default function KlaviyoSolution({
  eyebrow = 'A DONE-FOR-YOU SYSTEM THAT BRINGS',
  title = 'Serious Revenue',
  titleItalic = 'To Your Door',
  description = "We handle everything—strategy, copywriting, design, and optimization. You focus on running your business while we turn your email list into a predictable revenue channel.",
}: KlaviyoSolutionProps) {
  return (
    <section
      className="py-28 relative overflow-hidden bg-[#050505]"
    >
      {/* Gradient accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(16, 185, 129, 0.05)' }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#6b7280' }}>
            {eyebrow}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
        >
          {title}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #34d399, #14b8a6)' }}
          >
            {titleItalic}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-20 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#9ca3af' }}
        >
          {description}
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative p-8 rounded-2xl text-left"
            >
              <div
                className="text-6xl font-bold mb-6"
              >
                {step.number}
              </div>
              <h3
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: 'var(--font-figtree), system-ui, sans-serif' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="#book"
            className="inline-flex items-center gap-2 font-medium transition-colors"
            style={{ color: '#10b981' }}
          >
            See how it works for your business
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
