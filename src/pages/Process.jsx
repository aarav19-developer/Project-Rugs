import { Link } from 'react-router-dom'
import PageHero from '../Components/PageHero'
import PageMeta from '../Components/PageMeta'

const STEPS = [
  {
    num: '01',
    icon: 'fa-solid fa-seedling',
    title: 'Raw Material Selection',
    img: '/raw-material.webp',
    desc: 'We source only the finest wool, silk, cotton, and jute from trusted suppliers across India. Every fibre is inspected for purity, strength, and dyeability before entering our workshop.',
    detail: 'Our sourcing team visits farms and cooperatives directly to ensure the quality and traceability of all raw materials. We prioritise natural, sustainably harvested fibres.',
    bg: '#5C6B3A',
  },
  {
    num: '02',
    icon: 'fa-solid fa-palette',
    title: 'Dyeing & Colour Preparation',
    img: null,
    desc: 'Yarns are dyed using eco-friendly, azo-free dyes to ensure rich, lasting colour. Our dye masters blend traditional recipes with modern colour accuracy.',
    detail: 'All dyes meet international safety standards including REACH and Oeko-Tex. Colour fastness is tested before production begins to ensure long-lasting vibrancy.',
    bg: '#B8922A',
  },
  {
    num: '03',
    icon: 'fa-solid fa-hands',
    title: 'Weaving & Knotting by Hand',
    img: null,
    desc: 'Master weavers work on traditional looms, tying hundreds of thousands of individual knots — each placed by skilled hands following age-old techniques unique to the Meerut, Uttar Pradesh, India region.',
    detail: 'A single square metre of hand-knotted carpet can take weeks to complete. Our weavers follow detailed design charts while maintaining complete creative fidelity to the original pattern.',
    bg: '#A07850',
  },
  {
    num: '04',
    icon: 'fa-solid fa-droplet',
    title: 'Washing & Finishing',
    img: null,
    desc: 'Freshly woven carpets undergo deep washing to bring out natural lustre and softness. Finishing includes stretching, clipping, and pile levelling for a perfect surface.',
    detail: 'Washing removes excess dye and natural lanolin, enhancing the texture and brightness. Each piece is then hand-clipped and stretched on frames to perfect its dimensions.',
    bg: '#3E4D28',
  },
  {
    num: '05',
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Quality Inspection',
    img: null,
    desc: 'Every product is inspected against international quality standards — checking knot density, pile height, colour fastness, dimensional accuracy, and structural integrity.',
    detail: 'Our QC process includes both visual inspection and physical testing. Products that do not meet our standards are returned for correction before re-inspection.',
    bg: '#6B4F2E',
  },
  {
    num: '06',
    icon: 'fa-solid fa-box-open',
    title: 'Packaging & Export',
    img: null,
    desc: 'Approved products are carefully rolled or folded, wrapped in protective materials, and packed for safe international shipping.',
    detail: 'We provide full export documentation including commercial invoice, packing list, certificate of origin, and GST/GSP certificates. We work with all major freight forwarders.',
    bg: '#7A6B55',
  },
]

const CERTIFICATIONS = [
  { icon: 'fa-solid fa-certificate', label: 'Oeko-Tex Compliant Materials'    },
  { icon: 'fa-solid fa-leaf',        label: 'Azo-Free Eco Dyes'               },
  { icon: 'fa-solid fa-shield',      label: 'REACH Compliant'                 },
  { icon: 'fa-solid fa-file-lines',  label: 'Full Export Documentation'       },
]

export default function Process() {
  return (
    <>
      <PageMeta
        title="Our Manufacturing Process — Carpets & Rugs | Deen Dayal Rugs Export"
        description="From raw material selection to export packaging — 6 stages of precision craftsmanship. Eco-friendly dyes, hand-knotted and machine weaving, quality inspection and worldwide shipping."
        canonical="https://www.deendayalrugs.com/process"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.deendayalrugs.com/process#webpage",
          "url": "https://www.deendayalrugs.com/process",
          "name": "Carpet & Rug Manufacturing Process — Deen Dayal Rugs Export",
          "description": "6-stage carpet manufacturing process: raw material selection, eco-friendly dyeing, hand-knotting, washing, quality inspection and export packaging.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deendayalrugs.com/" },
              { "@type": "ListItem", "position": 2, "name": "Manufacturing Process", "item": "https://www.deendayalrugs.com/process" }
            ]
          }
        }}
      />
      <PageHero
        eyebrow="How We Make It"
        title="From Raw Fibre to Your Floor"
        desc="Every product passes through careful hands at every stage — tradition meeting precision."
        bg="#6B4F2E"
      />

      {/* ── INTRO ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">6 Stages of Craftsmanship</p>
            <h2 className="section-title">
              The Art Behind<br /><em>Every Product</em>
            </h2>
            <p className="section-desc">
              From the moment we select raw materials to the day your order ships — every step
              is handled with the same care that has defined our craft for over 30 years.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS — alternating layout ── */}
      {STEPS.map((s, i) => (
        <section
          key={s.num}
          className={`section-pad${i % 2 !== 0 ? ' bg-sand' : ''}`}
          style={{ paddingTop: '60px', paddingBottom: '60px' }}
        >
          <div className="container">
            <div className={`process-page-grid${i % 2 !== 0 ? ' reverse' : ''}`}>
              <div className={i % 2 !== 0 ? 'reveal-right' : 'reveal-left'}>
                <div className="process-page-icon-block" style={{ background: s.bg }}>
                  {s.img && (
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                    />
                  )}
                  {!s.img && <i className={s.icon} />}
                  <span className="process-page-num">{s.num}</span>
                </div>
              </div>
              <div className={i % 2 !== 0 ? 'reveal-left' : 'reveal-right'}>
                <span className="step-number">{s.num}</span>
                <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '16px' }}>
                  {s.title}
                </h2>
                <p style={{ color: 'var(--text-mid)', marginBottom: '16px', lineHeight: 1.85, fontSize: '1.02rem' }}>{s.desc}</p>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.93rem' }}>{s.detail}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CERTIFICATIONS ── */}
      <section className="section-pad bg-olive">
        <div className="container">
          <div className="section-header light reveal-up">
            <p className="section-eyebrow">Compliance & Standards</p>
            <h2 className="section-title">Built for <em>International Buyers</em></h2>
            <p className="section-desc">We meet the compliance and certification requirements of buyers in the USA, EU, UK, and beyond.</p>
          </div>
          <div className="cert-grid">
            {CERTIFICATIONS.map((c) => (
              <div className="cert-card reveal-up" key={c.label}>
                <div className="cert-icon"><i className={c.icon} /></div>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-cta section-pad">
        <div className="container">
          <div className="page-cta-inner reveal-up">
            <h2>Interested in Sourcing From Us?</h2>
            <p>We handle everything from production to export documentation. Get in touch to discuss your requirements.</p>
            <div className="page-cta-btns">
              <Link to="/contact"  className="btn-primary">Contact Us</Link>
              <Link to="/products" className="btn-outline">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
