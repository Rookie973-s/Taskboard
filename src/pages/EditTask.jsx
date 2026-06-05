import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FileEdit, Calendar, Save } from 'lucide-react'
import Navbar from '../components/Navbar'

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  page: { backgroundColor: '#f1f5f9', minHeight: '100vh' },

  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '60px 20px',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid #e2e8f0',
  },

  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#0f172a',
  },
  editIcon: {
    color: '#1D4ED8',
  },

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

  // Date input with icon feel
  dateWrapper: {
    position: 'relative',
    marginBottom: '28px',
  },
  dateInput: {
    width: '100%',
    padding: '12px 16px 12px 44px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#1e293b',
    outline: 'none',
    backgroundColor: '#fff',
  },
  dateIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
  },

  actionsRow: {
    display: 'flex',
    gap: '12px',
  },
  updateBtn: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#1D4ED8',
    color: '#fff',
    padding: '14px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#475569',
    padding: '14px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '15px',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
  },

  footer: {
    textAlign: 'center',
    padding: '32px',
    fontSize: '14px',
    color: '#64748b',
  },
}

export default function EditTask({ tasks, onUpdate }) {
  const { id } = useParams()        // get the task id from the URL
  const navigate = useNavigate()

  // Find the task we want to edit
  const task = tasks.find((t) => t.id === Number(id))

  // Pre-fill the form fields with the task's current values
  const [title, setTitle]           = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')
  const [dueDate, setDueDate]       = useState(task?.dueDate || '')

  // If task not found, show a message
  if (!task) {
    return (
      <div style={styles.page}>
        <Navbar />
        <div style={styles.container}>
          <p>Task not found.</p>
        </div>
      </div>
    )
  }

  // Called when the user clicks "Update Task"
  function handleUpdate() {
    if (!title.trim()) {
      alert('Please enter a task title.')
      return
    }

    // Create an updated task with the same id and status
    const updatedTask = {
      ...task,
      title,
      description,
      dueDate,
    }

    onUpdate(updatedTask)        // save changes to shared state
    navigate('/tasks')           // go back to task list
  }

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>

          {/* Header */}
          <div style={styles.cardHeader}>
            <h1 style={styles.title}>Edit Task</h1>
            <span style={styles.editIcon}>
              <FileEdit size={24} color="#1D4ED8" />
            </span>
          </div>

          {/* Task Title */}
          <label style={styles.label}>Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />

          {/* Description */}
          <label style={styles.label}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
          />

          {/* Due Date */}
          <label style={styles.label}>Due Date</label>
          <div style={styles.dateWrapper}>
            <span style={styles.dateIcon}>
              <Calendar size={16} />
            </span>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              style={styles.dateInput}
            />
          </div>

          {/* Action buttons */}
          <div style={styles.actionsRow}>
            <button style={styles.updateBtn} onClick={handleUpdate}>
              <Save size={16} />
              Update Task
            </button>
            <button style={styles.cancelBtn} onClick={() => navigate('/tasks')}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div style={styles.footer}>© 2026 TaskBoard. All rights reserved.</div>
    </div>
  )
}