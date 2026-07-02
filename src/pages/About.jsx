import { Link } from 'react-router-dom'
import PageHero from '../Components/PageHero'
import PageMeta from '../Components/PageMeta'

const STATS = [
  { num: '30+',  label: 'Years in Business'     },
  { num: '500+', label: 'Designs in Portfolio'  },
  { num: '20+',  label: 'Countries Served'      },
  { num: '2',    label: 'ISO Certifications'    },
]

const TIMELINE = [
  { year: '1990s', title: 'The Beginning', desc: 'Deen Dayal Rugs Export was founded as a small family weaving workshop in Meerut, Uttar Pradesh, India — driven by a passion for traditional Indian carpet craftsmanship.' },
  { year: '2000s', title: 'Growing the Craft', desc: 'Expanded the artisan team and diversified into multiple carpet types — hand-knotted, hand-tufted, and flat weave — catering to domestic and early export buyers.' },
  { year: '2010s', title: 'Going Global', desc: 'Established direct export relationships with buyers in the USA, UK, Germany, UAE, and Australia. Achieved compliance with international quality and safety standards.' },
  { year: '2020s', title: 'Full Product Range', desc: 'Expanded beyond carpets into poufs, cushions, wall art, wall hangings, wooden stools, and benches — becoming a complete handmade and machine-made lifestyle product exporter.' },
]

const TEAM = [
  { name: 'Founder & Director',    role: 'Operations & Vision',     img: null },
  { name: 'Export Manager',        role: 'International Relations',  img: null },
  { name: 'Head of Design',        role: 'Product Development',      img: null },
  { name: 'Quality Control Lead',  role: 'Standards & Compliance',   img: null },
]

