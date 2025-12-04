import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Content Group
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(70),
      description: 'Keep under 60 chars. Include keyword in first 50%.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 75 },
      validation: (Rule) => Rule.required(),
      description: 'URL-friendly version. Keep short, include keyword.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      rows: 3,
      validation: (Rule) => Rule.max(160),
      description: 'Brief summary for listings. 120-160 chars.',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Include keyword naturally for SEO.',
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
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
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'target',
                    type: 'string',
                    title: 'Target',
                    options: {
                      list: [
                        { title: 'Same window', value: '_self' },
                        { title: 'New window', value: '_blank' },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Include keyword naturally for SEO.',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    // SEO Group
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoMetadata',
      group: 'seo',
    }),
    defineField({
      name: 'primaryKeyword',
      title: 'Primary Focus Keyword',
      type: 'string',
      group: 'seo',
      description: 'Main keyword to rank for. Track this for optimization.',
    }),
    defineField({
      name: 'secondaryKeywords',
      title: 'Secondary Keywords',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      description: '2-4 related keywords to also target.',
    }),
    // Settings Group
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'settings',
      options: {
        list: [
          { title: 'Security', value: 'security' },
          { title: 'Performance', value: 'performance' },
          { title: 'Maintenance', value: 'maintenance' },
          { title: 'Troubleshooting', value: 'troubleshooting' },
          { title: 'Tutorials', value: 'tutorials' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'settings',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'settings',
      initialValue: 'The WordPress Team',
    }),
    defineField({
      name: 'isPillar',
      title: 'Pillar Content',
      type: 'boolean',
      group: 'settings',
      initialValue: false,
      description: 'Mark as cornerstone/pillar content for SEO.',
    }),
  ],
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'featuredImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : '',
        media,
      }
    },
  },
})
