import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MarqueeStrip from '../Components/MarqueeStrip'
import PageMeta from '../Components/PageMeta'
import ImageSlider from '../Components/ImageSlider'

/* Hero images */
const HERO_IMAGES = [
  { src: '/HeroSection/h1.webp', alt: 'Handmade carpets by Deen Dayal Rugs Exports' },
  { src: '/HeroSection/h2.webp', alt: 'Premium rugs crafted in Meerut, India' },
]

/* Quick-preview cards shown on the Home page */
const PREVIEWS = [
  {
    to: '/about',
    icon: 'fa-solid fa-store',
    title: 'Our Story',
    desc: '30+ years of legacy rooted in Meerut, Uttar Pradesh, India — the heartland of India\'s carpet industry.',
    color: '#5C6B3A',
  },
  {
    to: '/products',
    icon: 'fa-solid fa-grip',
    title: 'Our Products',
    desc: 'Carpets, Poufs, Cushions, Wall Art, Wall Hangings, Stools & Benches — crafted by hand and precision machinery.',
    color: '#A07850',
  },
  {
    to: '/process',
    icon: 'fa-solid fa-hands',
    title: 'How We Make It',
    desc: 'From raw fibre selection to final export packaging — 6 stages of precision craftsmanship.',
    color: '#6B4F2E',
  },
  {
    to: '/why-us',
    icon: 'fa-solid fa-certificate',
    title: 'Why Partner With Us',
    desc: 'Export quality, custom sizing, eco-friendly materials and competitive factory pricing.',
    color: '#3E4D28',
  },
  {
    to: '/global-reach',
    icon: 'fa-solid fa-earth-americas',
    title: 'Global Reach',
    desc: 'Delivering to USA, UK, Europe, UAE, Australia and 15+ more countries worldwide.',
    color: '#7A6B55',
  },
  {
    to: '/contact',
    icon: 'fa-solid fa-paper-plane',
    title: 'Get a Quote',
    desc: 'Request samples, custom designs or FOB/CIF pricing. We respond within 24 hours.',
    color: '#B8922A',
  },
]

