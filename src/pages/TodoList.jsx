// src/pages/TodoList.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTodos, deleteTodo, updateTodo } from '../services/todoService'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    setTodos(getTodos())
  }, [])

  useEffect(() => {
    // compute filtered whenever todos or searchText changes
    const text = searchText.toLowerCase().trim()
    if (!text) {
      setFiltered(todos)
    } else {
      setFiltered(todos.filter(t => t.title.toLowerCase().includes(text)))
    }
  }, [todos, searchText])

  function handleDelete(id) {
    deleteTodo(id)
    setTodos(getTodos())
  }

  function toggleCompleted(id, checked) {
    updateTodo(id, { completed: checked })
    setTodos(getTodos())
  }

  return (
    <div className="card">
      <h2>Todo List</h2>

      <div className="search-row">
        <input
          type="text"
          placeholder="Search todos..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <Link to="/todos/create" className="button primary">Add Todo</Link>
      </div>

      <ul className="todo-list">
        {filtered.length === 0 ? (
          <li className="empty">No todos found.</li>
        ) : (
          filtered.map(t => (
            <li key={t.id} className="todo-item">
              <div className="left">
                <input
                  type="checkbox"
                  checked={!!t.completed}
                  onChange={e => toggleCompleted(t.id, e.target.checked)}
                />
                <span className={t.completed ? 'done' : ''}>{t.title}</span>
              </div>

              <div className="right">
                <Link to={`/todos/${t.id}/edit`} className="button">Edit</Link>
                <button className="button danger" onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
