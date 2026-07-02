import '../style/GlobalReach.css'

/* ============================================================
   DUMMY DATA — replace with real values when available
   ============================================================ */
// TODO: Add or remove countries as per actual export destinations
// Each entry has: flag emoji, name, and approximate SVG map coordinates (x%, y%)
const EXPORT_COUNTRIES = [
  { flag: '🇺🇸', code: 'us', name: 'USA',            x: 18,  y: 38 },
  { flag: '🇬🇧', code: 'gb', name: 'United Kingdom', x: 46,  y: 26 },
  { flag: '🇩🇪', code: 'de', name: 'Germany',        x: 50,  y: 27 },
  { flag: '🇫🇷', code: 'fr', name: 'France',         x: 48,  y: 30 },
  { flag: '🇦🇪', code: 'ae', name: 'UAE',            x: 62,  y: 42 },
  { flag: '🇦🇺', code: 'au', name: 'Australia',      x: 82,  y: 70 },
  { flag: '🇨🇦', code: 'ca', name: 'Canada',         x: 20,  y: 28 },
  { flag: '🇮🇹', code: 'it', name: 'Italy',          x: 51,  y: 32 },
  { flag: '🇯🇵', code: 'jp', name: 'Japan',          x: 84,  y: 34 },
  { flag: '🇳🇱', code: 'nl', name: 'Netherlands',    x: 49,  y: 26 },
  { flag: '🇸🇦', code: 'sa', name: 'Saudi Arabia',   x: 60,  y: 42 },
  { flag: '🇸🇪', code: 'se', name: 'Sweden',         x: 51,  y: 22 },
  { flag: '🇶🇦', code: 'qa', name: 'Qatar',          x: 61,  y: 43 },
  { flag: '🇴🇲', code: 'om', name: 'Oman',           x: 63,  y: 45 },
  { flag: '🇯🇴', code: 'jo', name: 'Jordan',         x: 58,  y: 38 },
  { flag: '🇮🇱', code: 'il', name: 'Israel',         x: 57,  y: 37 },
  { flag: '🇧🇭', code: 'bh', name: 'Bahrain',        x: 61,  y: 42 },
  { flag: '🇨🇭', code: 'ch', name: 'Switzerland',    x: 50,  y: 29 },
  { flag: '🇪🇸', code: 'es', name: 'Spain',          x: 46,  y: 32 },
  { flag: '🇻🇳', code: 'vn', name: 'Vietnam',        x: 78,  y: 46 },
  { flag: '🇵🇭', code: 'ph', name: 'Philippines',    x: 81,  y: 47 },
  { flag: '🇰🇪', code: 'ke', name: 'Kenya',          x: 58,  y: 55 },
]

// India (origin) pin
const ORIGIN = { name: 'Meerut, Uttar Pradesh, India', x: 68, y: 44 }

export default function GlobalReach() {
  return (
    <section className="exports section-pad bg-sand" id="exports">
      <div className="container">
        <div className="section-header reveal-up">
          <p className="section-eyebrow">Our Global Footprint</p>
          <h2 className="section-title">Woven in Meerut,<br /><em>Loved Worldwide</em></h2>
          <p className="section-desc">Our products have found homes in living rooms, luxury hotels, and design studios across the globe.</p>
        </div>

        {/* ── WORLD MAP WITH PINS ── */}
        <div className="world-map-wrap reveal-up">
          {/* Simple SVG world outline — functional map for pins */}
          <div className="map-container">
            {/* TODO: Optionally replace this with a proper SVG world map or a library like react-simple-maps */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
              alt="World map showing export destinations"
              className="world-map-img"
              onError={(e) => {
                // Fallback if image fails
                e.target.style.display = 'none'
              }}
            />

            {/* Export country pins */}
            {EXPORT_COUNTRIES.map((c) => (
              <div
                key={c.name}
                className="map-pin export-pin"
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
                title={c.name}
              >
                <span className="pin-dot" />
                <span className="pin-pulse" />
                <span className="pin-label">{c.flag} {c.name}</span>
              </div>
            ))}

            {/* Origin pin — Meerut, India */}
            <div
              className="map-pin origin-pin"
              style={{ left: `${ORIGIN.x}%`, top: `${ORIGIN.y}%` }}
              title={ORIGIN.name}
            >
              <span className="pin-dot origin" />
              <span className="pin-pulse origin-pulse" />
              <span className="pin-label origin-label">📍 {ORIGIN.name}</span>
            </div>
          </div>

          <div className="map-legend">
            <span className="legend-item"><span className="legend-dot origin" /> Origin — Meerut, Uttar Pradesh, India</span>
            <span className="legend-item"><span className="legend-dot export" /> Export Destination</span>
          </div>
        </div>

        {/* ── COUNTRY CHIPS ── */}
        <div className="country-grid">
          {EXPORT_COUNTRIES.map((c) => (
            <div className="country-card reveal-up" key={c.name}>
              <img
                src={`https://flagcdn.com/w40/${c.code}.png`}
                srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
                width="40"
                height="27"
                alt={`${c.name} flag`}
                className="country-flag-img"
              />
              <span>{c.name}</span>
            </div>
          ))}
        </div>

        <p className="exports-note reveal-up">and more countries across Europe, Asia &amp; the Americas</p>
      </div>
    </section>
  )
}