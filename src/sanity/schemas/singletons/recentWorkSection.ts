import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export default defineType({
  name: 'recentWorkSection',
  title: 'Recent Work Section',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Recent work',
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
      initialValue: 'We\'re talking "Product of the Year" good.',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'See recent work',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'CTA Button URL',
      type: 'url',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Services Block Title',
      type: 'string',
      initialValue: 'Apps, websites, logos & more',
    }),
    defineField({
      name: 'servicesSubtitle',
      title: 'Services Block Subtitle',
      type: 'string',
      initialValue: 'All the things you need under one roof.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Recent Work Section' }
    },
  },
})
