import '../style/Process.css'

const STEPS = [
  { num: '01', icon: 'fa-seedling',       title: 'Raw Material Selection',    desc: 'We source only the finest wool, silk, cotton, and jute from trusted suppliers. Every fibre is inspected for purity, strength, and dyeability before entering our workshop.' },
  { num: '02', icon: 'fa-palette',        title: 'Dyeing & Color Preparation', desc: 'Yarns are dyed using eco-friendly, azo-free dyes to ensure rich, lasting colour. Our dye masters blend traditional recipes with modern colour accuracy.' },
  { num: '03', icon: 'fa-hands',          title: 'Weaving & Knotting by Hand', desc: 'Master weavers work on traditional looms, tying hundreds of thousands of individual knots — each one placed by skilled hands following age-old techniques.' },
  { num: '04', icon: 'fa-droplet',        title: 'Washing & Finishing',        desc: 'Freshly woven carpets undergo deep washing to bring out natural lustre and softness. Finishing includes stretching, clipping, and pile levelling.' },
  { num: '05', icon: 'fa-magnifying-glass', title: 'Quality Inspection',       desc: 'Every carpet is inspected against international quality standards — checking knot density, pile height, colour fastness, dimensional accuracy, and structural integrity.' },
  { num: '06', icon: 'fa-box-open',       title: 'Packaging & Export',         desc: 'Approved carpets are carefully rolled, wrapped in protective materials, and packed for safe international shipping — arriving at your destination in perfect condition.' },
]

export default function Process() {
  return (
    <section className="process section-pad" id="process">
      <div className="container">
        <div className="section-header reveal-up">
          <p className="section-eyebrow">How We Make It</p>
          <h2 className="section-title">From Raw Fibre<br /><em>To Your Floor</em></h2>
          <p className="section-desc">Every carpet passes through careful hands at every stage. This is how tradition meets precision.</p>
        </div>
        <div className="process-timeline">
          {STEPS.map((s, i) => (
            <div className="process-step reveal-up" key={s.num} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="step-number">{s.num}</div>
              <div className="step-icon"><i className={`fa-solid ${s.icon}`} /></div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}