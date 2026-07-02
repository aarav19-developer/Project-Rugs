import { Link } from 'react-router-dom'
import PageHero from '../Components/PageHero'
import { useEffect, useRef, useState } from 'react'
import PageMeta from '../Components/PageMeta'

const WHY_CARDS = [
  { icon: 'fa-solid fa-hand-sparkles',  title: 'Handmade & Machine-Made',     desc: 'We craft our products both by skilled artisan hands and precision machinery — the perfect blend of traditional character and consistent, scalable quality.' },
  { icon: 'fa-solid fa-certificate',    title: 'Export Quality Standards',   desc: 'We meet international quality, safety and compliance standards required by buyers in the USA, EU, UK, UAE and beyond.' },
  { icon: 'fa-solid fa-ruler-combined', title: 'Custom Sizing Available',    desc: 'From small accent rugs to grand hall carpets — we produce any dimension with precision to fit your exact project needs.' },
  { icon: 'fa-solid fa-hourglass-half', title: 'Decades of Craftsmanship',   desc: 'Over 30 years of experience in textile manufacturing, with deep mastery of both traditional Indian weaving techniques and modern production methods.' },
  { icon: 'fa-solid fa-leaf',           title: 'Sustainable Materials',      desc: 'We use natural, eco-friendly fibres and azo-free dyes — responsible manufacturing for a healthier planet and safer products.' },
  { icon: 'fa-solid fa-truck-fast',     title: 'Timely Delivery',            desc: 'We understand your timelines. Our production planning and logistics team ensures on-time dispatch and reliable delivery worldwide.' },
  { icon: 'fa-solid fa-tags',           title: 'Competitive Pricing',        desc: 'Direct factory pricing with no middlemen — giving you the best value for premium products sourced straight from the maker.' },
  { icon: 'fa-solid fa-earth-americas', title: 'Worldwide Shipping',         desc: 'We handle end-to-end export documentation, freight and logistics — delivering your order safely to any destination on the globe.' },
  { icon: 'fa-solid fa-paintbrush',     title: 'Custom Design Service',      desc: 'Bring your own design or work with our in-house design team to create bespoke patterns, colourways and product configurations.' },
  { icon: 'fa-solid fa-headset',        title: 'Dedicated Export Support',   desc: 'A dedicated account manager handles your orders from sampling to delivery — keeping you informed at every stage.' },
  { icon: 'fa-solid fa-flask',          title: 'Sample Service Available',   desc: 'We dispatch product samples so you can evaluate quality, texture and colour firsthand before placing a production order.' },
  { icon: 'fa-solid fa-shield-halved',  title: 'Secure Transactions',        desc: 'Transparent pricing, professional invoicing, and full export documentation — every transaction is handled with complete professionalism.' },
]

// ── Animated counter ──
function Counter({ target, suffix, label, format }) {
  const ref     = useRef(null)
  const hasRun  = useRef(false)
  const [val, setVal] = useState('0')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !hasRun.current) {
        hasRun.current = true
        const step = target / (2000 / 16)
        let cur = 0
        const timer = setInterval(() => {
          cur += step
          if (cur >= target) { cur = target; clearInterval(timer) }
          setVal(format === 'M' ? (cur / 1e6).toFixed(1) + 'M+' : Math.floor(cur).toLocaleString())
        }, 16)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, format])

  return (
    <div className="counter-item" ref={ref}>
      <span className="counter">{val}</span>
      {format !== 'M' && <span className="counter-suffix">{suffix}</span>}
      <span className="counter-label">{label}</span>
    </div>
  )
}

