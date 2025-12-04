'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SiteSettings } from '@/lib/types'
import { urlFor } from '@/sanity/image'

interface HeaderProps {
  settings: SiteSettings
}

export default function Header({ settings }: HeaderProps) {
  return (
    <header className="relative z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {settings?.logo ? (
              <Image
                src={urlFor(settings.logo).width(200).url()}
                alt={settings.siteName || 'The WordPress Team'}
                width={200}
                height={60}
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-2xl font-bold">{settings?.siteName || 'The WordPress Team'}</span>
            )}
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            {settings?.loginUrl && (
              <Link
                href={settings.loginUrl}
                target="_blank"
                className="btn-outline text-sm"
              >
                Login
              </Link>
            )}
            <Link
              href="#book"
              className="btn-outline text-sm"
            >
              <Phone className="w-4 h-4" />
              Book a call
            </Link>
            <Link
              href="#pricing"
              className="btn-primary text-sm"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
