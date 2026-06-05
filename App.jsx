import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tasks from './pages/Tasks'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'
import ViewTask from './pages/ViewTask'


export default function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        {/* Each Route maps a URL path to a page component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/add-task" element={<AddTask  />} />
        <Route path="/edit-task/:id"/>
        <Route path="/view-task/:id" />
      </Routes>
    </BrowserRouter>
  )
}
