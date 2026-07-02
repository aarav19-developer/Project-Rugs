import '../style/Products.css'

/* ============================================================
   DUMMY DATA — replace with real values when available
   ============================================================ */
// TODO: Replace each `image` path with actual product photo
// e.g. '/assets/products/carpet.jpg'
const PRODUCTS = [
  {
    id: 1,
    title: 'Carpets',
    desc: 'Hand-knotted, hand-tufted, flat weave, and more — each style crafted with precision to deliver dense, durable, and intricate patterns built to endure.',
    badge: 'Customized Available',
    image: 'https://placehold.co/480x560/A89070/FFF8EE?text=Carpets',
  },
  {
    id: 2,
    title: 'Poufs',
    desc: 'Handcrafted poufs made from premium wool and natural fibres — perfect as seating, footrests, or decorative accents for any living space.',
    badge: null,
    image: 'https://placehold.co/480x560/8B7355/FFF8EE?text=Poufs',
  },
  {
    id: 3,
    title: 'Cushions',
    desc: 'Artisan-made cushions in a variety of textures, patterns, and sizes — woven with the same care and precision as our finest carpets, finished with durable zip closures.',
    badge: null,
    image: 'https://placehold.co/480x560/C4A882/3D3427?text=Cushions',
  },
  {
    id: 4,
    title: 'Wall Art',
    desc: 'Transform your walls with handcrafted textile art — unique, one-of-a-kind pieces that bring warmth, colour, and culture into your interior.',
    badge: null,
    image: 'https://placehold.co/480x560/7A6B55/FFF8EE?text=Wall+Art',
  },
  {
    id: 5,
    title: 'Wall Hanging',
    desc: 'Traditional and contemporary wall hangings hand-woven by skilled artisans — each piece tells a story of craft, heritage, and artistic expression.',
    badge: null,
    image: 'https://placehold.co/480x560/B8A898/3D3427?text=Wall+Hanging',
  },
  {
    id: 6,
    title: 'Stool Wood',
    desc: 'Hand-finished wooden stools crafted from eucalyptus, sheesham and teak — combining natural timber with handwoven textile tops for functional art.',
    badge: null,
    image: 'https://placehold.co/480x560/6B7C4A/FFF8EE?text=Stool+Wood',
  },
  {
    id: 7,
    title: 'Benches',
    desc: 'Beautifully crafted benches from eucalyptus, sheesham and teak — featuring hand-woven, hand-tufted and circular knit upholstery for elegant, lasting seating.',
    badge: null,
    image: 'https://placehold.co/480x560/9B8A70/FFF8EE?text=Benches',
  },
]

export default function Products() {
  return (
    <section className="products section-pad bg-sand" id="products">
      <div className="container">
        <div className="section-header reveal-up">
          <p className="section-eyebrow">Our Collection</p>
          <h2 className="section-title">
            Every Product,<br /><em>A Masterpiece</em>
          </h2>
          <p className="section-desc">
            Explore our range of handcrafted goods — each woven with purpose,
            precision, and an unmistakable human touch.
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <div
              className="product-card reveal-up"
              key={p.id}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="product-img">
                {/* TODO: Replace p.image with actual product photo once available */}
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.title.toLowerCase()} exported from Meerut, Uttar Pradesh, India`}
                  loading="lazy"
                  width="480"
                  height="560"
                />
                {p.badge && <span className="product-badge">{p.badge}</span>}
                <div className="product-overlay">
                  <a href="#enquiry" className="btn-enquire">Enquire About This</a>
                </div>
              </div>
              <div className="product-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#enquiry" className="product-link">
                  Enquire <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}