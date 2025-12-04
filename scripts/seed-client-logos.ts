/**
 * Seed Client Logos to Sanity (as actual Clients, not WordPress Tools)
 * Run with: npx tsx scripts/seed-client-logos.ts
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

// Load environment variables
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Map filenames to friendly client names
const clientNameMap: Record<string, string> = {
  'Denis-Logo-White-r9m4zf11wepud474cshgguzzqe8mrxd0w4szrexb0g.webp': 'Denis',
  'K-Logo-2.svg': 'K Logo',
  'Logo__2.webp': 'Logo 2',
  'MastheadFP.png': 'Masthead FP',
  'NextTec-Logo-RGB-Regular-1920x426.webp': 'NextTec',
  'ShortPar4-FullLogo_ac209c5a-b645-4fb8-b784-1d02d8336945.avif': 'ShortPar4',
  'angama-logo-white.svg': 'Angama',
  'cropped-favicon-192x192.png': 'Favicon Client',
  'denis_logo_2x.png': 'Denis 2x',
  'home2.png': 'Home 2',
  'logo-v2_0.png': 'Logo V2',
  'mastheadlogo.svg': 'Masthead',
  'mumbo-logo-header.avif': 'Mumbo',
  'pret_Pakkie_Logo.avif': 'Pret Pakkie',
  'rgb_column-row-logo_LRG-WITH-TAG-STACK-color.png': 'Column Row',
  'tbnlogo-white.avif': 'TBN',
  'tmp25gm06x5.webp': 'Client 1',
  'tmp4z33ouen.webp': 'Client 2',
  'tmp7jufi9o3.webp': 'Client 3',
  'tmpdbll7nor.webp': 'Client 4',
  'tmppohfb0ai.webp': 'Client 5',
  'tmps0dh0lpm.webp': 'Client 6',
}

async function uploadImage(filePath: string) {
  const imageBuffer = fs.readFileSync(filePath)
  const filename = path.basename(filePath)

  try {
    const asset = await client.assets.upload('image', imageBuffer, {
      filename,
    })
    console.log(`📷 Uploaded image: ${filename}`)
    return asset._id
  } catch (error) {
    console.error(`❌ Error uploading ${filename}:`, error)
    return null
  }
}

async function seedClientLogos() {
  const logosDir = '/Users/nkosinathindwandwe/DevOps/SiteGuard99/Plan/Clients'
  const files = fs.readdirSync(logosDir).filter(f => !f.startsWith('.'))

  console.log(`Found ${files.length} client logo files`)

  const clientLogoRefs: { _type: string; _ref: string; _key: string }[] = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const filePath = path.join(logosDir, file)
    const clientName = clientNameMap[file] || file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')

    console.log(`\nProcessing ${i + 1}/${files.length}: ${clientName}`)

    // Upload the image
    const assetId = await uploadImage(filePath)

    if (assetId) {
      // Create the client document (not clientLogo which is for WordPress Tools)
      const docId = `client-${file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`

      try {
        await client.createOrReplace({
          _id: docId,
          _type: 'client',
          name: clientName,
          logo: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: assetId,
            },
          },
          order: i + 1,
          useRedColor: false,
        })
        console.log(`✅ Created client: ${clientName}`)

        // Add reference for pricing section
        clientLogoRefs.push({
          _type: 'reference',
          _ref: docId,
          _key: `key-${i}`,
        })
      } catch (error) {
        console.error(`❌ Error creating client document:`, error)
      }
    }
  }

  // Update pricing section with the new client logos
  console.log('\n📝 Updating pricing section with client logos...')
  try {
    await client
      .patch('pricingSection')
      .set({ clientLogos: clientLogoRefs })
      .commit()
    console.log('✅ Updated pricing section with client logos')
  } catch (error) {
    console.error('❌ Error updating pricing section:', error)
  }

  console.log('\n🎉 Done seeding client logos!')
}

seedClientLogos()
