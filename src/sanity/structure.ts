import { StructureBuilder } from 'sanity/structure'
import {
  CogIcon,
  HomeIcon,
  ComponentIcon,
  UserIcon,
  BulbOutlineIcon,
  ImagesIcon,
  CreditCardIcon,
  HelpCircleIcon,
  BlockElementIcon,
  ImageIcon,
  StarIcon,
  CommentIcon,
  TagIcon,
  RocketIcon,
  WarningOutlineIcon,
} from '@sanity/icons'

// Singleton document types
const singletonItems = [
  { id: 'siteSettings', title: 'Site Settings', icon: CogIcon },
  { id: 'heroSection', title: 'Hero Section', icon: HomeIcon },
  { id: 'howItWorksSection', title: 'How It Works', icon: ComponentIcon },
  { id: 'aboutSection', title: 'About', icon: UserIcon },
  { id: 'benefitsSection', title: 'Benefits Section', icon: BulbOutlineIcon },
  { id: 'recentWorkSection', title: 'Recent Work Section', icon: ImagesIcon },
  { id: 'pricingSection', title: 'Pricing', icon: CreditCardIcon },
  { id: 'faqSection', title: 'FAQ Section', icon: HelpCircleIcon },
  { id: 'footerSection', title: 'Footer', icon: BlockElementIcon },
]

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Section Settings
      S.listItem()
        .title('Page Sections')
        .icon(ComponentIcon)
        .child(
          S.list()
            .title('Page Sections')
            .items(
              singletonItems.map((item) =>
                S.listItem()
                  .title(item.title)
                  .icon(item.icon)
                  .child(
                    S.document()
                      .schemaType(item.id)
                      .documentId(item.id)
                  )
              )
            )
        ),
      S.divider(),
      // Klaviyo Landing Page Section
      S.listItem()
        .title('Klaviyo Landing Page')
        .icon(RocketIcon)
        .child(
          S.list()
            .title('Klaviyo Landing Page')
            .items([
              S.listItem()
                .title('Page Settings')
                .icon(CogIcon)
                .child(
                  S.document()
                    .schemaType('klaviyoLandingPage')
                    .documentId('klaviyoLandingPage')
                ),
              S.listItem()
                .title('Pain Points')
                .icon(WarningOutlineIcon)
                .child(S.documentTypeList('klaviyoPainPoint').title('Pain Points')),
              S.listItem()
                .title('Benefits')
                .icon(StarIcon)
                .child(S.documentTypeList('klaviyoBenefit').title('Benefits')),
              S.listItem()
                .title('Features')
                .icon(ComponentIcon)
                .child(S.documentTypeList('klaviyoFeature').title('Features')),
              S.listItem()
                .title('FAQ Items')
                .icon(HelpCircleIcon)
                .child(S.documentTypeList('klaviyoFaqItem').title('FAQ Items')),
              S.listItem()
                .title('Email Examples')
                .icon(ImageIcon)
                .child(S.documentTypeList('klaviyoEmailExample').title('Email Examples')),
            ])
        ),
      S.divider(),
      // Regular document lists
      S.listItem()
        .title('Client Logos')
        .icon(ImageIcon)
        .child(S.documentTypeList('clientLogo').title('Client Logos')),
      S.listItem()
        .title('Benefits')
        .icon(StarIcon)
        .child(S.documentTypeList('benefit').title('Benefits')),
      S.listItem()
        .title('Testimonials')
        .icon(CommentIcon)
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      S.listItem()
        .title('FAQ Items')
        .icon(HelpCircleIcon)
        .child(S.documentTypeList('faqItem').title('FAQ Items')),
      S.listItem()
        .title('Services')
        .icon(TagIcon)
        .child(S.documentTypeList('serviceCategory').title('Services')),
      S.listItem()
        .title('Recent Work')
        .icon(ImagesIcon)
        .child(S.documentTypeList('recentWorkItem').title('Recent Work')),
    ])
