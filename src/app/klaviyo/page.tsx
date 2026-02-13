import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { klaviyoPageDataQuery } from '@/sanity/queries'
import { KlaviyoPageData } from '@/types/klaviyo'
import KlaviyoLanding from '@/components/klaviyo/KlaviyoLanding'

export const dynamic = 'force-dynamic'

const defaultPageData: KlaviyoPageData = {
  page: {
    heroEyebrow: 'FOR ECOMMERCE BRANDS DOING $50K-$500K/MONTH',
    heroHeadline: 'We Turn Your Email List Into a',
    heroHeadlineItalic: 'Revenue Machine',
    heroSubheadline: '100% commission-based. You only pay when we make you money.',
    heroCtaText: 'Book Free Strategy Call',
    heroStats: [
      { value: '$2.7M+', label: 'Revenue Generated' },
      { value: '40%', label: 'Avg Revenue Lift' },
      { value: '127+', label: 'Brands Scaled' },
    ],
    painSectionTitle: 'Sound Familiar?',
    painSectionSubtitle: '',
    solutionEyebrow: 'THE SOLUTION',
    solutionTitle: 'Done-For-You Klaviyo',
    solutionTitleItalic: 'That Actually Works',
    solutionDescription: '',
    benefitsSectionEyebrow: 'WHAT YOU GET',
    benefitsSectionTitle: 'Everything Included',
    featuresSectionEyebrow: 'HOW IT WORKS',
    featuresSectionTitle: 'From Zero to Revenue',
    featuresSectionTitleItalic: 'in 30 Days',
    pricingEyebrow: 'SIMPLE PRICING',
    pricingTitle: '100% Commission',
    pricingTitleItalic: 'Based',
    offerName: 'Klaviyo Growth Partner',
    offerBadge: 'RISK-FREE',
    price: '$0',
    pricePeriod: 'upfront',
    priceIncludes: [
      'Full Klaviyo account setup & management',
      '8+ automated email flows (40+ emails)',
      '2-4 campaigns per week',
      'Pop-up design & optimization',
      'A/B testing & optimization',
      'Weekly performance reports',
    ],
    guarantee: 'You pay nothing until we generate revenue.',
    pricingCtaText: 'Start Risk-Free',
    urgencyText: 'Only 3 spots left this month',
    faqTitle: 'Questions?',
    faqTitleItalic: '',
    ctaTitle: 'Ready to Scale?',
    ctaSubtitle: 'Book a free 15-minute call to see if we\'re a fit.',
    ctaButtonText: 'Book Your Call',
    ctaUrgencyText: 'Limited spots available',
    calUsername: 'thewordpressteam',
    calEventSlug: '30min',
  },
  painPoints: [],
  benefits: [],
  features: [],
  faqItems: [],
  testimonials: [],
  emailExamples: [],
  siteSettings: null,
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await safeFetch<KlaviyoPageData>(klaviyoPageDataQuery)
  const seo = data?.page?.seo
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thewordpressteam.co.za'

  return {
    title: seo?.metaTitle || '100% Commission Email Marketing | Klaviyo Agency',
    description: seo?.metaDescription || 'Zero upfront. 100% commission-based Klaviyo email marketing for ecommerce brands.',
    keywords: seo?.metaKeywords || ['klaviyo agency', 'email marketing', 'ecommerce email'],
    alternates: {
      canonical: seo?.canonicalUrl || `${siteUrl}/klaviyo`,
    },
    openGraph: {
      title: seo?.ogTitle || '100% Commission Email Marketing',
      description: seo?.ogDescription || 'We only get paid when you make money.',
      url: `${siteUrl}/klaviyo`,
      type: 'website',
    },
  }
}

export default async function KlaviyoPage() {
  const sanityData = await safeFetch<KlaviyoPageData>(klaviyoPageDataQuery)

  const data: KlaviyoPageData = {
    page: sanityData?.page || defaultPageData.page,
    painPoints: sanityData?.painPoints?.length ? sanityData.painPoints : defaultPageData.painPoints,
    benefits: sanityData?.benefits?.length ? sanityData.benefits : defaultPageData.benefits,
    features: sanityData?.features?.length ? sanityData.features : defaultPageData.features,
    faqItems: sanityData?.faqItems?.length ? sanityData.faqItems : defaultPageData.faqItems,
    testimonials: sanityData?.testimonials?.length ? sanityData.testimonials : defaultPageData.testimonials,
    emailExamples: sanityData?.emailExamples?.length ? sanityData.emailExamples : defaultPageData.emailExamples,
    siteSettings: sanityData?.siteSettings || defaultPageData.siteSettings,
  }

  return <KlaviyoLanding data={data} />
}
