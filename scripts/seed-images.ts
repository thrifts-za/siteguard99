/**
 * Sanity Image Seed Script
 *
 * This script uploads all site images to Sanity and creates the siteGraphics document
 * Run with: npx tsx scripts/seed-images.ts
 */

import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images')

// Image mappings - local file names to their Sanity field names
const imageMapping = {
  // Hero Section
  heroMemberCard: '678548430d58f4cbecec196c_card.png',
  heroCallAvatar: '678548430d58f4cbecec196f_Group 11.png',

  // How It Works Section
  subscribePriceTag: '678548430d58f4cbecec1977_price.svg',
  requestSmile: '678548430d58f4cbecec197e_Smile.png',

  // Testimonials
  testimonialAuthorImage: '678548430d58f4cbecec19bd_Group 1171274555.png',

  // Pricing Section
  pricingCardImage: '678548430d58f4cbecec19a8_Group 1171274554.png',
  pricingSmileIcon: '678548430d58f4cbecec19a3_smile.svg',
  pricingPauseIcon: '678548430d58f4cbecec19b6_Pause-Circle--Streamline-Micro.svg',
  pricingCheckIcon: '678548430d58f4cbecec19b7_Validation-Check-Circle--Streamline-Micro.svg',
  pricingDecorative1: '678548430d58f4cbecec19d5_Group 1171274461.svg',

  // FAQ Section
  faqBookCallImage: '678548430d58f4cbecec19b9_Group 10.png',
  faqEmailIcon: '678548430d58f4cbecec19bb_Send-Email--Streamline-Ultimate.png',

  // Footer
  footerSmileyFaces: '678548430d58f4cbecec19d8_Smiley faces.svg',

  // UI Icons
  arrowIcon: '678548430d58f4cbecec196a_arrow.svg',
  phoneIcon: '678548430d58f4cbecec19bf_Phone--Streamline-Ultimate (1).svg',
  chevronIcon: '678548430d58f4cbecec19b8_chevron-down 1.svg',

  // Services Decorative
  servicesDecorative1: '678548430d58f4cbecec19d4_pink.svg',
  servicesDecorative2: '678548430d58f4cbecec19d6_Group 1171274487.svg',
}

// Client logos array
const clientLogosFiles = [
  { name: 'Nectar', file: '678548430d58f4cbecec1986_Nectar-sleep-logo-vector 1.svg' },
  { name: 'Buy Me a Coffee', file: '678548430d58f4cbecec1987_bmc-full-logo 1.svg' },
  { name: 'Levels', file: '678548430d58f4cbecec198a_svg.svg' },
  { name: 'Beehiiv', file: '678548430d58f4cbecec1989_Vector.svg' },
  { name: 'Otta', file: '678548430d58f4cbecec1988_6203180d8e14605fb2d2c003_Vector 1.svg' },
]

// Recent work images array
const recentWorkImagesFiles = [
  { name: 'Project 1', file: '678548430d58f4cbecec19ea_Group 1171274558.png' },
  { name: 'Project 2', file: '678548430d58f4cbecec19ee_Group 1171274560.png' },
  { name: 'Project 3', file: '678548430d58f4cbecec19de_Group 1171274563.png' },
  { name: 'Project 4', file: '678548430d58f4cbecec19e6_Group 1171274559.png' },
  { name: 'Project 5', file: '678548430d58f4cbecec19e2_Group 1171274561.png' },
  { name: 'Project 6', file: '678548430d58f4cbecec19da_Group 1171274562.png' },
]

// Award badges array
const awardBadgesFiles = [
  {
    companyName: 'Buy Me A Coffee',
    companyLogo: '6785582d859f4a059de5f543_Group 1171274565.svg',
    awardTitle: 'Fintech Product of the Year',
    awardSourceLogo: '678557d2de5ecf01f3e67f14_producthunt-official (1) 1.svg',
  },
  {
    companyName: 'Switchboard',
    companyLogo: '6785584fcfd39e0459ff4001_Switchboard_Logo_Symbol 4.svg',
    awardTitle: 'Remote Work Product of the Year',
    awardSourceLogo: '678557d2de5ecf01f3e67f14_producthunt-official (1) 1.svg',
  },
]

// Benefit icons array
const benefitIconsFiles = [
  { benefitName: 'Design board', file: '678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png' },
  { benefitName: 'Fixed monthly rate', file: '678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png' },
  { benefitName: 'Fast delivery', file: '678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png' },
  { benefitName: 'Top-notch quality', file: '678548430d58f4cbecec199d_Star--Streamline-Nova.png' },
  { benefitName: 'Flexible and scalable', file: '678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png' },
  { benefitName: 'Unique and all yours', file: '678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png' },
]

