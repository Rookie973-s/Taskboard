import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, TrendingUp, GraduationCap, Plus } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  page: { backgroundColor: '#f1f5f9', minHeight: '100vh' },

  // Hero section
  hero: {
    background: 'linear-gradient(135deg, #e8f0fe 0%, #f1f5f9 100%)',
    textAlign: 'center',
    padding: '80px 20px',
    margin: '20px 40px',
    borderRadius: '16px',
  },
  heroTitle: {
    fontSize: '42px',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: '16px',
    color: '#64748b',
    marginBottom: '32px',
  },
  heroBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#1D4ED8',
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none',
    border: 'none',
  },

  // Cards row
  cardsRow: {
    display: 'flex',
    gap: '20px',
    padding: '0 40px',
    marginTop: '24px',
  },

  // Progress card
  progressCard: {
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '28px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  progressTitle: {
    fontWeight: 700,
    fontSize: '18px',
    color: '#1D4ED8',
  },
  progressPercent: {
    fontWeight: 600,
    fontSize: '16px',
    color: '#1e293b',
  },
  progressBarBg: {
    backgroundColor: '#e2e8f0',
    borderRadius: '99px',
    height: '10px',
    marginBottom: '20px',
  },
  progressBarFill: {
    backgroundColor: '#1D4ED8',
    width: '80%',
    height: '10px',
    borderRadius: '99px',
  },
  taskRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    fontSize: '15px',
    color: '#475569',
  },
  taskDone: {
    textDecoration: 'line-through',
    color: '#94a3b8',
  },
  checkDone: {
    width: '22px',
    height: '22px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexShrink: 0,
  },
  checkPending: {
    width: '22px',
    height: '22px',
    border: '2px solid #cbd5e1',
    borderRadius: '50%',
    flexShrink: 0,
  },

  // Right column
  rightCol: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  remindersCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '24px',
  },
  remindersIcon: {
    width: '44px',
    height: '44px',
    backgroundColor: '#e8f0fe',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  remindersTitle: {
    fontWeight: 700,
    fontSize: '17px',
    marginBottom: '6px',
  },
  remindersText: {
    fontSize: '14px',
    color: '#64748b',
  },
  miniCardsRow: {
    display: 'flex',
    gap: '12px',
  },
  miniCardGreen: {
    flex: 1,
    backgroundColor: '#4ade80',
    borderRadius: '12px',
    padding: '20px 16px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#14532d',
  },
  miniCardYellow: {
    flex: 1,
    backgroundColor: '#fde68a',
    borderRadius: '12px',
    padding: '20px 16px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#78350f',
  },
  miniIcon: {
    marginBottom: '8px',
  },

  // Banner image section
  banner: {
    margin: '32px 40px',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
    height: '260px',
    background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200) center/cover',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '32px',
  },
  bannerText: {
    color: '#fff',
  },
  bannerTitle: {
    fontSize: '26px',
    fontWeight: 800,
    marginBottom: '8px',
  },
  bannerSub: {
    fontSize: '14px',
    opacity: 0.9,
  },

  // FAB button
  fab: {
    position: 'fixed',
    bottom: '32px',
    right: '32px',
    width: '52px',
    height: '52px',
    backgroundColor: '#1D4ED8',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(29,78,216,0.4)',
    cursor: 'pointer',
  },
}

export default function Home({ tasks }) {
  // Count how many tasks are completed for the progress bar
  const completed = tasks.filter((t) => t.status === 'Completed').length
  const total = tasks.length
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  // Show the first 2 tasks on the home page
  const previewTasks = tasks.slice(0, 2)

  return (
    <div style={styles.page}>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Simple Task Manager for Students</h1>
        <p style={styles.heroSubtitle}>
          Organize your tasks, stay productive, and track your daily progress easily.
        </p>
        <Link to="/tasks" style={styles.heroBtn}>
          View Tasks
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* ── Cards Row ─────────────────────────────────── */}
      <div style={styles.cardsRow}>

        {/* Today's Progress card */}
        <div style={styles.progressCard}>
          <div style={styles.progressHeader}>
            <span style={styles.progressTitle}>Today's Progress</span>
            <span style={styles.progressPercent}>{percent}%</span>
          </div>

          {/* Progress bar */}
          <div style={styles.progressBarBg}>
            <div style={{ ...styles.progressBarFill, width: `${percent}%` }} />
          </div>

          {/* Task list preview */}
          {previewTasks.map((task) => (
            <div key={task.id} style={styles.taskRow}>
              {task.status === 'Completed' ? (
                <div style={styles.checkDone}>
                  <Check size={13} strokeWidth={3} />
                </div>
              ) : (
                <div style={styles.checkPending} />
              )}
              <span style={task.status === 'Completed' ? styles.taskDone : {}}>
                {task.title}
              </span>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div style={styles.rightCol}>

          {/* Smart Reminders card */}
          <div style={styles.remindersCard}>
            <div style={styles.remindersIcon}>
              <Clock size={20} color="#1D4ED8" />
            </div>
            <h3 style={styles.remindersTitle}>Smart Reminders</h3>
            <p style={styles.remindersText}>
              Never miss a deadline with personalized notifications for every lecture and exam.
            </p>
          </div>

          {/* Mini cards */}
          <div style={styles.miniCardsRow}>
            <div style={styles.miniCardGreen}>
              <div style={styles.miniIcon}>
                <TrendingUp size={20} color="#14532d" />
              </div>
              Progress Tracking
            </div>
            <div style={styles.miniCardYellow}>
              <div style={styles.miniIcon}>
                <GraduationCap size={20} color="#78350f" />
              </div>
              Study Focus
            </div>
          </div>
        </div>
      </div>

      {/* ── Banner ────────────────────────────────────── */}
      <div style={styles.banner}>
        <div style={styles.bannerText}>
          <h2 style={styles.bannerTitle}>Built by students, for students.</h2>
          <p style={styles.bannerSub}>Designed specifically for the unique challenges of academic life.</p>
        </div>
      </div>

      <Footer />

      {/* Floating Add Button */}
      <Link to="/add-task" style={styles.fab}>
        <Plus size={24} />
      </Link>
    </div>
  )
}