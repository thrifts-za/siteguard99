import { defineType, defineField } from 'sanity'
import { StarIcon } from '@sanity/icons'

export default defineType({
  name: 'klaviyoBenefit',
  title: 'Klaviyo Benefit',
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stat',
      title: 'Statistic',
      type: 'string',
      description: 'Optional stat to highlight (e.g., "40%", "3x", "$50K+")',
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Enter an emoji to display as the icon',
      initialValue: '✨',
    }),
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          { title: 'Purple', value: 'purple' },
          { title: 'Blue', value: 'blue' },
          { title: 'Green', value: 'green' },
          { title: 'Orange', value: 'orange' },
          { title: 'Pink', value: 'pink' },
          { title: 'Teal', value: 'teal' },
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
      subtitle: 'stat',
      icon: 'icon',
    },
    prepare({ title, subtitle, icon }) {
      return {
        title: `${icon || '✨'} ${title}`,
        subtitle: subtitle ? `Stat: ${subtitle}` : undefined,
      }
    },
  },
})
