import { defineType, defineField } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export default defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'See if Designjoy is the right fit for you',
    }),
    defineField({
      name: 'ctaTitleItalic',
      title: 'CTA Title Italic Part',
      type: 'string',
      initialValue: '(it totally is)',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'string',
      initialValue: 'Schedule a quick, 15 minute guided tour through Designjoy.',
    }),
    defineField({
      name: 'noticeText',
      title: 'Notice Text',
      type: 'text',
      rows: 2,
      description: 'High volume booking notice',
    }),
    defineField({
      name: 'headquarters',
      title: 'Headquarters Location',
      type: 'string',
      initialValue: 'Headquartered in Phoenix, Arizona',
    }),
    defineField({
      name: 'termsUrl',
      title: 'Terms of Service URL',
      type: 'url',
    }),
    defineField({
      name: 'privacyUrl',
      title: 'Privacy Policy URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Footer Section' }
    },
  },
})
