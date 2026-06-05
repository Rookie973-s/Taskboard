import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Eye, Pencil, Trash2, Calendar, CheckCircle2, Plus } from 'lucide-react'
import Navbar from '../components/Navbar'

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  page: { backgroundColor: '#f1f5f9', minHeight: '100vh' },

  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '40px 20px',
  },

  // Header row
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '28px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#0f172a',
  },
  subtitle: {
    fontSize: '14px',
    color: '#64748b',
    marginTop: '4px',
  },
  rightControls: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '99px',
    padding: '10px 18px',
    fontSize: '14px',
    width: '260px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    width: '100%',
    color: '#1e293b',
    background: 'transparent',
  },
  newTaskBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#1D4ED8',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '14px',
    border: 'none',
    textDecoration: 'none',
  },

  // Filter tabs
  filterRow: {
    marginBottom: '24px',
  },
  filterBtn: {
    backgroundColor: '#1D4ED8',
    color: '#fff',
    border: 'none',
    borderRadius: '99px',
    padding: '8px 20px',
    fontWeight: 600,
    fontSize: '14px',
  },

  // Task grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },

  // Task card
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid #e2e8f0',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },
  badgePending: {
    backgroundColor: '#fef9c3',
    color: '#854d0e',
    padding: '3px 12px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: 600,
  },
  badgeCompleted: {
    backgroundColor: '#dcfce7',
    color: '#15803d',
    padding: '3px 12px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: 600,
  },
  cardActions: {
    display: 'flex',
    gap: '10px',
  },
  actionBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#94a3b8',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: '16px',
    color: '#0f172a',
    marginBottom: '8px',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: 1.5,
    marginBottom: '16px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    color: '#94a3b8',
  },
  dateRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },

  // Create new task card (dashed)
  createCard: {
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    padding: '20px',
    border: '2px dashed #cbd5e1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    minHeight: '180px',
    textDecoration: 'none',
    color: '#1e293b',
  },
  createIcon: {
    width: '44px',
    height: '44px',
    backgroundColor: '#e2e8f0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#94a3b8',
  },
  createText: {
    fontWeight: 700,
    fontSize: '15px',
    color: '#1e293b',
  },
  createSub: {
    fontSize: '13px',
    color: '#94a3b8',
  },

  footer: {
    textAlign: 'center',
    padding: '32px',
    fontSize: '14px',
    color: '#64748b',
  },
}

export default function Tasks() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()


  

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>

        {/* Header */}
        <div style={styles.headerRow}>
          <div>
            <h1 style={styles.title}>My Tasks</h1>
            <p style={styles.subtitle}>Stay focused and track your academic progress.</p>
          </div>

          <div style={styles.rightControls}>
            {/* Search bar */}
            <div style={styles.searchBox}>
              <Search size={15} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search tasks..."
                style={styles.searchInput}
              />
            </div>

            {/* New Task button */}
            <Link to="/add-task" style={styles.newTaskBtn}>
              <Plus size={15} />
              New Task
            </Link>
          </div>
        </div>

        {/* Filter (just "All" for now) */}
        <div style={styles.filterRow}>
          <button style={styles.filterBtn}>All</button>
        </div>

        {/* Task grid */}
        <div style={styles.grid}>

          {/* Render each task as a card */}
          
            <div key={task.id} style={styles.card}>

              {/* Card top: badge + action icons */}
              <div style={styles.cardTop}>
                <span style={styles.badgeCompleted}>
                  {task.status}
                </span>
                <div style={styles.cardActions}>
                  {/* View button */}
                  <button
                    style={styles.actionBtn}
                    title="View"
                    
                  >
                    <Eye size={16} />
                  </button>
                  {/* Edit button */}
                  <button
                    style={styles.actionBtn}
                    title="Edit"
                   
                  >
                    <Pencil size={16} />
                  </button>
                  {/* Delete button */}
                  <button
                    style={styles.actionBtn}
                    title="Delete"
                   
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Title & description */}
              <h3 style={styles.cardTitle}>HTML</h3>
              <p style={styles.cardDesc}>IM LEARNIG REACT AND MACHINE LEARNING</p>

              {/* Footer: date */}
              <div style={styles.cardFooter}>
                <div style={styles.dateRow}>
                 
                      <span>NOVEMBER</span>
                   
                  
                      <CheckCircle2 size={13} color="#22c55e" />
                      <span>Done</span>
                   
                 
                </div>
              </div>
            </div>
       

          {/* Create New Task card (always shown at the end) */}
          <Link to="/add-task" style={styles.createCard}>
            <div style={styles.createIcon}>
              <Plus size={22} />
            </div>
            <p style={styles.createText}>Create New Task</p>
            <p style={styles.createSub}>Organize your study flow</p>
          </Link>
        </div>
      </div>

      {/* Simple footer */}
      <div style={styles.footer}>2026 TaskBoard. All rights reserved.</div>
    </div>
  )
}