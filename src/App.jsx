import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoCreate from "./pages/TodoCreate";
import TodoEdit from "./pages/TodoEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/create" element={<TodoCreate />} />
        <Route path="/edit/:id" element={<TodoEdit />} />
      </Routes>
    </>
  );
}

export default App;
