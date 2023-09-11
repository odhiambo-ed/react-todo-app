import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const TodoForm = ({addTodos}) => {
    const [task, setTask] = useState("");
    const [isValid, setIsvalid] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            addTodos(task);
            setTask("");
            setIsvalid(true)
        } else {
            setIsvalid(false)
        }
    }
    return (
      <>
            <Form className='d-flex flex-row gap-2 justify-content-center align-items-center' onSubmit={handleSubmit}>
              <Form.Group controlId='taskInput'>
                  <Form.Control
                        className='w-100'
                        type='text'
                        placeholder='Add a new task'
                        value={task}
                        onChange={(e) => {
                            setTask(e.target.value);
                            setIsvalid(true);
                        }}
                        isInvalid={!isValid}
                    />
                        <Form.Control.Feedback type='invalid' className='text-danger'>
                            Please enter valid task.
                        </Form.Control.Feedback>
              </Form.Group>
              <Button type='submit' variant='primary'>Add Task</Button>
        </Form>
      </>
  )
}

export default TodoForm