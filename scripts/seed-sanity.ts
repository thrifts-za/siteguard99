/**
 * Sanity Content Seed Script
 *
 * This script populates Sanity with all the initial content for The WordPress Team
 * WordPress Maintenance Service
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
  siteName: 'The WordPress Team',
  contactEmail: 'emmanuel@thewordpressteam.co.za',
  loginUrl: 'https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ',
  stripePaymentUrl: 'https://buy.stripe.com/9B68wP42335o38v2v57bW09',
  calendarBookingUrl: 'https://calendly.com/thewordpressteam/15min',
  socialLinks: {
    twitter: '',
  },
  seo: {
    title: 'The WordPress Team - WordPress Maintenance for Everyone',
    description: 'Pause or cancel anytime. Get unlimited WordPress maintenance for a fixed monthly fee.',
  },
}

const heroSection = {
  _id: 'heroSection',
  _type: 'heroSection',
  headlinePart1: 'WordPress maintenance for',
  headlineItalic: 'everyone',
  subtitle: 'Pause or cancel anytime.',
  memberCardBadge: 'Start today',
  memberCardTitle1: 'Join',
  memberCardTitle2: 'The WordPress Team',
  memberCardSubtitle: 'One subscription to secure them all.',
  bookCallTitle: 'Book a 15-min intro call',
  bookCallSubtitle: 'Schedule now',
}

const howItWorksSection = {
  _id: 'howItWorksSection',
  _type: 'howItWorksSection',
  titlePart1: 'The way WordPress maintenance',
  titleItalic: "should've",
  titlePart2: 'been done in the first place',
  cards: [
    {
      title: 'Subscribe',
      description: "Subscribe to a plan & request as many fixes as you'd like.",
    },
    {
      title: 'Request',
      description: 'Request whatever you need, from security fixes to speed optimization.',
    },
    {
      title: 'Receive',
      description: 'Receive your fix within two business days on average, weekends included.',
    },
  ],
  servicePills: [
    'Security fixes', 'Malware removal', 'Speed optimization', 'Plugin updates', 'Backup restoration',
    'Performance tuning', 'Site migrations', 'SEO fixes', 'Database cleanup', 'Uptime monitoring',
    'Emergency support', 'Content updates', 'SSL certificates', 'Broken link fixes', 'Mobile optimization',
  ],
}

const aboutSection = {
  _id: 'aboutSection',
  _type: 'aboutSection',
  storyText: "First launched in 2024, The WordPress Team revolutionized WordPress maintenance with its subscription-based model. Run by WordPress experts who focus on delivering top-notch security and performance to a limited roster of clients at a time. No outsourcing, no offshore teams—just dedicated expert care.",
  founderName: '',
  founderLink: '',
  yearFounded: '2024',
}

const benefitsSection = {
  _id: 'benefitsSection',
  _type: 'benefitsSection',
  eyebrow: 'Membership benefits',
  titlePart1: "It's",
  titleItalic: '"you\'ll never go back"',
  titlePart2: 'better',
  subtitle: "The WordPress Team replaces unreliable freelancers and expensive agencies for one flat monthly fee, with fixes delivered so fast that your WordPress site just works—without you thinking about it.",
}

const pricingSection = {
  _id: 'pricingSection',
  _type: 'pricingSection',
  eyebrow: 'PRICING',
  title: 'One subscription,',
  titleItalic: 'endless peace of mind',
  planName: 'The WordPress Team',
  planBadge: 'PAUSE OR CANCEL ANYTIME',
  price: '$149',
  pricePeriod: '/month',
  features: [
    'Avg. 48 hour delivery',
    'Unlimited maintenance requests',
    'Daily backups & security scans',
    'Performance optimization',
    '24/7 uptime monitoring',
    'SEO health protection',
    'Email support (48hr response)',
    'Monthly reports',
    'Pause or cancel anytime',
  ],
  ctaText: 'Get started',
  pauseTitle: 'Pause anytime',
  pauseDescription: 'Temporarily pause your subscription anytime, no sweat. Billing pauses too.',
  trialTitle: 'Try it for a week',
  trialDescription: "Not loving it after a week? Get 75% back ($111.75), no questions asked.",
  // Value Breakdown Section
  valueBreakdownTitle: "What you're getting for $149/month:",
  valueItems: [
    { name: 'Enterprise Security Protection', monthlyValue: '$99/month value' },
    { name: 'Performance Optimization Suite', monthlyValue: '$79/month value' },
    { name: 'Bulletproof Backups & Recovery', monthlyValue: '$49/month value' },
    { name: '24/7 Uptime Monitoring', monthlyValue: '$39/month value' },
    { name: 'SEO Health Protection', monthlyValue: '$59/month value' },
    { name: 'Technical Site Management', monthlyValue: '$69/month value' },
    { name: 'Expert WordPress Support', monthlyValue: '$150/month value' },
    { name: 'Unlimited Maintenance Requests', monthlyValue: 'Priceless' },
    { name: 'Private Task Board & Collaboration', monthlyValue: '$50/month value' },
  ],
  totalValue: 'Total value if purchased separately: $594+/month',
  yourPrice: 'Your price: $149/month',
  savings: 'You save: $445/month ($5,340/year)',
  // Multi-Site Pricing Section
  multiSiteTitle: 'Need multiple sites maintained?',
  multiSiteSubtitle: 'Contact us for volume pricing:',
  multiSiteTiers: [
    { siteRange: '2-3 sites', price: '$269/month', savings: 'save $29/month' },
    { siteRange: '4-5 sites', price: '$499/month', savings: 'save $246/month' },
    { siteRange: '6+ sites', price: 'Custom agency pricing', savings: '' },
  ],
  multiSiteCtaText: 'Contact us for multi-site quote',
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
  ctaTitle: 'See if The WordPress Team is the right fit for you',
  ctaTitleItalic: '(it totally is)',
  ctaSubtitle: "Schedule a quick, 15-minute guided tour through The WordPress Team. We'll show you how it works, answer your questions, and see if we're a good match for your WordPress maintenance needs.",
  headquarters: 'Based in South Africa',
  noticeText: 'The WordPress Team is experiencing high demand, so slots are limited. For faster service, email emmanuel@thewordpressteam.co.za for a same-day response.',
  termsUrl: '',
  privacyUrl: '',
}

const recentWorkSection = {
  _id: 'recentWorkSection',
  _type: 'recentWorkSection',
  title: 'Recent work',
  subtitle: 'We\'re talking "zero downtime in 8 months" good.',
  ctaText: 'See recent success stories',
  ctaUrl: '',
  servicesTitle: 'Security, speed, backups & more',
  servicesSubtitle: 'All the WordPress maintenance you need under one roof.',
}

// ============================================
// DOCUMENT COLLECTIONS
// ============================================

// Benefits (12 cards)
const benefits = [
  {
    _id: 'benefit-1',
    _type: 'benefit',
    title: 'Private task board',
    description: 'Easily manage your maintenance queue with a private Trello board. Submit unlimited requests—we handle them one at a time.',
    colorScheme: 'purple',
    order: 1,
  },
  {
    _id: 'benefit-2',
    _type: 'benefit',
    title: 'Fixed monthly rate',
    description: 'No surprises here! Pay $149/month and request unlimited fixes. No hourly rates, no unexpected invoices, no budget anxiety.',
    colorScheme: 'orange',
    order: 2,
  },
  {
    _id: 'benefit-3',
    _type: 'benefit',
    title: 'Fast delivery',
    description: 'Get your fixes one at a time in just two business days on average. Urgent requests prioritized.',
    colorScheme: 'blue',
    order: 3,
  },
  {
    _id: 'benefit-4',
    _type: 'benefit',
    title: 'Enterprise-grade security',
    description: "Daily malware scans, firewall protection, and automatic threat removal. Sleep easy knowing you're protected 24/7.",
    colorScheme: 'yellow',
    order: 4,
  },
  {
    _id: 'benefit-5',
    _type: 'benefit',
    title: 'Flexible and scalable',
    description: 'Scale up or down as needed, and pause or cancel at anytime. No contracts, no penalties, no hassle.',
    colorScheme: 'green',
    order: 5,
  },
  {
    _id: 'benefit-6',
    _type: 'benefit',
    title: 'Proactive protection',
    description: "We don't just fix problems—we prevent them. Every fix is made especially for your site and stops future issues.",
    colorScheme: 'pink',
    order: 6,
  },
  {
    _id: 'benefit-7',
    _type: 'benefit',
    title: 'Bulletproof backups',
    description: 'Daily automated backups stored safely offsite. One-click restoration if disaster strikes. 30-day backup history.',
    colorScheme: 'purple',
    order: 7,
  },
  {
    _id: 'benefit-8',
    _type: 'benefit',
    title: 'Lightning-fast performance',
    description: 'Image compression, advanced caching, CDN delivery, and database optimization. Average load time: under 2 seconds.',
    colorScheme: 'orange',
    order: 8,
  },
  {
    _id: 'benefit-9',
    _type: 'benefit',
    title: '24/7 uptime monitoring',
    description: "Your site checked every 60 seconds. Instant alerts if it goes down. We're already investigating before you even notice.",
    colorScheme: 'blue',
    order: 9,
  },
  {
    _id: 'benefit-10',
    _type: 'benefit',
    title: 'SEO protection',
    description: 'Broken links fixed automatically. Sitemaps stay updated. Your Google rankings stay protected from technical issues.',
    colorScheme: 'yellow',
    order: 10,
  },
  {
    _id: 'benefit-11',
    _type: 'benefit',
    title: 'Team collaboration',
    description: 'Add team members, clients, or stakeholders with custom permissions. Everyone stays in the loop securely.',
    colorScheme: 'green',
    order: 11,
  },
  {
    _id: 'benefit-12',
    _type: 'benefit',
    title: 'Professional reports',
    description: 'Monthly reports show exactly what we did, how your site performed, and what threats we blocked. Optional white labeling for agencies.',
    colorScheme: 'pink',
    order: 12,
  },
]

// FAQ Items (17 items)
const faqItems = [
  {
    _id: 'faq-1',
    _type: 'faqItem',
    question: 'How fast will I receive my fixes?',
    answer: 'On average, most maintenance requests are completed within two business days (48 hours). However, more complex requests like site migrations or major security overhauls can take longer. Urgent issues (site down, security breach) are prioritized and typically resolved within 2-4 hours during business hours. Weekend emergency support is available.',
    order: 1,
  },
  {
    _id: 'faq-2',
    _type: 'faqItem',
    question: 'How does onboarding work?',
    answer: "Once you subscribe, you'll receive an invitation to your private Trello board where you can submit unlimited requests. We'll also email you a secure form to provide your site access credentials. Within 24 hours, we'll run initial security scans, set up backups, configure monitoring, and send you your first status report. No complicated onboarding calls required (unless you want one).",
    order: 2,
  },
  {
    _id: 'faq-3',
    _type: 'faqItem',
    question: 'Who maintains my site?',
    answer: 'Your site is maintained by WordPress experts with 10+ years of experience. No offshore teams, no outsourcing, no junior developers learning on your site—just dedicated, expert care from people who live and breathe WordPress.',
    order: 3,
  },
  {
    _id: 'faq-4',
    _type: 'faqItem',
    question: 'Is there a limit to how many requests I can make?',
    answer: "Nope! Once subscribed, you can add as many maintenance requests to your queue as you'd like. They'll be delivered one at a time with an average 48-hour turnaround. Most clients submit 3-8 requests per month, but you're free to submit more.",
    order: 4,
  },
  {
    _id: 'faq-5',
    _type: 'faqItem',
    question: 'How does the pause feature work?',
    answer: "We get it—sometimes you don't need ongoing maintenance. Maybe you're redesigning, taking a break, or just in a quiet period. You can pause your subscription from your dashboard. Your billing cycle pauses too, so you only pay for active months. Resume anytime—your site configuration and history stay intact.",
    order: 5,
  },
  {
    _id: 'faq-6',
    _type: 'faqItem',
    question: 'How do you handle larger requests like site migrations?',
    answer: "Larger requests are broken into milestones with clear communication at each step. We'll provide a timeline upfront so you know what to expect. For site migrations specifically, we use professional migration tools, test everything in staging, and schedule the final cutover during low-traffic hours. Average migration time: 4-8 hours depending on site size.",
    order: 6,
  },
  {
    _id: 'faq-7',
    _type: 'faqItem',
    question: 'What tools do you use to maintain my site?',
    answer: "We use industry-leading enterprise-grade tools for security, performance, backups, and monitoring. You don't need to worry about the technical details—we handle all the tools, licensing, and configuration. Everything runs behind the scenes so you just see the results.",
    order: 7,
  },
  {
    _id: 'faq-8',
    _type: 'faqItem',
    question: 'How will I request maintenance?',
    answer: "Through your private Trello board. Simply add a card describing what you need, attach screenshots if helpful, and we'll take care of the rest. You'll see when we start working on it, progress updates, and notification when it's complete. You can also email us for urgent requests.",
    order: 8,
  },
  {
    _id: 'faq-9',
    _type: 'faqItem',
    question: "What if I don't like the fix?",
    answer: "No worries! We'll revise it until you're 100% satisfied. Unlimited revisions are included in your subscription. Communication is key—just let us know what's not right and we'll make it right.",
    order: 9,
  },
  {
    _id: 'faq-10',
    _type: 'faqItem',
    question: "Are there any requests you don't support?",
    answer: "We focus on maintenance, security, performance, and keeping your existing site running smoothly. We don't handle major redesigns, custom plugin development from scratch, content writing, graphic design (logos/banners), or SEO content strategy. For these specialized services, we can refer you to trusted partners.",
    order: 10,
  },
  {
    _id: 'faq-11',
    _type: 'faqItem',
    question: 'What if I only have a single request?',
    answer: "That's fine! You can subscribe for a month, get your fix, then pause or cancel. No long-term commitment required. Many clients start this way and end up staying because proactive maintenance beats reactive firefighting.",
    order: 11,
  },
  {
    _id: 'faq-12',
    _type: 'faqItem',
    question: 'Are there any refunds?',
    answer: "Yes! If you're not satisfied within the first week, we'll refund 75% of your first month ($111.75), no questions asked. After that, you can cancel anytime and your subscription ends at the end of your billing period. No partial refunds after the first week, but you can pause or cancel anytime.",
    order: 12,
  },
  {
    _id: 'faq-13',
    _type: 'faqItem',
    question: 'Can I use The WordPress Team for just a month?',
    answer: 'Absolutely! You can subscribe for a single month to handle immediate needs, then pause or cancel. No contracts, no commitments. However, most clients find that staying subscribed prevents problems from happening in the first place—which is cheaper than emergency fixes.',
    order: 13,
  },
  {
    _id: 'faq-14',
    _type: 'faqItem',
    question: 'What happens if my site gets hacked?',
    answer: "We scan for malware daily. If a threat is detected, we attempt automatic removal immediately. For complex attacks, we manually clean and secure your site at no extra charge. Using your backed-up data, we'll restore your site and implement additional security measures to prevent reinfection. Average recovery time: 2-8 hours depending on severity.",
    order: 14,
  },
  {
    _id: 'faq-15',
    _type: 'faqItem',
    question: 'Do you handle hosting or just maintenance?',
    answer: "Just maintenance. You keep your current hosting provider (SiteGround, WP Engine, Bluehost, Kinsta, etc.)—we connect to your site remotely and handle everything else. We work with all major hosting companies. If you're unhappy with your hosting, we can recommend better options and help you migrate.",
    order: 15,
  },
  {
    _id: 'faq-16',
    _type: 'faqItem',
    question: 'Can you white label this for my agency clients?',
    answer: "Yes! All reports, dashboards, and communications can be fully white-labeled with your agency branding. Your clients will see your logo, your colors, and your agency name—never The WordPress Team. Perfect for agencies who want to offer maintenance services without building internal capacity.",
    order: 16,
  },
  {
    _id: 'faq-17',
    _type: 'faqItem',
    question: 'What if I need something urgently?',
    answer: 'Mark your request as "Urgent" in Trello and email us at emmanuel@thewordpressteam.co.za. We prioritize security breaches, site-down emergencies, and time-sensitive issues. Average urgent response: under 4 hours during business hours. For critical site-down issues on weekends, we respond within 6-8 hours.',
    order: 17,
  },
]

// Testimonials
const testimonials = [
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    quote: 'The WordPress Team shows that they know the art of proactive maintenance.',
    authorName: '',
    authorTitle: '',
    order: 1,
  },
  {
    _id: 'testimonial-2',
    _type: 'testimonial',
    quote: 'Security is everything, and these guys have nailed it.',
    authorName: 'Sarah Mitchell',
    authorTitle: 'Cape Town Consulting',
    order: 2,
  },
]

// Service Categories (WordPress maintenance services - short & punchy)
const serviceCategories = [
  { _id: 'service-1', _type: 'serviceCategory', name: 'Security scans', order: 1 },
  { _id: 'service-2', _type: 'serviceCategory', name: 'Malware removal', order: 2 },
  { _id: 'service-3', _type: 'serviceCategory', name: 'Daily backups', order: 3 },
  { _id: 'service-4', _type: 'serviceCategory', name: 'Core updates', order: 4 },
  { _id: 'service-5', _type: 'serviceCategory', name: 'Plugin updates', order: 5 },
  { _id: 'service-6', _type: 'serviceCategory', name: 'Speed boosts', order: 6 },
  { _id: 'service-7', _type: 'serviceCategory', name: 'Uptime monitoring', order: 7 },
  { _id: 'service-8', _type: 'serviceCategory', name: 'Database cleanup', order: 8 },
  { _id: 'service-9', _type: 'serviceCategory', name: 'Image optimization', order: 9 },
  { _id: 'service-10', _type: 'serviceCategory', name: 'CDN setup', order: 10 },
  { _id: 'service-11', _type: 'serviceCategory', name: 'SSL certificates', order: 11 },
  { _id: 'service-12', _type: 'serviceCategory', name: 'Broken link fixes', order: 12 },
  { _id: 'service-13', _type: 'serviceCategory', name: 'SEO protection', order: 13 },
  { _id: 'service-14', _type: 'serviceCategory', name: 'Emergency recovery', order: 14 },
  { _id: 'service-15', _type: 'serviceCategory', name: 'Content edits', order: 15 },
  { _id: 'service-16', _type: 'serviceCategory', name: 'Mobile fixes', order: 16 },
  { _id: 'service-17', _type: 'serviceCategory', name: 'Caching', order: 17 },
  { _id: 'service-18', _type: 'serviceCategory', name: 'Firewall setup', order: 18 },
  { _id: 'service-19', _type: 'serviceCategory', name: 'Form fixes', order: 19 },
  { _id: 'service-20', _type: 'serviceCategory', name: 'Analytics', order: 20 },
  { _id: 'service-21', _type: 'serviceCategory', name: 'Redirects', order: 21 },
  { _id: 'service-22', _type: 'serviceCategory', name: 'Bug fixes', order: 22 },
  { _id: 'service-23', _type: 'serviceCategory', name: 'Site migrations', order: 23 },
]

// Tool Logos (WordPress plugins/themes - replacing client logos)
const clientLogos = [
  { _id: 'client-1', _type: 'clientLogo', name: 'WooCommerce', order: 1 },
  { _id: 'client-2', _type: 'clientLogo', name: 'Elementor', order: 2 },
  { _id: 'client-3', _type: 'clientLogo', name: 'Yoast SEO', order: 3 },
  { _id: 'client-4', _type: 'clientLogo', name: 'Gravity Forms', order: 4 },
  { _id: 'client-5', _type: 'clientLogo', name: 'Divi', order: 5 },
  { _id: 'client-6', _type: 'clientLogo', name: 'Astra', order: 6 },
]

// Recent Work Items (keeping structure, will need images uploaded in Studio)
const recentWorkItems = [
  { _id: 'work-1', _type: 'recentWorkItem', projectName: 'Security Dashboard', order: 1 },
  { _id: 'work-2', _type: 'recentWorkItem', projectName: 'Speed Optimization', order: 2 },
  { _id: 'work-3', _type: 'recentWorkItem', projectName: 'Malware Cleanup', order: 3 },
  { _id: 'work-4', _type: 'recentWorkItem', projectName: 'Backup Restoration', order: 4 },
  { _id: 'work-5', _type: 'recentWorkItem', projectName: 'WooCommerce Performance', order: 5 },
  { _id: 'work-6', _type: 'recentWorkItem', projectName: 'SEO Health', order: 6 },
]

// ============================================
// MAIN SEED FUNCTION
// ============================================

async function seed() {
  console.log('🌱 Starting Sanity content seeding for The WordPress Team...\n')

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
  console.log('\n📚 Seeding benefits (12 items)...')
  for (const benefit of benefits) {
    await createOrUpdate(benefit)
  }

  console.log('\n❓ Seeding FAQ items (17 items)...')
  for (const faq of faqItems) {
    await createOrUpdate(faq)
  }

  console.log('\n💬 Seeding testimonials...')
  for (const testimonial of testimonials) {
    await createOrUpdate(testimonial)
  }

  console.log('\n🏷️ Seeding service categories (23 WordPress services)...')
  for (const service of serviceCategories) {
    await createOrUpdate(service)
  }

  console.log('\n🔧 Seeding tool logos (WordPress plugins/themes)...')
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
  console.log(`   - ${clientLogos.length} tool logos`)
  console.log(`   - ${recentWorkItems.length} recent work items`)
  console.log('\n🔗 Access your Sanity Studio at: http://localhost:3000/studio')
}

seed().catch(console.error)
