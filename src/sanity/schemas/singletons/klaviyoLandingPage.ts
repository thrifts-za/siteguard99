import { defineType, defineField } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export default defineType({
  name: 'klaviyoLandingPage',
  title: 'Klaviyo Landing Page',
  type: 'document',
  icon: RocketIcon,
  groups: [
    { name: 'seo', title: 'SEO', default: true },
    { name: 'sections', title: 'Section Visibility' },
    { name: 'hero', title: 'Hero' },
    { name: 'painPoints', title: 'Pain Points' },
    { name: 'solution', title: 'Solution' },
    { name: 'benefits', title: 'Benefits' },
    { name: 'emailExamples', title: 'Email Examples' },
    { name: 'pricing', title: 'Pricing' },
    { name: 'calculator', title: 'Commission Calculator' },
    { name: 'whoFor', title: 'Who This Is For' },
    { name: 'faq', title: 'FAQ' },
    { name: 'cta', title: 'CTA' },
  ],
  fields: [
    // SEO Fields
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoMetadata',
      group: 'seo',
    }),

    // Section Visibility
    defineField({
      name: 'showPricingHook',
      title: 'Show Pricing Hook (after hero)',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showPainPoints',
      title: 'Show Pain Points Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showSolution',
      title: 'Show Solution Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showEmailExamples',
      title: 'Show Email Examples Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showBenefits',
      title: 'Show Benefits Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showTestimonials',
      title: 'Show Testimonials Section',
      type: 'boolean',
      group: 'sections',
      initialValue: false,
    }),
    defineField({
      name: 'showWhoFor',
      title: 'Show Who This Is For Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showCalculator',
      title: 'Show Commission Calculator',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showPricing',
      title: 'Show Pricing Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showGuarantee',
      title: 'Show Guarantee Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),
    defineField({
      name: 'showFaq',
      title: 'Show FAQ Section',
      type: 'boolean',
      group: 'sections',
      initialValue: true,
    }),

    // Hero Section
    defineField({
      name: 'showTopBar',
      title: 'Show Top Bar',
      type: 'boolean',
      group: 'hero',
      initialValue: true,
      description: 'Toggle the top announcement bar on/off',
    }),
    defineField({
      name: 'topBarText',
      title: 'Top Bar Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Simple Pricing • 100% Commission Based • Pay Only for Previous Month\'s Revenue',
      description: 'The tagline shown in the top announcement bar',
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      group: 'hero',
      initialValue: 'KLAVIYO EMAIL MARKETING',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      initialValue: 'Stop Leaving Money on the Table',
    }),
    defineField({
      name: 'heroHeadlineItalic',
      title: 'Hero Headline (Italic Part)',
      type: 'string',
      group: 'hero',
      initialValue: 'with Your Email List',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'We turn your Klaviyo account into a revenue-generating machine with proven email flows and campaigns that convert.',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Book Your Strategy Call',
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),
    defineField({
      name: 'heroCyclingWords',
      title: 'Hero Cycling Words (Typewriter)',
      description: 'Words that cycle with typewriter effect in the hero headline',
      type: 'array',
      group: 'hero',
      of: [{ type: 'string' }],
      initialValue: ['Revenue Machine', 'Cash Generator', 'Profit Engine', 'Money Printer'],
    }),

    // Pain Points Section
    defineField({
      name: 'painSectionTitle',
      title: 'Pain Points Section Title',
      type: 'string',
      group: 'painPoints',
      initialValue: 'Sound Familiar?',
    }),
    defineField({
      name: 'painSectionSubtitle',
      title: 'Pain Points Section Subtitle',
      type: 'text',
      rows: 2,
      group: 'painPoints',
      initialValue: "If you're nodding along to any of these, you're not alone...",
    }),

    // Solution Section
    defineField({
      name: 'solutionEyebrow',
      title: 'Solution Eyebrow',
      type: 'string',
      group: 'solution',
      initialValue: 'THE SOLUTION',
    }),
    defineField({
      name: 'solutionTitle',
      title: 'Solution Title',
      type: 'string',
      group: 'solution',
      initialValue: 'Done-For-You Klaviyo Email Marketing',
    }),
    defineField({
      name: 'solutionTitleItalic',
      title: 'Solution Title (Italic Part)',
      type: 'string',
      group: 'solution',
      initialValue: 'That Actually Works',
    }),
    defineField({
      name: 'solutionDescription',
      title: 'Solution Description',
      type: 'text',
      rows: 4,
      group: 'solution',
      initialValue: 'We handle everything from strategy to execution. No more guesswork, no more wasted time. Just results.',
    }),
    defineField({
      name: 'solutionImage',
      title: 'Solution Image',
      type: 'image',
      group: 'solution',
      options: { hotspot: true },
    }),

    // Benefits Section
    defineField({
      name: 'benefitsSectionEyebrow',
      title: 'Benefits Section Eyebrow',
      type: 'string',
      group: 'benefits',
      initialValue: 'WHY WORK WITH US',
    }),
    defineField({
      name: 'benefitsSectionTitle',
      title: 'Benefits Section Title',
      type: 'string',
      group: 'benefits',
      initialValue: 'What You Get',
    }),

    // Features Section
    defineField({
      name: 'featuresSectionEyebrow',
      title: 'Features Section Eyebrow',
      type: 'string',
      group: 'features',
      initialValue: 'OUR SERVICES',
    }),
    defineField({
      name: 'featuresSectionTitle',
      title: 'Features Section Title',
      type: 'string',
      group: 'features',
      initialValue: 'Everything You Need to',
    }),
    defineField({
      name: 'featuresSectionTitleItalic',
      title: 'Features Section Title (Italic)',
      type: 'string',
      group: 'features',
      initialValue: 'Dominate Email',
    }),

    // Email Examples Section
    defineField({
      name: 'emailExamplesEyebrow',
      title: 'Email Examples Eyebrow',
      type: 'string',
      group: 'emailExamples',
      initialValue: 'OUR WORK',
    }),
    defineField({
      name: 'emailExamplesTitle',
      title: 'Email Examples Title',
      type: 'string',
      group: 'emailExamples',
      initialValue: 'Emails That',
    }),
    defineField({
      name: 'emailExamplesTitleItalic',
      title: 'Email Examples Title (Italic)',
      type: 'string',
      group: 'emailExamples',
      initialValue: 'Convert',
    }),

    // Pricing Section
    defineField({
      name: 'pricingEyebrow',
      title: 'Pricing Eyebrow',
      type: 'string',
      group: 'pricing',
      initialValue: 'SIMPLE PRICING',
    }),
    defineField({
      name: 'pricingTitle',
      title: 'Pricing Title',
      type: 'string',
      group: 'pricing',
      initialValue: 'One Investment,',
    }),
    defineField({
      name: 'pricingTitleItalic',
      title: 'Pricing Title (Italic)',
      type: 'string',
      group: 'pricing',
      initialValue: 'Unlimited Returns',
    }),
    defineField({
      name: 'offerName',
      title: 'Offer Name',
      type: 'string',
      group: 'pricing',
      initialValue: 'Klaviyo Growth Partner',
    }),
    defineField({
      name: 'offerBadge',
      title: 'Offer Badge',
      type: 'string',
      group: 'pricing',
      initialValue: 'MOST POPULAR',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      group: 'pricing',
      initialValue: '$2,497',
    }),
    defineField({
      name: 'pricePeriod',
      title: 'Price Period',
      type: 'string',
      group: 'pricing',
      initialValue: '/month',
    }),
    defineField({
      name: 'priceIncludes',
      title: 'Price Includes',
      type: 'array',
      group: 'pricing',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'guarantee',
      title: 'Guarantee Text',
      type: 'text',
      rows: 2,
      group: 'pricing',
      initialValue: '30-Day Money Back Guarantee. No questions asked.',
    }),
    defineField({
      name: 'pricingCtaText',
      title: 'Pricing CTA Text',
      type: 'string',
      group: 'pricing',
      initialValue: 'Get Started Today',
    }),
    defineField({
      name: 'urgencyText',
      title: 'Urgency Text',
      type: 'string',
      group: 'pricing',
      initialValue: 'Only 3 spots left this month',
    }),

    // Commission Calculator
    defineField({
      name: 'calculatorTitle',
      title: 'Calculator Section Title',
      type: 'string',
      group: 'calculator',
      initialValue: 'See Your Investment',
    }),
    defineField({
      name: 'calculatorSubtitle',
      title: 'Calculator Subtitle',
      type: 'text',
      rows: 2,
      group: 'calculator',
      initialValue: 'We take 20% of net email revenue generated. Billed on the 1st of each month for the previous month.',
    }),
    defineField({
      name: 'commissionRate',
      title: 'Commission Rate (%)',
      type: 'number',
      group: 'calculator',
      initialValue: 20,
      validation: (Rule) => Rule.min(0).max(100),
    }),

    // Who This Is For
    defineField({
      name: 'whoForTitle',
      title: 'Who For Section Title',
      type: 'string',
      group: 'whoFor',
      initialValue: 'Perfect Fit Check',
    }),
    defineField({
      name: 'whoForYesTitle',
      title: 'Yes List Title',
      type: 'string',
      group: 'whoFor',
      initialValue: '✓ This IS For You If...',
    }),
    defineField({
      name: 'whoForYesList',
      title: 'Yes List Items',
      type: 'array',
      group: 'whoFor',
      of: [{ type: 'string' }],
      initialValue: [
        'You run an ecommerce store doing $50K-$500K/month',
        'You have an email list but it\'s not generating revenue',
        'You want predictable, automated revenue',
        'You\'re willing to share revenue for results',
        'You want a partner, not just a vendor',
      ],
    }),
    defineField({
      name: 'whoForNoTitle',
      title: 'No List Title',
      type: 'string',
      group: 'whoFor',
      initialValue: '✗ This Is NOT For You If...',
    }),
    defineField({
      name: 'whoForNoList',
      title: 'No List Items',
      type: 'array',
      group: 'whoFor',
      of: [{ type: 'string' }],
      initialValue: [
        'You\'re doing less than $50K/month',
        'You want to manage emails yourself',
        'You\'re not willing to share data',
        'You expect overnight results',
        'You\'ve never used Klaviyo before',
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqTitle',
      title: 'FAQ Title',
      type: 'string',
      group: 'faq',
      initialValue: 'Frequently Asked',
    }),
    defineField({
      name: 'faqTitleItalic',
      title: 'FAQ Title (Italic)',
      type: 'string',
      group: 'faq',
      initialValue: 'Questions',
    }),

    // CTA Section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'cta',
      initialValue: 'Ready to Transform Your Email Marketing?',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Book a free strategy call and discover how much revenue you\'re leaving on the table.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Book Your Free Strategy Call',
    }),
    defineField({
      name: 'ctaUrgencyText',
      title: 'CTA Urgency Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Limited availability — We only take on 5 new clients per month',
    }),

    // Cal.com Integration
    defineField({
      name: 'calUsername',
      title: 'Cal.com Username',
      type: 'string',
      group: 'cta',
      initialValue: 'thewordpressteam',
    }),
    defineField({
      name: 'calEventSlug',
      title: 'Cal.com Event Slug',
      type: 'string',
      group: 'cta',
      initialValue: '30min',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Klaviyo Landing Page' }
    },
  },
})
