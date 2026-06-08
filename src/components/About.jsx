import '../style/About.css'

/* ============================================================
   DUMMY DATA — replace with real values when available
   ============================================================ */
// TODO: Replace ARTISAN_IMAGE with real artisan/craftsman photo
// e.g. '/assets/artisan-work.jpg'
const ARTISAN_IMAGE = 'https://placehold.co/600x720/C8B89A/3D3427?text=Our+Craftsmen+at+Work'

// TODO: Replace this with an actual video or animation component of artisans working
// You can use a <video> tag or a Lottie animation here
const SHOW_ANIMATION_PLACEHOLDER = true

const STATS = [
  { num: '500+', label: 'Designs in Portfolio' },
  { num: '20+',  label: 'Countries Served'     },
  { num: '100%', label: 'Handmade'              },
]

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="about-grid">

          {/* ── LEFT: Image / Animation ── */}
          <div className="about-image reveal-left">
            <div className="img-frame">

              {SHOW_ANIMATION_PLACEHOLDER ? (
                /* TODO: Replace this div with a real artisan video or Lottie animation.
                   Example using video:
                   <video src="/assets/artisan-work.mp4" autoPlay loop muted playsInline />
                   Example using Lottie:
                   import Lottie from 'lottie-react'
                   <Lottie animationData={artisanAnim} loop />
                */
                <div className="animation-placeholder">
                  <i className="fa-solid fa-play-circle" />
                  <p>Artisan at work</p>
                  <span>Replace with video / animation</span>
                </div>
              ) : (
                /* TODO: Replace src with actual artisan image */
                <img src={ARTISAN_IMAGE} alt="Artisans crafting carpets" />
              )}
            </div>

            <div className="about-badge">
              <span className="badge-num">30<sup>+</sup></span>
              <span className="badge-text">Years of<br />Craftsmanship</span>
            </div>
          </div>

          {/* ── RIGHT: Text ── */}
          <div className="about-text reveal-right">
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-title">
              A Legacy Woven<br /><em>Thread by Thread</em>
            </h2>
            <p>
              Deen Dayal Rugs Exports is a family-rooted export house born from the carpet
              weaving heartland of <strong>Meerut, Uttar Pradesh</strong> — a region that has
              shaped India's handmade carpet industry for centuries. What began as a small
              workshop driven by a passion for traditional craftsmanship has grown into a
              trusted name in the global carpet export market.
            </p>
            <p>
              We work hand-in-hand with hundreds of skilled artisans who carry forward weaving
              techniques passed down through generations. Every carpet that leaves our factory is
              not just a product — it is a testament to patience, precision, and pride.
            </p>
            <p>
              Our commitment is to preserve the soul of Indian handcraft while meeting the highest
              international quality and compliance standards demanded by buyers across{' '}
              <strong>USA, UK, Europe, UAE, Australia</strong> and beyond.
            </p>

            <div className="about-stats">
              {STATS.map((s) => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}