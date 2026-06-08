import '../style/Hero.css'

/* ============================================================
   DUMMY DATA — replace with real values when available
   ============================================================ */
// TODO: Replace HERO_IMAGE with actual high-quality carpet/artisan photo path
// e.g. '/assets/hero-carpet.jpg'
const HERO_IMAGE = 'https://placehold.co/1920x1080/5C6B3A/D4C5A3?text=Handcrafted+Carpets+Since+Generations'

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Image */}
      <div className="hero-bg">
        {/* TODO: Replace src with actual hero image */}
        <img src={HERO_IMAGE} alt="Handcrafted carpets hero" />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">Est. in Meerut, India &nbsp;·&nbsp; Exporting Excellence</p>

        <h1 className="hero-title">
          Deen Dayal<br />
          <span>Rugs Exports</span>
        </h1>

        <p className="hero-tagline">Crafted by Hand, Loved Worldwide</p>

        <p className="hero-desc">
          Weaving generations of tradition into every knot — premium handmade carpets
          crafted by master artisans, delivered to the world's finest homes and interiors.
        </p>

        <div className="hero-btns">
          <a href="#products" className="btn-primary">Explore Our Collection</a>
          <a href="#enquiry"  className="btn-secondary">Enquire Now</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span>Scroll to discover</span>
        <i className="fa-solid fa-chevron-down" />
      </div>
    </section>
  )
}