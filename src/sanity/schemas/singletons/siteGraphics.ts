import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'siteGraphics',
  title: 'Site Graphics',
  type: 'document',
  icon: ImageIcon,
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'howItWorks', title: 'How It Works' },
    { name: 'clients', title: 'Client Logos' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'recentWork', title: 'Recent Work' },
    { name: 'pricing', title: 'Pricing' },
    { name: 'faq', title: 'FAQ' },
    { name: 'footer', title: 'Footer' },
    { name: 'icons', title: 'UI Icons' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroMemberCard',
      title: 'Member Card Image',
      type: 'image',
      group: 'hero',
      description: 'The credit card mockup image in the hero section',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroCallAvatar',
      title: 'Book Call Avatar',
      type: 'image',
      group: 'hero',
      description: 'Avatar image next to "Book a 15-min intro call"',
      options: { hotspot: true },
    }),

    // How It Works Section
    defineField({
      name: 'subscribePriceTag',
      title: 'Subscribe Card - Price Tag',
      type: 'image',
      group: 'howItWorks',
      description: 'Price tag graphic in the Subscribe card',
      options: { hotspot: true },
    }),
    defineField({
      name: 'requestSmile',
      title: 'Request Card - Smile Face',
      type: 'image',
      group: 'howItWorks',
      description: 'Smile face graphic in the Request card',
      options: { hotspot: true },
    }),

    // Client Logos (array for multiple)
    defineField({
      name: 'clientLogos',
      title: 'Client Logos',
      type: 'array',
      group: 'clients',
      description: 'Logos displayed in the client logo row',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Client Name' },
            { name: 'logo', type: 'image', title: 'Logo', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'name', media: 'logo' },
          },
        },
      ],
    }),

    // Testimonials
    defineField({
      name: 'testimonialWebflowLogo',
      title: 'Webflow Logo',
      type: 'image',
      group: 'testimonials',
      description: 'Webflow logo for the first testimonial',
      options: { hotspot: true },
    }),
    defineField({
      name: 'testimonialAuthorImage',
      title: 'Testimonial Author Image',
      type: 'image',
      group: 'testimonials',
      description: 'Kevin O\'Leary or other testimonial author photo',
      options: { hotspot: true },
    }),

    // Recent Work Section
    defineField({
      name: 'recentWorkImages',
      title: 'Recent Work Project Images',
      type: 'array',
      group: 'recentWork',
      description: 'Project screenshots in the marquee slider',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Project Name' },
            { name: 'image', type: 'image', title: 'Project Image', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'name', media: 'image' },
          },
        },
      ],
    }),
    defineField({
      name: 'awardBadges',
      title: 'Award Badges',
      type: 'array',
      group: 'recentWork',
      description: 'Product Hunt and other award badges',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'companyName', type: 'string', title: 'Company Name' },
            { name: 'companyLogo', type: 'image', title: 'Company Logo', options: { hotspot: true } },
            { name: 'awardTitle', type: 'string', title: 'Award Title' },
            { name: 'awardSourceLogo', type: 'image', title: 'Award Source Logo (e.g. Product Hunt)', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'companyName', subtitle: 'awardTitle', media: 'companyLogo' },
          },
        },
      ],
    }),

    // Pricing Section
    defineField({
      name: 'pricingCardImage',
      title: 'Pricing Card Mockup',
      type: 'image',
      group: 'pricing',
      description: 'The floating card image in pricing section',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pricingSmileIcon',
      title: 'Join Button Smile Icon',
      type: 'image',
      group: 'pricing',
      description: 'Smile icon in the "Join today" button',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pricingPauseIcon',
      title: 'Pause Icon',
      type: 'image',
      group: 'pricing',
      description: 'Pause icon for "Pause anytime" section',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pricingCheckIcon',
      title: 'Check Icon',
      type: 'image',
      group: 'pricing',
      description: 'Check icon for "Try it for a week" section',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pricingDecorative1',
      title: 'Pricing Decorative Graphic 1',
      type: 'image',
      group: 'pricing',
      description: 'Decorative graphic in pricing card',
      options: { hotspot: true },
    }),

    // FAQ Section
    defineField({
      name: 'faqBookCallImage',
      title: 'FAQ Book Call Image',
      type: 'image',
      group: 'faq',
      description: 'Image in the FAQ "Book a call" card',
      options: { hotspot: true },
    }),
    defineField({
      name: 'faqEmailIcon',
      title: 'Email Icon',
      type: 'image',
      group: 'faq',
      description: 'Email icon in FAQ section',
      options: { hotspot: true },
    }),

    // Footer Section
    defineField({
      name: 'footerSmileyFaces',
      title: 'Footer Smiley Faces',
      type: 'image',
      group: 'footer',
      description: 'Smiley faces graphic in the footer',
      options: { hotspot: true },
    }),

    // UI Icons
    defineField({
      name: 'arrowIcon',
      title: 'Arrow Icon',
      type: 'image',
      group: 'icons',
      description: 'Arrow icon used throughout the site',
      options: { hotspot: true },
    }),
    defineField({
      name: 'phoneIcon',
      title: 'Phone Icon',
      type: 'image',
      group: 'icons',
      description: 'Phone icon in header',
      options: { hotspot: true },
    }),
    defineField({
      name: 'chevronIcon',
      title: 'Chevron Icon',
      type: 'image',
      group: 'icons',
      description: 'Chevron icon for FAQ accordion',
      options: { hotspot: true },
    }),

    // Benefit Icons
    defineField({
      name: 'benefitIcons',
      title: 'Benefit Icons',
      type: 'array',
      group: 'icons',
      description: 'Icons for each benefit card',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'benefitName', type: 'string', title: 'Benefit Name' },
            { name: 'icon', type: 'image', title: 'Icon', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'benefitName', media: 'icon' },
          },
        },
      ],
    }),

    // Services Section Decorative
    defineField({
      name: 'servicesDecorative1',
      title: 'Services Pink Decorative',
      type: 'image',
      group: 'recentWork',
      description: 'Pink decorative graphic in services card',
      options: { hotspot: true },
    }),
    defineField({
      name: 'servicesDecorative2',
      title: 'Services Secondary Decorative',
      type: 'image',
      group: 'recentWork',
      description: 'Secondary decorative graphic in services card',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Graphics' }
    },
  },
})
