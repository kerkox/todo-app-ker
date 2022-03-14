import React from 'react'

export const TodoCounter = (props) => {

  const {completed, total } = props;

  return (
    <div>
      Has completado <span> { completed } </span> de <span> { total } </span>
    </div>
  )
}
