import { Link, useLocation } from 'react-router-dom'

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    height: '60px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 700,
    fontSize: '18px',
    color: '#1e293b',
  },
  logoIcon: {
    color: '#1D4ED8',
    fontSize: '20px',
  },
  links: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
  },
  link: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#64748b',
    paddingBottom: '4px',
  },
  activeLink: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#1D4ED8',
    borderBottom: '2px solid #1D4ED8',
    paddingBottom: '4px',
  },
}

export default function Navbar() {
  const location = useLocation() // tells us the current URL path

  // Helper to decide which style to use for each nav link
  function linkStyle(path) {
    return location.pathname === path ? styles.activeLink : styles.link
  }

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        <span style={styles.logoIcon}>🎓</span>
        TaskBoard
      </Link>

      {/* Navigation links */}
      <ul style={styles.links}>
        <li><Link to="/" style={linkStyle('/')}>Home</Link></li>
        <li><Link to="/tasks" style={linkStyle('/tasks')}>Tasks</Link></li>
        <li><Link to="/add-task" style={linkStyle('/add-task')}>Add Task</Link></li>
        <li><Link to="/about" style={linkStyle('/about')}>About</Link></li>
      </ul>
    </nav>
  )
}
