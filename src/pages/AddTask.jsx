import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, Lightbulb } from 'lucide-react'
import Navbar from '../components/Navbar'

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  page: { backgroundColor: '#f1f5f9', minHeight: '100vh' },

  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '32px 20px',
  },

  // Back link
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#475569',
    fontSize: '14px',
    marginBottom: '24px',
    textDecoration: 'none',
  },

  // Form card
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid #e2e8f0',
  },
  title: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '6px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '32px',
  },

  // Form fields
  label: {
    display: 'block',
    fontWeight: 600,
    fontSize: '14px',
    color: '#0f172a',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#1e293b',
    outline: 'none',
    marginBottom: '20px',
    backgroundColor: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#1e293b',
    outline: 'none',
    marginBottom: '20px',
    backgroundColor: '#fff',
    height: '140px',
    resize: 'vertical',
  },

  // Date + Priority row
  twoColRow: {
    display: 'flex',
    gap: '24px',
    marginBottom: '0',
  },
  col: {
    flex: 1,
  },

  // Priority buttons
  priorityRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  priorityBtnActive: {
    padding: '8px 18px',
    borderRadius: '99px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    fontWeight: 600,
    backgroundColor: '#fde68a',
    color: '#78350f',
    cursor: 'pointer',
  },
  priorityBtn: {
    padding: '8px 18px',
    borderRadius: '99px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    fontWeight: 500,
    backgroundColor: '#fff',
    color: '#475569',
    cursor: 'pointer',
  },

  // Action buttons
  actionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
  },
  cancelBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1D4ED8',
    fontWeight: 600,
    fontSize: '15px',
    cursor: 'pointer',
  },
  saveBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#1D4ED8',
    color: '#fff',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
  },

  // Pro tip box
  proTip: {
    marginTop: '20px',
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: '12px',
    padding: '16px 20px',
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    fontSize: '14px',
    color: '#1D4ED8',
  },

  footer: {
    textAlign: 'center',
    padding: '32px',
    fontSize: '14px',
    color: '#64748b',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1100px',
    margin: '0 auto',
  },
}

export default function AddTask({ onAdd }) {
  // Form state — one piece of state per field
  const [title, setTitle]       = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate]   = useState('')
  const [priority, setPriority] = useState('Med')

  const navigate = useNavigate()

  // Called when the user submits the form
  function handleSave() {
    if (!title.trim()) {
      alert('Oga enter a task title.')
      return
    }

    // Build the new task object
    const newTask = {
      title,
      description,
      dueDate,
      priority,
      status: 'Pending',
    }

    onAdd(newTask)           // save to shared state in App.jsx
    navigate('/tasks')       // go back to the tasks list
  }

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>

        {/* Back link */}
        <Link to="/tasks" style={styles.backLink}>
          <ArrowLeft size={15} />
          Back to Tasks
        </Link>

        {/* Form card */}
        <div style={styles.card}>
          <h1 style={styles.title}>Add New Task</h1>
          <p style={styles.subtitle}>Fill in the details below to organize your academic schedule.</p>

          {/* Task Title */}
          <label style={styles.label}>Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />

          {/* Description */}
          <label style={styles.label}>Description</label>
          <textarea
            placeholder="Write task details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
          />

          {/* Due Date + Priority side by side */}
          <div style={styles.twoColRow}>

            {/* Due Date */}
            <div style={styles.col}>
              <label style={styles.label}>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* Priority */}
            <div style={styles.col}>
              <label style={styles.label}>Priority</label>
              <div style={styles.priorityRow}>
                {['Low', 'Med', 'High'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPriority(p)}
                    style={priority === p ? styles.priorityBtnActive : styles.priorityBtn}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={styles.actionsRow}>
            <button style={styles.cancelBtn} onClick={() => navigate('/tasks')}>
              Cancel
            </button>
            <button style={styles.saveBtn} onClick={handleSave}>
              <Check size={16} />
              Save Task
            </button>
          </div>
        </div>

        {/* Pro tip */}
        <div style={styles.proTip}>
          <Lightbulb size={18} color="#1D4ED8" style={{ flexShrink: 0, marginTop: '1px' }} />
          <p>
            Pro-tip: Grouping your tasks with specific descriptions helps TaskBoard provide better
            focus-time recommendations later!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <span>© 2026 TaskBoard. All rights reserved.</span>
        <span>
          <span style={{ marginRight: 16 }}>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  )
}