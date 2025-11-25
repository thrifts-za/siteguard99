import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'recentWorkItem',
  title: 'Recent Work Item',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'award',
      title: 'Award (if any)',
      type: 'string',
      description: 'e.g., "Fintech Product of the Year"',
    }),
    defineField({
      name: 'awardSource',
      title: 'Award Source',
      type: 'string',
      description: 'e.g., "Product Hunt"',
    }),
    defineField({
      name: 'awardLogo',
      title: 'Award Source Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'projectName',
      subtitle: 'award',
      media: 'image',
    },
  },
})
