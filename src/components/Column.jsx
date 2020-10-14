import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Item from './Item'

const Column = ({ index, items, columnId }) => {
  let count = index + 1
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h2 {...provided.dragHandleProps}>{count}</h2>
          <ul>
            {items &&
              items.map((item) => <Item key={item.id} item={item.content} />)}
          </ul>
        </div>
      )}
    </Draggable>
  )
}

export default Column
