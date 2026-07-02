import { useState, useRef } from 'react'
import PageHero from '../Components/PageHero'
import PageMeta from '../Components/PageMeta'

const PRODUCT_OPTIONS = [
  { value: 'carpets',      label: 'Carpets (Customised Available)' },
  { value: 'poufs',        label: 'Poufs'                          },
  { value: 'cushions',     label: 'Cushions'                       },
  { value: 'wall-art',     label: 'Wall Art'                       },
  { value: 'wall-hanging', label: 'Wall Hanging'                   },
  { value: 'stool-wood',   label: 'Wooden Stools'                  },
  { value: 'benches',      label: 'Benches'                        },
  { value: 'other',        label: 'Other / Not Sure Yet'           },
]

const FEATURES = [
  'Sample dispatch available on request',
  'Custom design and size consultation',
  'FOB / CIF pricing available',
  'Export documentation support',
  'Response within 24 hours',
]

const CONTACT_INFO = [
  { icon: 'fa-solid fa-location-dot', label: 'Address',   value: 'Plot No. 158, Sector 3, Shatabdi Nagar, Partapur Industrial Area, Meerut, Uttar Pradesh — 250103, India', href: null },
  { icon: 'fa-solid fa-phone',        label: 'Phone',     value: '+91 96271 11136',              href: 'tel:+919627111136'                      },
  { icon: 'fa-solid fa-envelope',     label: 'Email',     value: 'sales@deendayalrugsexport.in', href: 'mailto:sales@deendayalrugsexport.in'    },
  { icon: 'fa-brands fa-whatsapp',    label: 'WhatsApp',  value: 'Chat with us',                 href: `https://wa.me/919627111136?text=${encodeURIComponent("Hello, I visited your website and I'm interested in your carpet and rug products. Could you please share more details about your product range, pricing, and export options? Thank you.")}`             },
]

