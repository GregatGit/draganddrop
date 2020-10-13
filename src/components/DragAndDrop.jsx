import React, { useState } from 'react'
import Column from './Column'
import { initData } from '../data'

const DragAndDrop = () => {
  const [data, setData] = useState(initData)
  return (
    <div>
      <h1>Drag and Drop</h1>
      <div className="main">
        {data && data.columnOrder.map((columnId, index) => {
          const items = data.columns[columnId].itemIds.map(id => {
            return data.items[id]
          })
          return <Column key={columnId} items={items} index={index} />
        })}
      </div>
    </div>
  )
}

export default DragAndDrop
