import React from 'react'

export const TodoList = (props) => {
  return (
    <div className='list-group'>
      {props.children}
    </div>
  )
}
