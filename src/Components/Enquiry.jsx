import { useState } from 'react'
import '../style/Enquiry.css'

const WHATSAPP_NUMBER = '919627111136'
const BUSINESS_EMAIL  = 'sales@deendayalrugsexport.in'

const PRODUCT_OPTIONS = [
  { value: 'carpets',      label: 'Carpets (Customized Available)' },
  { value: 'poufs',        label: 'Poufs'                          },
  { value: 'cushions',     label: 'Cushions'                       },
  { value: 'wall-art',     label: 'Wall Art'                       },
  { value: 'wall-hanging', label: 'Wall Hanging'                   },
  { value: 'stool-wood',   label: 'Stool Wood'                     },
  { value: 'benches',      label: 'Benches'                        },
  { value: 'other',        label: 'Other / Not Sure Yet'           },
]

const FEATURES = [
  'Sample dispatch available on request',
  'Custom design and size consultation',
  'FOB / CIF pricing available',
  'Export documentation support',
]

const INITIAL = {
  fullName: '', email: '', phone: '', country: '',
  productInterest: '', message: '',
}

export default function Enquiry() {
  const [form,    setForm]    = useState(INITIAL)
  const [errors,  setErrors]  = useState({})
  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendErr, setSendErr] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.fullName.trim())              e.fullName        = true
    if (!form.email.trim())                 e.email           = true
    if (!/\S+@\S+\.\S+/.test(form.email))  e.email           = true
    if (!form.phone.trim())                 e.phone           = true
    if (!form.country.trim())               e.country         = true
    if (!form.productInterest)              e.productInterest = true
    return e
  }

  const handleChange = (field) => (ev) => {
    setForm((prev) => ({ ...prev, [field]: ev.target.value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
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
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO: Replace — get free key at web3forms.com
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
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setSendErr(true)
      }
    } catch {
      setSendErr(true)
    }

    setSending(false)
  }

  return (
    <section className="enquiry section-pad" id="enquiry">
      <div className="container">
        <div className="enquiry-wrapper">

          {/* ── LEFT INFO PANEL ── */}
          <div className="enquiry-info reveal-left">
            <p className="section-eyebrow">Start a Conversation</p>
            <h2 className="section-title">Request a Quote<br /><em>or Sample</em></h2>
            <p>
              Whether you're a buyer, interior designer, importer, or retailer — we're
              ready to work with you. Fill in your details and our team will get back
              to you within 24 hours.
            </p>

            <ul className="enquiry-features">
              {FEATURES.map((f) => (
                <li key={f}><i className="fa-solid fa-check" aria-hidden="true" />{f}</li>
              ))}
            </ul>

            <div className="enquiry-contact-quick">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I visited your website and I'm interested in your carpet and rug products. Could you please share more details about your product range, pricing, and export options? Thank you.")}`} target="_blank" rel="noopener noreferrer" className="quick-wa" aria-label="Chat with Deen Dayal Rugs Export on WhatsApp">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Chat on WhatsApp
              </a>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="quick-mail" aria-label="Email Deen Dayal Rugs Export">
                <i className="fa-solid fa-envelope" aria-hidden="true" /> {BUSINESS_EMAIL}
              </a>
            </div>
          </div>

          {/* ── RIGHT FORM ── */}
          <form className="enquiry-form reveal-right" onSubmit={handleSubmit} noValidate aria-label="Product enquiry form">

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eq-fullName">Full Name <span aria-hidden="true">*</span></label>
                <input id="eq-fullName" type="text" placeholder="Your full name"
                  className={errors.fullName ? 'error' : ''}
                  value={form.fullName} onChange={handleChange('fullName')}
                  autoComplete="name" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="eq-email">Email Address <span aria-hidden="true">*</span></label>
                <input id="eq-email" type="email" placeholder="your@email.com"
                  className={errors.email ? 'error' : ''}
                  value={form.email} onChange={handleChange('email')}
                  autoComplete="email" aria-required="true" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eq-phone">Phone / WhatsApp <span aria-hidden="true">*</span></label>
                <input id="eq-phone" type="tel" placeholder="+1 234 567 8900"
                  className={errors.phone ? 'error' : ''}
                  value={form.phone} onChange={handleChange('phone')}
                  autoComplete="tel" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="eq-country">Country <span aria-hidden="true">*</span></label>
                <input id="eq-country" type="text" placeholder="Your country"
                  className={errors.country ? 'error' : ''}
                  value={form.country} onChange={handleChange('country')}
                  autoComplete="country-name" aria-required="true" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="eq-productInterest">Product Interest <span aria-hidden="true">*</span></label>
              <select id="eq-productInterest"
                className={errors.productInterest ? 'error' : ''}
                value={form.productInterest} onChange={handleChange('productInterest')}
                aria-required="true">
                <option value="" disabled>Select a product type</option>
                {PRODUCT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="eq-message">Message / Requirements</label>
              <textarea id="eq-message" rows={5}
                placeholder="Tell us about your requirements — quantity, size, design preferences, delivery timeline, etc."
                value={form.message} onChange={handleChange('message')} />
            </div>

            <button type="submit" className="btn-submit" disabled={sending}>
              <span>{sending ? 'Sending…' : 'Send Enquiry'}</span>
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            </button>

            <p className="form-note">We respond within 24 hours. Your information is kept strictly confidential.</p>

            {success && (
              <div className="form-success show" role="alert">
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                <p>Thank you! Your enquiry has been received. We'll be in touch within 24 hours.</p>
              </div>
            )}

            {sendErr && (
              <div className="form-success show" role="alert" style={{ background: 'rgba(192,57,43,0.08)', borderColor: '#c0392b' }}>
                <i className="fa-solid fa-circle-exclamation" aria-hidden="true" style={{ color: '#c0392b' }} />
                <p style={{ color: '#c0392b' }}>Something went wrong. Please try again or contact us directly on WhatsApp.</p>
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}