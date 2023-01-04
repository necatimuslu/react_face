import './style.css';
import { useCallback, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../../components/header/Header';

import profileReducer from '../../../app_reducers/profileReducer';

import { baseUrl  } from '../../../helpers/baseUrl';
import axios from 'axios';
import { useEffect } from 'react';

import { AiFillCamera } from 'react-icons/ai';
import CoverImage from './CoverImage';
import { useState } from 'react';
import { useRef } from 'react';
import useClickOutside from '../../../helpers/clickOutside';
import ProfilePicture from './ProfilePicture';
import ProfileMenu from './ProfileMenu';
import ProfileFriendsKnow from './ProfileFriendsKnow';
import CreatePost from '../../../components/home/createPost/CreatePost';
import CreateStory from '../../../components/home/stories/CreateStory';
import ManagePosts from './ManagePosts';
import Post from '../../../components/post';
import Intro from './Intro';
import Photos from './Photos';
import Friends from './Friends';
import getCroppedImg from '../../../helpers/getCroppedImg';
import Cropper from 'react-easy-crop'
import { Public } from '../../../svg';
import { updateProfilePictureDB, uploadImages } from '../../../services/uploadService';
import { createPostService } from '../../../services/postService';
export default function Profile({setShowPrev,user}) {
  const { username } = useParams();
  const navigate = useNavigate();
  const [photos,setPhotos] = useState({})
  var userName = username === undefined ? user?.username  : username;
  var visitor = userName === user?.username ? false : true;
  const path = `${userName}/*`;
  const max = 30;
  const sort= "desc"
  const [{error,loading,profile},dispatch] = useReducer(profileReducer,{
    error:'',
    profile:{},
    loading:false
  });
  useEffect(()=> {
    getProfile()
  },[userName])
  
  async function getProfile(){
    try {
      dispatch({
        type:'PROFILE_REQUEST',
      });
      const { data } = await axios.get(`${baseUrl}/auth/getProfile/${userName}`,{
        headers:{
          Authorization:`Bearer ${user?.token}`
        }
      });
  
      if(data.ok === false){
          navigate('/profile');
        
      }else {
        try {
          const images = await axios.post(`${baseUrl}/image/listImages`,{path,max,sort},{
            headers:{
                Authorization:`Bearer ${user?.token}`
            }
        });
        
        setPhotos(images.data);
         } catch (error) {
          console.log(error)
         }
        dispatch({
          type:'PROFILE_SUCCESS',
          loading:false,
          payload:data
        });
      }
      
    } catch (error) {
      dispatch({
        type:'PROFILE_ERROR',
        payload:error.response.data.message,
        loading:false
      });
    }
  }
  const [visibleCover,setVisibleCover] = useState(false);
  const coverRef = useRef(null);
  useClickOutside(coverRef,()=> setVisibleCover(false));
  const [visibleProfilePicture,setVisibleProfilePicture] = useState(false);
  const coverInputRef = useRef(null);
  const [coverPicture,setCoverPicture] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const handleImage = (e) => {
    let file = e.target.files[0];
    if(
      file.type !== 'image/png' &&
      file.type !== 'image/jpg' &&
      file.type !== 'image/jpeg' 
    ){
      setErrorMessage(`${file.name} format uyumsuzdur.`);
      return;
    }else if(file.size > 1024 * 1024 * 5){
      setErrorMessage(`${file.name} dosya boyutu istenilen miktardan büyüktür.`);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (fileEvent)=> {
      setCoverPicture(fileEvent.target.result);
    }
  }
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1);
  
 
  const [ croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const getCroppedsImage = useCallback(async (show)=> {
    try {
      const img = await getCroppedImg(coverPicture,croppedAreaPixels);
      if (show){
        setZoom(1);
        setCrop({x:0,y:0});
        setCoverPicture(img); 
       
      }else {
        return img;
      }
    } catch (error) {
      console.log(error)
    }
  },[croppedAreaPixels]);
  const heightRef = useRef(null);
  const [width,setWidth] = useState();
 
  useEffect(()=> {
    setWidth(heightRef.current.clientWidth);
  },[window.innerWidth]);
  const handleCoverPicture = async() =>{
    try {
      
      let img = await getCroppedImg();
      let blob = await fetch(img).then((b)=> b.blob());
      const path = `${user?.username}/cover_pictures`;
      let formData = new FormData();
      formData.append('file',blob);
      formData.append('path',path);
      const response = await uploadImages(formData,path,user?.token);
      
      const update_profile = await updateProfilePictureDB(response[0].url,user?.token);
      if(update_profile === 'ok'){
          const new_post = await createPostService('cover',null,user.id,response,null,user?.token);
          if(new_post === 'ok'){
            coverRef.current.style.backgroundImage = `url(${response[0].url})`;
           
          }else {
            setErrorMessage(new_post);
          }
      }else {
        setErrorMessage(update_profile);
      }
    } catch (error) {
      setErrorMessage(error);
    }
  }
  const [introVisible,setIntroVisible] = useState(false);
  return (
  
    <div className='profile_wrap'>
      <Header page="profil" />
      
      <div className='profile_top' ref={heightRef}>
      {
        coverPicture && <div className='profile_update_img_btn_wrap'>
        <div className='profile_update_img_public'>
          <Public color="#707070" />
          Herkese açık
        </div>
        <div className='profile_update_img_bttn'>
        <button className='cancel_btn' onClick={()=> {
        
          setCoverPicture('');
        }}>İptal et</button>
          <button className='blue_btn' onClick={()=> handleCoverPicture()}>Kaydet</button>
        </div>
      </div>
      }
        <div className='profile_container' ref={coverRef}>
          <div className='profile_cover' >
          <input type="file" hidden ref={coverInputRef} accept="image/png , image/jpg , image/jpeg"
          onChange={handleImage}
          />
          {
            coverPicture && 
            <div className='cover_cropper'>
                 <Cropper
                    image={coverPicture}
                    crop={crop}
                    zoom={zoom}
                    aspect={width / 350}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    objectFit="horizontal-cover"
                    
                    />
          </div>
          }
          {profile?.cover && <img src={profile?.cover} className="cover" alt=""/>}
          <>
              {!visitor && <div className='profile_action_btn hover2'  onClick={()=> setVisibleCover(prev => !prev)}>
              
                <AiFillCamera className='prfl_btn_icon' />
                <span>Kapak Fotoğrafını Düzenle</span>
              </div> }
              {visibleCover && <CoverImage  setVisibleCover={setVisibleCover} coverInputRef={coverInputRef} />}
            
            </>
          </div>
          <ProfilePicture photos={photos.resources} coverRef={coverRef} profile={profile} visitor={visitor} setVisibleProfilePicture={setVisibleProfilePicture} visibleProfilePicture={visibleProfilePicture} />
          <ProfileMenu />
        </div>
      </div>
      <div className='profile_middle'>
          <ProfileFriendsKnow />
          <div className='profile_grid'>
            <div className='profile_l'>
            
                <Intro user={user} details={profile?.details} introVisible={introVisible} setIntroVisible={setIntroVisible} />
            
              <Photos username={userName} photos={photos} />
              <Friends friends={profile?.friends} />
            </div>
            <div className='profile_r'>
              
              {
                !visitor && <CreateStory user={user} setShowPrev={setShowPrev} event />
              }
              <ManagePosts />
              <Post user={user} posts={profile?.posts} profile_post />
            </div>
              
          </div>
      </div>
    </div>
  )
}
