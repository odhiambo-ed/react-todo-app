import React from 'react'
import { Button, Form } from 'react-bootstrap'

const TodoForm = () => {
  return (
      <>
          <Form className='d-flex gap-2 justify-content-center'>
              <Form.Group controlId='taskInput'>
                  <Form.Control
                      className='w-100'
                      type='text'
                      placeholder='Add a new task'
                  />
              </Form.Group>
              <Button type='submit' variant='primary'>Add Task</Button>
        </Form>
      </>
  )
}

export default TodoForm