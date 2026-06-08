import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children and adds the .revealed class
 * when the element enters the viewport.
 */
export default function ScrollReveal({ children, className = 'reveal-up', threshold = 0.12, style }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
