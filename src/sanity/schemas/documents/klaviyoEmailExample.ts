import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'klaviyoEmailExample',
  title: 'Klaviyo Email Example',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the email or brand',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Brief description of the email type or results',
    }),
    defineField({
      name: 'image',
      title: 'Email Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Welcome Flow', value: 'welcome' },
          { title: 'Abandoned Cart', value: 'abandoned-cart' },
          { title: 'Post-Purchase', value: 'post-purchase' },
          { title: 'Win-Back', value: 'win-back' },
          { title: 'Campaign', value: 'campaign' },
          { title: 'Newsletter', value: 'newsletter' },
          { title: 'Product Launch', value: 'product-launch' },
          { title: 'Promotional', value: 'promotional' },
        ],
      },
    }),
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      description: 'Optional: Name of the brand this email was created for',
    }),
    defineField({
      name: 'stats',
      title: 'Performance Stats',
      type: 'object',
      fields: [
        { name: 'openRate', title: 'Open Rate', type: 'string', description: 'e.g., "45.2%"' },
        { name: 'clickRate', title: 'Click Rate', type: 'string', description: 'e.g., "8.7%"' },
        { name: 'revenue', title: 'Revenue Generated', type: 'string', description: 'e.g., "$12,450"' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      const categories: Record<string, string> = {
        'welcome': 'Welcome Flow',
        'abandoned-cart': 'Abandoned Cart',
        'post-purchase': 'Post-Purchase',
        'win-back': 'Win-Back',
        'campaign': 'Campaign',
        'newsletter': 'Newsletter',
        'product-launch': 'Product Launch',
        'promotional': 'Promotional',
      }
      return {
        title: title,
        subtitle: subtitle ? categories[subtitle] || subtitle : undefined,
        media: media,
      }
    },
  },
})
