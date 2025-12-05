import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'
import { notFound } from 'next/navigation'

// Query for metadata generation
const blogPostMetaQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  title,
  excerpt,
  "featuredImageUrl": featuredImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    "ogImageUrl": ogImage.asset->url
  }
}`

interface BlogPostMeta {
  title: string
  excerpt?: string
  featuredImageUrl?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogTitle?: string
    ogDescription?: string
    ogImageUrl?: string
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await safeFetch<BlogPostMeta>(blogPostMetaQuery, { slug })

  if (!post) {
    return {
      title: 'Article Not Found | The WordPress Team',
      description: 'The requested article could not be found.',
    }
  }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt || `Read ${post.title} on The WordPress Team blog.`
  const imageUrl = post.seo?.ogImageUrl || post.featuredImageUrl

  return {
    title: `${title} | The WordPress Team`,
    description,
    openGraph: {
      title: post.seo?.ogTitle || title,
      description: post.seo?.ogDescription || description,
      type: 'article',
      url: `/blog/${slug}`,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.ogTitle || title,
      description: post.seo?.ogDescription || description,
      ...(imageUrl && { images: [imageUrl] }),
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

const blogPostQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  category,
  publishedAt,
  author,
  primaryKeyword,
  secondaryKeywords,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  seo {
    metaTitle,
    metaDescription
  }
}`

const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  siteName,
  "headerLogoUrl": headerLogo.asset->url,
  headerLogoColor
}`

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  content?: any[]
  category?: string
  publishedAt?: string
  author?: string
  primaryKeyword?: string
  secondaryKeywords?: string[]
  featuredImageUrl?: string
  featuredImageAlt?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

interface SiteSettings {
  siteName: string
  headerLogoUrl?: string
  headerLogoColor?: 'red' | 'default'
}

// Portable Text components for rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="blog-content-image">
          <Image
            src={value.asset.url || ''}
            alt={value.alt || ''}
            width={720}
            height={400}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const target = value.target === '_blank' ? '_blank' : '_self'
      return (
        <a href={value.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      )
    },
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const [post, siteSettings] = await Promise.all([
    safeFetch<BlogPost>(blogPostQuery, { slug }),
    safeFetch<SiteSettings>(siteSettingsQuery),
  ])

  if (!post) {
    notFound()
  }

  const categoryLabels: Record<string, string> = {
    security: 'Security',
    performance: 'Performance',
    maintenance: 'Maintenance',
    troubleshooting: 'Troubleshooting',
    tutorials: 'Tutorials',
  }

  const categoryColors: Record<string, string> = {
    security: '#e63946',
    performance: '#2a9d8f',
    maintenance: '#e9c46a',
    troubleshooting: '#f4a261',
    tutorials: '#264653',
  }

  return (
    <div className="blog-post">
      {/* Header - Same as blog listing */}
      <header className="blog-listing__header">
        <div className="blog-listing__header-inner">
          <Link href="/" className="hero__logo-block w-inline-block">
            <Logo
              logoUrl={siteSettings?.headerLogoUrl}
              siteName={siteSettings?.siteName || 'The WordPress Team'}
              variant="header"
              color={siteSettings?.headerLogoColor || 'red'}
            />
          </Link>
          <nav className="blog-listing__nav">
            <Link href="/" className="blog-listing__nav-link">
              Home
            </Link>
            <Link href="/blog" className="blog-listing__nav-link">
              Blog
            </Link>
            <Link href="/#pricing" className="button-filled w-inline-block">
              See Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="blog-post__article">
        <div className="blog-post__container">
          {/* Meta */}
          <div className="blog-post__meta">
            {post.category && (
              <span
                className="blog-post__category"
                style={{ backgroundColor: categoryColors[post.category] || '#e63946' }}
              >
                {categoryLabels[post.category] || post.category}
              </span>
            )}
            {post.publishedAt && (
              <time className="blog-post__date">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>

          {/* Title */}
          <h1 className="blog-post__title">{post.title}</h1>

          {/* Author */}
          {post.author && (
            <p className="blog-post__author">By {post.author}</p>
          )}

          {/* Featured Image */}
          {post.featuredImageUrl && (
            <div className="blog-post__featured-image">
              <Image
                src={post.featuredImageUrl}
                alt={post.featuredImageAlt || post.title}
                width={720}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                priority
              />
            </div>
          )}

          {/* Content */}
          {post.content && (
            <div className="blog-post__content">
              <PortableText value={post.content} components={portableTextComponents} />
            </div>
          )}

          {/* Tags */}
          {post.secondaryKeywords && post.secondaryKeywords.length > 0 && (
            <div className="blog-post__tags">
              <span className="blog-post__tags-label">Related topics:</span>
              {post.secondaryKeywords.map((keyword, i) => (
                <span key={i} className="blog-post__tag">{keyword}</span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="blog-listing__cta">
        <div className="blog-listing__cta-inner">
          <h2>Ready to secure your WordPress site?</h2>
          <p>Let our experts handle your WordPress maintenance so you can focus on growing your business.</p>
          <div className="blog-listing__cta-buttons">
            <Link href="/#pricing" className="button-filled w-inline-block">
              See Pricing
            </Link>
            <Link href="/#book" className="button-outline w-inline-block">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="blog-listing__footer">
        <Link href="/blog" className="blog-listing__back-link">
          ← Back to Blog
        </Link>
      </footer>
    </div>
  )
}
