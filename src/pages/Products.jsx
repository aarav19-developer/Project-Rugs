import { Link } from 'react-router-dom'
import PageHero from '../Components/PageHero'
import PageMeta from '../Components/PageMeta'
import ImageSlider from '../Components/ImageSlider'

const PRODUCTS = [
  {
    id: 'carpets',
    title: 'Carpets',
    badge: 'Customisation Available',
    images: [
      { src: '/Product/Carpet/c1.webp', alt: 'Handmade carpet by Deen Dayal Rugs Exports' },
      { src: '/Product/Carpet/c2.webp', alt: 'Hand-knotted carpet Meerut India' },
      { src: '/Product/Carpet/c3.webp', alt: 'Premium wool carpet exporter India' },
      { src: '/Product/Carpet/c4.webp', alt: 'Custom carpet manufacturer Meerut' },
    ],
    shortDesc: 'Hand-knotted, hand-tufted, and flat weave — crafted to last lifetimes.',
    details: [
      'Hand-Knotted — individually tied knots for unmatched density and durability',
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
    images: [
      { src: '/Product/Poufs/p1.webp', alt: 'Handcrafted pouf Deen Dayal Rugs Exports' },
      { src: '/Product/Poufs/p2.webp', alt: 'Wool pouf exporter India' },
      { src: '/Product/Poufs/p3.webp', alt: 'Jute pouf manufacturer Meerut' },
    ],
    shortDesc: 'Handcrafted wool and jute poufs — perfect as footrests or accent seating.',
    details: [
      'Round, square and custom shapes available',
      'Natural wool, cotton and jute finishes',
      'Filled and unfilled options for easy shipping',
      'Wide range of patterns — geometric, striped, and solid',
      'Custom colours and sizes on request',
    ],
  },
  {
    id: 'cushions',
    title: 'Cushions',
    badge: null,
    images: [
      { src: '/Product/Cushion/cu1.webp', alt: 'Handwoven cushion cover Deen Dayal Rugs Exports' },
      { src: '/Product/Cushion/cu2.webp', alt: 'Artisan cushion manufacturer India' },
      { src: '/Product/Cushion/cu3.webp', alt: 'Wool cushion exporter Meerut' },
      { src: '/Product/Cushion/cu4.webp', alt: 'Traditional weave cushion cover India' },
    ],
    shortDesc: 'Artisan-made cushion covers with traditional weave patterns and earthy tones.',
    details: [
      'Hand-woven and hand-tufted cushion covers',
      'Standard sizes: 18×18", 20×20", 24×24" — custom available',
      'Natural wool, cotton, silk blend fabrics',
      'Traditional motifs, geometric patterns, and modern minimalist designs',
      'Durable zip closure with premium finishing on all edges',
    ],
  },
  {
    id: 'wall-art',
    title: 'Wall Art',
    badge: null,
    images: [
      { src: '/Product/WallArt/wa1.webp', alt: 'Handwoven wall art Deen Dayal Rugs Exports' },
      { src: '/Product/WallArt/wa2.webp', alt: 'Textile wall art exporter India' },
      { src: '/Product/WallArt/wa3.webp', alt: 'Artisan wall art manufacturer Meerut' },
    ],
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
    images: [
      { src: '/Product/WallHanging/wh1.webp', alt: 'Handmade wall hanging Deen Dayal Rugs Exports' },
      { src: '/Product/WallHanging/wh2.webp', alt: 'Bohemian wall hanging exporter India' },
      { src: '/Product/WallHanging/wh3.webp', alt: 'Traditional wall hanging Meerut' },
      { src: '/Product/WallHanging/wh4.webp', alt: 'Wool cotton wall hanging manufacturer India' },
    ],
    shortDesc: 'Bohemian and traditional wall hangings crafted with wool, cotton, and natural fibres.',
    details: [
      'Hand-woven macramé and tapestry styles',
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
    images: [
      { src: '/Product/WoodenStool/ws1.webp', alt: 'Handcrafted wooden stool Deen Dayal Rugs Exports' },
      { src: '/Product/WoodenStool/ws2.webp', alt: 'Sheesham wood stool exporter India' },
      { src: '/Product/WoodenStool/ws3.webp', alt: 'Tufted wooden stool manufacturer Meerut' },
    ],
    shortDesc: 'Solid wood stools with hand-woven or hand-tufted upholstered tops.',
    details: [
      'Eucalyptus, sheesham and teak wood frames',
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
    images: [
      { src: '/Product/Benches/b1.jpeg', alt: 'Handcrafted bench Deen Dayal Rugs Exports', pos: 'center center', fit: 'contain' },
      { src: '/Product/Benches/b2.jpeg', alt: 'Wooden bench exporter India', pos: 'center center', fit: 'contain' },
      { src: '/Product/Benches/b3.jpeg', alt: 'Upholstered bench manufacturer Meerut', pos: 'center center', fit: 'contain' },
    ],
    shortDesc: 'Handcrafted wooden benches with fabric-upholstered seats — ideal for any interior.',
    details: [
      'Eucalyptus, sheesham and teak wood construction',
      'Hand-woven, hand-tufted and circular knit upholstered seat cushions',
      'Entryway, bedroom and hospitality sizes available',
      'Storage benches and ottomans also available',
      'Custom dimensions, fabrics and wood finishes',
    ],
  },
]

export default function Products() {
  return (
    <>
      <PageMeta
        title="Carpets, Rugs & Home Textiles | Deen Dayal Rugs Exports India"
        description="Explore our range — hand-knotted carpets, hand-tufted rugs, machine-made carpets, poufs, cushions, wall art, wall hangings, wooden stools and benches. Made in Meerut, Uttar Pradesh, India."
        canonical="https://www.deendayalrugs.com/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.deendayalrugs.com/products#webpage",
          "url": "https://www.deendayalrugs.com/products",
          "name": "Carpets, Rugs & Home Textiles | Deen Dayal Rugs Exports India",
          "description": "Hand-knotted carpets, hand-tufted rugs, machine-made carpets, poufs, cushions, wall art, wall hangings, wooden stools and benches. Made in Meerut, Uttar Pradesh, India.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deendayalrugs.com/" },
              { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.deendayalrugs.com/products" }
            ]
          }
        }}
      />
      <PageHero
        eyebrow="Our Collection"
        title="Every Piece, A Masterpiece"
        desc="7 categories of premium products — crafted by hand and precision machinery, with purpose, precision, and soul."
        bg="#A07850"
      />

      {/* ── PRODUCT INTRO ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">What We Make</p>
            <h2 className="section-title">
              Premium Products<br /><em>for the World</em>
            </h2>
            <p className="section-desc">
              From floor to wall, from seating to art — every product is crafted by skilled
              artisans or precision machinery, using traditional techniques and quality materials.
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

              {/* Image Slider */}
              <div className={i % 2 !== 0 ? 'reveal-right' : 'reveal-left'}>
                <div className="product-page-img-wrap">
                  <ImageSlider
                    images={p.images}
                    height="480px"
                    autoPlay={3500}
                    objectPos="center"
                    borderRadius="var(--radius-xl)"
                  />
                  {p.badge && <div className="product-page-badge">{p.badge}</div>}
                </div>
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
