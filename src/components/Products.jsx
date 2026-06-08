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
    desc: 'The pinnacle of carpet craftsmanship — hand-knotted, hand-tufted, flat weave, and more. Individually tied knots creating dense, durable, and intricate patterns that last lifetimes.',
    badge: 'Customized Available',
    // TODO: Replace with actual carpet product image
    image: 'https://placehold.co/480x560/A89070/FFF8EE?text=Carpets',
  },
  {
    id: 2,
    title: 'Poufs',
    desc: 'Handcrafted poufs made from premium wool and natural fibres — perfect as seating, footrests, or decorative accents for any living space.',
    badge: null,
    // TODO: Replace with actual pouf product image
    image: 'https://placehold.co/480x560/8B7355/FFF8EE?text=Poufs',
  },
  {
    id: 3,
    title: 'Cushions',
    desc: 'Artisan-made cushions in a variety of textures, patterns, and sizes — woven with the same care and precision as our finest carpets.',
    badge: null,
    // TODO: Replace with actual cushion product image
    image: 'https://placehold.co/480x560/C4A882/3D3427?text=Cushions',
  },
  {
    id: 4,
    title: 'Wall Art',
    desc: 'Transform your walls with handcrafted textile art — unique, one-of-a-kind pieces that bring warmth, colour, and culture into your interior.',
    badge: null,
    // TODO: Replace with actual wall art product image
    image: 'https://placehold.co/480x560/7A6B55/FFF8EE?text=Wall+Art',
  },
  {
    id: 5,
    title: 'Wall Hanging',
    desc: 'Traditional and contemporary wall hangings woven by skilled artisans — each piece tells a story of craft, heritage, and artistic expression.',
    badge: null,
    // TODO: Replace with actual wall hanging product image
    image: 'https://placehold.co/480x560/B8A898/3D3427?text=Wall+Hanging',
  },
  {
    id: 6,
    title: 'Stool Wood',
    desc: 'Hand-finished wooden stools combining natural timber with handwoven textile tops — functional art that complements any interior style.',
    badge: null,
    // TODO: Replace with actual wooden stool product image
    image: 'https://placehold.co/480x560/6B7C4A/FFF8EE?text=Stool+Wood',
  },
  {
    id: 7,
    title: 'Benches',
    desc: 'Beautifully crafted benches with handwoven upholstery — merging structural craftsmanship with the art of textile weaving for elegant seating.',
    badge: null,
    // TODO: Replace with actual bench product image
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
                <img src={p.image} alt={p.title} />
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