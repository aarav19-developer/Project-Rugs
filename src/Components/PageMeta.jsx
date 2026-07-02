import { useEffect } from 'react'

/**
 * PageMeta — sets document title, meta description, canonical URL,
 * Open Graph tags, and optional per-page JSON-LD structured data.
 *
 * Props:
 *   title       — page <title> and og:title
 *   description — meta description and og:description
 *   canonical   — canonical URL for this page
 *   jsonLd      — (optional) JSON-LD object for page-level structured data
 */
export default function PageMeta({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    // ── Title ──
    document.title = title

    // ── Meta description ──
    let desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', description)

    // ── OG title ──
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    // ── OG description ──
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    // ── OG URL + canonical ──
    const url = canonical || window.location.href
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', url)

    let canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', url)

    // ── Twitter ──
    let twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', title)
    let twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', description)

    // ── Per-page JSON-LD structured data ──
    // Remove any previously injected page-level script first
    const existing = document.getElementById('page-jsonld')
    if (existing) existing.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'page-jsonld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    // Cleanup on unmount
    return () => {
      const s = document.getElementById('page-jsonld')
      if (s) s.remove()
    }
  }, [title, description, canonical, jsonLd])

  return null
}
