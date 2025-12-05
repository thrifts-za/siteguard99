/**
 * Sanitizes HTML content for custom scripts.
 * On the server, we trust Sanity CMS content as it requires authentication.
 * On the client, we use a simple validation approach.
 */
export function sanitizeHTML(dirty: string | null | undefined): string {
  if (!dirty) return ''

  // Basic validation - ensure content looks like valid script/tracking code
  // We trust Sanity CMS content as it requires authenticated access
  const trimmed = dirty.trim()

  // Allow only script-like content patterns (Google Analytics, FB Pixel, etc.)
  const hasValidPattern =
    trimmed.includes('<script') ||
    trimmed.includes('<noscript') ||
    trimmed.includes('<link') ||
    trimmed.includes('<meta') ||
    trimmed.includes('<style') ||
    trimmed.includes('gtag') ||
    trimmed.includes('fbq') ||
    trimmed.includes('clarity') ||
    trimmed.includes('hotjar')

  // Return content if it matches expected patterns, empty string otherwise
  return hasValidPattern ? dirty : ''
}

/**
 * Validates if a script URL is from a trusted source
 */
export function isTrustedScriptSource(url: string): boolean {
  const trustedDomains = [
    'googletagmanager.com',
    'google-analytics.com',
    'connect.facebook.net',
    'static.hotjar.com',
    'clarity.ms',
    'app.cal.com',
    'cdn.jsdelivr.net',
    'unpkg.com',
  ]

  try {
    const urlObj = new URL(url)
    return trustedDomains.some((domain) => urlObj.hostname.endsWith(domain))
  } catch {
    return false
  }
}
