import { Link } from 'react-router-dom'
import PageHero from '../Components/PageHero'
import PageMeta from '../Components/PageMeta'
import {
  ComposableMap, Geographies, Geography, Marker,
} from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const DESTINATIONS = [
  { flag: '🇺🇸', code: 'us', name: 'USA',            region: 'Americas',    coords: [-95.71,  37.09] },
  { flag: '🇨🇦', code: 'ca', name: 'Canada',         region: 'Americas',    coords: [-106.35, 56.13] },
  { flag: '🇬🇧', code: 'gb', name: 'United Kingdom', region: 'Europe',      coords: [  -3.44, 55.38] },
  { flag: '🇩🇪', code: 'de', name: 'Germany',        region: 'Europe',      coords: [ 10.45,  51.17] },
  { flag: '🇫🇷', code: 'fr', name: 'France',         region: 'Europe',      coords: [  2.21,  46.23] },
  { flag: '🇮🇹', code: 'it', name: 'Italy',          region: 'Europe',      coords: [ 12.57,  41.87] },
  { flag: '🇳🇱', code: 'nl', name: 'Netherlands',    region: 'Europe',      coords: [  5.29,  52.13] },
  { flag: '🇸🇪', code: 'se', name: 'Sweden',         region: 'Europe',      coords: [ 18.64,  60.13] },
  { flag: '🇨🇭', code: 'ch', name: 'Switzerland',    region: 'Europe',      coords: [  8.23,  46.82] },
  { flag: '🇪🇸', code: 'es', name: 'Spain',          region: 'Europe',      coords: [ -3.75,  40.46] },
  { flag: '🇦🇪', code: 'ae', name: 'UAE',            region: 'Middle East', coords: [ 53.85,  23.42] },
  { flag: '🇸🇦', code: 'sa', name: 'Saudi Arabia',   region: 'Middle East', coords: [ 45.08,  23.89] },
  { flag: '🇶🇦', code: 'qa', name: 'Qatar',          region: 'Middle East', coords: [ 51.18,  25.35] },
  { flag: '🇴🇲', code: 'om', name: 'Oman',           region: 'Middle East', coords: [ 57.55,  21.51] },
  { flag: '🇯🇴', code: 'jo', name: 'Jordan',         region: 'Middle East', coords: [ 36.24,  30.59] },
  { flag: '🇮🇱', code: 'il', name: 'Israel',         region: 'Middle East', coords: [ 34.85,  31.05] },
  { flag: '🇧🇭', code: 'bh', name: 'Bahrain',        region: 'Middle East', coords: [ 50.55,  26.07] },
  { flag: '🇦🇺', code: 'au', name: 'Australia',      region: 'Asia-Pacific',coords: [133.78, -25.27] },
  { flag: '🇯🇵', code: 'jp', name: 'Japan',          region: 'Asia-Pacific',coords: [138.25,  36.20] },
  { flag: '🇻🇳', code: 'vn', name: 'Vietnam',        region: 'Asia-Pacific',coords: [108.00,  14.06] },
  { flag: '🇵🇭', code: 'ph', name: 'Philippines',    region: 'Asia-Pacific',coords: [121.77,  12.88] },
  { flag: '🇰🇪', code: 'ke', name: 'Kenya',          region: 'Africa',      coords: [ 37.91,  -0.02] },
]

const REGIONS = [...new Set(DESTINATIONS.map((d) => d.region))]

const SHIPPING_INFO = [
  { icon: 'fa-solid fa-ship',        title: 'Sea Freight',      desc: 'Full container (FCL) and less-than-container (LCL) shipping available to all major ports worldwide.' },
  { icon: 'fa-solid fa-plane',       title: 'Air Freight',      desc: 'Express air freight for urgent shipments and samples — delivered to your door in 3–7 business days.' },
  { icon: 'fa-solid fa-file-lines',  title: 'Export Docs',      desc: 'Commercial invoice, packing list, certificate of origin, bill of lading — all handled by our team.' },
  { icon: 'fa-solid fa-shield',      title: 'Cargo Insurance',  desc: 'We offer cargo insurance options to protect your shipment from origin to destination.' },
]

