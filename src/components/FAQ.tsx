'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Mail, ArrowRight } from 'lucide-react'
import { FAQSection, FAQItem, SiteSettings } from '@/lib/types'
import { urlFor } from '@/sanity/image'

interface FAQProps {
  section: FAQSection
  items: FAQItem[]
  settings: SiteSettings
}

const defaultFAQs = [
  { _id: '1', question: 'How fast will I receive my designs?', answer: 'On average, most requests are completed in just two days or less. However, more complex requests can take longer.' },
  { _id: '2', question: 'How does onboarding work?', answer: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe." },
  { _id: '3', question: 'Who are the designers?', answer: "SiteGuard99 is run by a dedicated team. You'll work directly with us through the entirety of your experience." },
  { _id: '4', question: 'Is there a limit to how many requests I can make?', answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one." },
  { _id: '5', question: 'How does the pause feature work?', answer: "We understand you may not have enough design work to fill up entire month. That's where pausing your subscription comes in handy. Billing cycles are based on 31 day period." },
  { _id: '6', question: 'How do you handle larger requests?', answer: "Larger requests are broken down on our end. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done." },
  { _id: '7', question: 'What programs do you design in?', answer: 'Most requests are designed using Figma.' },
  { _id: '8', question: 'How does Webflow development work?', answer: 'Webflow development is included with all subscriptions and is simply treated as a design request. Once the website is fully developed, the site will be transferred to your account.' },
  { _id: '9', question: 'What if I don\'t like the design?', answer: "No worries! We'll continue to revise the design until you're 100% satisfied." },
  { _id: '10', question: 'Are there any refunds?', answer: 'Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work.' },
]

export default function FAQ({ section, items, settings }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqItems = items?.length > 0 ? items : defaultFAQs

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - FAQ Accordion */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold mb-8"
            >
              <span className="text-italics">{section?.titleItalic || 'Frequently'}</span>{' '}
              {section?.titleRegular || 'asked questions'}
            </motion.h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-medium pr-8">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-gray-600">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gray-50 rounded-3xl p-8">
              {section?.bookCallImage && (
                <Image
                  src={urlFor(section.bookCallImage).width(200).url()}
                  alt="Contact"
                  width={200}
                  height={200}
                  className="rounded-2xl mb-6"
                />
              )}
              <h3 className="text-2xl font-bold mb-6">
                {section?.bookCallTitle || 'Book a 15-min intro call'}
              </h3>
              <Link href="#book" className="btn-primary w-full justify-center mb-4">
                Book a call
              </Link>
              <Link
                href={`mailto:${settings?.contactEmail || 'hello@siteguard99.com'}`}
                className="flex items-center justify-between bg-white rounded-2xl p-4 hover:bg-gray-100 transition group"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">{section?.emailPrompt || 'Prefer to email?'}</p>
                    <p className="text-sm text-gray-500">
                      {settings?.contactEmail || 'hello@siteguard99.com'}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid Lines */}
      <div className="grid-line grid-line-left"></div>
      <div className="grid-line grid-line-right"></div>
    </section>
  )
}
