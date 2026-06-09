import { useEffect } from 'react'

/**
 * PageMeta — sets document title, meta description, and canonical URL
 * for each page. Call at the top of every page component.
 */
export default function PageMeta({ title, description, canonical }) {
  useEffect(() => {
    // Title
    document.title = title

    // Description
    let desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', description)

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    // OG URL + canonical
    const url = canonical || window.location.href
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', url)

    let canon = document.querySelector('link[rel="canonical"]')
    if (canon) canon.setAttribute('href', url)
  }, [title, description, canonical])

  return null
}
