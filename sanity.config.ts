'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import { structure } from './src/sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'siteguard99-studio',
  title: 'SiteGuard99 Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],
  schema: {
    types: schemaTypes,
  },
})
