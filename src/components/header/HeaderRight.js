import { useRef, useState } from "react";
import { Link } from "react-router-dom"
import { ArrowDown,   Menu,   Messenger,   Notifications } from '../../svg';
import AllMenu from "./allmenu/AllMenu";
import useClickOutside from '../../helpers/clickOutside';
import UserMenu from "./usermenu/UserMenu";
import SettingsMenu from "./usermenu/SettingsMenu";
export default function HeaderRight({user,color,page}) {
    const [menuVisible,setMenuVisible] = useState(false);
    const [visibleUserMenu,setVisibleUserMenu] = useState(0);
    const allmenu = useRef(null);
    const usermenu = useRef(null);
   
   
    useClickOutside(allmenu,()=> setVisibleUserMenu(false))
    useClickOutside(usermenu,()=> setVisibleUserMenu(null))
  return (
    <div className='header_right' ref={allmenu}>
    <Link to={`/profile/${user?.username}`} className={`profile_link hover1 ${page === "profil" ? 'active_link' :''}`}>
          <img src={user?.picture} alt='' />  
          <span>{user?.first_name} {user?.last_name}</span>
    </Link>
    <div className='circle_icon hover2' onClick={()=> setMenuVisible(prev => !prev)}>
        <Menu />
        { menuVisible && <AllMenu color={color} />}
    </div>
    <div className='circle_icon hover2'>
        <Messenger />
    </div>
    <div className='circle_icon hover2'>
        <Notifications />
    </div>
    <div className='circle_icon hover2' onClick={()=> setVisibleUserMenu(1)} ref={usermenu}>
        <ArrowDown />
        {visibleUserMenu === 1 && <UserMenu user={user} setVisibleUserMenu={setVisibleUserMenu}  />}
        {visibleUserMenu === 2 && <SettingsMenu user={user} setVisibleUserMenu={setVisibleUserMenu} />}
        {}
    </div>
</div>
  )
}
