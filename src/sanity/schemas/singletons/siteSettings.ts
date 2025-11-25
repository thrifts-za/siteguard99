import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'branding', title: 'Branding & Logos' },
    { name: 'seo', title: 'SEO' },
    { name: 'favicons', title: 'Favicons & Icons' },
    { name: 'tracking', title: 'Tracking & Scripts' },
    { name: 'social', title: 'Social Links' },
    { name: 'integrations', title: 'Integrations' },
  ],
  fields: [
    // ========== GENERAL ==========
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'general',
      initialValue: 'SiteGuard99',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      group: 'general',
      description: 'The canonical URL of your site (e.g., https://siteguard99.com)',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'general',
      initialValue: 'hello@siteguard99.co',
    }),

    // ========== BRANDING & LOGOS ==========
    defineField({
      name: 'headerLogo',
      title: 'Header Logo (Dark/Black)',
      type: 'image',
      group: 'branding',
      options: { hotspot: true },
      description: 'Logo for the header - should be dark/black for light background',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo (Light/White)',
      type: 'image',
      group: 'branding',
      options: { hotspot: true },
      description: 'Logo for the footer - should be light/white for dark background',
    }),

    // ========== SEO ==========
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'seoMetadata',
      group: 'seo',
      description: 'Default SEO settings applied to all pages',
    }),

    // ========== FAVICONS & ICONS ==========
    defineField({
      name: 'favicon',
      title: 'Favicon (ICO)',
      type: 'file',
      group: 'favicons',
      description: 'Main favicon (.ico format, 32x32 recommended)',
      options: {
        accept: '.ico',
      },
    }),
    defineField({
      name: 'faviconSvg',
      title: 'Favicon (SVG)',
      type: 'file',
      group: 'favicons',
      description: 'SVG favicon for modern browsers',
      options: {
        accept: '.svg',
      },
    }),
    defineField({
      name: 'favicon16',
      title: 'Favicon 16x16',
      type: 'image',
      group: 'favicons',
      description: 'PNG favicon 16x16 pixels',
    }),
    defineField({
      name: 'favicon32',
      title: 'Favicon 32x32',
      type: 'image',
      group: 'favicons',
      description: 'PNG favicon 32x32 pixels',
    }),
    defineField({
      name: 'appleTouchIcon',
      title: 'Apple Touch Icon',
      type: 'image',
      group: 'favicons',
      description: 'Apple touch icon (180x180 PNG recommended)',
    }),
    defineField({
      name: 'androidChrome192',
      title: 'Android Chrome 192x192',
      type: 'image',
      group: 'favicons',
      description: 'Android Chrome icon 192x192 pixels',
    }),
    defineField({
      name: 'androidChrome512',
      title: 'Android Chrome 512x512',
      type: 'image',
      group: 'favicons',
      description: 'Android Chrome icon 512x512 pixels',
    }),
    defineField({
      name: 'maskIcon',
      title: 'Safari Mask Icon',
      type: 'file',
      group: 'favicons',
      description: 'Safari pinned tab icon (SVG)',
      options: {
        accept: '.svg',
      },
    }),
    defineField({
      name: 'maskIconColor',
      title: 'Mask Icon Color',
      type: 'string',
      group: 'favicons',
      description: 'Color for Safari mask icon (hex, e.g., #5bbad5)',
    }),
    defineField({
      name: 'msapplicationTileColor',
      title: 'MS Tile Color',
      type: 'string',
      group: 'favicons',
      description: 'Windows tile background color (hex, e.g., #da532c)',
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      group: 'favicons',
      description: 'Browser theme color (hex, e.g., #ffffff)',
    }),

    // ========== TRACKING & SCRIPTS ==========
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      group: 'tracking',
      description: 'Google Analytics measurement ID (e.g., G-XXXXXXXXXX)',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      group: 'tracking',
      description: 'GTM container ID (e.g., GTM-XXXXXXX)',
    }),
    defineField({
      name: 'facebookPixelId',
      title: 'Facebook Pixel ID',
      type: 'string',
      group: 'tracking',
      description: 'Meta/Facebook Pixel ID',
    }),
    defineField({
      name: 'hotjarId',
      title: 'Hotjar Site ID',
      type: 'string',
      group: 'tracking',
      description: 'Hotjar site ID for heatmaps and recordings',
    }),
    defineField({
      name: 'clarityId',
      title: 'Microsoft Clarity ID',
      type: 'string',
      group: 'tracking',
      description: 'Microsoft Clarity project ID',
    }),
    defineField({
      name: 'customHeadScripts',
      title: 'Custom Head Scripts',
      type: 'text',
      group: 'tracking',
      rows: 10,
      description: 'Custom scripts to be added in the <head> section. Include full <script> tags.',
    }),
    defineField({
      name: 'customBodyStartScripts',
      title: 'Custom Body Start Scripts',
      type: 'text',
      group: 'tracking',
      rows: 10,
      description: 'Custom scripts to be added right after opening <body> tag. Include full <script> tags.',
    }),
    defineField({
      name: 'customBodyEndScripts',
      title: 'Custom Body End Scripts',
      type: 'text',
      group: 'tracking',
      rows: 10,
      description: 'Custom scripts to be added before closing </body> tag. Include full <script> tags.',
    }),

    // ========== SOCIAL LINKS ==========
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      group: 'social',
      fields: [
        { name: 'twitter', type: 'url', title: 'Twitter/X URL' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
        { name: 'facebook', type: 'url', title: 'Facebook URL' },
        { name: 'youtube', type: 'url', title: 'YouTube URL' },
        { name: 'tiktok', type: 'url', title: 'TikTok URL' },
        { name: 'github', type: 'url', title: 'GitHub URL' },
      ],
    }),

    // ========== INTEGRATIONS ==========
    defineField({
      name: 'loginUrl',
      title: 'Login URL',
      type: 'url',
      group: 'integrations',
    }),
    defineField({
      name: 'stripePaymentUrl',
      title: 'Stripe Payment URL',
      type: 'url',
      group: 'integrations',
    }),
    defineField({
      name: 'calendarBookingUrl',
      title: 'Calendar Booking URL (Calendly)',
      type: 'url',
      group: 'integrations',
      description: 'Full Calendly URL, e.g., https://calendly.com/yourname/15min',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
