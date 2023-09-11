import React from 'react'
import { ListGroup } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

const TodoList = ({todos, deleteTodos}) => {
  return (
      <>
          <ListGroup>
              {todos.map((todo, index) => (
                  <ListGroup.Item key={index}>
                      {todo}
                      <i className="bi bi-x-circle"></i>
                      <span
                          className='float-right'
                          onClick={() => deleteTodos(index)}
                          style={{cursor: 'pointer'}}
                      >
                          &#10006
                      </span>
                </ListGroup.Item>
            ))}
          </ListGroup>   
    </>
  )
}

export default TodoList