import { Sparkles, Settings, ShieldCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ─── Styles 
const styles = {
  page: { backgroundColor: '#f1f5f9', minHeight: '100vh' },

  // Hero image
  imageWrapper: {
    maxWidth: '700px',
    margin: '40px auto 0',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
  },

  // Content area
  content: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '12px',
  },
  underline: {
    width: '60px',
    height: '4px',
    backgroundColor: '#1D4ED8',
    margin: '0 auto 28px',
    borderRadius: '2px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#475569',
    lineHeight: 1.8,
    marginBottom: '20px',
  },

  // Feature cards
  cardsRow: {
    display: 'flex',
    gap: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 40px 40px',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '28px',
    border: '1px solid #e2e8f0',
  },
  cardIcon: {
    marginBottom: '14px',
    color: '#1D4ED8',
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: '16px',
    marginBottom: '8px',
    color: '#0f172a',
  },
  cardText: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: 1.6,
  },
}

export default function About() {
  return (
    <div style={styles.page}>
      <Navbar />

      {/* Hero image */}
      <div style={styles.imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000"
          alt="Laptop on desk"
          style={styles.image}
        />
      </div>

      {/* Main text content */}
      <div style={styles.content}>
        <h1 style={styles.heading}>About This App</h1>
        <div style={styles.underline} />

        <p style={styles.paragraph}>
          This is a simple task management application built to help students organize their daily
          activities and improve productivity. It is designed as a learning project for React and
          Django beginners.
        </p>

        <p style={styles.paragraph}>
          TaskBoard focuses on the essentials: capturing tasks, tracking progress, and maintaining
          a clear mind. By removing the clutter found in typical enterprise project managers, we
          provide a streamlined interface that respects the student's cognitive load and encourages
          focused study sessions.
        </p>
      </div>

      {/* Feature cards */}
      <div style={styles.cardsRow}>

        {/* Card 1 */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>
            <Sparkles size={24} color="#1D4ED8" />
          </div>
          <h3 style={styles.cardTitle}>Focused UI</h3>
          <p style={styles.cardText}>
            Minimalist design intended to reduce distraction and maximize focus on the task at hand.
          </p>
        </div>

        {/* Card 2 */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>
            <Settings size={24} color="#1D4ED8" />
          </div>
          <h3 style={styles.cardTitle}>Modern Tech</h3>
          <p style={styles.cardText}>
            Leveraging React and Django to demonstrate modern full-stack web development practices.
          </p>
        </div>

        {/* Card 3 */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>
            <ShieldCheck size={24} color="#1D4ED8" />
          </div>
          <h3 style={styles.cardTitle}>Academic Tool</h3>
          <p style={styles.cardText}>
            Designed specifically for the academic journey, from daily lectures to long-term research.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}