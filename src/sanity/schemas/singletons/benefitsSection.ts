import { defineType, defineField } from 'sanity'
import { BulbOutlineIcon } from '@sanity/icons'

export default defineType({
  name: 'benefitsSection',
  title: 'Benefits Section',
  type: 'document',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      initialValue: 'Membership benefits',
    }),
    defineField({
      name: 'titlePart1',
      title: 'Title Part 1',
      type: 'string',
      initialValue: "It's",
    }),
    defineField({
      name: 'titleItalic',
      title: 'Title Italic Part',
      type: 'string',
      initialValue: '"you\'ll never go back"',
    }),
    defineField({
      name: 'titlePart2',
      title: 'Title Part 2',
      type: 'string',
      initialValue: 'better',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      initialValue: "Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won't want to go anywhere else.",
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Benefits Section' }
    },
  },
})
