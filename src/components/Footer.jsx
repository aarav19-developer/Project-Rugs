import { Link } from 'react-router-dom'
import '../style/Footer.css'

const SOCIALS = [
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/company/deen-dayal-rugs-exports', label: 'Connect on LinkedIn' },
]

const QUICK_LINKS = [
  { label: 'About Us',              to: '/about'        },
  { label: 'Our Products',          to: '/products'     },
  { label: 'Manufacturing Process', to: '/process'      },
  { label: 'Why Choose Us',         to: '/why-us'       },
  { label: 'Global Reach',          to: '/global-reach' },
  { label: 'Get a Quote',           to: '/contact'      },
]

const PRODUCT_LINKS = [
  'Carpets', 'Poufs', 'Cushions', 'Wall Art',
  'Wall Hanging', 'Stool Wood', 'Benches',
]

const CONTACT = {
  address:  'Plot No. 158, Sector 3, Shatabdi Nagar, Partapur Industrial Area, Meerut, Uttar Pradesh — 250103, India',
  phone:    '+91 96271 11136',
  email:    'sales@deendayalrugsexport.in',
  whatsapp: '919627111136',
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-img-wrap">
                  <img
                    src="/logo.png"
                    alt="Deen Dayal Rugs Exports logo"
                    className="footer-logo-img-only"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                </div>
                <div className="footer-logo-text">
                  <span className="logo-main">Deen Dayal</span>
                  <span className="logo-sub">Rugs Export</span>
                </div>
              </div>
              <p>Crafting premium handmade &amp; machine-made rugs and textiles — exported with pride from Meerut, Uttar Pradesh, India.</p>
              <div className="footer-socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={s.icon} aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {QUICK_LINKS.map((l) => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer-products">
              <h4>Our Products</h4>
              <ul>
                {PRODUCT_LINKS.map((p) => (
                  <li key={p}><Link to="/products">{p}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul className="contact-list">
                <li>
                  <i className="fa-solid fa-location-dot" />
                  <span>Deen Dayal Rugs Exports,<br />{CONTACT.address}</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone" />
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope" />
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                  <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Deen Dayal Rugs Exports on WhatsApp">
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Deen Dayal Rugs Exports. All rights reserved. &nbsp;|&nbsp; Meerut, Uttar Pradesh, India</p>
          <p className="footer-tagline">Crafted by Hand, Loved Worldwide ✦</p>
        </div>
      </div>
    </footer>
  )
}
