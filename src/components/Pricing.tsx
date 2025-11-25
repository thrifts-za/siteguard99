'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Smile, PauseCircle, CheckCircle } from 'lucide-react'
import { PricingSection, SiteSettings, ClientLogo } from '@/lib/types'
import { urlFor } from '@/sanity/image'

interface PricingProps {
  pricing: PricingSection
  settings: SiteSettings
  clientLogos: ClientLogo[]
}

const defaultFeatures = [
  'One request at a time',
  'Avg. 48 hour delivery',
  'Unlimited brands',
  'Webflow development',
  'Unlimited stock photos',
  'Up to 2 users',
  'Pause or cancel anytime',
]

export default function Pricing({ pricing, settings, clientLogos }: PricingProps) {
  const features = pricing?.features?.length > 0 ? pricing.features : defaultFeatures

  return (
    <section id="pricing" className="relative py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 block">
            {pricing?.eyebrow || 'PRICING'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            {pricing?.title || 'One subscription,'}{' '}
            <span className="text-italics">{pricing?.titleItalic || 'endless possibilities'}</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Left - Join Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black rounded-3xl p-8 text-white flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6 w-fit">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Start today</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold">Join</h3>
            <h3 className="text-4xl md:text-5xl font-bold">{settings?.siteName || 'SiteGuard99'}</h3>
            {pricing?.memberCardImage && (
              <Image
                src={urlFor(pricing.memberCardImage).width(400).url()}
                alt="Decoration"
                width={400}
                height={300}
                className="mt-8 rounded-2xl"
              />
            )}
          </motion.div>

          {/* Right - Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold">{pricing?.planName || 'Monthly Club'}</h4>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {pricing?.planBadge || 'PAUSE OR CANCEL ANYTIME'}
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-bold">{pricing?.price || '$5,995'}</span>
              <span className="text-gray-500">{pricing?.pricePeriod || '/month'}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <span className="text-xs font-medium text-gray-500 mb-4 block">Included</span>

            <Link
              href={settings?.stripePaymentUrl || '#'}
              target="_blank"
              className="w-full btn-primary justify-center text-center"
            >
              <Smile className="w-5 h-5" />
              {pricing?.ctaText || 'Join today'}
            </Link>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <PauseCircle className="w-6 h-6" />
              <h5 className="font-bold">{pricing?.pauseTitle || 'Pause anytime'}</h5>
            </div>
            <p className="text-gray-600">
              {pricing?.pauseDescription || 'Temporarily pause your subscription anytime, no sweat.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black text-white rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6" />
              <h5 className="font-bold">{pricing?.trialTitle || 'Try it for a week'}</h5>
            </div>
            <p className="text-gray-400">
              {pricing?.trialDescription || 'Not loving it after a week? Get 75% back, no questions asked.'}
            </p>
          </motion.div>
        </div>

        {/* Client Logos */}
        {clientLogos && clientLogos.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {clientLogos.map((logo) => (
              <Image
                key={logo._id}
                src={urlFor(logo.logo).width(120).url()}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        )}
      </div>

      {/* Grid Lines */}
      <div className="grid-line grid-line-left"></div>
      <div className="grid-line grid-line-right"></div>
    </section>
  )
}
