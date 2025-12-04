let todos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build Todo App", completed: true }
];

export function getTodos() {
  return todos;
}

export function getTodoById(id) {
  return todos.find(t => t.id === id);
}

export function addTodo(title) {
  todos.push({
    id: Date.now(),
    title,
    completed: false
  });
}

export function updateTodo(id, newData) {
  todos = todos.map(t =>
    t.id === id ? { ...t, ...newData } : t
  );
}

export function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
}
