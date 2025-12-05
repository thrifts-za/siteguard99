import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'WordPress Tips & Insights | The WordPress Team Blog',
  description: 'Expert advice on WordPress security, performance, and maintenance. Learn how to protect and optimize your WordPress site from industry professionals.',
  keywords: ['WordPress security', 'WordPress maintenance', 'WordPress performance', 'WordPress tips', 'WordPress blog'],
  openGraph: {
    title: 'WordPress Tips & Insights | The WordPress Team Blog',
    description: 'Expert advice on WordPress security, performance, and maintenance.',
    type: 'website',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Tips & Insights | The WordPress Team Blog',
    description: 'Expert advice on WordPress security, performance, and maintenance.',
  },
  alternates: {
    canonical: '/blog',
  },
}

const blogListQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  author,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt
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
  category?: string
  publishedAt?: string
  author?: string
  featuredImageUrl?: string
  featuredImageAlt?: string
}

interface SiteSettings {
  siteName: string
  headerLogoUrl?: string
  headerLogoColor?: 'red' | 'default'
}

export default async function BlogPage() {
  const [posts, siteSettings] = await Promise.all([
    safeFetch<BlogPost[]>(blogListQuery),
    safeFetch<SiteSettings>(siteSettingsQuery),
  ])

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

  // Separate featured post (first one) from the rest
  const featuredPost = posts && posts.length > 0 ? posts[0] : null
  const remainingPosts = posts && posts.length > 1 ? posts.slice(1) : []

  return (
    <div className="blog-listing">
      {/* Header */}
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
            <Link href="/#pricing" className="button-filled w-inline-block">
              See Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="blog-listing__hero">
        <div className="blog-listing__hero-inner">
          <span className="blog-listing__label">Blog</span>
          <h1 className="blog-listing__title">WordPress Tips & Insights</h1>
          <p className="blog-listing__subtitle">
            Expert advice on WordPress security, performance, and maintenance to help you build and protect your online presence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="blog-listing__main">
        <div className="blog-listing__container">

          {posts && posts.length > 0 ? (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <section className="blog-listing__featured">
                  <Link href={`/blog/${featuredPost.slug.current}`} className="blog-featured-card">
                    <div className="blog-featured-card__image">
                      {featuredPost.featuredImageUrl ? (
                        <Image
                          src={featuredPost.featuredImageUrl}
                          alt={featuredPost.featuredImageAlt || featuredPost.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          priority
                        />
                      ) : (
                        <div className="blog-featured-card__placeholder">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="blog-featured-card__content">
                      <div className="blog-featured-card__meta">
                        {featuredPost.category && (
                          <span
                            className="blog-featured-card__category"
                            style={{ backgroundColor: categoryColors[featuredPost.category] || '#e63946' }}
                          >
                            {categoryLabels[featuredPost.category] || featuredPost.category}
                          </span>
                        )}
                        {featuredPost.publishedAt && (
                          <time className="blog-featured-card__date">
                            {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        )}
                      </div>
                      <h2 className="blog-featured-card__title">{featuredPost.title}</h2>
                      {featuredPost.excerpt && (
                        <p className="blog-featured-card__excerpt">{featuredPost.excerpt}</p>
                      )}
                      <div className="blog-featured-card__footer">
                        {featuredPost.author && (
                          <span className="blog-featured-card__author">By {featuredPost.author}</span>
                        )}
                        <span className="blog-featured-card__read-more">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </Link>
                </section>
              )}

              {/* Grid Posts */}
              {remainingPosts.length > 0 && (
                <section className="blog-listing__grid-section">
                  <h3 className="blog-listing__section-title">More Articles</h3>
                  <div className="blog-listing__grid">
                    {remainingPosts.map((post) => (
                      <Link
                        key={post._id}
                        href={`/blog/${post.slug.current}`}
                        className="blog-grid-card"
                      >
                        <div className="blog-grid-card__image">
                          {post.featuredImageUrl ? (
                            <Image
                              src={post.featuredImageUrl}
                              alt={post.featuredImageAlt || post.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          ) : (
                            <div className="blog-grid-card__placeholder">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="blog-grid-card__content">
                          <div className="blog-grid-card__meta">
                            {post.category && (
                              <span
                                className="blog-grid-card__category"
                                style={{ color: categoryColors[post.category] || '#e63946' }}
                              >
                                {categoryLabels[post.category] || post.category}
                              </span>
                            )}
                            {post.publishedAt && (
                              <time className="blog-grid-card__date">
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })}
                              </time>
                            )}
                          </div>
                          <h3 className="blog-grid-card__title">{post.title}</h3>
                          {post.excerpt && (
                            <p className="blog-grid-card__excerpt">{post.excerpt}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <div className="blog-listing__empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              <h3>No articles yet</h3>
              <p>Check back soon for WordPress tips and insights!</p>
            </div>
          )}
        </div>
      </main>

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
        <Link href="/" className="blog-listing__back-link">
          ← Back to Home
        </Link>
      </footer>
    </div>
  )
}
