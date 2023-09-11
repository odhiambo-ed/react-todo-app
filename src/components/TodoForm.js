import React from 'react'
import { Button, Form } from 'react-bootstrap'

const TodoForm = () => {
  return (
      <>
          <Form>
              <Form.Group controlId='taskInput'>
                  <Form.Control
                      type='text'
                      placeholder='Add a new task'
                  />
              </Form.Group>
              <Button>Add Task</Button>
        </Form>
      </>
  )
}

export default TodoForm