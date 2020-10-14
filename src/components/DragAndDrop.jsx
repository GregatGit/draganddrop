import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './Column'
import { initData } from '../data'

const DragAndDrop = () => {
  const [data, setData] = useState(initData)
  const onDragEnd = (result) => {
    console.log('drag ended: ', result)
    const { destination, source, draggableId, type } = result
    
    if (!destination) return

    if (destination.draggableId === source.droppableId &&
        destination.index === source.index
      ) return
    
    if (type === 'column'){
      const newColumnOrder = [...data.columnOrder]
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)
      const state = { ...data }
      state.columnOrder = newColumnOrder
      setData(state)
      return
    }


  }
  return (
    <div>
      <h1>Drag and Drop</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="main"
            >
              {data &&
                data.columnOrder.map((columnId, index) => {
                  const items = data.columns[columnId].itemIds.map((id) => {
                    return data.items[id]
                  })
                  return (
                    <Column
                      key={columnId}
                      columnId={columnId}
                      items={items}
                      index={index}
                    />
                  )
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DragAndDrop
