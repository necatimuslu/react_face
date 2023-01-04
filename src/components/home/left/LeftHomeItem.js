import React from 'react'

export default function LeftHomeItem({text,img,notification}) {
    
  return (
    <div className='left_home_item hover1'>
    <img src={`../../left/${img}.png`} alt='' />
    <div className='left_home_notification'>
         <span>{text}</span>
    {notification && <div className='left_home_ml'>
        <div className='left_home_dot'> </div>
        {notification}</div>}
    </div>
   
</div>
  )
}
