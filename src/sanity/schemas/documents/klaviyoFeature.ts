import { defineType, defineField } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export default defineType({
  name: 'klaviyoFeature',
  title: 'Klaviyo Feature',
  type: 'document',
  icon: ComponentIcon,
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
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Enter an emoji to display as the icon',
      initialValue: '📧',
    }),
    defineField({
      name: 'includes',
      title: 'Includes',
      type: 'array',
      description: 'List of what this feature includes',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Feature Image',
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
      title: 'title',
      subtitle: 'description',
      icon: 'icon',
      media: 'image',
    },
    prepare({ title, subtitle, icon, media }) {
      return {
        title: `${icon || '📧'} ${title}`,
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