const VALUES = [
  { icon: 'fa-solid fa-hand-sparkles', title: 'Dual Craftsmanship',   desc: 'We create products both by skilled artisan hands and precision machinery — blending traditional character with consistent, scalable quality.' },
  { icon: 'fa-solid fa-leaf',          title: 'Sustainability',         desc: 'Natural fibres, eco-friendly azo-free dyes, and responsible sourcing — for a healthier planet and safer products.' },
  { icon: 'fa-solid fa-handshake',     title: 'Partnership',            desc: 'We build long-term relationships with both our artisans and our international buyers — built on trust and transparency.' },
  { icon: 'fa-solid fa-globe',         title: 'Global Standards',       desc: 'From quality inspection to export documentation, we meet the highest international compliance standards.' },
]

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us — Carpet & Rug Exporter from Meerut India | Deen Dayal Rugs Export"
        description="30+ years of carpet craftsmanship. Deen Dayal Rugs Export — a family-rooted exporter from Meerut, Uttar Pradesh, India. Handmade and machine-made products. Serving buyers in 20+ countries worldwide."
        canonical="https://www.deendayalrugs.com/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://www.deendayalrugs.com/about#webpage",
          "url": "https://www.deendayalrugs.com/about",
          "name": "About Deen Dayal Rugs Export — 30+ Years of Carpet Craftsmanship",
          "description": "Family-rooted carpet and rug exporter from Meerut, Uttar Pradesh, India. 30+ years of handmade and machine-made craftsmanship. ISO 9001 & ISO 14001 certified.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deendayalrugs.com/" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.deendayalrugs.com/about" }
            ]
          }
        }}
      />
      <PageHero
        eyebrow="Our Story"
        title="A Legacy Woven Thread by Thread"
        desc="Born in Meerut, grown worldwide — the story of Deen Dayal Rugs Export."
        bg="#3E4D28"
      />

      {/* ── WHO WE ARE ── */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              {/* TODO: Replace with actual artisan photo/animation */}
              <div className="about-animation-placeholder">
                <i className="fa-solid fa-hands" />
                <p>Artisan at work</p>
                <span>Replace with your video or animation</span>
              </div>
              <div className="about-badge">
                <span className="badge-num">30<sup>+</sup></span>
                <span className="badge-text">Years of<br />Craftsmanship</span>
              </div>
            </div>

            <div className="about-text reveal-right">
              <p className="section-eyebrow">Who We Are</p>
              <h2 className="section-title">Rooted in Meerut,<br /><em>Trusted Worldwide</em></h2>
              <p>
                Deen Dayal Rugs Export is a family-rooted export house born from the carpet
                weaving heartland of <strong>Meerut, Uttar Pradesh, India</strong> — a region that has
                shaped India's handmade carpet industry for centuries.
              </p>
              <p>
                What began as a small workshop driven by passion for traditional craftsmanship
                has grown into a trusted name in the global textile and lifestyle
                product export market.
              </p>
              <p>
                We offer both artisan handmade and precision machine-made products — giving buyers
                the choice of traditional character or consistent, scalable quality. Every product
                that leaves our factory is a testament to skill, precision, and pride.
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

      {/* ── OUR VALUES ── */}
      <section className="section-pad bg-sand">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">What We Stand For</p>
            <h2 className="section-title">Our Core <em>Values</em></h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card reveal-up" key={v.title}>
                <div className="value-icon"><i className={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Our Journey</p>
            <h2 className="section-title">From Workshop<br /><em>to the World</em></h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className={`timeline-item reveal-up ${i % 2 === 0 ? 'left' : 'right'}`} key={t.year}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-content">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ISO CERTIFICATIONS ── */}
      <section className="section-pad bg-sand">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Internationally Recognised</p>
            <h2 className="section-title">ISO Certified <em>Operations</em></h2>
            <p className="section-desc">
              Our commitment to quality and environmental responsibility is backed by two of the
              world's most recognised international standards.
            </p>
          </div>

          <div className="iso-grid">

            <div className="iso-card reveal-up">
              <div className="iso-badge">
                <i className="fa-solid fa-certificate" />
                <span>ISO 9001</span>
              </div>
              <h3>Quality Management System</h3>
              <p>
                ISO 9001 is the international standard for Quality Management Systems (QMS),
                set by the International Organization for Standardization. It certifies that
                an organisation consistently delivers products and services that meet customer
                and regulatory requirements, while continuously improving its processes.
              </p>
              <p>
                For Deen Dayal Rugs Export, this means every step of our production — from
                raw material sourcing to final dispatch — follows documented, audited processes
                designed to eliminate errors and ensure consistent product quality for our
                international buyers.
              </p>
              <ul className="iso-points">
                <li><i className="fa-solid fa-check" /> Consistent product quality across every order</li>
                <li><i className="fa-solid fa-check" /> Documented production and inspection processes</li>
                <li><i className="fa-solid fa-check" /> Customer satisfaction at the core of operations</li>
                <li><i className="fa-solid fa-check" /> Continuous improvement of manufacturing standards</li>
              </ul>
            </div>

            <div className="iso-card reveal-up" style={{ transitionDelay: '0.1s' }}>
              <div className="iso-badge iso-badge--green">
                <i className="fa-solid fa-leaf" />
                <span>ISO 14001</span>
              </div>
              <h3>Environmental Management System</h3>
              <p>
                ISO 14001 is the international standard for Environmental Management Systems
                (EMS). It certifies that an organisation has a structured framework to
                minimise its environmental impact, comply with environmental laws, and
                continually improve its environmental performance.
              </p>
              <p>
                At Deen Dayal Rugs Export, this certification reflects our genuine commitment
                to responsible manufacturing — using eco-friendly azo-free dyes, reducing
                waste, managing water and energy consumption, and ensuring our products are
                safe for both people and the planet.
              </p>
              <ul className="iso-points">
                <li><i className="fa-solid fa-check" /> Eco-friendly azo-free dyes and natural fibres</li>
                <li><i className="fa-solid fa-check" /> Responsible waste and water management</li>
                <li><i className="fa-solid fa-check" /> Compliance with environmental regulations</li>
                <li><i className="fa-solid fa-check" /> Reduced environmental footprint across production</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-pad bg-olive">
        <div className="container">
          <div className="section-header light reveal-up">
            <p className="section-eyebrow">The People Behind It</p>
            <h2 className="section-title">Meet Our <em>Team</em></h2>
            <p className="section-desc">The dedicated people who make every export possible.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <div className="team-card reveal-up" key={m.name}>
                <div className="team-avatar">
                  {/* TODO: Replace with actual team member photo */}
                  <i className="fa-solid fa-user" />
                </div>
                <h3>{m.name}</h3>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-cta section-pad">
        <div className="container">
          <div className="page-cta-inner reveal-up">
            <h2>Want to Work With Us?</h2>
            <p>Get in touch to discuss your requirements — custom orders, bulk enquiries, and sample requests welcome.</p>
            <div className="page-cta-btns">
              <Link to="/contact"  className="btn-primary">Send an Enquiry</Link>
              <Link to="/products" className="btn-outline">View Our Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
