import React from 'react'

export default function PostImage({img,bg}) {
    console.log(bg);
  return (
    <div className='post_image'>
      {img &&   <img src={img} alt="" />}
      {bg && <img className='post_bg_size' src={bg} /> }
    </div>
  )
}
