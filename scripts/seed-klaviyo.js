/**
 * Seed script for Klaviyo Landing Page content
 * Run with: node scripts/seed-klaviyo.js
 */

const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const klaviyoPageData = {
  _type: 'klaviyoLandingPage',
  _id: 'klaviyoLandingPage',

  // Section Visibility
  showPricingHook: true,
  showPainPoints: true,
  showSolution: true,
  showEmailExamples: true,
  showBenefits: true,
  showTestimonials: false,
  showWhoFor: true,
  showCalculator: true,
  showPricing: true,
  showGuarantee: true,
  showFaq: true,

  // Hero
  heroEyebrow: 'FOR ECOMMERCE BRANDS DOING $50K-$500K/MONTH',
  heroHeadline: 'We Turn Your Email List Into a',
  heroHeadlineItalic: 'Revenue Machine',
  heroSubheadline: '100% commission-based. You only pay when we make you money.',
  heroCtaText: 'Book Free Strategy Call',
  heroCyclingWords: ['Revenue Machine', 'Cash Generator', 'Profit Engine', 'Money Printer'],

  // Pain Points
  painSectionTitle: 'Sound Familiar?',
  painSectionSubtitle: 'If you\'re nodding along to any of these, you\'re not alone...',

  // Solution
  solutionEyebrow: 'THE SOLUTION',
  solutionTitle: 'Done-For-You Klaviyo',
  solutionTitleItalic: 'That Actually Works',
  solutionDescription: '100% commission-based email marketing. We handle everything while you focus on your business.',

  // Benefits
  benefitsSectionEyebrow: 'WHAT YOU GET',
  benefitsSectionTitle: 'Everything Included',

  // Email Examples
  emailExamplesEyebrow: 'OUR WORK',
  emailExamplesTitle: 'Emails That',
  emailExamplesTitleItalic: 'Convert',

  // Pricing
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

  // Calculator
  calculatorTitle: 'See Your Investment',
  calculatorSubtitle: 'We take 20% of net email revenue generated. Billed on the 1st of each month for the previous month.',
  commissionRate: 20,

  // Who This Is For
  whoForTitle: 'Perfect Fit Check',
  whoForYesTitle: '✓ This IS For You If...',
  whoForYesList: [
    'You run an ecommerce store doing $50K-$500K/month',
    'You have an email list but it\'s not generating revenue',
    'You want predictable, automated revenue',
    'You\'re willing to share revenue for results',
    'You want a partner, not just a vendor',
  ],
  whoForNoTitle: '✗ This Is NOT For You If...',
  whoForNoList: [
    'You\'re doing less than $50K/month',
    'You want to manage emails yourself',
    'You\'re not willing to share data',
    'You expect overnight results',
    'You\'ve never used Klaviyo before',
  ],

  // FAQ
  faqTitle: 'Questions?',
  faqTitleItalic: '',

  // CTA
  ctaTitle: 'Ready to Scale?',
  ctaSubtitle: 'Book a free 15-minute call to see if we\'re a fit.',
  ctaButtonText: 'Book Your Call',
  ctaUrgencyText: 'Limited spots available',
  calUsername: 'thewordpressteam',
  calEventSlug: '30min',
}

const faqItems = [
  {
    _type: 'klaviyoFaqItem',
    question: 'What makes your commission model risk-free?',
    answer: 'You pay $0 upfront. We only earn when we generate revenue for you. If we don\'t make you money, you don\'t pay us a cent.',
    order: 1,
  },
  {
    _type: 'klaviyoFaqItem',
    question: 'How quickly will I see results?',
    answer: 'Most clients see their first revenue from our email campaigns within 30 days. Full optimization typically happens over 60-90 days.',
    order: 2,
  },
  {
    _type: 'klaviyoFaqItem',
    question: 'What\'s the minimum commitment?',
    answer: 'We work on a month-to-month basis. No long-term contracts. You can cancel anytime if you\'re not seeing results.',
    order: 3,
  },
  {
    _type: 'klaviyoFaqItem',
    question: 'Do you work with all ecommerce platforms?',
    answer: 'Yes! Shopify, WooCommerce, BigCommerce, Magento - if it connects to Klaviyo, we can help you scale.',
    order: 4,
  },
  {
    _type: 'klaviyoFaqItem',
    question: 'What commission rate do you charge?',
    answer: 'We charge 20% of net email-attributed revenue, billed on the 1st of each month for the previous month\'s performance.',
    order: 5,
  },
  {
    _type: 'klaviyoFaqItem',
    question: 'How do you track email revenue?',
    answer: 'We use Klaviyo\'s built-in attribution tracking, which measures revenue generated within a specific window after email interactions. This is industry-standard and fully transparent.',
    order: 6,
  },
]