const HIGHLIGHTS = [
  { num: '30+',   label: 'Years of Craftsmanship' },
  { num: '500+',  label: 'Designs in Portfolio'   },
  { num: '20+',   label: 'Countries Served'        },
  { num: '2',     label: 'Production Methods'      },
]

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIdx(i => (i + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <>
      <PageMeta
        title="Handmade & Machine-Made Rugs &amp; Carpet Exporter from Meerut India | Deen Dayal Rugs Exports"
        description="Premium handmade and machine-made carpets, rugs, poufs and home textiles crafted in Meerut, Uttar Pradesh, India. Trusted exporter to 20+ countries worldwide. Request a sample today."
        canonical="https://www.deendayalrugs.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.deendayalrugs.com/#webpage",
          "url": "https://www.deendayalrugs.com/",
          "name": "Handmade & Machine-Made Rugs & Carpet Exporter from Meerut India | Deen Dayal Rugs Exports",
          "description": "Premium handmade and machine-made carpets, rugs, poufs and home textiles crafted in Meerut, Uttar Pradesh, India. Trusted exporter to 20+ countries worldwide.",
          "isPartOf": { "@id": "https://www.deendayalrugs.com/#website" },
          "about": { "@id": "https://www.deendayalrugs.com/#organization" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deendayalrugs.com/" }
            ]
          }
        }}
      />
      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-bg">
          {HERO_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`hero-slide${i === heroIdx ? ' hero-slide-active' : ''}`}
            >
              {/* Blurred background fill */}
              <img
                src={img.src}
                alt=""
                aria-hidden="true"
                className="hero-slide-blur"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              {/* Main image — fully visible, no crop */}
              <img
                src={img.src}
                alt={img.alt}
                className="hero-slide-img"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="eyebrow-desktop">Est. in Meerut, Uttar Pradesh, India &nbsp;·&nbsp; Exporting Excellence Worldwide</span>
            <span className="eyebrow-mobile">Est. in Meerut, UP, India · Exporting Worldwide</span>
          </p>
          <h1 className="hero-title">
            Deen Dayal<br />
            <span>Rugs Exports</span>          </h1>
          <p className="hero-tagline">RESPONSIBILITY | RELIABILITY | TRANSPARENCY</p>
          <p className="hero-desc">
            Weaving generations of tradition into every knot — premium handmade carpets and
            lifestyle products crafted by master artisans, delivered to the world's finest
            homes and interiors.
          </p>
          <div className="hero-btns">
            <Link to="/products" className="btn-primary">Explore Our Collection</Link>
            <Link to="/contact"  className="btn-secondary">Enquire Now</Link>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll to discover</span>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeStrip />

      {/* ── HIGHLIGHTS BAR ── */}
      <section className="home-highlights">
        <div className="container">
          <div className="highlights-grid">
            {HIGHLIGHTS.map((h) => (
              <div className="highlight-item reveal-up" key={h.label}>
                <span className="highlight-num">{h.num}</span>
                <span className="highlight-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="home-intro section-pad">
        <div className="container">
          <div className="home-intro-grid">
            <div className="home-intro-text reveal-left">
              <p className="section-eyebrow">Welcome to Deen Dayal Rugs Exports</p>
              <h2 className="section-title">
                A Legacy Woven<br /><em>Thread by Thread</em>
              </h2>
              <p>
                Born in the carpet weaving heartland of <strong>Meerut, Uttar Pradesh, India</strong>,
                we are a family-rooted export house that has grown from a small artisan workshop
                into a globally trusted name in handmade textile exports.
              </p>
              <p>
                Every product that leaves our factory — from intricately knotted carpets to
                hand-crafted furniture — carries the soul of generations of master craftsmen
                and the precision demanded by international buyers.
              </p>
              <div className="home-intro-actions">
                <Link to="/about"   className="btn-primary">Our Full Story</Link>
                <Link to="/contact" className="btn-outline">Request a Sample</Link>
              </div>
            </div>
            <div className="home-intro-img reveal-right">
              <div className="video-placeholder">
                <div className="video-placeholder-icon">
                  <i className="fa-solid fa-play" />
                </div>
                <p className="video-placeholder-title">Skilled Artisan at Work</p>
                <span className="video-placeholder-note">📹 Add artisan weaving video here</span>
              </div>
              <div className="home-intro-badge">
                <span className="badge-num">30<sup>+</sup></span>
                <span className="badge-text">Years of<br />Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGE PREVIEW CARDS ── */}
      <section className="home-previews section-pad bg-sand">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Everything We Offer</p>
            <h2 className="section-title">
              Explore Deen Dayal<br /><em>Rugs Exports</em>
            </h2>
            <p className="section-desc">
              Navigate through our pages to discover the full story, product range,
              craftsmanship process, and global footprint.
            </p>
          </div>

          <div className="preview-grid">
            {PREVIEWS.map((p, i) => (
              <Link
                to={p.to}
                className="preview-card reveal-up"
                key={p.to}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="preview-icon" style={{ background: p.color }}>
                  <i className={p.icon} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="preview-cta">
                  Explore <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT TEASER ── */}
      <section className="home-product-teaser section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Our Product Range</p>
            <h2 className="section-title">
              7 Categories of<br /><em>Crafted Excellence</em>
            </h2>
          </div>
          <div className="teaser-grid">
            {[
              { name: 'Carpets',        img: '/Product/Carpet/c1.webp',          to: '/products#carpets'       },
              { name: 'Poufs',          img: '/Product/Poufs/p1.webp',           to: '/products#poufs'         },
              { name: 'Cushions',       img: '/Product/Cushion/cu1.webp',        to: '/products#cushions'      },
              { name: 'Wall Art',       img: '/Product/WallArt/wa1.webp',        to: '/products#wall-art'      },
              { name: 'Wall Hangings',  img: '/Product/WallHanging/wh1.webp',   to: '/products#wall-hanging'  },
              { name: 'Wooden Stools',  img: '/Product/WoodenStool/ws1.webp',   to: '/products#stool-wood'    },
              { name: 'Benches',        img: '/Product/Benches/b1.jpeg',         to: '/products#benches'       },
            ].map((p, i) => (
              <Link
                to={p.to}
                key={p.name}
                className="teaser-card reveal-up"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="teaser-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <span>{p.name}</span>
              </Link>
            ))}
          </div>
          <div className="teaser-cta reveal-up">
            <Link to="/products" className="btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-inner reveal-up">
            <div className="home-cta-text">
              <h2>Ready to Source Premium Rugs & Textile Products?</h2>
              <p>Talk to our export team — sample dispatch on request, custom designs, and competitive pricing available.</p>
            </div>
            <div className="home-cta-btns">
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
              <a href={`https://wa.me/919627111136?text=${encodeURIComponent("Hello, I visited your website and I'm interested in your carpet and rug products. Could you please share more details about your product range, pricing, and export options? Thank you.")}`} target="_blank" rel="noreferrer" className="btn-wa">
                <i className="fa-brands fa-whatsapp" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
