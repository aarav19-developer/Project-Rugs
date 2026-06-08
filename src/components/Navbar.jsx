import { useState, useEffect, useRef } from 'react'
import { NavLink, Link }               from 'react-router-dom'
import '../style/Navbar.css'

const PRODUCT_CATEGORIES = [
  { name: 'Carpets',       id: 'carpets',      icon: 'fa-solid fa-grip'     },
  { name: 'Poufs',         id: 'poufs',        icon: 'fa-solid fa-circle'   },
  { name: 'Cushions',      id: 'cushions',     icon: 'fa-solid fa-square'   },
  { name: 'Wall Art',      id: 'wall-art',     icon: 'fa-solid fa-image'    },
  { name: 'Wall Hangings', id: 'wall-hanging', icon: 'fa-solid fa-panorama' },
  { name: 'Wooden Stools', id: 'stool-wood',   icon: 'fa-solid fa-chair'    },
  { name: 'Benches',       id: 'benches',      icon: 'fa-solid fa-couch'    },
]

const NAV_LINKS = [
  { label: 'Home',         to: '/'             },
  { label: 'About',        to: '/about'         },
  { label: 'Products',     to: '/products',  hasDropdown: true },
  { label: 'Process',      to: '/process'       },
  { label: 'Why Us',       to: '/why-us'        },
  { label: 'Global Reach', to: '/global-reach'  },
  { label: 'Contact',      to: '/contact'       },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [dropOpen,     setDropOpen]     = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const close = () => { setMenuOpen(false); setDropOpen(false) }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">

        {/* Logo — icon + company name */}
        <Link to="/" className="nav-logo" onClick={close}>
          <img src="/logo-icon.svg" alt="" className="logo-icon" aria-hidden="true" />
          <div className="logo-text-wrap">
            <span className="logo-main">Deen Dayal</span>
            <span className="logo-sub">Rugs Exports</span>
          </div>
        </Link>

        {/* Links */}
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((l) =>
            l.hasDropdown ? (
              /* Products link with dropdown */
              <div
                key={l.to}
                className="nav-dropdown-wrap"
                ref={dropRef}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <NavLink
                  to={l.to}
                  end={false}
                  className={({ isActive }) => `nav-dropdown-trigger${isActive ? ' nav-active' : ''}`}
                  onClick={close}
                >
                  {l.label}
                  <i className="fa-solid fa-chevron-down nav-chevron" />
                </NavLink>

                {/* Dropdown panel */}
                <div className={`nav-dropdown${dropOpen ? ' open' : ''}`}>
                  <div className="nav-dropdown-header">
                    <span>Our Product Categories</span>
                  </div>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products#${cat.id}`}
                      className="nav-dropdown-item"
                      onClick={close}
                    >
                      <i className={cat.icon} />
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                  <div className="nav-dropdown-footer">
                    <Link to="/products" className="nav-dropdown-all" onClick={close}>
                      View All Products <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'nav-active' : ''}
                onClick={close}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn-quote" onClick={close}>
          Get a Quote
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
