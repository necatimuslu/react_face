
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Cropper from 'react-easy-crop'
import { useCallback } from 'react';
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai';
import { useRef } from 'react';
import { BiCrop } from 'react-icons/bi';
import { AiFillClockCircle } from 'react-icons/ai';
import getCroppedImg from '../../../helpers/getCroppedImg';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {baseUrl } from '../../../helpers/baseUrl';
import { updateProfilePictureDB, uploadImages } from '../../../services/uploadService';
import { createPostService } from '../../../services/postService';
import Cookies from 'js-cookie';
export default function SeeProfilePicture({setVisibleProfilePicture,setImage,image,coverRef}) {
  const [description,setDescription] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1);
  const [error,setError] = useState('');
  const { user } = useSelector((state)=> ({...state}));
  const [ croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const sliderRef = useRef(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  
  function zoomIn(){
    /* if(3 > 1){
      setZoom(prev => prev + 0.2);
    } */
       sliderRef.current.stepUp()
       setZoom(sliderRef.current.value)
      
   
}
  function zoomOut(){
    
    /* if(3 < 1){
      setZoom(prev => prev - 0.2);
    } */
        sliderRef.current.stepDown()
        setZoom(sliderRef.current.value)
   
  }
  const getCroppedsImage = useCallback(async (show)=> {
    try {
      const img = await getCroppedImg(image,croppedAreaPixels);
      if (show){
        setZoom(1);
        setCrop({x:0,y:0});
        setImage(img); 
       
      }else {
        return img;
      }
    } catch (error) {
      console.log(error)
    }
  },[croppedAreaPixels]);
  const dispatch = useDispatch();
  async function updateProfilePicture(){
    try {
      
      let img = await getCroppedImg();
      let blob = await fetch(img).then((b)=> b.blob());
      const path = `${user?.username}/profile_pictures`;
      let formData = new FormData();
      formData.append('file',blob);
      formData.append('path',path);
      const response = await uploadImages(formData,path,user?.token);
      
      const update_profile = await updateProfilePictureDB(response[0].url,user?.token);
      if(update_profile === 'ok'){
          const new_post = await createPostService('profilePicture',description,user.id,response,null,user?.token);
          if(new_post === 'ok'){
            coverRef.current.style.backgroundImage = `url(${response[0].url})`;
            Cookies.set('user',JSON.stringify({
              ...user,
              picture:response[0].url
              })
             
            );
            dispatch({
              type:'PROFILEPICTURE',
              payload:response[0].url
            })
          }else {
            setError(new_post);
          }
      }else {
        setError(update_profile);
      }
    } catch (error) {
      setError(error);
    }
  }
    return (
    <div className="profile_picture_update_wrap see_profile_wrap">
            <div className="profile_picture_update_header">
                <span>Profil resmini güncelle</span>
                <div className="profile_picture_circle" onClick={()=> setImage('')}>
                    <AiOutlineClose />
                </div>
            </div>
            <div className='see_profile_textarea'>
                <textarea
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                placeholder="Açıklama giriniz"
                className='see_profile_input'
                ></textarea>
            </div>
            <div className='profile_picture_cropper'>
                <div className='cropper_img'>
                    <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                     cropShape="round"
                    
                    />
                </div>
           </div>
           <div className='slider'>
            <div className='slider_circle hover1' onClick={()=> zoomOut()}>
                <AiOutlineMinus />
            </div>
            <input className='slider_input' type="range" ref={sliderRef} step={0.2} min={1} max={3} value={zoom} onChange={(e)=> setZoom(e.target.value)} />
            <div className='slider_circle hover1' onClick={()=> zoomIn()}>
                <AiOutlinePlus />
            </div>
           </div>
           <div className='see_profile_img_btn_container'>
              <div className='crop_btn_con' onClick={()=> getCroppedsImage('show')}>
                <BiCrop />
                Fotoğrafı kes
              </div>
              <div className='crop_btn_con'>
                <AiFillClockCircle />
              Geçici Fotoğraf
              </div>
           </div>
           <div className='see_profile_text'>
                Profil resmin herkese açık
           </div>
            <div className='see_profile_divider'></div>
            <div className='see_profile_save_con'>
              <button className='cancel_btn' onClick={()=> setImage('')}>İptal</button>
              <button className='blue_btn' onClick={()=> updateProfilePicture()}>Kaydet</button>
            </div>
        </div>
  )
}
