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
          <Droppable droppableId={columnId} type="item">
            {(provided, snapshot) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {items &&
                  items.map((item, index) => (
                    <Item key={item.id} item={item} index={index} />
                  ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default Column
