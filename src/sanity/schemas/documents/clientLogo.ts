import { defineType, defineField } from 'sanity'
import { PlugIcon } from '@sanity/icons'

export default defineType({
  name: 'clientLogo',
  title: 'WordPress Tools',
  type: 'document',
  icon: PlugIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'useRedColor',
      title: 'Use Red Color',
      type: 'boolean',
      initialValue: false,
      description: 'Check this to display the logo in red brand color instead of black',
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
      title: 'name',
      media: 'logo',
    },
  },
})