const painPoints = [
  {
    _type: 'klaviyoPainPoint',
    title: 'Revenue Leaking',
    description: 'Your email list grows but revenue stays flat. Thousands of subscribers, zero engagement.',
    icon: '📉',
    order: 1,
  },
  {
    _type: 'klaviyoPainPoint',
    title: 'Abandoned Carts',
    description: 'Customers add items but never buy. Your abandoned cart rate is embarrassingly high.',
    icon: '🛒',
    order: 2,
  },
  {
    _type: 'klaviyoPainPoint',
    title: 'No Time',
    description: 'You know email works but you\'re too busy running your business to figure it out.',
    icon: '⏰',
    order: 3,
  },
  {
    _type: 'klaviyoPainPoint',
    title: 'Agency Burn',
    description: 'Agencies charge $5K/month with no guarantees. You\'re paying for "potential" not results.',
    icon: '💸',
    order: 4,
  },
]

const benefits = [
  {
    _type: 'klaviyoBenefit',
    title: 'Full Klaviyo account setup & management',
    description: 'We handle everything from initial setup to ongoing optimization.',
    order: 1,
  },
  {
    _type: 'klaviyoBenefit',
    title: '8+ automated email flows (40+ emails)',
    description: 'Welcome series, abandoned cart, post-purchase, win-back, and more.',
    order: 2,
  },
  {
    _type: 'klaviyoBenefit',
    title: '2-4 campaigns per week',
    description: 'Regular campaigns to keep your audience engaged and buying.',
    order: 3,
  },
  {
    _type: 'klaviyoBenefit',
    title: 'Pop-up design & optimization',
    description: 'Convert more visitors into subscribers with high-converting pop-ups.',
    order: 4,
  },
  {
    _type: 'klaviyoBenefit',
    title: 'A/B testing & optimization',
    description: 'Continuous testing to improve open rates, click rates, and revenue.',
    order: 5,
  },
  {
    _type: 'klaviyoBenefit',
    title: 'Weekly performance reports',
    description: 'Transparent reporting so you always know how your emails are performing.',
    order: 6,
  },
]

async function seed() {
  console.log('🚀 Seeding Klaviyo Landing Page content...\n')

  try {
    // Create or update the main page document
    console.log('📄 Creating Klaviyo Landing Page...')
    await client.createOrReplace(klaviyoPageData)
    console.log('✅ Klaviyo Landing Page created\n')

    // Create FAQ items
    console.log('❓ Creating FAQ items...')
    for (const faq of faqItems) {
      const doc = {
        ...faq,
        _id: `klaviyoFaq-${faq.order}`,
      }
      await client.createOrReplace(doc)
      console.log(`  ✅ FAQ: ${faq.question.substring(0, 40)}...`)
    }
    console.log('')

    // Create Pain Points
    console.log('😰 Creating Pain Points...')
    for (const pain of painPoints) {
      const doc = {
        ...pain,
        _id: `klaviyoPainPoint-${pain.order}`,
      }
      await client.createOrReplace(doc)
      console.log(`  ✅ Pain Point: ${pain.title}`)
    }
    console.log('')

    // Create Benefits
    console.log('🎁 Creating Benefits...')
    for (const benefit of benefits) {
      const doc = {
        ...benefit,
        _id: `klaviyoBenefit-${benefit.order}`,
      }
      await client.createOrReplace(doc)
      console.log(`  ✅ Benefit: ${benefit.title.substring(0, 40)}...`)
    }
    console.log('')

    console.log('🎉 Seeding complete!')
    console.log('\nYou can now manage all Klaviyo content from Sanity Studio.')
    console.log('Visit /studio to edit the content.')

  } catch (error) {
    console.error('❌ Error seeding content:', error)
    process.exit(1)
  }
}

seed()
