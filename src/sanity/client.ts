import { createClient, SanityClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './env'

// Trim projectId in case of whitespace from env vars
const cleanProjectId = projectId?.trim() || ''

// Check if Sanity is properly configured - simplified check
export const isSanityConfigured = cleanProjectId.length > 0 && cleanProjectId !== 'your_project_id'

// Create a client only if Sanity is configured, otherwise create a mock client
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId: cleanProjectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: 'published',
    })
  : null

// Safely fetch data - returns null if Sanity is not configured
export async function safeFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!client) {
    // Sanity not configured - using default data
    return null
  }
  try {
    // Use no-store to always fetch fresh data from Sanity
    // This ensures Vercel deployments get the latest content
    return await client.fetch(query, params || {}, {
      cache: 'no-store'
    })
  } catch {
    // Error fetching from Sanity - falling back to defaults
    return null
  }
}
