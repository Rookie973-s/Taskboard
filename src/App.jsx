import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tasks from './pages/Tasks'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'
import ViewTask from './pages/ViewTask'

// ─── Sample tasks shown on first load ───────────────────────────────────────
const sampleTasks = [
  {
    id: 1,
    title: 'Research Methodology Paper',
    description: 'Complete the literature review section for the final submission.',
    dueDate: '2023-10-24',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Math Quiz: Linear Algebra',
    description: 'Preparation for the module 3 assessment test on vectors and...',
    dueDate: '',
    priority: 'Med',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Physics Lab Report',
    description: 'Document findings from the optics experiment conducted last Tuesday.',
    dueDate: 'Tomorrow',
    priority: 'Med',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'Group Presentation: AI Ethics',
    description: 'Sync with Sarah and Mark regarding the slide design and speaker notes.',
    dueDate: '2023-10-28',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Update Weekly Planner',
    description: 'Review academic goals for the upcoming week and set reminders.',
    dueDate: '',
    priority: 'Low',
    status: 'Completed',
  },
]

export default function App() {
  // tasks is our shared state — all pages read from and write to this list
  const [tasks, setTasks] = useState(sampleTasks)

  // ── Helper: add a new task ─────────────────────────────────────────────────
  function addTask(newTask) {
    const taskWithId = { ...newTask, id: Date.now() }
    setTasks([...tasks, taskWithId])
  }

  // ── Helper: update an existing task ───────────────────────────────────────
  function updateTask(updatedTask) {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)))
  }

  // ── Helper: delete a task ─────────────────────────────────────────────────
  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Each Route maps a URL path to a page component */}
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} onDelete={deleteTask} />} />
        <Route path="/add-task" element={<AddTask onAdd={addTask} />} />
        <Route path="/edit-task/:id" element={<EditTask tasks={tasks} onUpdate={updateTask} />} />
        <Route path="/view-task/:id" element={<ViewTask tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  )
}
