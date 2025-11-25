import { defineType, defineField } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export default defineType({
  name: 'howItWorksSection',
  title: 'How It Works Section',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'titlePart1',
      title: 'Title Part 1',
      type: 'string',
      initialValue: 'The way design',
    }),
    defineField({
      name: 'titleItalic',
      title: 'Title Italic Word',
      type: 'string',
      initialValue: "should've",
    }),
    defineField({
      name: 'titlePart2',
      title: 'Title Part 2',
      type: 'string',
      initialValue: 'been done in the first place',
    }),
    defineField({
      name: 'cards',
      title: 'Process Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Card Title' },
            { name: 'description', type: 'text', title: 'Card Description' },
            { name: 'icon', type: 'image', title: 'Card Icon/Image' },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'servicePills',
      title: 'Service Pills (Marquee)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of services shown in the marquee animation',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'How It Works Section' }
    },
  },
})
