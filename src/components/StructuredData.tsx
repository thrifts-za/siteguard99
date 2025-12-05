import { FaqItem } from '@/types/sanity'

interface OrganizationSchemaProps {
  name: string
  url: string
  logo?: string
  email?: string
  description?: string
}

interface WebSiteSchemaProps {
  name: string
  url: string
  description?: string
}

interface ServiceSchemaProps {
  name: string
  description: string
  provider: string
  url: string
  price?: string
}

interface FAQSchemaProps {
  items: FaqItem[]
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function OrganizationSchema({ name, url, logo, email, description }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    ...(logo && { logo }),
    ...(email && { email }),
    ...(description && { description }),
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema({ name, url, description }: WebSiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    ...(description && { description }),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ name, description, provider, url, price }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    url,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price.replace(/[^0-9.]/g, ''),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ items }: FAQSchemaProps) {
  if (!items || items.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items || items.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Combined schema for the homepage
interface HomepageSchemaProps {
  siteName: string
  siteUrl: string
  email?: string
  description?: string
  logoUrl?: string
  faqItems?: FaqItem[]
  servicePrice?: string
}

export function HomepageStructuredData({
  siteName,
  siteUrl,
  email,
  description,
  logoUrl,
  faqItems,
  servicePrice,
}: HomepageSchemaProps) {
  return (
    <>
      <OrganizationSchema
        name={siteName}
        url={siteUrl}
        logo={logoUrl}
        email={email}
        description={description}
      />
      <WebSiteSchema
        name={siteName}
        url={siteUrl}
        description={description}
      />
      <ServiceSchema
        name="WordPress Maintenance Subscription"
        description="Professional WordPress maintenance service including security fixes, malware removal, speed optimization, plugin updates, and 24/7 support."
        provider={siteName}
        url={siteUrl}
        price={servicePrice}
      />
      {faqItems && faqItems.length > 0 && <FAQSchema items={faqItems} />}
    </>
  )
}
