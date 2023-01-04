import './style.css';
import { useState } from 'react';



import { Link } from 'react-router-dom';

import { AiOutlineClose,AiOutlineCaretDown } from 'react-icons/ai';
import {  BiWorld } from 'react-icons/bi';

import { useRef } from 'react';
import { useEffect } from 'react';
import EmojiBg from './EmojiBg';
import ImagePreview from './ImagePreview';
import AddPost from './AddPost';
import useClickOutside from '../../helpers/clickOutside';
import { createPostService } from '../../services/postService';
import  BeatLoader  from 'react-spinners/BeatLoader';
import ErrorPopup from './ErrorPopup';
import dataURItoBlob from '../../helpers/dataUrltoBlob';
import { uploadImages } from '../../services/uploadService';
export default function CreatePopup({user,showPrev,setShowPrev}) {
    const [picker,setPicker] = useState(false);
    const [text,setText] = useState('');
    const [showImg,setShowImg] = useState(false);
    const [cursorPointer,setCursorPointer] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const textRef = useRef(null);
    const postRef = useRef(null);
    const [background,setBackground] = useState(false);
    const [images,setImages] = useState([]);
   
    useClickOutside(postRef,()=> setShowPrev(false))
    useEffect(()=> {
        
        selectionCursor()
    },[cursorPointer])
    function selectionCursor(){
       return textRef?.current?.selectionEnd ? textRef.current.selectionEnd = cursorPointer : null
    }
    const handleEmoji =(e,{emoji}) =>{
        const ref = textRef.current;
        ref.focus();
        const start = text.substring(0,ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end;
        setText(newText);
        setCursorPointer(start.length + emoji.length);
    }
    const handlePostCreate = async() => {
        if(background){
            setLoading(true);
            const response = await createPostService(null,text,user?.id,null,background,user.token);
            setLoading(false);

            if(response === 'ok'){
                setBackground('');
                setText('');
                setShowPrev(false);
            }else {
                setError(response);
            } 
        }else if(images && images.length){
            const postImages = images.map((img)=> {
                return dataURItoBlob(img);
            });
            const path = `${user?.username}/post_images`;
            
            let formData = new FormData();
            formData.append("path",path);
            postImages.forEach((img)=> {
                formData.append("file",img);
            });
            const response = await uploadImages(formData,path,user.token);
            await createPostService(null,text,user.id,response,null,user.token);
        }else if(text){
            setLoading(true);
            const response = await createPostService(null,text,user.id,null,null,user.token);
            setLoading(false);

            if(response === 'ok'){
                setBackground('');
                setText('');
                setShowPrev(false);
            }else {
                setError(response);
            } 
        }else {

        }
    }
  return (
    <div className='blur'>
        <div className='post_box' ref={postRef}>
            {error && <ErrorPopup error={error} setError={setError} />}
            <div className='post_box_header'>
                <div className='post_box_white_circle' onClick={()=> setShowPrev(false)}>
                    <AiOutlineClose className='post_box_icon' />
                </div>
                <span>Post Oluştur</span>
            </div>
            <div className='post_box_profile'>
                <Link to="/profile" className='post_box_profile_link'>
                    <img src={user?.picture} alt="" />
                </Link>
                <div className='link_col'>
                    <span className='link_col_first_span'>{user?.first_name} {user?.last_name}</span>
                    <div className='public_con'>
                        <BiWorld className='public_con_icon' />
                        <span>Herkese</span>
                        <AiOutlineCaretDown className='public_con_icon' />
                    </div>
                </div>
            </div>
            {
                !showImg 
                ?  <EmojiBg handleEmoji={handleEmoji} text={text} setText={setText} textRef={textRef} setPicker={setPicker} picker={picker} user={user} setBackground={setBackground} background={background} /> 
                : <ImagePreview handleEmoji={handleEmoji} text={text} setText={setText} textRef={textRef} setPicker={setPicker} picker={picker} user={user} images={images} setImages={setImages}  setShowImg={setShowImg}  />
            }
               
           <AddPost setShowImg={setShowImg} />
            <div className='add_post_button'>
                <button disabled={loading} className='blue_btn' onClick={() =>handlePostCreate()}>
                    {loading ? <BeatLoader  size={8} color="#fff" style={{padding:'3px'}} /> : 'Ekle' }
                    </button>
            </div>
        </div>
    </div>
  )
}
