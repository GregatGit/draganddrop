import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Item = ({ item, index }) => {
  const { id, content } = item
  console.log(id)
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li
          className="item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {content}
        </li>
      )}
    </Draggable>
  )
}

export default Item