// Helper to get MIME type from file extension
function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase()
  const mimeTypes: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

// Upload an image file to Sanity and return the asset reference
async function uploadImage(filename: string): Promise<{ _type: 'image'; asset: { _type: 'reference'; _ref: string } } | null> {
  const filePath = path.join(IMAGES_DIR, filename)

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filename}`)
    return null
  }

  try {
    const fileBuffer = fs.readFileSync(filePath)
    const asset = await client.assets.upload('image', fileBuffer, {
      filename,
      contentType: getMimeType(filename),
    })

    console.log(`✅ Uploaded: ${filename}`)
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
  } catch (error) {
    console.error(`❌ Error uploading ${filename}:`, error)
    return null
  }
}

async function seed() {
  console.log('🖼️  Starting Sanity image seeding...\n')

  // Build the siteGraphics document
  const siteGraphicsDoc: { _id: string; _type: string; [key: string]: unknown } = {
    _id: 'siteGraphics',
    _type: 'siteGraphics',
  }

  // Upload single images
  console.log('📷 Uploading single images...\n')
  for (const [fieldName, filename] of Object.entries(imageMapping)) {
    const imageRef = await uploadImage(filename)
    if (imageRef) {
      siteGraphicsDoc[fieldName] = imageRef
    }
  }

  // Upload client logos
  console.log('\n🏢 Uploading client logos...')
  const clientLogos = []
  for (const logo of clientLogosFiles) {
    const imageRef = await uploadImage(logo.file)
    if (imageRef) {
      clientLogos.push({
        _key: logo.name.replace(/\s+/g, '-').toLowerCase(),
        name: logo.name,
        logo: imageRef,
      })
    }
  }
  siteGraphicsDoc.clientLogos = clientLogos

  // Upload recent work images
  console.log('\n🎨 Uploading recent work images...')
  const recentWorkImages = []
  for (const work of recentWorkImagesFiles) {
    const imageRef = await uploadImage(work.file)
    if (imageRef) {
      recentWorkImages.push({
        _key: work.name.replace(/\s+/g, '-').toLowerCase(),
        name: work.name,
        image: imageRef,
      })
    }
  }
  siteGraphicsDoc.recentWorkImages = recentWorkImages

  // Upload award badges
  console.log('\n🏆 Uploading award badges...')
  const awardBadges = []
  for (const badge of awardBadgesFiles) {
    const companyLogoRef = await uploadImage(badge.companyLogo)
    const awardSourceLogoRef = await uploadImage(badge.awardSourceLogo)

    if (companyLogoRef) {
      awardBadges.push({
        _key: badge.companyName.replace(/\s+/g, '-').toLowerCase(),
        companyName: badge.companyName,
        companyLogo: companyLogoRef,
        awardTitle: badge.awardTitle,
        awardSourceLogo: awardSourceLogoRef,
      })
    }
  }
  siteGraphicsDoc.awardBadges = awardBadges

  // Upload benefit icons
  console.log('\n⭐ Uploading benefit icons...')
  const benefitIcons = []
  for (const icon of benefitIconsFiles) {
    const imageRef = await uploadImage(icon.file)
    if (imageRef) {
      benefitIcons.push({
        _key: icon.benefitName.replace(/\s+/g, '-').toLowerCase(),
        benefitName: icon.benefitName,
        icon: imageRef,
      })
    }
  }
  siteGraphicsDoc.benefitIcons = benefitIcons

  // Create or update the siteGraphics document
  console.log('\n💾 Saving siteGraphics document...')
  try {
    await client.createOrReplace(siteGraphicsDoc)
    console.log('✅ siteGraphics document saved successfully!')
  } catch (error) {
    console.error('❌ Error saving siteGraphics document:', error)
  }

  // Summary
  console.log('\n✨ Image seeding complete!')
  console.log('\n📊 Summary:')
  console.log(`   - ${Object.keys(imageMapping).length} single images`)
  console.log(`   - ${clientLogos.length} client logos`)
  console.log(`   - ${recentWorkImages.length} recent work images`)
  console.log(`   - ${awardBadges.length} award badges`)
  console.log(`   - ${benefitIcons.length} benefit icons`)
  console.log('\n🔗 Access your Sanity Studio at: http://localhost:3000/studio')
}

seed().catch(console.error)
