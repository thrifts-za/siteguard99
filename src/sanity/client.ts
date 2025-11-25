import { createClient, SanityClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './env'

// Check if Sanity is properly configured
export const isSanityConfigured = Boolean(
  projectId &&
  projectId !== 'your_project_id' &&
  /^[a-z0-9-]+$/.test(projectId)
)

// Create a client only if Sanity is configured, otherwise create a mock client
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: 'published',
    })
  : null

// Safely fetch data - returns null if Sanity is not configured
export async function safeFetch<T>(query: string): Promise<T | null> {
  if (!client) {
    console.log('Sanity not configured - using default data')
    return null
  }
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return null
  }
}
