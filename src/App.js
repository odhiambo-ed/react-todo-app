import { useState } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  const addTodos = (task) => {
    setTodos([...todos, task])
  }

  const deleteTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <Container fluid="md">
      <Row className="mt-5">
        <Col sm={12} md={10} lg={8} className='d-flex flex-column gap-5 justify-content-center align-items-center '>
          <TodoForm addTodos={addTodos} />
          <TodoList todos={todos} deleteTodos={deleteTodos} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
