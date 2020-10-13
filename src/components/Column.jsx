import React from 'react'
import Item from './Item'

const Column = ({ title, items }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <ul>{items && items.map((item) => <Item key={item.id} item={item.content} />)}</ul>
    </div>
  )
}

export default Column
