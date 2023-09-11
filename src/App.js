import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState("")

  const addTodos = (job) => {
    setTodos([...todos], job)
  }
  return (
    <div className='container'>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
