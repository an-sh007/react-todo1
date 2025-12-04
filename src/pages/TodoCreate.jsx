// src/pages/TodoCreate.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addTodo } from '../services/todoService'

export default function TodoCreate() {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  function handleAdd() {
    if (!title.trim()) return
    addTodo(title)
    navigate('/todos')
  }

  return (
    <div className="card form-card">
      <h2>Create Todo</h2>
      <input
        type="text"
        placeholder="Enter todo title..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className="form-actions">
        <button className="button primary" onClick={handleAdd}>Add</button>
        <button className="button" onClick={() => navigate('/todos')}>Cancel</button>
      </div>
    </div>
  )
}
