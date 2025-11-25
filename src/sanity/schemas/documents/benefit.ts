import { defineType, defineField } from 'sanity'
import { StarIcon } from '@sanity/icons'

export default defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          { title: 'Purple', value: 'purple' },
          { title: 'Orange', value: 'orange' },
          { title: 'Blue', value: 'blue' },
          { title: 'Yellow', value: 'yellow' },
          { title: 'Green', value: 'green' },
          { title: 'Pink', value: 'pink' },
        ],
      },
      initialValue: 'purple',
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
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
  },
})
