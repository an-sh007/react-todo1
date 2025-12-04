// src/App.jsx
import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import TodoList from './pages/TodoList'
import TodoCreate from './pages/TodoCreate'
import TodoEdit from './pages/TodoEdit'

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/todos" className="brand">Todo App</Link>
          <div className="nav-links">
            <Link to="/todos">Todos</Link>
            <Link to="/todos/create">Create</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/create" element={<TodoCreate />} />
          <Route path="/todos/:id/edit" element={<TodoEdit />} />
        </Routes>
      </main>
    </>
  )
}
