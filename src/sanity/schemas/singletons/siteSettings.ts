import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Designjoy',
    }),
    defineField({
      name: 'headerLogo',
      title: 'Header Logo (Dark/Black)',
      type: 'image',
      options: { hotspot: true },
      description: 'Logo for the header - should be dark/black for light background',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo (Light/White)',
      type: 'image',
      options: { hotspot: true },
      description: 'Logo for the footer - should be light/white for dark background',
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seoMetadata',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'twitter', type: 'url', title: 'Twitter/X URL' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'hello@designjoy.co',
    }),
    defineField({
      name: 'loginUrl',
      title: 'Login URL',
      type: 'url',
    }),
    defineField({
      name: 'stripePaymentUrl',
      title: 'Stripe Payment URL',
      type: 'url',
    }),
    defineField({
      name: 'calendarBookingUrl',
      title: 'Calendar Booking URL (Calendly)',
      type: 'url',
      description: 'Full Calendly URL, e.g., https://calendly.com/yourname/15min',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
