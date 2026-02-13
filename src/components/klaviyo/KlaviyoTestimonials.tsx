'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { KlaviyoTestimonial } from '@/types/klaviyo'

interface KlaviyoTestimonialsProps {
  testimonials: KlaviyoTestimonial[]
}

const defaultTestimonials: KlaviyoTestimonial[] = [
  {
    _id: '1',
    quote: "Our email revenue went from 15% to 42% of total revenue in just 3 months. The ROI is insane.",
    authorName: 'Sarah Chen',
    authorTitle: 'Founder, Bloom Beauty',
  },
  {
    _id: '2',
    quote: "Finally an agency that puts their money where their mouth is. Zero risk, all reward.",
    authorName: 'Marcus Thompson',
    authorTitle: 'CEO, Athletic Gear Co',
  },
  {
    _id: '3',
    quote: "We've worked with 4 email agencies before. This is the first one that actually delivered results.",
    authorName: 'Jessica Rodriguez',
    authorTitle: 'Marketing Director, Home Essentials',
  },
]

export default function KlaviyoTestimonials({
  testimonials = defaultTestimonials,
}: KlaviyoTestimonialsProps) {
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section
      className="py-28 relative overflow-hidden bg-[#050505]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.02), transparent)' }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
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
            RESULTS SPEAK FOR THEMSELVES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            CEOs & Founders Actually{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #34d399, #14b8a6)' }}
            >
              Reply
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayTestimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative p-8 rounded-2xl h-full flex flex-col transition-all duration-300"
              >
                {/* Quote */}
                <p className="mb-8 flex-grow leading-relaxed" style={{ color: '#d1d5db' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-4 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {testimonial.authorImageUrl ? (
                    <Image
                      src={testimonial.authorImageUrl}
                      alt={testimonial.authorName || ''}
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                  ) : (
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}
                    >
                      {testimonial.authorName?.charAt(0) || '?'}
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-white text-sm">
                      {testimonial.authorName || 'Anonymous'}
                    </div>
                    {testimonial.authorTitle && (
                      <div className="text-xs" style={{ color: '#6b7280' }}>
                        {testimonial.authorTitle}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-12 py-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#10b981' }}>$2.7M+</div>
            <div className="text-sm" style={{ color: '#6b7280' }}>Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">127+</div>
            <div className="text-sm" style={{ color: '#6b7280' }}>Brands Scaled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">40%</div>
            <div className="text-sm" style={{ color: '#6b7280' }}>Avg Revenue From Email</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
