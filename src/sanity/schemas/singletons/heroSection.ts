import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'headlinePart1',
      title: 'Headline Part 1',
      type: 'string',
      description: 'e.g., "Design subscriptions for"',
      initialValue: 'Design subscriptions for',
    }),
    defineField({
      name: 'headlineItalic',
      title: 'Headline Italic Word',
      type: 'string',
      description: 'The italic/stylized word',
      initialValue: 'everyone',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Pause or cancel anytime.',
    }),
    defineField({
      name: 'memberCardBadge',
      title: 'Member Card Badge Text',
      type: 'string',
      initialValue: 'Start today',
    }),
    defineField({
      name: 'memberCardTitle1',
      title: 'Member Card Title Line 1',
      type: 'string',
      initialValue: 'Join',
    }),
    defineField({
      name: 'memberCardTitle2',
      title: 'Member Card Title Line 2',
      type: 'string',
      initialValue: 'Designjoy',
    }),
    defineField({
      name: 'memberCardSubtitle',
      title: 'Member Card Subtitle',
      type: 'string',
      initialValue: 'One subscription to rule them all.',
    }),
    defineField({
      name: 'memberCardImage',
      title: 'Member Card Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bookCallTitle',
      title: 'Book Call Title',
      type: 'string',
      initialValue: 'Book a 15-min intro call',
    }),
    defineField({
      name: 'bookCallSubtitle',
      title: 'Book Call Subtitle',
      type: 'string',
      initialValue: 'Schedule now',
    }),
    defineField({
      name: 'founderImage',
      title: 'Founder Avatar Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero Section' }
    },
  },
})
