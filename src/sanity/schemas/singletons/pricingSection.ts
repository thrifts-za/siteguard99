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
  ],
  preview: {
    prepare() {
      return { title: 'Pricing Section' }
    },
  },
})
