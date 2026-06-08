import { useState } from 'react'
import '../style/Enquiry.css'

/* ============================================================
   DUMMY DATA — replace with real values when available
   ============================================================ */
// TODO: Replace with actual WhatsApp number (country code + number, no spaces/dashes)
const WHATSAPP_NUMBER = '919999999999'

// TODO: Replace with actual business email address
const BUSINESS_EMAIL = 'info@deendayalrugs.com'

// TODO: For actual form submission, integrate with:
// Option A — EmailJS (free, no backend needed):
//   npm install emailjs-com
//   import emailjs from 'emailjs-com'
//   emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form, 'USER_ID')
// Option B — Formspree (just change action URL):
//   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
// Option C — Custom backend API endpoint

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
  'Free sample dispatch on request',
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

  const validate = () => {
    const e = {}
    if (!form.fullName.trim())        e.fullName        = true
    if (!form.email.trim())           e.email           = true
    if (!form.phone.trim())           e.phone           = true
    if (!form.country.trim())         e.country         = true
    if (!form.productInterest)        e.productInterest = true
    return e
  }

  const handleChange = (field) => (ev) => {
    setForm((prev) => ({ ...prev, [field]: ev.target.value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setSending(true)

    /* ──────────────────────────────────────────────────────
       TODO: Replace the block below with real email sending.
       Example using EmailJS:

       import emailjs from 'emailjs-com'
       await emailjs.send(
         'YOUR_SERVICE_ID',    // from EmailJS dashboard
         'YOUR_TEMPLATE_ID',   // from EmailJS dashboard
         {
           from_name:    form.fullName,
           from_email:   form.email,
           phone:        form.phone,
           country:      form.country,
           product:      form.productInterest,
           message:      form.message,
           to_email:     BUSINESS_EMAIL,
         },
         'YOUR_PUBLIC_KEY'     // from EmailJS dashboard
       )
    ────────────────────────────────────────────────────── */
    await new Promise((r) => setTimeout(r, 1000)) // simulated delay — remove when real API added

    setSending(false)
    setSuccess(true)
    setForm(INITIAL)
    setTimeout(() => setSuccess(false), 5000)
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
                <li key={f}><i className="fa-solid fa-check" />{f}</li>
              ))}
            </ul>

            <div className="enquiry-contact-quick">
              {/* TODO: Replace WHATSAPP_NUMBER with real number */}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="quick-wa">
                <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
              </a>
              {/* TODO: Replace BUSINESS_EMAIL with real email */}
              <a href={`mailto:${BUSINESS_EMAIL}`} className="quick-mail">
                <i className="fa-solid fa-envelope" /> {BUSINESS_EMAIL}
              </a>
            </div>
          </div>

          {/* ── RIGHT FORM ── */}
          <form className="enquiry-form reveal-right" onSubmit={handleSubmit} noValidate>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name <span>*</span></label>
                <input id="fullName" type="text" placeholder="Your full name"
                  className={errors.fullName ? 'error' : ''}
                  value={form.fullName} onChange={handleChange('fullName')} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address <span>*</span></label>
                <input id="email" type="email" placeholder="your@email.com"
                  className={errors.email ? 'error' : ''}
                  value={form.email} onChange={handleChange('email')} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp <span>*</span></label>
                <input id="phone" type="tel" placeholder="+1 234 567 8900"
                  className={errors.phone ? 'error' : ''}
                  value={form.phone} onChange={handleChange('phone')} />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country <span>*</span></label>
                <input id="country" type="text" placeholder="Your country"
                  className={errors.country ? 'error' : ''}
                  value={form.country} onChange={handleChange('country')} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="productInterest">Product Interest <span>*</span></label>
              <select id="productInterest"
                className={errors.productInterest ? 'error' : ''}
                value={form.productInterest} onChange={handleChange('productInterest')}>
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
                value={form.message} onChange={handleChange('message')} />
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
          </form>

        </div>
      </div>
    </section>
  )
}