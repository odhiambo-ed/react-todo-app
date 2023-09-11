import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState("");
    const [isValid, setIsvalid] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            addTodo(task);
            setTask("");
            setIsvalid(true)
        } else {
            setIsvalid(false)
        }
    }
    return (
      <>
            <Form className='d-flex gap-2 justify-content-center' onSubmit={handleSubmit}>
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
                    {!isValid && (
                        <Form.Control.Feedback type='invalid' className='text-danger'>
                            Please enter valid task.
                        </Form.Control.Feedback>
                    )}
              </Form.Group>
              <Button type='submit' variant='primary'>Add Task</Button>
        </Form>
      </>
  )
}

export default TodoForm