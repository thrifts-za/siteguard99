import { defineType, defineField } from 'sanity'
import { CreditCardIcon } from '@sanity/icons'

export default defineType({
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      initialValue: 'PRICING',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'One subscription,',
    }),
    defineField({
      name: 'titleItalic',
      title: 'Title Italic Part',
      type: 'string',
      initialValue: 'endless possibilities',
    }),
    defineField({
      name: 'planName',
      title: 'Plan Name',
      type: 'string',
      initialValue: 'Monthly Club',
    }),
    defineField({
      name: 'planBadge',
      title: 'Plan Badge Text',
      type: 'string',
      initialValue: 'PAUSE OR CANCEL ANYTIME',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      initialValue: '$5,995',
    }),
    defineField({
      name: 'pricePeriod',
      title: 'Price Period',
      type: 'string',
      initialValue: '/month',
    }),
    defineField({
      name: 'features',
      title: 'Plan Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Join today',
    }),
    defineField({
      name: 'pauseTitle',
      title: 'Pause Feature Title',
      type: 'string',
      initialValue: 'Pause anytime',
    }),
    defineField({
      name: 'pauseDescription',
      title: 'Pause Feature Description',
      type: 'string',
      initialValue: 'Temporarily pause your subscription anytime, no sweat.',
    }),
    defineField({
      name: 'trialTitle',
      title: 'Trial Feature Title',
      type: 'string',
      initialValue: 'Try it for a week',
    }),
    defineField({
      name: 'trialDescription',
      title: 'Trial Feature Description',
      type: 'string',
      initialValue: 'Not loving it after a week? Get 75% back, no questions asked.',
    }),
    defineField({
      name: 'memberCardImage',
      title: 'Member Card Decorative Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'clientsEyebrow',
      title: 'Clients Section Eyebrow',
      type: 'string',
      initialValue: 'OUR CLIENTS',
    }),
    defineField({
      name: 'clientsTitle',
      title: 'Clients Section Title',
      type: 'string',
      initialValue: 'Trusted by',
    }),
    defineField({
      name: 'clientsTitleItalic',
      title: 'Clients Section Title (Italic)',
      type: 'string',
      initialValue: 'industry leaders',
    }),
    defineField({
      name: 'clientsTitleBreak',
      title: 'Break Italic to New Line',
      type: 'boolean',
      initialValue: true,
      description: 'Check to put the italic part on a new line',
    }),
    defineField({
      name: 'clientsSubtitle',
      title: 'Clients Section Subtitle',
      type: 'string',
      initialValue: 'Join the companies that trust us with their WordPress maintenance.',
    }),
    defineField({
      name: 'clientLogos',
      title: 'Client Logos',
      type: 'array',
      description: 'Select actual client logos to display under the pricing section',
      of: [
        {
          type: 'reference',
          to: [{ type: 'client' }],
        },
      ],
    }),
    // Value Breakdown Section
    defineField({
      name: 'valueBreakdownTitle',
      title: 'Value Breakdown Title',
      type: 'string',
      initialValue: "What you're getting for $149/month:",
    }),
    defineField({
      name: 'valueItems',
      title: 'Value Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Item Name', type: 'string' },
            { name: 'monthlyValue', title: 'Monthly Value', type: 'string' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'monthlyValue' },
          },
        },
      ],
    }),
    defineField({
      name: 'totalValue',
      title: 'Total Value Text',
      type: 'string',
      initialValue: 'Total value if purchased separately: $594+/month',
    }),
    defineField({
      name: 'yourPrice',
      title: 'Your Price Text',
      type: 'string',
      initialValue: 'Your price: $149/month',
    }),
    defineField({
      name: 'savings',
      title: 'Savings Text',
      type: 'string',
      initialValue: 'You save: $445/month ($5,340/year)',
    }),
    // Multi-Site Pricing Section
    defineField({
      name: 'multiSiteTitle',
      title: 'Multi-Site Section Title',
      type: 'string',
      initialValue: 'Need multiple sites maintained?',
    }),
    defineField({
      name: 'multiSiteSubtitle',
      title: 'Multi-Site Section Subtitle',
      type: 'string',
      initialValue: 'Contact us for volume pricing:',
    }),
    defineField({
      name: 'multiSiteTiers',
      title: 'Multi-Site Pricing Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'siteRange', title: 'Site Range', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'savings', title: 'Savings', type: 'string' },
          ],
          preview: {
            select: { title: 'siteRange', subtitle: 'price' },
          },
        },
      ],
    }),
    defineField({
      name: 'multiSiteCtaText',
      title: 'Multi-Site CTA Text',
      type: 'string',
      initialValue: 'Contact us for multi-site quote',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Pricing Section' }
    },
  },
})
