import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'storyText',
      title: 'Story Text',
      type: 'text',
      rows: 4,
      description: 'The paragraph about Designjoy history',
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
      initialValue: 'Brett',
    }),
    defineField({
      name: 'founderLink',
      title: 'Founder Link (Twitter/X)',
      type: 'url',
    }),
    defineField({
      name: 'yearFounded',
      title: 'Year Founded',
      type: 'string',
      initialValue: '2017',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Section' }
    },
  },
})
