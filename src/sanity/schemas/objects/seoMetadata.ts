import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seoMetadata',
  title: 'SEO Metadata',
  type: 'object',
  fields: [
    // Basic SEO
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for search engines (50-60 characters recommended)',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines (150-160 characters recommended)',
      validation: (Rule) => Rule.max(170),
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO (comma-separated tags)',
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The preferred URL for this page (leave empty for default)',
    }),

    // Open Graph (Facebook/LinkedIn)
    defineField({
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
      description: 'Title for Facebook/LinkedIn sharing (defaults to Meta Title if empty)',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'text',
      rows: 2,
      description: 'Description for Facebook/LinkedIn sharing (defaults to Meta Description if empty)',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      description: 'Image for Facebook/LinkedIn sharing (1200x630px recommended)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ogType',
      title: 'OG Type',
      type: 'string',
      initialValue: 'website',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Article', value: 'article' },
          { title: 'Product', value: 'product' },
        ],
      },
    }),

    // Twitter Card
    defineField({
      name: 'twitterCard',
      title: 'Twitter Card Type',
      type: 'string',
      initialValue: 'summary_large_image',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
        ],
      },
    }),
    defineField({
      name: 'twitterTitle',
      title: 'Twitter Title',
      type: 'string',
      description: 'Title for Twitter sharing (defaults to OG Title if empty)',
    }),
    defineField({
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'text',
      rows: 2,
      description: 'Description for Twitter sharing (defaults to OG Description if empty)',
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'image',
      description: 'Image for Twitter sharing (defaults to OG Image if empty)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'twitterSite',
      title: 'Twitter Site Handle',
      type: 'string',
      description: 'Your Twitter handle (e.g., @yoursite)',
    }),
    defineField({
      name: 'twitterCreator',
      title: 'Twitter Creator Handle',
      type: 'string',
      description: 'Content creator Twitter handle (e.g., @author)',
    }),

    // Robots/Indexing
    defineField({
      name: 'robotsNoIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    }),
    defineField({
      name: 'robotsNoFollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Prevent search engines from following links on this page',
      initialValue: false,
    }),
  ],
})
