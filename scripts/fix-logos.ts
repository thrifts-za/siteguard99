/**
 * Fix Client Logos - Remove client logos from pricing section
 * and keep only tool logos there
 * Run with: npx tsx scripts/fix-logos.ts
 */

import { createClient } from '@sanity/client'
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

async function fixLogos() {
  console.log('🔧 Fixing logos...\n')

  // 1. Clear the pricing section's clientLogos field
  console.log('1. Clearing pricing section client logos...')
  try {
    await client
      .patch('pricingSection')
      .unset(['clientLogos'])
      .commit()
    console.log('✅ Cleared pricing section client logos\n')
  } catch (error) {
    console.log('ℹ️  Pricing section clientLogos already empty or not found\n')
  }

  // 2. Delete all client logos that start with "pricingClientLogo-" (the ones we just added)
  console.log('2. Deleting incorrectly added client logos...')
  try {
    const pricingLogos = await client.fetch('*[_type == "clientLogo" && _id match "pricingClientLogo-*"]._id')
    console.log(`Found ${pricingLogos.length} logos to delete`)

    for (const id of pricingLogos) {
      await client.delete(id)
      console.log(`  Deleted: ${id}`)
    }
    console.log('✅ Deleted pricing client logos\n')
  } catch (error) {
    console.error('❌ Error deleting logos:', error)
  }

  // 3. Also delete the ones with "clientLogo-" prefix from the first run
  console.log('3. Deleting first batch of incorrectly added logos...')
  try {
    const firstBatchLogos = await client.fetch('*[_type == "clientLogo" && _id match "clientLogo-*"]._id')
    console.log(`Found ${firstBatchLogos.length} logos to delete`)

    for (const id of firstBatchLogos) {
      await client.delete(id)
      console.log(`  Deleted: ${id}`)
    }
    console.log('✅ Deleted first batch logos\n')
  } catch (error) {
    console.error('❌ Error deleting logos:', error)
  }

  console.log('🎉 Done! The pricing section now only shows the original tool logos.')
  console.log('\nThe client logos from Plan/Clients have been removed.')
  console.log('You can now add them separately as actual client logos if needed.')
}

fixLogos()
