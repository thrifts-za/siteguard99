import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Filled (Primary)', value: 'filled' },
          { title: 'Outline', value: 'outline' },
          { title: 'Ghost', value: 'ghost' },
        ],
      },
      initialValue: 'filled',
    }),
    defineField({
      name: 'icon',
      title: 'Icon (optional)',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Phone', value: 'phone' },
          { title: 'Arrow', value: 'arrow' },
          { title: 'Email', value: 'email' },
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'style',
    },
  },
})
