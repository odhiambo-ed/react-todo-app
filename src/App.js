import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState("")

  const addTodos = (job) => {
    setTodos([...todos], job)
  }

  const deleteTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className='container'>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <TodoForm addTodos={addTodos} />
        <TodoList todos={todos} deleteTodos={deleteTodos} />
      </div>
    </div>
  );
}

export default App;
