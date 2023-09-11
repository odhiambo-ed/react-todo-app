import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TodoList = ({todos, deleteTodos}) => {
  return (
      <>
          <ListGroup>
              {todos.map((todo, index) => {
                  <ListGroup.Item>
                      {todo}
                      <span
                          className='float-right'
                          onClick={() => deleteTodos(index)}
                          style={{cursor: 'pointer'}}
                      >
                          &#10006
                      </span>
                </ListGroup.Item>
            })}
          </ListGroup>   
    </>
  )
}

export default TodoList