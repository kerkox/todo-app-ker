import React from 'react'

export const TodoCounter = ({completed, total}) => {

  return (
    <div>
      Has completado <span> { completed } </span> de <span> { total } </span>
    </div>
  )
}
