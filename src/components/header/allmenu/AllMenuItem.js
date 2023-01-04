import React from 'react'

export default function AllMenuItem({name,icon,description}) {
  return (
    
    <div className='all_menu_group_item'>
      <img src= {`../../left/${icon}.png`}  alt='' />
      <div className='all_menu_group_col'>
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  
  )
}
