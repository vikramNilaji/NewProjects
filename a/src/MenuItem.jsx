import React from 'react'

const MenuItem = ({item}) => {
  return (
    <div>
      <li>{item.label}</li>

      {
        item && item.children && item.children.length > 0 ? <  :null  
      }
      
    </div>
  )
}

export default MenuItem
