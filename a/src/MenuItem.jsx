import React from 'react'

const MenuItem = ({item}) => {
  return (

    <li>
    <p>{item.label}</p>

   
      {
        item && item.children && item.children.length > 0 ? <  :null  
      }

      
    </li>
  )
}

export default MenuItem
