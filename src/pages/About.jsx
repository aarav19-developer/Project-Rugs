import { Link } from 'react-router-dom'
import PageHero from '../Components/PageHero'
import PageMeta from '../Components/PageMeta'

const STATS = [
  { num: '30+',  label: 'Years in Business'     },
  { num: '500+', label: 'Designs in Portfolio'  },
  { num: '20+',  label: 'Countries Served'      },
  { num: '100%', label: 'Handmade Products'     },
]

const TIMELINE = [
  { year: '1990s', title: 'The Beginning', desc: 'Deen Dayal Rugs Exports was founded as a small family weaving workshop in Meerut, UP — driven by a passion for traditional Indian carpet craftsmanship.' },
  { year: '2000s', title: 'Growing the Craft', desc: 'Expanded the artisan team and diversified into multiple carpet types — hand-knotted, hand-tufted, and flat weave — catering to domestic and early export buyers.' },
  { year: '2010s', title: 'Going Global', desc: 'Established direct export relationships with buyers in the USA, UK, Germany, UAE, and Australia. Achieved compliance with international quality and safety standards.' },
  { year: '2020s', title: 'Full Product Range', desc: 'Expanded beyond carpets into poufs, cushions, wall art, wall hangings, wooden stools, and benches — becoming a complete handmade lifestyle product exporter.' },
]

const TEAM = [
  { name: 'Founder & Director',    role: 'Operations & Vision',     img: null },
  { name: 'Export Manager',        role: 'International Relations',  img: null },
  { name: 'Head of Design',        role: 'Product Development',      img: null },
  { name: 'Quality Control Lead',  role: 'Standards & Compliance',   img: null },
]

const VALUES = [
  { icon: 'fa-solid fa-hand-sparkles', title: 'Craftsmanship First',   desc: 'Every product is made entirely by human hands. No machines, no shortcuts — just skill, patience, and pride.' },
  { icon: 'fa-solid fa-leaf',          title: 'Sustainability',         desc: 'Natural fibres, eco-friendly azo-free dyes, and responsible sourcing — for a healthier planet and safer products.' },
  { icon: 'fa-solid fa-handshake',     title: 'Partnership',            desc: 'We build long-term relationships with both our artisans and our international buyers — built on trust and transparency.' },
  { icon: 'fa-solid fa-globe',         title: 'Global Standards',       desc: 'From quality inspection to export documentation, we meet the highest international compliance standards.' },
]

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us — Handmade Carpet Exporter from Meerut India | Deen Dayal Rugs Exports"
        description="30+ years of handmade carpet craftsmanship. Deen Dayal Rugs Exports — a family-rooted exporter from Meerut, UP, India. Serving buyers in 20+ countries worldwide."
        canonical="https://www.deendayalrugs.com/about"
      />
      <PageHero
        eyebrow="Our Story"
        title="A Legacy Woven Thread by Thread"
        desc="Born in Meerut, grown worldwide — the story of Deen Dayal Rugs Exports."
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
                Deen Dayal Rugs Exports is a family-rooted export house born from the carpet
                weaving heartland of <strong>Meerut, Uttar Pradesh</strong> — a region that has
                shaped India's handmade carpet industry for centuries.
              </p>
              <p>
                What began as a small workshop driven by passion for traditional craftsmanship
                has grown into a trusted name in the global handmade textile and lifestyle
                product export market.
              </p>
              <p>
                We work hand-in-hand with hundreds of skilled artisans who carry forward
                weaving techniques passed down through generations. Every product that leaves
                our factory is a testament to patience, precision, and pride.
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
