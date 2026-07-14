import { useState, useEffect, useCallback } from 'react'

/**
 * ImageSlider — lightweight auto-playing image carousel
 * No external library — pure CSS transitions, fast load
 *
 * Props:
 *   images      — array of { src, alt } objects
 *   height      — CSS height string (default '100%')
 *   autoPlay    — ms between slides (default 3500, 0 = off)
 *   objectPos   — CSS object-position (default 'center')
 *   borderRadius— CSS border-radius (default 'inherit')
 */
export default function ImageSlider({
  images = [],
  height = '100%',
  autoPlay = 3500,
  objectPos = 'center',
  borderRadius = 'inherit',
}) {
  const [current, setCurrent] = useState(0)
  const [fading,  setFading]  = useState(false)

  const total = images.length

  const goTo = useCallback((idx) => {
    if (idx === current) return
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
      setFading(false)
    }, 350)
  }, [current])

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo])
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo])

  // Auto-play
  useEffect(() => {
    if (!autoPlay || total <= 1) return
    const t = setInterval(next, autoPlay)
    return () => clearInterval(t)
  }, [autoPlay, total, next])

  if (!images.length) return null

  // Single image — just render it
  if (total === 1) {
    return (
      <img
        src={images[0].src}
        alt={images[0].alt}
        loading="lazy"
        style={{ width: '100%', height, objectFit: 'cover', objectPosition: objectPos, borderRadius, display: 'block' }}
      />
    )
  }

  return (
    <div className="img-slider" style={{ height, borderRadius, position: 'relative', overflow: 'hidden' }}>
      {/* Images */}
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`img-slider-img${i === current ? ' active' : ''}${fading && i === current ? ' fading' : ''}`}
          style={{ objectPosition: img.pos || objectPos, objectFit: img.fit || 'cover' }}
        />
      ))}

      {/* Prev / Next arrows */}
      <button className="img-slider-btn img-slider-prev" onClick={prev} aria-label="Previous image">
        <i className="fa-solid fa-chevron-left" />
      </button>
      <button className="img-slider-btn img-slider-next" onClick={next} aria-label="Next image">
        <i className="fa-solid fa-chevron-right" />
      </button>

      {/* Dots */}
      <div className="img-slider-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`img-slider-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
