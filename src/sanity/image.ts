import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client, isSanityConfigured } from './client'
import { projectId, dataset } from './env'

// Create builder with fallback configuration
const builder = isSanityConfigured && client
  ? imageUrlBuilder(client)
  : imageUrlBuilder({ projectId: projectId || 'placeholder', dataset: dataset || 'production' })

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