const INITIAL = { fullName: '', email: '', phone: '', country: '', productInterest: '', message: '' }

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL)
  const [errors,  setErrors]  = useState({})
  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendErr, setSendErr] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.fullName.trim())   e.fullName       = true
    if (!form.email.trim())      e.email          = true
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = true
    if (!form.phone.trim())      e.phone          = true
    if (!form.country.trim())    e.country        = true
    if (!form.productInterest)   e.productInterest = true
    return e
  }

  const change = (f) => (ev) => {
    setForm((p) => ({ ...p, [f]: ev.target.value }))
    setErrors((p) => ({ ...p, [f]: false }))
    setSendErr(false)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSending(true)
    setSendErr(false)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO: Replace with your Web3Forms key from web3forms.com
          subject: `New Enquiry from ${form.fullName} — Deen Dayal Rugs Export`,
          from_name: form.fullName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          product_interest: form.productInterest,
          message: form.message || 'No message provided.',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setForm(INITIAL)
        setTimeout(() => setSuccess(false), 6000)
      } else {
        setSendErr(true)
      }
    } catch {
      setSendErr(true)
    }

    setSending(false)
  }

  return (
    <>
      <PageMeta
        title="Contact Us — Request a Quote or Sample | Deen Dayal Rugs Export"
        description="Send an enquiry to Deen Dayal Rugs Export in Meerut, Uttar Pradesh, India. Request product samples, custom carpet pricing, FOB/CIF quotes. We respond within 24 hours."
        canonical="https://www.deendayalrugs.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://www.deendayalrugs.com/contact#webpage",
          "url": "https://www.deendayalrugs.com/contact",
          "name": "Contact Deen Dayal Rugs Export — Request a Quote or Sample",
          "description": "Request carpet samples, custom pricing, FOB/CIF quotes from Deen Dayal Rugs Export, Meerut, Uttar Pradesh, India. Response within 24 hours.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deendayalrugs.com/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.deendayalrugs.com/contact" }
            ]
          }
        }}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Request a Quote or Sample"
        desc="Whether you're a buyer, designer, importer or retailer — we're ready to work with you."
        bg="#B8922A"
      />

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="section-pad enquiry">
        <div className="container">
          <div className="enquiry-wrapper">

            {/* Left — info */}
            <div className="enquiry-info reveal-left">
              <p className="section-eyebrow">Start a Conversation</p>
              <h2 className="section-title">
                Let's Talk<br /><em>Business</em>
              </h2>
              <p>
                Fill in your details and our export team will get back to you within 24 hours.
                We handle everything from samples to full shipments.
              </p>

              <ul className="enquiry-features">
                {FEATURES.map((f) => (
                  <li key={f}><i className="fa-solid fa-check" />{f}</li>
                ))}
              </ul>

              <div className="enquiry-contact-quick">
                <a href={`https://wa.me/919627111136?text=${encodeURIComponent("Hello, I visited your website and I'm interested in your carpet and rug products. Could you please share more details about your product range, pricing, and export options? Thank you.")}`} target="_blank" rel="noreferrer" className="quick-wa">
                  <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
                </a>
                <a href="mailto:sales@deendayalrugsexport.in" className="quick-mail">
                  <i className="fa-solid fa-envelope" /> sales@deendayalrugsexport.in
                </a>
              </div>
            </div>

            {/* Right — form */}
            <form className="enquiry-form reveal-right" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span>*</span></label>
                  <input id="fullName" type="text" placeholder="Your full name"
                    className={errors.fullName ? 'error' : ''}
                    value={form.fullName} onChange={change('fullName')} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input id="email" type="email" placeholder="your@email.com"
                    className={errors.email ? 'error' : ''}
                    value={form.email} onChange={change('email')} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp <span>*</span></label>
                  <input id="phone" type="tel" placeholder="+1 234 567 8900"
                    className={errors.phone ? 'error' : ''}
                    value={form.phone} onChange={change('phone')} />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country <span>*</span></label>
                  <input id="country" type="text" placeholder="Your country"
                    className={errors.country ? 'error' : ''}
                    value={form.country} onChange={change('country')} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="productInterest">Product Interest <span>*</span></label>
                <select id="productInterest"
                  className={errors.productInterest ? 'error' : ''}
                  value={form.productInterest} onChange={change('productInterest')}>
                  <option value="" disabled>Select a product type</option>
                  {PRODUCT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Requirements</label>
                <textarea id="message" rows={5}
                  placeholder="Tell us about your requirements — quantity, size, design preferences, delivery timeline, etc."
                  value={form.message} onChange={change('message')} />
              </div>

              <button type="submit" className="btn-submit" disabled={sending}>
                <span>{sending ? 'Sending…' : 'Send Enquiry'}</span>
                <i className="fa-solid fa-paper-plane" />
              </button>

              <p className="form-note">We respond within 24 hours. Your information is kept strictly confidential.</p>

              {success && (
                <div className="form-success show">
                  <i className="fa-solid fa-circle-check" />
                  <p>Thank you! Your enquiry has been received. We'll be in touch within 24 hours.</p>
                </div>
              )}

              {sendErr && (
                <div className="form-success show" style={{ background: 'rgba(192,57,43,0.08)', borderColor: '#c0392b' }}>
                  <i className="fa-solid fa-circle-exclamation" style={{ color: '#c0392b' }} />
                  <p style={{ color: '#c0392b' }}>Something went wrong. Please try again or contact us directly on WhatsApp.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="section-pad bg-sand">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Find Us</p>
            <h2 className="section-title">Contact <em>Information</em></h2>
          </div>
          <div className="contact-info-grid">
            {CONTACT_INFO.map((c, i) => (
              <div className="contact-info-card reveal-up" key={c.label} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="contact-info-icon"><i className={c.icon} /></div>
                <div>
                  <span className="contact-info-label">{c.label}</span>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.value}</a>
                    : <p>{c.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">Find Us</p>
            <h2 className="section-title">Our <em>Location</em></h2>
            <p className="section-desc">Located at Plot No. 158, Sector 3, Shatabdi Nagar, Partapur Industrial Area, Meerut, Uttar Pradesh, India — the carpet weaving capital of India.</p>
          </div>

          <div className="map-layout reveal-up">
            {/* ── MAP ── */}
            <div className="map-embed-wrapper">
              <iframe
                title="Deen Dayal Rugs Export — Plot No. 158, Sector 3, Shatabdi Nagar, Partapur Industrial Area, Meerut"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.146!2d77.7877!3d28.9823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6573a8e9b8e7%3A0x1!2sPartapur+Industrial+Area%2C+Meerut%2C+Uttar+Pradesh+250103%2C+India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing Deen Dayal Rugs Export location — Partapur Industrial Area, Meerut, Uttar Pradesh, India"
              />
            </div>

            {/* ── SIDE PANEL ── */}
            <div className="map-side-panel">
              <div className="map-side-icon">
                <i className="fa-solid fa-location-dot" />
              </div>
              <h3>Deen Dayal Rugs Export</h3>
              <p>
                Plot No. 158, Sector 3,<br />
                Shatabdi Nagar, Partapur Industrial Area,<br />
                Meerut, Uttar Pradesh — 250103,<br />
                India
              </p>

              <div className="map-side-divider" />

              <div className="map-side-info">
                <span><i className="fa-solid fa-phone" /> +91 96271 11136</span>
                <span><i className="fa-solid fa-envelope" /> sales@deendayalrugsexport.in</span>
              </div>

              <div className="map-side-divider" />

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Partapur+Industrial+Area+Meerut+Uttar+Pradesh+250103+India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-directions"
                aria-label="Get directions to Deen Dayal Rugs Export on Google Maps"
              >
                <i className="fa-solid fa-diamond-turn-right" />
                Get Directions
              </a>

              <a
                href="https://maps.google.com/?q=Partapur+Industrial+Area,+Meerut,+Uttar+Pradesh+250103,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-view-map"
                aria-label="View on Google Maps"
              >
                <i className="fa-solid fa-map" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
