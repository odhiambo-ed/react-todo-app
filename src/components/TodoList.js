import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ todos, deleteTodos }) => {
  return (
    <>
      <ListGroup className='w-100'>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} className='d-flex justify-content-between align-items-center'>
            {todo}
            <AiFillDelete
              className='text-danger'
              onClick={(index) => deleteTodos(index)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default TodoList