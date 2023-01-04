
import { useRef } from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import useClickOutside from '../../../helpers/clickOutside';
export default function FriendsMenu({following,setFriendsMenu}) {
    const friendMenuRef = useRef(null);
    useClickOutside(friendMenuRef,()=> setFriendsMenu(false));
  return (
    <div className="friends_menu_wrap" ref={friendMenuRef}>
        <div className="friends_menu_item hover1">
            <img src="../../../icons/favoritesOutline.png" alt=""/>
            <span>Favori</span>
        </div>
        <div className="friends_menu_item hover1">
            <img src="../../../icons/editFriends.png" alt=""/>
            <span>Arkadaş düzenle</span>
        </div>
        {
            following ?
            <div className="friends_menu_item hover1">
            <img src="../../../icons/unfollowOutlined.png" alt=""/>
            <span>Takip et</span>
        </div>
        : <div className="friends_menu_item hover1">
        <img src="../../../icons/unfollowOutlined.png" alt=""/>
        <span>Takipten çık</span>
    </div>
        }
         <div className="friends_menu_item hover1">
           <AiOutlineUserDelete />
            <span>Arkadaş sil</span>
        </div>
    </div>
  )
}
