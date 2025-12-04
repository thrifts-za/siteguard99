import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'termsAndConditions',
  title: 'Terms & Conditions',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Terms & Conditions',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'date',
    }),
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
      initialValue: '1.0',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Terms & Conditions' }
    },
  },
})
