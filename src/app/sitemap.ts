import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'

interface BlogPost {
  slug: string
  _updatedAt: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  if (!client) return []

  try {
    const posts = await client.fetch<BlogPost[]>(`
      *[_type == "blogPost" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt
      }
    `)
    return posts || []
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thewordpressteam.co.za'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Dynamic blog posts
  const blogPosts = await getBlogPosts()
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