const FACT_CARDS = [
  { icon: 'fa-solid fa-clock',            title: 'Precision at Every Step',   body: <>Every product undergoes rigorous quality checks — from fibre selection and dyeing to weaving and final finishing — ensuring <strong>consistent excellence</strong> in every piece.</> },
  { icon: 'fa-solid fa-infinity',         title: 'Million Knots, One Carpet', body: <>A high-quality carpet can contain over <strong>1 million individual knots</strong> per square metre.</> },
  { icon: 'fa-solid fa-landmark',         title: '500-Year Heritage',         body: <>Carpet weaving in India dates back over <strong>500 years</strong> to the Mughal era.</> },
  { icon: 'fa-solid fa-indian-rupee-sign',title: 'Billion-Dollar Industry',   body: <>India's handmade carpet export industry is worth over <strong>USD 1.4 billion annually</strong>.</> },
  { icon: 'fa-solid fa-paintbrush',       title: 'Natural Dyes',              body: <>Traditional makers used <strong>natural dyes</strong> from plants and minerals — some techniques still practiced today.</> },
  { icon: 'fa-solid fa-award',            title: 'GI Tagged Heritage',        body: <>The <strong>Bhadohi carpet</strong> from UP holds a Geographical Indication tag — authentic Indian heritage.</> },
]

const TESTIMONIALS = [
  { quote: 'Exceptional quality and reliable delivery — Deen Dayal has been our preferred carpet supplier for 5 years.', name: 'Interior Design Studio', country: 'United Kingdom' },
  { quote: 'The custom sizing option is a game changer. We get exact dimensions for every project without compromise.', name: 'Luxury Hotel Group',       country: 'UAE' },
  { quote: 'Competitive pricing straight from the factory — the best value we\'ve found for premium handmade rugs.', name: 'Wholesale Importer',        country: 'USA' },
]

export default function WhyUs() {
  return (
    <>
      <PageMeta
        title="Why Choose Deen Dayal Rugs Export — Trusted Indian Carpet Exporter"
        description="Handmade and machine-made products. Export quality standards, custom sizing, eco-friendly materials, competitive factory pricing. Trusted by buyers in 20+ countries worldwide."
        canonical="https://www.deendayalrugs.com/why-us"
      />
      <PageHero
        eyebrow="Why Partner With Us"
        title="The Deen Dayal Difference"
        desc="Thousands of international buyers trust us — here's what makes us different."
        bg="#3E4D28"
      />

      {/* ── WHY CARDS ── */}
      <section className="why-us section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">12 Reasons to Choose Us</p>
            <h2 className="section-title">Why Buyers Trust<br /><em>Deen Dayal</em></h2>
          </div>
          <div className="why-grid-extended">
            {WHY_CARDS.map((c, i) => (
              <div className="why-card-light reveal-up" key={c.title} style={{ transitionDelay: `${(i % 4) * 0.07}s` }}>
                <div className="why-icon-light"><i className={c.icon} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTERS ── */}
      <section className="section-pad bg-olive">
        <div className="container">
          <div className="section-header light reveal-up">
            <p className="section-eyebrow">India's Carpet Legacy</p>
            <h2 className="section-title">The Industry<br /><em>In Numbers</em></h2>
          </div>
          <div className="facts-counters">
            <Counter target={2000000} format="M"  label="Artisans in India's carpet industry" />
            <Counter target={70}  suffix="%" label="of India's carpet exports from UP"    />
            <Counter target={1}   suffix="st" label="India — world's largest exporter"    />
            <Counter target={150} suffix="+"  label="Countries receive Indian carpets"    />
          </div>
        </div>
      </section>

      {/* ── FACT CARDS ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Did You Know?</p>
            <h2 className="section-title">Fascinating Facts About<br /><em>Indian Handcraft</em></h2>
          </div>
          <div className="fact-cards">
            {FACT_CARDS.map((f, i) => (
              <div className="fact-card reveal-up" key={f.title} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="fact-icon"><i className={f.icon} /></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad bg-sand">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">What Buyers Say</p>
            <h2 className="section-title">Trusted by Buyers<br /><em>Worldwide</em></h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial-card reveal-up" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <i className="fa-solid fa-quote-left testimonial-quote-icon" />
                <p>"{t.quote}"</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-cta section-pad">
        <div className="container">
          <div className="page-cta-inner reveal-up">
            <h2>Ready to Partner With Us?</h2>
            <p>Request samples, discuss custom orders, or ask for pricing. We respond within 24 hours.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/global-reach" className="btn-outline">See Our Global Reach</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
