/**
 * Sanity Content Seed Script
 *
 * This script populates Sanity with all the initial content for SiteGuard99
 * Run with: npx tsx scripts/seed-sanity.ts
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper to create or update a document
async function createOrUpdate(doc: Record<string, unknown>) {
  const { _id, _type, ...rest } = doc
  try {
    await client.createOrReplace({
      _id: _id as string,
      _type: _type as string,
      ...rest,
    })
    console.log(`✅ Created/Updated: ${_type} - ${_id}`)
  } catch (error) {
    console.error(`❌ Error creating ${_type}:`, error)
  }
}

// ============================================
// SINGLETON DOCUMENTS
// ============================================

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'SiteGuard99',
  contactEmail: 'hello@siteguard99.co',
  loginUrl: 'https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ',
  stripePaymentUrl: 'https://buy.stripe.com/9B68wP42335o38v2v57bW09',
  calendarBookingUrl: 'https://calendly.com/siteguard99/15min', // UPDATE THIS
  socialLinks: {
    twitter: 'https://x.com/SiteGuard99',
  },
  seo: {
    title: 'SiteGuard99 - Design Subscriptions for Everyone',
    description: 'Pause or cancel anytime. Get unlimited design requests for a fixed monthly fee.',
  },
}

const heroSection = {
  _id: 'heroSection',
  _type: 'heroSection',
  headlinePart1: 'Design subscriptions for',
  headlineItalic: 'everyone',
  subtitle: 'Pause or cancel anytime.',
  memberCardBadge: 'Start today',
  memberCardTitle1: 'Join',
  memberCardTitle2: 'SiteGuard99',
  memberCardSubtitle: 'One subscription to rule them all.',
  bookCallTitle: 'Book a 15-min intro call',
  bookCallSubtitle: 'Schedule now',
}

const howItWorksSection = {
  _id: 'howItWorksSection',
  _type: 'howItWorksSection',
  titlePart1: 'The way design',
  titleItalic: "should've",
  titlePart2: 'been done in the first place',
  cards: [
    {
      title: 'Subscribe',
      description: 'Subscribe to a plan & request as many designs as you\'d like.',
    },
    {
      title: 'Request',
      description: 'Request whatever you\'d like, from mobile apps to logos.',
    },
    {
      title: 'Receive',
      description: 'Receive your design within two business days on average.',
    },
  ],
  servicePills: [
    'Mobile apps', 'Presentations', 'Logos', 'Social Media', 'Email',
    'Webflow', 'Print design', 'Packaging', 'Ad creative', 'Landing pages',
    'Branding', 'Display ads', 'User interface',
  ],
}

const aboutSection = {
  _id: 'aboutSection',
  _type: 'aboutSection',
  storyText: 'First launched in 2017, SiteGuard99 revolutionized the design industry with its subscription-based model. To this day, SiteGuard99 is run entirely by Brett. SiteGuard99 doesn\'t hire extra designers or outsource work—instead, it focuses on delivering top-notch quality to a limited roster of clients at a time.',
  founderName: 'Brett',
  founderLink: 'https://x.com/BrettFromDJ',
  yearFounded: '2017',
}

const benefitsSection = {
  _id: 'benefitsSection',
  _type: 'benefitsSection',
  eyebrow: 'Membership benefits',
  titlePart1: 'It\'s',
  titleItalic: '"you\'ll never go back"',
  titlePart2: 'better',
  subtitle: 'SiteGuard99 replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won\'t want to go anywhere else.',
}

const pricingSection = {
  _id: 'pricingSection',
  _type: 'pricingSection',
  eyebrow: 'PRICING',
  title: 'One subscription,',
  titleItalic: 'endless possibilities',
  planName: 'Monthly Club',
  planBadge: 'PAUSE OR CANCEL ANYTIME',
  price: '$5,995',
  pricePeriod: '/month',
  features: [
    'One request at a time',
    'Avg. 48 hour delivery',
    'Unlimited brands',
    'Webflow development',
    'Unlimited stock photos',
    'Up to 2 users',
    'Pause or cancel anytime',
  ],
  ctaText: 'Join today',
  pauseTitle: 'Pause anytime',
  pauseDescription: 'Temporarily pause your subscription anytime, no sweat.',
  trialTitle: 'Try it for a week',
  trialDescription: 'Not loving it after a week? Get 75% back, no questions asked.',
}

const faqSection = {
  _id: 'faqSection',
  _type: 'faqSection',
  titleItalic: 'Frequently',
  titleRegular: 'asked questions',
  bookCallTitle: 'Book a 15-min intro call',
  emailPrompt: 'Prefer to email?',
}

const footerSection = {
  _id: 'footerSection',
  _type: 'footerSection',
  ctaTitle: 'See if SiteGuard99 is the right fit for you',
  ctaTitleItalic: '(it totally is)',
  ctaSubtitle: 'Schedule a quick, 15 minute guided tour through SiteGuard99.',
  headquarters: 'Headquartered in Phoenix, Arizona',
  noticeText: 'SiteGuard99 is experiencing a high volume of bookings, so slots are limited. For faster service, email hello@siteguard99.co for a same-day response.',
  termsUrl: 'https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc',
  privacyUrl: 'https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02',
}

const recentWorkSection = {
  _id: 'recentWorkSection',
  _type: 'recentWorkSection',
  title: 'Recent work',
  subtitle: 'We\'re talking "Product of the Year" good.',
  ctaText: 'See recent work',
  ctaUrl: 'https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects?page-id=0%3A1&type=design&node-id=906-2343&viewport=450%2C721%2C0.13&t=ZYPXbxSFD1m31WCi-1&scaling=min-zoom&mode=design',
  servicesTitle: 'Apps, websites, logos & more',
  servicesSubtitle: 'All the things you need under one roof.',
}

// ============================================
// DOCUMENT COLLECTIONS
// ============================================

// Benefits (6 cards)
const benefits = [
  {
    _id: 'benefit-1',
    _type: 'benefit',
    title: 'Design board',
    description: 'Easily manage your design queue with a Trello board.',
    colorScheme: 'purple',
    order: 1,
  },
  {
    _id: 'benefit-2',
    _type: 'benefit',
    title: 'Fixed monthly rate',
    description: 'No surprises here! Pay the same fixed price each month.',
    colorScheme: 'orange',
    order: 2,
  },
  {
    _id: 'benefit-3',
    _type: 'benefit',
    title: 'Fast delivery',
    description: 'Get your design one at a time in just a couple days on average.',
    colorScheme: 'blue',
    order: 3,
  },
  {
    _id: 'benefit-4',
    _type: 'benefit',
    title: 'Top-notch quality',
    description: 'Senior-level design quality at your fingertips, whenever you need it.',
    colorScheme: 'yellow',
    order: 4,
  },
  {
    _id: 'benefit-5',
    _type: 'benefit',
    title: 'Flexible and scalable',
    description: 'Scale up or down as needed, and pause or cancel at anytime.',
    colorScheme: 'green',
    order: 5,
  },
  {
    _id: 'benefit-6',
    _type: 'benefit',
    title: 'Unique and all yours',
    description: 'Every design is made especially for you and is 100% yours.',
    colorScheme: 'pink',
    order: 6,
  },
]

// FAQ Items (14 items)
const faqItems = [
  {
    _id: 'faq-1',
    _type: 'faqItem',
    question: 'How fast will I receive my designs?',
    answer: 'On average, most requests are completed in just two days or less. However, more complex requests can take longer.',
    order: 1,
  },
  {
    _id: 'faq-2',
    _type: 'faqItem',
    question: 'How does onboarding work?',
    answer: 'Subscribe to a plan and we\'ll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you\'re ready to rock. Further instructions on how to use the Trello board to request designs can be found on the board itself.',
    order: 2,
  },
  {
    _id: 'faq-3',
    _type: 'faqItem',
    question: 'Who are the designers?',
    answer: 'SiteGuard99 is a one-man agency, ran by Brett, the founder. SiteGuard99 does not employ other designers, or outsource work to any other entity. You\'ll work directly with me through the entirety of your experience.',
    order: 3,
  },
  {
    _id: 'faq-4',
    _type: 'faqItem',
    question: 'Is there a limit to how many requests I can make?',
    answer: 'Once subscribed, you\'re able to add as many design requests to your queue as you\'d like, and they will be delivered one by one.',
    order: 4,
  },
  {
    _id: 'faq-5',
    _type: 'faqItem',
    question: 'How does the pause feature work?',
    answer: 'We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That\'s where pausing your subscription comes in handy. Billing cycles are based on 31 day period. Let\'s say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you\'ll have 10 days of service remaining to be used anytime in the future.',
    order: 5,
  },
  {
    _id: 'faq-6',
    _type: 'faqItem',
    question: 'How do you handle larger requests?',
    answer: 'Larger requests are broken down on SiteGuard99\'s end. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done.',
    order: 6,
  },
  {
    _id: 'faq-7',
    _type: 'faqItem',
    question: 'What programs do you design in?',
    answer: 'Most requests are designed using Figma.',
    order: 7,
  },
  {
    _id: 'faq-8',
    _type: 'faqItem',
    question: 'How does Webflow development work?',
    answer: 'Webflow development is included with all subscriptions and is simply treated as a design request. As long as your website can be supported by the Webflow platform, SiteGuard99 will take care of the development to ensure maximum fidelity when it comes to the final product. Once the website is fully developed, the site will be transferred to your account, where you will own it from that point forward. Therefore, a SiteGuard99 subscription is not necessary to maintain your website.',
    order: 8,
  },
  {
    _id: 'faq-9',
    _type: 'faqItem',
    question: 'How will I request designs?',
    answer: 'SiteGuard99 offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it\'s fair game.',
    order: 9,
  },
  {
    _id: 'faq-10',
    _type: 'faqItem',
    question: 'What if I don\'t like the design?',
    answer: 'No worries! We\'ll continue to revise the design until you\'re 100% satisfied.',
    order: 10,
  },
  {
    _id: 'faq-11',
    _type: 'faqItem',
    question: 'Are there any requests you don\'t support?',
    answer: 'Absolutely. SiteGuard99 does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, extensive print design (magazines, books, etc.), and Adobe InDesign documents.',
    order: 11,
  },
  {
    _id: 'faq-12',
    _type: 'faqItem',
    question: 'What if I only have a single request?',
    answer: 'That\'s fine. You can pause your subscription when finished and return when you have additional design needs. There\'s no need to let the remainder of your subscription go to waste.',
    order: 12,
  },
  {
    _id: 'faq-13',
    _type: 'faqItem',
    question: 'Are there any refunds?',
    answer: 'Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work.',
    order: 13,
  },
  {
    _id: 'faq-14',
    _type: 'faqItem',
    question: 'Can I use SiteGuard99 for just a month?',
    answer: 'For sure. Whether you need SiteGuard99 for a month or a year, the choice is yours. Just feel free to come back when you have additional design needs.',
    order: 14,
  },
]

// Testimonials
const testimonials = [
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    quote: 'SiteGuard99 shows that they know the art of subtlety.',
    authorName: 'Webflow',
    authorTitle: '',
    order: 1,
  },
  {
    _id: 'testimonial-2',
    _type: 'testimonial',
    quote: 'Design is everything, and these guys have nailed it.',
    authorName: 'Kevin O\'Leary',
    authorTitle: 'Shark Tank',
    order: 2,
  },
]

// Service Categories (for marquee/pills)
const serviceCategories = [
  { _id: 'service-1', _type: 'serviceCategory', name: 'Mobile apps', order: 1 },
  { _id: 'service-2', _type: 'serviceCategory', name: 'Presentations', order: 2 },
  { _id: 'service-3', _type: 'serviceCategory', name: 'Logos', order: 3 },
  { _id: 'service-4', _type: 'serviceCategory', name: 'Social Media', order: 4 },
  { _id: 'service-5', _type: 'serviceCategory', name: 'Email', order: 5 },
  { _id: 'service-6', _type: 'serviceCategory', name: 'Webflow', order: 6 },
  { _id: 'service-7', _type: 'serviceCategory', name: 'Print design', order: 7 },
  { _id: 'service-8', _type: 'serviceCategory', name: 'Packaging', order: 8 },
  { _id: 'service-9', _type: 'serviceCategory', name: 'Ad creative', order: 9 },
  { _id: 'service-10', _type: 'serviceCategory', name: 'Landing pages', order: 10 },
  { _id: 'service-11', _type: 'serviceCategory', name: 'Branding', order: 11 },
  { _id: 'service-12', _type: 'serviceCategory', name: 'Display ads', order: 12 },
  { _id: 'service-13', _type: 'serviceCategory', name: 'User interface', order: 13 },
  { _id: 'service-14', _type: 'serviceCategory', name: 'Web design', order: 14 },
  { _id: 'service-15', _type: 'serviceCategory', name: 'Slide decks', order: 15 },
  { _id: 'service-16', _type: 'serviceCategory', name: 'UI/UX design', order: 16 },
  { _id: 'service-17', _type: 'serviceCategory', name: 'Webflow development', order: 17 },
  { _id: 'service-18', _type: 'serviceCategory', name: 'Icons', order: 18 },
  { _id: 'service-19', _type: 'serviceCategory', name: 'Brand guides', order: 19 },
]

// Client Logos (images to be uploaded manually in Studio)
const clientLogos = [
  { _id: 'client-1', _type: 'clientLogo', name: 'Nectar', order: 1 },
  { _id: 'client-2', _type: 'clientLogo', name: 'Buy Me A Coffee', order: 2 },
  { _id: 'client-3', _type: 'clientLogo', name: 'Client 3', order: 3 },
  { _id: 'client-4', _type: 'clientLogo', name: 'Client 4', order: 4 },
  { _id: 'client-5', _type: 'clientLogo', name: 'Client 5', order: 5 },
]

// Recent Work Items (images to be uploaded manually in Studio)
const recentWorkItems = [
  { _id: 'work-1', _type: 'recentWorkItem', projectName: 'Buy Me A Coffee', award: 'Fintech Product of the Year', awardSource: 'Product Hunt', order: 1 },
  { _id: 'work-2', _type: 'recentWorkItem', projectName: 'Switchboard', award: 'Remote Work Product of the Year', awardSource: 'Product Hunt', order: 2 },
  { _id: 'work-3', _type: 'recentWorkItem', projectName: 'Project 3', order: 3 },
  { _id: 'work-4', _type: 'recentWorkItem', projectName: 'Project 4', order: 4 },
  { _id: 'work-5', _type: 'recentWorkItem', projectName: 'Project 5', order: 5 },
  { _id: 'work-6', _type: 'recentWorkItem', projectName: 'Project 6', order: 6 },
]

// ============================================
// MAIN SEED FUNCTION
// ============================================

async function seed() {
  console.log('🌱 Starting Sanity content seeding...\n')

  // Seed singletons
  console.log('📄 Seeding singleton documents...')
  await createOrUpdate(siteSettings)
  await createOrUpdate(heroSection)
  await createOrUpdate(howItWorksSection)
  await createOrUpdate(aboutSection)
  await createOrUpdate(benefitsSection)
  await createOrUpdate(pricingSection)
  await createOrUpdate(faqSection)
  await createOrUpdate(footerSection)
  await createOrUpdate(recentWorkSection)

  // Seed document collections
  console.log('\n📚 Seeding benefits...')
  for (const benefit of benefits) {
    await createOrUpdate(benefit)
  }

  console.log('\n❓ Seeding FAQ items...')
  for (const faq of faqItems) {
    await createOrUpdate(faq)
  }

  console.log('\n💬 Seeding testimonials...')
  for (const testimonial of testimonials) {
    await createOrUpdate(testimonial)
  }

  console.log('\n🏷️ Seeding service categories...')
  for (const service of serviceCategories) {
    await createOrUpdate(service)
  }

  console.log('\n🏢 Seeding client logos...')
  for (const logo of clientLogos) {
    await createOrUpdate(logo)
  }

  console.log('\n🎨 Seeding recent work items...')
  for (const work of recentWorkItems) {
    await createOrUpdate(work)
  }

  console.log('\n✨ Seeding complete!')
  console.log('\n📊 Summary:')
  console.log(`   - 9 singleton documents`)
  console.log(`   - ${benefits.length} benefits`)
  console.log(`   - ${faqItems.length} FAQ items`)
  console.log(`   - ${testimonials.length} testimonials`)
  console.log(`   - ${serviceCategories.length} service categories`)
  console.log(`   - ${clientLogos.length} client logos`)
  console.log(`   - ${recentWorkItems.length} recent work items`)
  console.log('\n🔗 Access your Sanity Studio at: http://localhost:3000/studio')
}

seed().catch(console.error)
