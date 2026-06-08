import { Link } from 'react-router-dom'
import PageHero from '../Components/PageHero'

const PRODUCTS = [
  {
    id: 'carpets',
    title: 'Carpets',
    badge: 'Customisation Available',
    bg: '#A89070',
    icon: 'fa-solid fa-grip',
    shortDesc: 'Hand-knotted, hand-tufted, and flat weave — crafted to last lifetimes.',
    details: [
      'Hand-Knotted — individually tied knots, 3–12 months per piece',
      'Hand-Tufted — rich textures, faster production for contemporary designs',
      'Flat Weave — lightweight, reversible, bold geometric patterns',
      'Custom sizes from small accent rugs to grand hall carpets',
      'Natural wool, silk blends, cotton and jute options',
    ],
  },
  {
    id: 'poufs',
    title: 'Poufs',
    badge: null,
    bg: '#8B7355',
    icon: 'fa-solid fa-circle',
    shortDesc: 'Handcrafted wool and jute poufs — perfect as footrests or accent seating.',
    details: [
      'Round, square and custom shapes available',
      'Natural wool, cotton, jute and leather finishes',
      'Filled and unfilled options for easy shipping',
      'Wide range of patterns — geometric, striped, and solid',
      'Custom colours and sizes on request',
    ],
  },
  {
    id: 'cushions',
    title: 'Cushions',
    badge: null,
    bg: '#C4A882',
    icon: 'fa-solid fa-square',
    shortDesc: 'Artisan-made cushion covers with traditional weave patterns and earthy tones.',
    details: [
      'Hand-woven and hand-tufted cushion covers',
      'Standard sizes: 18×18", 20×20", 24×24" — custom available',
      'Natural wool, cotton, silk blend fabrics',
      'Traditional motifs, geometric patterns, and modern minimalist designs',
      'Zip closure, inner cushion available on request',
    ],
  },
  {
    id: 'wall-art',
    title: 'Wall Art',
    badge: null,
    bg: '#7A6B55',
    icon: 'fa-solid fa-image',
    shortDesc: 'Statement hand-woven wall pieces — unique artworks that transform any interior.',
    details: [
      'Hand-woven textile wall art in natural fibres',
      'Abstract, traditional and contemporary designs',
      'Custom dimensions and bespoke commissions accepted',
      'Ready-to-hang with concealed hanging hardware',
      'Each piece is unique — one-of-a-kind artwork',
    ],
  },
  {
    id: 'wall-hanging',
    title: 'Wall Hangings',
    badge: null,
    bg: '#B8A898',
    icon: 'fa-solid fa-panorama',
    shortDesc: 'Bohemian and traditional wall hangings crafted with wool, cotton, and natural fibres.',
    details: [
      'Hand-knotted macramé and woven styles',
      'Natural cotton, jute, wool and mixed fibre options',
      'Driftwood, brass rod and wooden dowel mounting options',
      'Boho, Scandinavian and traditional Indian design themes',
      'Custom sizing for feature walls',
    ],
  },
  {
    id: 'stool-wood',
    title: 'Wooden Stools',
    badge: null,
    bg: '#6B5A3E',
    icon: 'fa-solid fa-chair',
    shortDesc: 'Solid wood stools with hand-woven or hand-tufted upholstered tops.',
    details: [
      'Solid mango, sheesham and teak wood frames',
      'Hand-woven or hand-tufted fabric seats',
      'Round, square and drum shapes available',
      'Natural wood finish, painted and distressed options',
      'Custom upholstery fabrics and dimensions available',
    ],
  },
  {
    id: 'benches',
    title: 'Benches',
    badge: null,
    bg: '#6B7C4A',
    icon: 'fa-solid fa-couch',
    shortDesc: 'Handcrafted wooden benches with fabric-upholstered seats — ideal for any interior.',
    details: [
      'Solid wood construction — mango, sheesham, teak',
      'Hand-woven and upholstered seat cushions',
      'Entryway, bedroom and hospitality sizes available',
      'Storage benches and ottomans also available',
      'Custom dimensions, fabrics and wood finishes',
    ],
  },
]

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Collection"
        title="Every Piece, A Masterpiece"
        desc="7 categories of 100% handmade products — crafted with precision, purpose, and soul."
        bg="#A07850"
      />

      {/* ── PRODUCT INTRO ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">What We Make</p>
            <h2 className="section-title">
              Handmade Products<br /><em>for the World</em>
            </h2>
            <p className="section-desc">
              From floor to wall, from seating to art — every product is crafted by skilled
              artisans using traditional techniques and natural materials.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CARDS ── */}
      {PRODUCTS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`product-page-section section-pad${i % 2 !== 0 ? ' bg-sand' : ''}`}
        >
          <div className="container">
            <div className={`product-page-grid${i % 2 !== 0 ? ' reverse' : ''}`}>

              {/* Image / Placeholder */}
              <div className={i % 2 !== 0 ? 'reveal-right' : 'reveal-left'}>
                <div className="product-page-img" style={{ background: p.bg }}>
                  <i className={p.icon} />
                  {/* TODO: Replace with <img src={`/images/products/${p.id}.jpg`} alt={p.title} /> */}
                  <span>Add your product image here</span>
                </div>
                {p.badge && <div className="product-page-badge">{p.badge}</div>}
              </div>

              {/* Text */}
              <div className={i % 2 !== 0 ? 'reveal-left' : 'reveal-right'}>
                <p className="section-eyebrow">Product Category {String(i + 1).padStart(2, '0')}</p>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
                  {p.title}
                </h2>
                <p style={{ color: 'var(--text-mid)', marginBottom: '24px', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {p.shortDesc}
                </p>
                <ul className="product-features">
                  {p.details.map((d) => (
                    <li key={d}><i className="fa-solid fa-check" />{d}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
                  Enquire About {p.title} <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="page-cta section-pad bg-olive">
        <div className="container">
          <div className="page-cta-inner light reveal-up">
            <h2>Need a Custom Order?</h2>
            <p>We produce any product in custom sizes, colours, and designs. Talk to our team about your requirements.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">Send Enquiry</Link>
              <Link to="/process" className="btn-secondary">See How We Make It</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
