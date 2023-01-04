
import './style.css';


import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';
import SearchMenu from './SearchMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function Header({page}) {
    const color = '#808080';
    const { user } = useSelector((state)=> ({...state}));
    const [searchMenuVisible,setSearchMenuVisible] = useState(false);
  return (
    <header>
    < HeaderLeft setSearchMenuVisible={setSearchMenuVisible} color={color} />
     {searchMenuVisible &&  <SearchMenu color={color} setSearchMenuVisible={setSearchMenuVisible} /> }
      <HeaderMiddle color={color} page={page} />
      <HeaderRight user={user} color={color} page={page} />
    </header>
  )
}
