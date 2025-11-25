'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RecentWorkSection, RecentWorkItem, ServiceCategory } from '@/lib/types'
import { urlFor } from '@/sanity/image'

interface RecentWorkProps {
  section: RecentWorkSection
  items: RecentWorkItem[]
  services: ServiceCategory[]
}

const defaultServices = [
  'Web design', 'Logos', 'Slide decks', 'Branding', 'Social media',
  'UI/UX design', 'Webflow development', 'Mobile apps', 'Print design',
  'Email', 'Display ads', 'Icons', 'Brand guides',
]

export default function RecentWork({ section, items, services }: RecentWorkProps) {
  const serviceNames = services?.length > 0 ? services.map(s => s.name) : defaultServices

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Recent Work Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            {/* Work Items Marquee */}
            {items && items.length > 0 && (
              <div className="overflow-hidden mb-8 rounded-2xl">
                <div className="flex gap-4 animate-marquee">
                  {[...items, ...items].map((item, index) => (
                    <div key={`${item._id}-${index}`} className="flex-shrink-0">
                      <Image
                        src={urlFor(item.image).width(300).height(200).url()}
                        alt={item.projectName}
                        width={300}
                        height={200}
                        className="rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Projects */}
            {items && items.filter(i => i.award).slice(0, 2).map((item) => (
              <div key={item._id} className="flex items-center justify-between mb-4 p-4 bg-white rounded-xl">
                <div className="flex items-center gap-3">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).width(40).height(40).url()}
                      alt={item.projectName}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  )}
                  <span className="font-medium">{item.projectName}</span>
                </div>
                {item.award && (
                  <span className="text-sm text-gray-500">{item.award}</span>
                )}
              </div>
            ))}

            <h3 className="text-2xl font-bold mt-8">
              {section?.title || 'Recent work'}
            </h3>
            <p className="text-gray-600 mt-2 mb-6">
              {section?.subtitle || 'We\'re talking "Product of the Year" good.'}
            </p>
            {section?.ctaUrl && (
              <Link
                href={section.ctaUrl}
                target="_blank"
                className="btn-primary"
              >
                {section?.ctaText || 'See recent work'}
              </Link>
            )}
          </motion.div>

          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Service Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {serviceNames.map((service, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
              <span className="bg-white/30 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                + more
              </span>
            </div>

            <h3 className="text-2xl font-bold mt-auto">
              {section?.servicesTitle || 'Apps, websites, logos & more'}
            </h3>
            <p className="text-white/80 mt-2">
              {section?.servicesSubtitle || 'All the things you need under one roof.'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Lines */}
      <div className="grid-line grid-line-left"></div>
      <div className="grid-line grid-line-right"></div>
    </section>
  )
}
