import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const TodoForm = () => {
    const [task setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            addTodo(task);
            
        }
    }
    return (
      <>
          <Form className='d-flex gap-2 justify-content-center'>
              <Form.Group controlId='taskInput'>
                  <Form.Control
                        className='w-100'
                        type='text'
                        placeholder='Add a new task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                  />
              </Form.Group>
              <Button type='submit' variant='primary' onSubmit={handleSubmit}>Add Task</Button>
        </Form>
      </>
  )
}

export default TodoForm