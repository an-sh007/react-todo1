// src/pages/TodoEdit.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodoById, updateTodo } from '../services/todoService'

export default function TodoEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState(null)
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const found = getTodoById(id)
    if (!found) {
      alert('❌ No such task found!')
      navigate('/todos')
      return
    }
    setTodo(found)
    setTitle(found.title)
    setCompleted(!!found.completed)
  }, [id, navigate])

  function handleSave() {
    updateTodo(id, { title: title.trim(), completed })
    navigate('/todos')
  }

  if (!todo) return null

  return (
    <div className="card form-card">
      <h2>Edit Todo</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
        Completed
      </label>

      <div className="form-actions">
        <button className="button primary" onClick={handleSave}>Save</button>
        <button className="button" onClick={() => navigate('/todos')}>Cancel</button>
      </div>
    </div>
  )
}
