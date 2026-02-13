'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { KlaviyoEmailExample } from '@/types/klaviyo'

interface KlaviyoEmailExamplesProps {
  eyebrow?: string
  title?: string
  titleItalic?: string
  emailExamples: KlaviyoEmailExample[]
}

const categoryLabels: Record<string, string> = {
  'welcome': 'Welcome Flow',
  'abandoned-cart': 'Abandoned Cart',
  'post-purchase': 'Post-Purchase',
  'win-back': 'Win-Back',
  'campaign': 'Campaign',
  'newsletter': 'Newsletter',
  'product-launch': 'Product Launch',
  'promotional': 'Promotional',
}

// Default examples with placeholder gradient backgrounds
const defaultExamples: KlaviyoEmailExample[] = [
  { _id: 'd1', title: 'Welcome Flow', description: 'Engaging welcome sequence', imageUrl: '', category: 'welcome', stats: { openRate: '68%', clickRate: '12%' } },
  { _id: 'd2', title: 'Abandoned Cart', description: 'Recovery email series', imageUrl: '', category: 'abandoned-cart', stats: { openRate: '45%', revenue: '$24K' } },
  { _id: 'd3', title: 'Product Launch', description: 'New collection announcement', imageUrl: '', category: 'product-launch', stats: { openRate: '52%', clickRate: '9%' } },
  { _id: 'd4', title: 'Win-Back Campaign', description: 'Re-engagement sequence', imageUrl: '', category: 'win-back', stats: { openRate: '38%', revenue: '$8K' } },
  { _id: 'd5', title: 'Newsletter', description: 'Weekly brand updates', imageUrl: '', category: 'newsletter', stats: { openRate: '42%', clickRate: '7%' } },
  { _id: 'd6', title: 'Post-Purchase', description: 'Thank you & upsell flow', imageUrl: '', category: 'post-purchase', stats: { openRate: '55%', revenue: '$15K' } },
]

// Gradient colors for placeholder cards
const gradientColors = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
]

export default function KlaviyoEmailExamples({
  eyebrow = 'OUR WORK',
  title = 'Emails That',
  titleItalic = 'Convert',
  emailExamples = [],
}: KlaviyoEmailExamplesProps) {
  const [selectedImage, setSelectedImage] = useState<KlaviyoEmailExample | null>(null)

  // Use provided examples or defaults
  const displayExamples = emailExamples.length > 0 ? emailExamples : defaultExamples

  return (
    <section
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Gradient accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(16, 185, 129, 0.05)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {title}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #34d399, #14b8a6)' }}
            >
              {titleItalic}
            </span>
          </h2>
        </motion.div>

        {/* Email Examples Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {displayExamples.map((example, index) => (
            <motion.div
              key={example._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => example.imageUrl && setSelectedImage(example)}
            >
              <div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl"
              >
                {example.imageUrl ? (
                  <Image
                    src={example.imageUrl}
                    alt={example.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  /* Placeholder card content */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg mb-1">{example.title}</p>
                    {example.description && (
                      <p className="text-white/70 text-sm">{example.description}</p>
                    )}
                    {example.stats && (
                      <div className="mt-4 flex gap-4">
                        {example.stats.openRate && (
                          <div className="text-center">
                            <div className="text-white font-bold">{example.stats.openRate}</div>
                            <div className="text-white/60 text-xs">Open Rate</div>
                          </div>
                        )}
                        {example.stats.clickRate && (
                          <div className="text-center">
                            <div className="text-white font-bold">{example.stats.clickRate}</div>
                            <div className="text-white/60 text-xs">Click Rate</div>
                          </div>
                        )}
                        {example.stats.revenue && (
                          <div className="text-center">
                            <div className="text-white font-bold">{example.stats.revenue}</div>
                            <div className="text-white/60 text-xs">Revenue</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {/* Overlay for images */}
                {example.imageUrl && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                  >
                    <p className="text-white text-sm font-medium">{example.title}</p>
                    {example.category && (
                      <span className="text-xs mt-1" style={{ color: '#34d399' }}>
                        {categoryLabels[example.category] || example.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        {displayExamples.some(e => e.stats) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-3 gap-8 py-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: '#10b981' }}>45%+</div>
              <div className="text-sm mt-1" style={{ color: '#6b7280' }}>Avg. Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">8.7%</div>
              <div className="text-sm mt-1" style={{ color: '#6b7280' }}>Avg. Click Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">3x</div>
              <div className="text-sm mt-1" style={{ color: '#6b7280' }}>Industry Average</div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 transition-colors"
                style={{ color: '#9ca3af' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image container */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: '#111' }}
              >
                <div className="relative aspect-[3/5] md:aspect-[3/4]">
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority
                  />
                </div>

                {/* Info bar */}
                <div className="p-4" style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">{selectedImage.title}</h3>
                      {selectedImage.description && (
                        <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>{selectedImage.description}</p>
                      )}
                    </div>
                    {selectedImage.category && (
                      <span
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#34d399' }}
                      >
                        {categoryLabels[selectedImage.category] || selectedImage.category}
                      </span>
                    )}
                  </div>

                  {/* Stats if available */}
                  {selectedImage.stats && (
                    <div
                      className="flex gap-6 mt-4 pt-4"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {selectedImage.stats.openRate && (
                        <div>
                          <div className="text-lg font-bold" style={{ color: '#34d399' }}>{selectedImage.stats.openRate}</div>
                          <div className="text-xs" style={{ color: '#6b7280' }}>Open Rate</div>
                        </div>
                      )}
                      {selectedImage.stats.clickRate && (
                        <div>
                          <div className="text-lg font-bold text-white">{selectedImage.stats.clickRate}</div>
                          <div className="text-xs" style={{ color: '#6b7280' }}>Click Rate</div>
                        </div>
                      )}
                      {selectedImage.stats.revenue && (
                        <div>
                          <div className="text-lg font-bold text-white">{selectedImage.stats.revenue}</div>
                          <div className="text-xs" style={{ color: '#6b7280' }}>Revenue</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
