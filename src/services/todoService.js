// src/services/todoService.js
const STORAGE_KEY = 'react_todos_v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : defaultTodos()
  } catch {
    return defaultTodos()
  }
}

function save(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

function defaultTodos() {
  return [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build Todo App', completed: true },
  ]
}

let todos = load()

export function getTodos() {
  // return a shallow copy to avoid mutation
  return [...todos]
}

export function getTodoById(id) {
  return todos.find(t => t.id === Number(id)) || null
}

export function addTodo(title) {
  const newTodo = { id: Date.now(), title: title.trim(), completed: false }
  todos = [...todos, newTodo]
  save(todos)
  return newTodo
}

export function updateTodo(id, patch) {
  todos = todos.map(t => (t.id === Number(id) ? { ...t, ...patch } : t))
  save(todos)
}

export function deleteTodo(id) {
  todos = todos.filter(t => t.id !== Number(id))
  save(todos)
}
