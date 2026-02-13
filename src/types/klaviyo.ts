// Klaviyo Landing Page Types

export interface KlaviyoSeoMetadata {
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string[]
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImageUrl?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImageUrl?: string
  robotsNoIndex?: boolean
  robotsNoFollow?: boolean
}

export interface KlaviyoHeroStat {
  value: string
  label: string
}

export interface KlaviyoPage {
  seo?: KlaviyoSeoMetadata
  // Section Visibility
  showPricingHook?: boolean
  showPainPoints?: boolean
  showSolution?: boolean
  showEmailExamples?: boolean
  showBenefits?: boolean
  showTestimonials?: boolean
  showWhoFor?: boolean
  showCalculator?: boolean
  showPricing?: boolean
  showGuarantee?: boolean
  showFaq?: boolean
  // Hero
  heroEyebrow?: string
  heroHeadline?: string
  heroHeadlineItalic?: string
  heroSubheadline?: string
  heroCtaText?: string
  heroStats?: KlaviyoHeroStat[]
  heroCyclingWords?: string[]
  painSectionTitle?: string
  painSectionSubtitle?: string
  solutionEyebrow?: string
  solutionTitle?: string
  solutionTitleItalic?: string
  solutionDescription?: string
  solutionImageUrl?: string
  benefitsSectionEyebrow?: string
  benefitsSectionTitle?: string
  featuresSectionEyebrow?: string
  featuresSectionTitle?: string
  featuresSectionTitleItalic?: string
  emailExamplesEyebrow?: string
  emailExamplesTitle?: string
  emailExamplesTitleItalic?: string
  pricingEyebrow?: string
  pricingTitle?: string
  pricingTitleItalic?: string
  offerName?: string
  offerBadge?: string
  price?: string
  pricePeriod?: string
  priceIncludes?: string[]
  guarantee?: string
  pricingCtaText?: string
  urgencyText?: string
  faqTitle?: string
  faqTitleItalic?: string
  // Calculator
  calculatorTitle?: string
  calculatorSubtitle?: string
  commissionRate?: number
  // Who This Is For
  whoForTitle?: string
  whoForYesTitle?: string
  whoForYesList?: string[]
  whoForNoTitle?: string
  whoForNoList?: string[]
  // CTA
  ctaTitle?: string
  ctaSubtitle?: string
  ctaButtonText?: string
  ctaUrgencyText?: string
  calUsername?: string
  calEventSlug?: string
}

export interface KlaviyoPainPoint {
  _id: string
  title: string
  description: string
  icon?: string
  order?: number
}

export interface KlaviyoBenefit {
  _id: string
  title: string
  description: string
  stat?: string
  icon?: string
  colorScheme?: 'purple' | 'blue' | 'green' | 'orange' | 'pink' | 'teal'
  order?: number
}

export interface KlaviyoFeature {
  _id: string
  title: string
  description: string
  icon?: string
  includes?: string[]
  imageUrl?: string
  order?: number
}

export interface KlaviyoFaqItem {
  _id: string
  question: string
  answer: string
  order?: number
}

export interface KlaviyoTestimonial {
  _id: string
  quote: string
  authorName: string
  authorTitle?: string
  authorImageUrl?: string
  companyLogoUrl?: string
}

export interface KlaviyoEmailExample {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category?: 'welcome' | 'abandoned-cart' | 'post-purchase' | 'win-back' | 'campaign' | 'newsletter' | 'product-launch' | 'promotional'
  brandName?: string
  stats?: {
    openRate?: string
    clickRate?: string
    revenue?: string
  }
  order?: number
}

export interface KlaviyoSiteSettings {
  siteName?: string
  contactEmail?: string
  headerLogoUrl?: string
  headerLogoColor?: string
}

export interface KlaviyoPageData {
  page: KlaviyoPage | null
  painPoints: KlaviyoPainPoint[]
  benefits: KlaviyoBenefit[]
  features: KlaviyoFeature[]
  faqItems: KlaviyoFaqItem[]
  testimonials: KlaviyoTestimonial[]
  emailExamples: KlaviyoEmailExample[]
  siteSettings: KlaviyoSiteSettings | null
}
