import { useEffect, useRef } from 'react'
import '../style/Facts.css'

const COUNTERS = [
  { target: 2000000, suffix: '',  label: 'Artisans in India\'s carpet industry', format: 'millions' },
  { target: 70,      suffix: '%', label: 'of India\'s carpet exports from UP region' },
  { target: 1,       suffix: 'st',label: 'India — world\'s largest handmade carpet exporter' },
  { target: 150,     suffix: '+', label: 'Countries receive Indian handmade carpets' },
]

const FACT_CARDS = [
  { icon: 'fa-clock',           title: 'Months in the Making',   body: 'A single hand-knotted carpet of medium size can take 3 to 12 months to complete — each knot tied individually by skilled hands.' },
  { icon: 'fa-infinity',        title: 'Million Knots, One Carpet', body: 'A high-quality hand-knotted carpet can contain over 1 million individual knots per square metre — every single one tied manually.' },
  { icon: 'fa-landmark',        title: 'A 500-Year Heritage',    body: 'Carpet weaving in India dates back over 500 years to the Mughal era, when Persian artisans brought the craft that evolved into India\'s unique weaving traditions.' },
  { icon: 'fa-indian-rupee-sign',title: 'Billion-Dollar Industry', body: 'India\'s handmade carpet export industry is worth over USD 1.4 billion annually, supporting millions of families in rural and semi-urban Uttar Pradesh.' },
  { icon: 'fa-paintbrush',      title: 'Natural Dyes & Colours', body: 'Traditional Indian carpet makers used natural dyes from plants, minerals, and insects — some techniques still practiced today for premium eco-certified carpets.' },
  { icon: 'fa-award',           title: 'GI Tagged Heritage',     body: 'The Bhadohi carpet (from UP) holds a Geographical Indication tag — a mark of authentic Indian craft heritage recognised by the Indian government.' },
]

function AnimatedCounter({ target, suffix, label, format }) {
  const elRef  = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true
        const duration = 2000
        const step     = target / (duration / 16)
        let current    = 0

        const timer = setInterval(() => {
          current += step
          if (current >= target) { current = target; clearInterval(timer) }
          if (format === 'millions') {
            el.textContent = (current / 1_000_000).toFixed(1) + 'M+'
          } else {
            el.textContent = Math.floor(current).toLocaleString()
          }
        }, 16)

        observer.unobserve(el)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, format])

  return (
    <div className="counter-item">
      <div className="counter-value-row">
        <span className="counter" ref={elRef}>0</span>
        {format !== 'millions' && <span className="counter-suffix">{suffix}</span>}
      </div>
      <span className="counter-label">{label}</span>
    </div>
  )
}

export default function Facts() {
  return (
    <section className="facts section-pad" id="facts">
      <div className="container">
        <div className="section-header reveal-up">
          <p className="section-eyebrow">Did You Know?</p>
          <h2 className="section-title">India's Carpet Industry<br /><em>In Numbers</em></h2>
          <p className="section-desc">The world's finest handmade carpets come from India — and the story behind them is extraordinary.</p>
        </div>

        <div className="facts-counters reveal-up">
          {COUNTERS.map((c) => (
            <AnimatedCounter key={c.label} {...c} />
          ))}
        </div>

        <div className="fact-cards">
          {FACT_CARDS.map((f, i) => (
            <div className="fact-card reveal-up" key={f.title} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="fact-icon"><i className={`fa-solid ${f.icon}`} /></div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}