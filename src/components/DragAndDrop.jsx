import React from 'react'
import Column from './Column'

const DragAndDrop = () => {
  return (
    <div>
      <h1>Drag and Drop</h1>
      <div className="main">
        <Column title="One" />
        <Column title="Two" />
        <Column title="Three" />
      </div>
    </div>
  )
}

export default DragAndDrop
