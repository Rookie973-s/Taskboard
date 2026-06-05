import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Flag, Calendar, Tag, Pencil, LayoutList, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  page: { backgroundColor: '#f1f5f9', minHeight: '100vh' },

  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
  },

  // Page header with back arrow
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '28px',
  },
  backArrow: {
    display: 'flex',
    alignItems: 'center',
    color: '#475569',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#0f172a',
  },

  // Task detail card
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '36px',
    border: '1px solid #e2e8f0',
  },

  // Top section of card
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '24px',
  },
  categoryLabel: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#1D4ED8',
    letterSpacing: '0.08em',
    marginBottom: '8px',
    textTransform: 'uppercase',
  },
  taskTitle: {
    fontSize: '24px',
    fontWeight: 800,
    color: '#0f172a',
  },
  badges: {
    display: 'flex',
    gap: '8px',
    flexShrink: 0,
  },
  badgeStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '5px 14px',
    borderRadius: '99px',
    backgroundColor: '#f0fdf4',
    color: '#15803d',
    fontSize: '13px',
    fontWeight: 600,
    border: '1px solid #bbf7d0',
  },
  badgePriority: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '5px 14px',
    borderRadius: '99px',
    backgroundColor: '#fffbeb',
    color: '#92400e',
    fontSize: '13px',
    fontWeight: 600,
    border: '1px solid #fde68a',
  },

  // Description section
  descLabel: {
    fontWeight: 600,
    fontSize: '14px',
    color: '#475569',
    marginBottom: '10px',
  },
  descText: {
    fontSize: '15px',
    color: '#1e293b',
    lineHeight: 1.7,
    marginBottom: '28px',
  },
  code: {
    backgroundColor: '#f1f5f9',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#475569',
  },

  divider: {
    borderTop: '1px solid #f1f5f9',
    margin: '4px 0 24px',
  },

  // Info boxes row
  infoRow: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  infoIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#e8f0fe',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '12px',
    color: '#94a3b8',
    marginBottom: '4px',
  },
  infoValue: {
    fontWeight: 700,
    fontSize: '15px',
    color: '#0f172a',
  },

  // Action buttons
  actionsRow: {
    display: 'flex',
    gap: '12px',
  },
  editBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#1D4ED8',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  backBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#fff',
    color: '#1D4ED8',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '15px',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
    textDecoration: 'none',
  },

  // Motivational quote at bottom
  quote: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#94a3b8',
    fontSize: '14px',
  },
  quoteIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '8px',
  },
}

export default function ViewTask({ tasks }) {
  const { id } = useParams()    // get task id from URL
  const navigate = useNavigate()

  // Find the task by id
  const task = tasks.find((t) => t.id === Number(id))

  // If not found, show an error
  if (!task) {
    return (
      <div style={styles.page}>
        <Navbar />
        <div style={styles.container}>
          <p>Task not found. <Link to="/tasks">Go back</Link></p>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>

        {/* Page header */}
        <div style={styles.pageHeader}>
          <button style={styles.backArrow} onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <h1 style={styles.pageTitle}>View Task</h1>
        </div>

        {/* Task detail card */}
        <div style={styles.card}>

          {/* Top: category + title on left, badges on right */}
          <div style={styles.cardTop}>
            <div>
              <p style={styles.categoryLabel}>Project Milestone</p>
              <h2 style={styles.taskTitle}>{task.title}</h2>
            </div>
            <div style={styles.badges}>
              <span style={styles.badgeStatus}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                {task.status === 'Completed' ? 'Completed' : 'In Progress'}
              </span>
              <span style={styles.badgePriority}>
                <Flag size={13} />
                {task.priority || 'Medium'}
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={styles.descLabel}>Description</p>
          <p style={styles.descText}>{task.description || 'No description provided.'}</p>

          <div style={styles.divider} />

          {/* Due Date + Category info boxes */}
          <div style={styles.infoRow}>
            <div style={styles.infoBox}>
              <div style={styles.infoIcon}>
                <Calendar size={18} color="#1D4ED8" />
              </div>
              <div>
                <p style={styles.infoLabel}>Due Date</p>
                <p style={styles.infoValue}>{task.dueDate || 'No date set'}</p>
              </div>
            </div>
            <div style={styles.infoBox}>
              <div style={styles.infoIcon}>
                <Tag size={18} color="#1D4ED8" />
              </div>
              <div>
                <p style={styles.infoLabel}>Category</p>
                <p style={styles.infoValue}>Frontend Development</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div style={styles.actionsRow}>
            <Link to={`/edit-task/${task.id}`} style={styles.editBtn}>
              <Pencil size={16} />
              Edit Task
            </Link>
            <Link to="/tasks" style={styles.backBtn}>
              <LayoutList size={16} />
              Back to Tasks
            </Link>
          </div>
        </div>

        {/* Motivational quote */}
        <div style={styles.quote}>
          <div style={styles.quoteIcon}>
            <Sparkles size={22} color="#94a3b8" />
          </div>
          Stay focused. Consistent small steps lead to academic mastery.
        </div>
      </div>
    </div>
  )
}