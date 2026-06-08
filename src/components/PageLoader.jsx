export default function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px',
      background: 'var(--cream)',
    }}>
      <div style={{
        width: '48px', height: '48px',
        border: '3px solid var(--olive-pale)',
        borderTopColor: 'var(--olive)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
        Loading…
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
