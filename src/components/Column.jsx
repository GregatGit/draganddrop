import React from 'react'
import Item from './Item'

const Column = ({ title, items }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {items && items.map(item => <Item item={item.content} />)}
    </div>
  )
}

export default Column
