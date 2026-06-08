import '../style/MarqueeStrip.css'

const ITEMS = [
  'Hand-Knotted Carpets', 'Hand-Tufted Rugs', 'Flat Weave Rugs',
  'Woolen Carpets', 'Silk Blend Carpets', 'Custom Sizes Available',
  'Worldwide Exports', '100% Handmade',
]

export default function MarqueeStrip() {
  // Duplicate for seamless loop
  const all = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i}>
            {item}
            {i < all.length - 1 && <span className="dot">✦</span>}
          </span>
        ))}
      </div>
    </div>
  )
}