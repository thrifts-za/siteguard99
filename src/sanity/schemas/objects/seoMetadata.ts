import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seoMetadata',
  title: 'SEO Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for search engines (50-60 characters recommended)',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines (150-160 characters recommended)',
      validation: (Rule) => Rule.max(170),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social media sharing (1200x630 recommended)',
      options: {
        hotspot: true,
      },
    }),
  ],
})
