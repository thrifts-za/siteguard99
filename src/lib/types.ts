import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SiteSettings {
  siteName: string
  logo?: SanityImageSource
  seo?: {
    title?: string
    description?: string
    ogImage?: SanityImageSource
  }
  socialLinks?: {
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  contactEmail?: string
  loginUrl?: string
  stripePaymentUrl?: string
  calendarBookingUrl?: string
}

export interface HeroSection {
  headlinePart1: string
  headlineItalic: string
  subtitle: string
  memberCardBadge: string
  memberCardTitle1: string
  memberCardTitle2: string
  memberCardSubtitle: string
  memberCardImage?: SanityImageSource
  bookCallTitle: string
  bookCallSubtitle: string
  founderImage?: SanityImageSource
}

export interface HowItWorksSection {
  titlePart1: string
  titleItalic: string
  titlePart2: string
  cards: Array<{
    title: string
    description: string
    icon?: SanityImageSource
  }>
  servicePills: string[]
}

export interface AboutSection {
  storyText: string
  founderName: string
  founderLink?: string
  yearFounded: string
}

export interface BenefitsSection {
  eyebrow: string
  titlePart1: string
  titleItalic: string
  titlePart2: string
  subtitle: string
}

export interface Benefit {
  _id: string
  title: string
  description: string
  icon?: SanityImageSource
  colorScheme: string
  order: number
}

export interface ClientLogo {
  _id: string
  name: string
  logo: SanityImageSource
}

export interface Testimonial {
  _id: string
  quote: string
  authorName?: string
  authorTitle?: string
  authorImage?: SanityImageSource
  companyLogo?: SanityImageSource
}

export interface RecentWorkSection {
  title: string
  subtitle: string
  ctaText: string
  ctaUrl?: string
  servicesTitle: string
  servicesSubtitle: string
}

export interface RecentWorkItem {
  _id: string
  projectName: string
  image: SanityImageSource
  award?: string
  awardSource?: string
  awardLogo?: SanityImageSource
}

export interface ServiceCategory {
  _id: string
  name: string
}

export interface PricingSection {
  eyebrow: string
  title: string
  titleItalic: string
  planName: string
  planBadge: string
  price: string
  pricePeriod: string
  features: string[]
  ctaText: string
  pauseTitle: string
  pauseDescription: string
  trialTitle: string
  trialDescription: string
  memberCardImage?: SanityImageSource
}

export interface FAQSection {
  titleItalic: string
  titleRegular: string
  bookCallImage?: SanityImageSource
  bookCallTitle: string
  emailPrompt: string
}

export interface FAQItem {
  _id: string
  question: string
  answer: string
}

export interface FooterSection {
  ctaTitle: string
  ctaTitleItalic: string
  ctaSubtitle: string
  noticeText?: string
  headquarters: string
  termsUrl?: string
  privacyUrl?: string
}

export interface PageData {
  siteSettings: SiteSettings
  hero: HeroSection
  howItWorks: HowItWorksSection
  about: AboutSection
  benefitsSection: BenefitsSection
  benefits: Benefit[]
  clientLogos: ClientLogo[]
  testimonials: Testimonial[]
  recentWorkSection: RecentWorkSection
  recentWorkItems: RecentWorkItem[]
  services: ServiceCategory[]
  pricing: PricingSection
  faqSection: FAQSection
  faqItems: FAQItem[]
  footer: FooterSection
}
