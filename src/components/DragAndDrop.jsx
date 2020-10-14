import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './Column'
import { initData } from '../data'

const DragAndDrop = () => {
  const [data, setData] = useState(initData)
  const onDragEnd = (result) => {
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
    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if (start === finish) { //same column
      const newItemIds = [...start.itemIds]
      newItemIds.splice(source.index, 1)
      newItemIds.splice(destination.index, 0, draggableId)

      const newColumn = { ...start, itemIds: newItemIds }
      const state = { ...data }
      state.columns[newColumn.id] = newColumn
      setData(state)
      return
    }

    const [moving] = start.itemIds.splice(source.index, 1)
    finish.itemIds.splice(destination.index, 0, moving)
    const state = { ...data }
    state.columns[source.droppableId].itemIds = start.itemIds
    state.columns[destination.droppableId].itemIds = finish.itemIds
    setData(state)
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