export default function GlobalReach() {
  return (
    <>
      <PageMeta
        title="Global Carpet Export Destinations — Deen Dayal Rugs Exports India"
        description="Exporting handmade and machine-made carpets and rugs from Meerut, Uttar Pradesh, India to USA, UK, Germany, UAE, Australia and 20+ countries. Full export documentation and worldwide shipping."
        canonical="https://www.deendayalrugs.com/global-reach"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.deendayalrugs.com/global-reach#webpage",
          "url": "https://www.deendayalrugs.com/global-reach",
          "name": "Global Carpet Export Destinations — Deen Dayal Rugs Exports India",
          "description": "Exporting handmade carpets and rugs from Meerut, Uttar Pradesh, India to USA, UK, Germany, UAE, Australia and 20+ countries worldwide.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deendayalrugs.com/" },
              { "@type": "ListItem", "position": 2, "name": "Global Reach", "item": "https://www.deendayalrugs.com/global-reach" }
            ]
          }
        }}
      />
      <PageHero
        eyebrow="Our Global Footprint"
        title="Woven in Meerut, Loved Worldwide"
        desc="Our products have found homes in living rooms, luxury hotels, and design studios across the globe."
        bg="#5C6B3A"
      />

      {/* ── INTRO ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Exporting Since the 2000s</p>
            <h2 className="section-title">
              25+ Countries,<br /><em>One Source</em>
            </h2>
            <p className="section-desc">
              From a single workshop in Meerut to buyers in over 25 countries — our export
              network spans Americas, Europe, the Middle East, Asia-Pacific and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ── WORLD MAP ── */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="world-map-wrapper reveal-up">
            <ComposableMap projectionConfig={{ scale: 147 }} style={{ width: '100%', height: 'auto' }}>
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#C8B99A"
                      stroke="#FAF6EF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover:   { fill: '#7A8F50', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>
              {DESTINATIONS.map(({ name, coords }) => (
                <Marker key={name} coordinates={coords}>
                  <circle r={5} fill="#5C6B3A" stroke="#FAF6EF" strokeWidth={1.5} />
                  <circle r={9} fill="rgba(92,107,58,0.2)" />
                </Marker>
              ))}
              {/* Origin — Meerut, India */}
              <Marker coordinates={[77.7, 29.0]}>
                <circle r={7} fill="#B8922A" stroke="#FAF6EF" strokeWidth={2} />
                <circle r={13} fill="rgba(184,146,42,0.2)" />
              </Marker>
            </ComposableMap>
            <div className="map-legend">
              <span className="legend-item"><span className="legend-dot" style={{ background: '#B8922A' }} /> Origin — Meerut, Uttar Pradesh, India</span>
              <span className="legend-item"><span className="legend-dot" style={{ background: '#5C6B3A' }} /> Export Destination</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUNTRIES BY REGION ── */}
      <section className="section-pad bg-sand">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Where We Ship To</p>
            <h2 className="section-title">Our Export <em>Destinations</em></h2>
          </div>
          {REGIONS.map((region) => (
            <div className="region-block reveal-up" key={region}>
              <h3 className="region-title"><i className="fa-solid fa-location-dot" /> {region}</h3>
              <div className="country-grid">
                {DESTINATIONS.filter((d) => d.region === region).map(({ code, name }) => (
                  <div className="country-card" key={name}>
                    <img
                      src={`https://flagcdn.com/w40/${code}.png`}
                      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
                      width="40"
                      height="27"
                      alt={`${name} flag`}
                      className="country-flag-img"
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="exports-note reveal-up">and 10+ more countries across Europe, Asia &amp; the Americas</p>
        </div>
      </section>

      {/* ── SHIPPING INFO ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Logistics & Shipping</p>
            <h2 className="section-title">We Handle<br /><em>Everything</em></h2>
            <p className="section-desc">From factory to your doorstep — our logistics team manages the entire export process.</p>
          </div>
          <div className="shipping-grid">
            {SHIPPING_INFO.map((s, i) => (
              <div className="shipping-card reveal-up" key={s.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="shipping-icon"><i className={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-cta section-pad bg-olive">
        <div className="container">
          <div className="page-cta-inner light reveal-up">
            <h2>Importing to Your Country?</h2>
            <p>We have experience exporting to your region. Get in touch and we'll walk you through the process.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">Contact Our Export Team</Link>
              <Link to="/process" className="btn-secondary">Our Export Process</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
