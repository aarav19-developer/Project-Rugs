/**
 * PageHero — reusable top banner for inner pages.
 * Props: eyebrow, title, desc, bg (background color)
 */
export default function PageHero({ eyebrow, title, desc, bg = '#3E4D28' }) {
  return (
    <section className="page-hero" style={{ '--page-hero-bg': bg }}>
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <p className="hero-eyebrow">{eyebrow}</p>
        <h1 className="page-hero-title">{title}</h1>
        {desc && <p className="page-hero-desc">{desc}</p>}
      </div>
    </section>
  )
}
