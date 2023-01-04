
import { Link } from 'react-router-dom'

import {BsEmojiSmile } from 'react-icons/bs';
import {AiFillCamera,AiOutlineFileGif } from 'react-icons/ai';
import {ImFileEmpty } from 'react-icons/im';
import { useRef, useState } from 'react';
import { newComment } from '../../services/postService';
export default function Comment({user,postId}) {
    const imageRef = useRef(null);
    const [text,setText]= useState('');
  const [image,setImage] = useState('')
    const handleImageChange = (e) => {
      let file = e.target.files[0];
      if(file.type !== 'image/jpg' && file.type !== 'image/png' && file.type !== 'image/jpeg'){
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =(eventFile)=> {
        setImage(eventFile.target.result);
      }
    }
   async function handleComment(e){
    
    if(e.key === "Enter"){ 
      if(image !== ""){

      }else {
        const newCom = await newComment(text,"",postId,user?.token);
      }
    }
    
    }
  return (
    <div>
      <div className='comment_wrap'>
          <Link to="/profile">
              <div className='comment_circle'>
                  <img src={user?.picture} alt=""/>
              </div>
          </Link>
          <div className='comment_text' >
              <input type="file" hidden ref={imageRef} onChange={handleImageChange} />
              <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder='Yorum yazınız.' className='comment_text_input' onKeyUp={handleComment} />
              <div className='comment_text_icon'>
                  <div className='comment_circle_icon'>
                    <BsEmojiSmile className='comment_icon_size' />  
                  </div>
                  <div className='comment_circle_icon'onClick={()=> imageRef.current.click()}>
                  <AiFillCamera className='comment_icon_size' />  
                  </div>
                  <div className='comment_circle_icon'>
                  <AiOutlineFileGif className='comment_icon_size' />
                  </div>
                  <div className='comment_circle_icon'>
                  <ImFileEmpty className='comment_icon_size' /> 
                  </div>
              </div>
          </div>
      </div>
      {image &&
      <div className='comment_image'>
         <img src={image} alt=""/>
      </div>
    }
    </div>
  )
}
