
import { BsFillCameraFill } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import UpdateProfilePicture from './UpdateProfilePicture';
import { useState } from 'react';
import FriendsMenu from './FriendsMenu';

export default function ProfilePicture({profile,visitor,setVisibleProfilePicture,visibleProfilePicture,coverRef,photos}) {
  const friendship = {
    friends:false,
    following:false,
    requestSent:false,
    requestReceived:false,
}
const [friendsMenu,setFriendsMenu] = useState(false);
const [respondMenu,setRespondMenu] = useState(false);
  return (
    <div className="profile_wrap">
      <div className='profile_justify'>
          <div className="profile_top_con">
             
               <div className="profile_img_wrap">
                <img src={profile?.picture} alt=""/>
               { !visitor && <div className="add_img hover2" onClick={()=> setVisibleProfilePicture(true)}>
                    <BsFillCameraFill />
                </div>}
                {
                  visibleProfilePicture && <UpdateProfilePicture photos={photos} coverRef={coverRef} setVisibleProfilePicture={setVisibleProfilePicture} />
                }
            </div>
             
            <div className="profile_name">
              <span>{profile?.first_name} {profile?.last_name}</span>
            </div>
            <div className="profile_friends">
              <span>132 arkadaş</span>
            </div>
          </div>
          {
            visitor ? <div className='friendship'> 
            {
              friendship.friends ? <div className='friends_wrap'>
                <div className='friends_item' onClick={()=> setFriendsMenu(prev=> !prev)}> 
                <img src="../../../icons/friends.png" alt="" />
                <span>Arkadaş</span>
                </div>
                {
                  friendsMenu && <FriendsMenu  setFriendsMenu={setFriendsMenu} following={friendship.following} />
                }
                 </div>
                 : !friendship.requestSent && !friendship.requestReceived && <button className='blue_btn'>
                  <img className='invert' src="../../../icons/addFriend.png" alt=""/>
                  <span>Arkadaş ekle</span>
                   </button>
            }
            {
              friendship.requestSent ? 
                <button className='blue_btn'>
                  <img className='invert' src="../../../icons/cancelRequest.png" alt=""/>
                  <span>Arkadaş isteği iptal</span>
                </button>
              :
             friendship.requestReceived &&  
             <div>
              <button className='gray_btn' style={{gap:'10px', display:'flex',alignItems:'center'}}>
                  <img  src="../../../icons/friends.png" alt=""/>
                  <span>İstek durumu</span>
                   </button>

                  {
                    respondMenu && <div className="friends_menu_wrap" >
                    <div className="friends_menu_item hover1">
                      
                        <span>Onayla</span>
                    </div>
                    <div className="friends_menu_item hover1">
                      
                        <span>İptal</span>
                  </div>
                  
                  </div>
                  }
                  {
                    friendship.following ? 
                    <button className='gray_btn' style={{gap:'10px', display:'flex',alignItems:'center'}}>
                      <img src="../../../icons/follow.png" alt="" />
                      <span>Takip ediliyor</span>
                    </button>
                    :
                    <button className='gray_btn' style={{gap:'10px', display:'flex',alignItems:'center'}}>
                      <img src="../../../icons/follow.png" alt="" />
                      <span>Takip et</span>
                    </button>
                  }
                  <button className={friendship.friends ? 'blue_btn' : 'gray_btn'} style={{gap:'10px', display:'flex',alignItems:'center'}}>
                      <img src="../../../icons/message.png" className={friendship.friends ? 'invert' : ''} alt=""/>
                      <span>Messenger</span>
                  </button>
              </div>
             
            }
            </div> : <div className='profile_btn'>
            <button className='blue_btn'><AiFillPlusCircle className='profile_icon_size' /> Hikayeye ekleme yap</button>
            <button className='profile_gray_btn hover2'><MdModeEdit /> Profili düzenle</button>
          </div>
          }
        </div>
    </div>
  )
}
