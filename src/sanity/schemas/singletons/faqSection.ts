import { defineType, defineField } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export default defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'titleItalic',
      title: 'Title Italic Part',
      type: 'string',
      initialValue: 'Frequently',
    }),
    defineField({
      name: 'titleRegular',
      title: 'Title Regular Part',
      type: 'string',
      initialValue: 'asked questions',
    }),
    defineField({
      name: 'bookCallImage',
      title: 'Book Call Card Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bookCallTitle',
      title: 'Book Call Card Title',
      type: 'string',
      initialValue: 'Book a 15-min intro call',
    }),
    defineField({
      name: 'emailPrompt',
      title: 'Email Prompt Text',
      type: 'string',
      initialValue: 'Prefer to email?',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'FAQ Section' }
    },
  },
})
