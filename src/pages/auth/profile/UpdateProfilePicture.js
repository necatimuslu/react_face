
import { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { FaRegSquare } from 'react-icons/fa';
import { useState } from 'react';
import SeeProfilePicture from './SeeProfilePicture';
import useClickOutside  from '../../../helpers/clickOutside'
import { useSelector } from 'react-redux';
export default function UpdateProfilePicture({setVisibleProfilePicture,coverRef,photos}) {
    const {user} = useSelector((state)=> ({...state}));
    const updateProfileRef = useRef(null);
    const inputPictureRef = useRef(null);
    useClickOutside(updateProfileRef,()=> setVisibleProfilePicture(false))
    const [image,setImage] = useState("");
    const [error,setError] = useState('');
    function handleImage(e){
        let imgFile =e.target.files[0];
        if(imgFile.type !== "image/jpg" && imgFile.type !== "image/jpeg" && imgFile.type !== "image/png"){
            setError(`${imgFile.name} formatı uyumlu değildir`);
            return;
        }else if (imgFile.size > 1024 * 1024 * 5){
            setError(`${imgFile.name} resim boyutu yüksektir`);
            return; 
        }
        const reader = new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload = (fileEvent) => {
            setImage(fileEvent.target.result);
        }

    }
    console.log(photos);
  return (
    <div className="blur">
        <input type="file" hidden accept='image/jpg,image/png,image/jpeg' ref={inputPictureRef} onChange={handleImage} />
        <div className="profile_picture_update_wrap" ref={updateProfileRef}>
            <div className="profile_picture_update_header">
                <span>Profil resmini güncelle</span>
                <div className="profile_picture_circle" onClick={()=> setVisibleProfilePicture(false)}>
                    <AiOutlineClose />
                </div>
            </div>
           
                <div className='profile_picture_update_grid'>
                   <div className='profile_picture_update_button_container'>
                    <button className='light_blue_btn' onClick={()=> inputPictureRef.current.click()}>
                        <GrAdd className='button_icon_size' />
                        Fotoğraf güncelle</button>
                    <button className='light_gray_btn'>
                        <FaRegSquare  className='button_icon_grey'/>
                        Çerçeve ekle</button>
                     </div> 
                </div>
                
          
           {
            image && <SeeProfilePicture coverRef={coverRef} image={image} setVisibleProfilePicture={setVisibleProfilePicture} setImage={setImage} />
           }
            <div className='old_pictures_wrap'>
                <div className='old_pic_wrap'>
               
                   <div className='old_pictures_photo'> {
                    photos && photos.length &&
                        photos
                            .filter((img)=> img.folder === `${user?.username}/post_images`)
                            .map((photo)=> <img key={photo.public_id} onClick={()=> setImage(photo.secure_url)} style={{width:'100px'}} src={photo.secure_url} alt=""/>    )
                    } </div></div>
             
          
            <div className='old_pictures_photo'>  {
                    photos && photos.length &&
                        photos
                            .filter((img)=> img.folder !== `${user?.username}/post_images`)
                            .map((photo)=>  <img key={photo.public_id} onClick={()=> setImage(photo.secure_url)} style={{width:'100px'}} src={photo.secure_url} alt=""/>    )
                    }
            </div>
           </div>
        </div>
    </div>
  )
}
