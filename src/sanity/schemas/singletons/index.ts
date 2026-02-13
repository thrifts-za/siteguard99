import siteSettings from './siteSettings'
import heroSection from './heroSection'
import howItWorksSection from './howItWorksSection'
import aboutSection from './aboutSection'
import benefitsSection from './benefitsSection'
import pricingSection from './pricingSection'
import faqSection from './faqSection'
import footerSection from './footerSection'
import recentWorkSection from './recentWorkSection'
import siteGraphics from './siteGraphics'
import termsAndConditions from './termsAndConditions'
import privacyPolicy from './privacyPolicy'
import klaviyoLandingPage from './klaviyoLandingPage'

export const singletonTypes = [
  siteSettings,
  siteGraphics,
  heroSection,
  howItWorksSection,
  aboutSection,
  benefitsSection,
  recentWorkSection,
  pricingSection,
  faqSection,
  footerSection,
  termsAndConditions,
  privacyPolicy,
  klaviyoLandingPage,
]

export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
export const singletonTypeNames = new Set(singletonTypes.map((type) => type.name))
