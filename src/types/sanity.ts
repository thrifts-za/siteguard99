// Sanity Types for the page data

export interface SanityImage {
  _type: 'image'
  asset?: {
    _ref: string
    _type: 'reference'
    url?: string
  }
}

export interface SEOMetadata {
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string[]
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImageUrl?: string
  ogType?: 'website' | 'article' | 'product'
  twitterCard?: 'summary' | 'summary_large_image'
  twitterTitle?: string
  twitterDescription?: string
  twitterImageUrl?: string
  twitterSite?: string
  twitterCreator?: string
  robotsNoIndex?: boolean
  robotsNoFollow?: boolean
}

export interface SiteSettings {
  siteName: string
  siteUrl?: string
  headerLogoUrl?: string
  footerLogoUrl?: string
  seo?: SEOMetadata
  // Favicons
  faviconUrl?: string
  faviconSvgUrl?: string
  favicon16Url?: string
  favicon32Url?: string
  appleTouchIconUrl?: string
  androidChrome192Url?: string
  androidChrome512Url?: string
  maskIconUrl?: string
  maskIconColor?: string
  msapplicationTileColor?: string
  themeColor?: string
  // Tracking
  googleAnalyticsId?: string
  googleTagManagerId?: string
  facebookPixelId?: string
  hotjarId?: string
  clarityId?: string
  customHeadScripts?: string
  customBodyStartScripts?: string
  customBodyEndScripts?: string
  // Social Links
  socialLinks?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    facebook?: string
    youtube?: string
    tiktok?: string
    github?: string
  }
  contactEmail: string
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
  memberCardImage?: SanityImage
  bookCallTitle: string
  bookCallSubtitle: string
  founderImage?: SanityImage
}

export interface HowItWorksCard {
  title: string
  description: string
  type: 'subscribe' | 'request' | 'receive'
}

export interface HowItWorksSection {
  titlePart1: string
  titleItalic: string
  titlePart2: string
  cards: HowItWorksCard[]
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
  icon?: SanityImage
  colorScheme?: string
  order: number
}

export interface ClientLogo {
  _id: string
  name: string
  logo?: SanityImage
}

export interface Testimonial {
  _id: string
  quote: string
  authorName: string
  authorTitle?: string
  authorImage?: SanityImage
  companyLogo?: SanityImage
}

export interface RecentWorkSection {
  title: string
  subtitle: string
  ctaText?: string
  ctaUrl?: string
  servicesTitle: string
  servicesSubtitle: string
}

export interface RecentWorkItem {
  _id: string
  projectName: string
  image?: SanityImage
  award?: string
  awardSource?: string
  awardLogo?: SanityImage
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
  memberCardImage?: SanityImage
}

export interface FaqSection {
  titleItalic: string
  titleRegular: string
  bookCallImage?: SanityImage
  bookCallTitle: string
  emailPrompt: string
}

export interface FaqItem {
  _id: string
  question: string
  answer: string
}

export interface FooterSection {
  ctaTitle: string
  ctaTitleItalic: string
  ctaSubtitle: string
  noticeText: string
  headquarters: string
  termsUrl?: string
  privacyUrl?: string
}

export interface SiteGraphics {
  // Hero
  heroMemberCard?: string
  heroCallAvatar?: string

  // How It Works
  subscribePriceTag?: string
  requestSmile?: string

  // Client Logos
  clientLogos?: Array<{
    name: string
    logoUrl: string
  }>

  // Testimonials
  testimonialWebflowLogo?: string
  testimonialAuthorImage?: string

  // Recent Work
  recentWorkImages?: Array<{
    name: string
    imageUrl: string
  }>
  awardBadges?: Array<{
    companyName: string
    companyLogoUrl: string
    awardTitle: string
    awardSourceLogoUrl: string
  }>

  // Pricing
  pricingCardImage?: string
  pricingSmileIcon?: string
  pricingPauseIcon?: string
  pricingCheckIcon?: string
  pricingDecorative1?: string

  // FAQ
  faqBookCallImage?: string
  faqEmailIcon?: string

  // Footer
  footerSmileyFaces?: string

  // UI Icons
  arrowIcon?: string
  phoneIcon?: string
  chevronIcon?: string

  // Benefit Icons
  benefitIcons?: Array<{
    benefitName: string
    iconUrl: string
  }>

  // Services Decorative
  servicesDecorative1?: string
  servicesDecorative2?: string
}

export interface PageData {
  siteSettings: SiteSettings | null
  hero: HeroSection | null
  howItWorks: HowItWorksSection | null
  about: AboutSection | null
  benefitsSection: BenefitsSection | null
  benefits: Benefit[]
  clientLogos: ClientLogo[]
  testimonials: Testimonial[]
  recentWorkSection: RecentWorkSection | null
  recentWorkItems: RecentWorkItem[]
  services: ServiceCategory[]
  pricing: PricingSection | null
  faqSection: FaqSection | null
  faqItems: FaqItem[]
  footer: FooterSection | null
  graphics: SiteGraphics | null
}
