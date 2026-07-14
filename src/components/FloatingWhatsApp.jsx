const WA_LINK = `https://wa.me/919627111136?text=${encodeURIComponent("Hello, I visited your website and I'm interested in your carpet and rug products. Could you please share more details about your product range, pricing, and export options? Thank you.")}`

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      className="float-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Deen Dayal Rugs Exports on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
      <span className="wa-tooltip">Chat with us</span>
    </a>
  )
}
