/**
 * Upload blog images to Sanity and update blog posts
 * Run with: npx tsx scripts/upload-blog-images.ts
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const blogImages = [
  {
    blogId: 'blog-wordpress-security-guide',
    imagePath: 'public/images/blog/security.jpg',
    alt: 'WordPress security concept with lock and code',
  },
  {
    blogId: 'blog-wordpress-speed-optimization',
    imagePath: 'public/images/blog/speed.jpg',
    alt: 'Website speed optimization dashboard',
  },
  {
    blogId: 'blog-wordpress-backup-guide',
    imagePath: 'public/images/blog/backup.jpg',
    alt: 'Data backup and cloud storage concept',
  },
]

async function uploadImageAndUpdatePost(blogId: string, imagePath: string, alt: string) {
  const fullPath = path.join(process.cwd(), imagePath)

  if (!fs.existsSync(fullPath)) {
    console.log(`Image not found: ${fullPath}`)
    return
  }

  try {
    // Upload image to Sanity
    const imageAsset = await client.assets.upload('image', fs.createReadStream(fullPath), {
      filename: path.basename(imagePath),
    })

    console.log(`Uploaded image: ${imageAsset._id}`)

    // Update the blog post with the image reference
    await client
      .patch(blogId)
      .set({
        featuredImage: {
          _type: 'image',
          alt: alt,
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        },
      })
      .commit()

    console.log(`Updated blog post: ${blogId}`)
  } catch (error) {
    console.error(`Error processing ${blogId}:`, error)
  }
}

async function main() {
  console.log('Uploading blog images to Sanity...\n')

  for (const blog of blogImages) {
    await uploadImageAndUpdatePost(blog.blogId, blog.imagePath, blog.alt)
  }

  console.log('\nDone!')
}

main()
