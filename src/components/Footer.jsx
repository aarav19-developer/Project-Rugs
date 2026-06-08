import { Link } from 'react-router-dom'
import '../style/Footer.css'

// TODO: Replace each href with your actual social media profile URL
const SOCIALS = [
  { icon: 'fa-brands fa-instagram',  href: 'https://instagram.com', label: 'Instagram' },
  { icon: 'fa-brands fa-facebook-f', href: 'https://facebook.com',  label: 'Facebook'  },
  { icon: 'fa-brands fa-linkedin-in',href: 'https://linkedin.com',  label: 'LinkedIn'  },
  { icon: 'fa-brands fa-youtube',    href: 'https://youtube.com',   label: 'YouTube'   },
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
  address:  'Industrial Area, Meerut, Uttar Pradesh — 250001, India',
  phone:    '+91 99999 99999',       // TODO: Replace
  email:    'info@deendayalrugs.com', // TODO: Replace
  whatsapp: '919999999999',           // TODO: Replace
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
                <img src="/logo-icon.svg" alt="" className="footer-logo-icon" aria-hidden="true" />
                <div className="footer-logo-text">
                  <span className="logo-main">Deen Dayal</span>
                  <span className="logo-sub">Rugs Exports</span>
                </div>
              </div>
              <p>Preserving the art of Indian handmade crafts — crafted with soul, exported with pride from Meerut, India.</p>
              <div className="footer-socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <i className={s.icon} />
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
                  <i className="fa-brands fa-whatsapp" />
                  <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
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
