'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { KlaviyoFaqItem } from '@/types/klaviyo'

interface KlaviyoFaqProps {
  title?: string
  titleItalic?: string
  faqItems: KlaviyoFaqItem[]
}

const defaultFaqItems: KlaviyoFaqItem[] = [
  {
    _id: '1',
    question: 'How does the 100% commission model work?',
    answer: "Simple: we only get paid when you make money. We take a percentage of the revenue we generate through email marketing. If we don't perform, we don't get paid. This ensures our incentives are 100% aligned with yours.",
  },
  {
    _id: '2',
    question: 'What if you don\'t generate any revenue?',
    answer: "Then you pay nothing. Zero. That's the beauty of our model. We're so confident in our ability to deliver results that we're willing to stake 100% of our income on your success.",
  },
  {
    _id: '3',
    question: 'How quickly will I see results?',
    answer: "Most clients see their first revenue from our flows within the first 2 weeks. By the end of month one, you'll have a full suite of automated flows generating revenue 24/7. Significant results typically come within 60-90 days.",
  },
  {
    _id: '4',
    question: 'Do I need to have Klaviyo already?',
    answer: "We can work with you whether you're starting fresh or have an existing Klaviyo account. If you're new, we'll handle the full setup. If you have an existing account, we'll audit and optimize what you have.",
  },
  {
    _id: '5',
    question: 'How is this different from other email agencies?',
    answer: "Most agencies charge $3K-$5K/month plus setup fees and lock you into long contracts with zero guarantees. We charge nothing upfront and only earn when you do. Plus, you get a full team of specialists for less than the cost of one junior hire.",
  },
  {
    _id: '6',
    question: 'What\'s the minimum contract length?',
    answer: "There's no long-term contract. We work on a performance basis because we believe our results should speak for themselves. That said, email marketing is a long-term game, and we see the best results with clients who commit to at least 3 months.",
  },
  {
    _id: '7',
    question: 'How much involvement is required from my team?',
    answer: "Minimal. We handle everything—strategy, copywriting, design, and technical implementation. We'll need your input during onboarding (about 2 hours) and brief approval on campaigns. Otherwise, you focus on running your business.",
  },
  {
    _id: '8',
    question: 'What size businesses do you work with?',
    answer: "We work best with DTC eCommerce brands doing $40K-$500K/month in revenue. This ensures you have enough traffic and subscribers for our strategies to make a significant impact.",
  },
]

export default function KlaviyoFaq({
  title = 'Frequently Asked',
  titleItalic = 'Questions',
  faqItems = defaultFaqItems,
}: KlaviyoFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const displayFaqItems = faqItems.length > 0 ? faqItems : defaultFaqItems

  return (
    <section
      className="py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
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

        {/* FAQ List */}
        <div className="space-y-3">
          {displayFaqItems.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
              >
                <span className="font-medium text-white pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <svg className="w-4 h-4" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="p-5 pt-0"
                    >
                      <p className="leading-relaxed" style={{ color: '#9ca3af' }}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="mb-4" style={{ color: '#9ca3af' }}>
            Still have questions?
          </p>
          <Link
            href="#book"
            className="inline-flex items-center gap-2 font-medium transition-colors"
            style={{ color: '#34d399' }}
          >
            Let&apos;s talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
