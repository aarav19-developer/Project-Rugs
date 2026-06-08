import '../style/WhyUs.css'

const CARDS = [
  { icon: 'fa-hand-sparkles', title: '100% Handmade',          desc: 'Every carpet is made entirely by hand — no machines, no shortcuts. Pure human craftsmanship in every thread.' },
  { icon: 'fa-certificate',   title: 'Export Quality Standards', desc: 'We meet international quality, safety, and compliance standards required by buyers in the USA, EU, UK, and beyond.' },
  { icon: 'fa-ruler-combined',title: 'Custom Sizing Available', desc: 'From small accent rugs to grand hall carpets — we produce any dimension with precision to fit your exact project needs.' },
  { icon: 'fa-hourglass-half',title: 'Decades of Craftsmanship',desc: 'Over 30 years of experience in handmade carpet manufacturing, with deep mastery of traditional Indian weaving techniques.' },
  { icon: 'fa-leaf',          title: 'Sustainable Materials',   desc: 'We use natural, eco-friendly fibres and azo-free dyes — responsible manufacturing for a healthier planet and safer products.' },
  { icon: 'fa-truck-fast',    title: 'Timely Delivery',         desc: 'We understand your timelines. Our production planning and logistics team ensures on-time dispatch and reliable delivery worldwide.' },
  { icon: 'fa-tags',          title: 'Competitive Pricing',     desc: 'Direct factory pricing with no middlemen — giving you the best value for premium handmade products sourced straight from the maker.' },
  { icon: 'fa-earth-americas',title: 'Worldwide Shipping',      desc: 'We handle end-to-end export documentation, freight, and logistics — delivering your order safely to any destination on the globe.' },
]

export default function WhyUs() {
  return (
    <section className="why-us section-pad bg-olive" id="why-us">
      <div className="container">
        <div className="section-header reveal-up light">
          <p className="section-eyebrow">Why Partner With Us</p>
          <h2 className="section-title">The Deen Dayal<br /><em>Difference</em></h2>
          <p className="section-desc">Thousands of international buyers trust us. Here's why.</p>
        </div>
        <div className="why-grid">
          {CARDS.map((c, i) => (
            <div className="why-card reveal-up" key={c.title} style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="why-icon"><i className={`fa-solid ${c.icon}`} /></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}