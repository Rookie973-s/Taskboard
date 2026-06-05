// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  footer: {
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    padding: '24px 40px',
    marginTop: '60px',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 700,
    fontSize: '16px',
    color: '#1e293b',
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    fontSize: '14px',
    color: '#64748b',
    cursor: 'pointer',
  },
  copy: {
    fontSize: '14px',
    color: '#64748b',
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        {/* Logo */}
        <div style={styles.logo}>
          <span>🎓</span> TaskBoard
        </div>

        {/* Links */}
        <div style={styles.links}>
          <span style={styles.link}>Privacy Policy</span>
          <span style={styles.link}>Terms of Service</span>
          <span style={styles.link}>Contact Us</span>
        </div>

        {/* Copyright */}
        <p style={styles.copy}>© 2026 TaskBoard. All rights reserved.</p>
      </div>
    </footer>
  )
}
