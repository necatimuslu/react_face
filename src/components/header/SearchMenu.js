import React, { useRef } from 'react'
import { Return, Search } from '../../svg'
import useClickOutside from '../../helpers/clickOutside';
export default function SearchMenu({color,setSearchMenuVisible}) {
  
  const menuRef = useRef(null);
  useClickOutside(menuRef,()=> setSearchMenuVisible(false))
  return (
    <div className='header_left search_area scrollbar' ref={menuRef}>
       <div className='search_wrap'>
            <div className='header_logo' onClick={()=> setSearchMenuVisible(false)}>
                <div className='circle'>
                  <Return color={color} />
                </div>
            </div>
            <div className='search'>
              <div>
                <Search color={color} />
              </div>
              <input type="text" placeholder="Facebook'ta ara" />
            </div>
       </div>
       <div className='search_history_header'>
        <span>Son aramalar</span>
        <a href="http://google.com">Düzenle</a>
       </div>
       <div className='search_history'></div>
       <div className='search_results scrollbar'></div>
    </div>
  )
}
