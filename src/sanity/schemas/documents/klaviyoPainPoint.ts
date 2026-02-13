import { defineType, defineField } from 'sanity'
import { WarningOutlineIcon } from '@sanity/icons'

export default defineType({
  name: 'klaviyoPainPoint',
  title: 'Klaviyo Pain Point',
  type: 'document',
  icon: WarningOutlineIcon,
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
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Enter an emoji to display as the icon',
      initialValue: '😫',
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
      icon: 'icon',
    },
    prepare({ title, subtitle, icon }) {
      return {
        title: `${icon || '😫'} ${title}`,
        subtitle: subtitle,
      }
    },
  },
})
