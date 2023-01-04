import EmojiBg from "./EmojiBg";
import { useRef } from "react";

import {MdPhoneAndroid } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { IoMdPhotos } from 'react-icons/io';
import { Photo } from "../../svg";

export default function ImagePreview({handleEmoji,text,setText,textRef,setPicker,picker,user,images,setImages,setShowImg}) {
  
    const imageInputRef = useRef(null);
    const handleImages = (e) => {
       let images = Array.from(e.target.files);
       images.forEach((img)=> {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload=(imgEvent) => {
            setImages((image) => ([...image,imgEvent.target.result]));
        }
       })
    }
  return (
    <div className="img_prew_wrap">
        <EmojiBg handleEmoji={handleEmoji} text={text} setText={setText} textRef={textRef} setPicker={setPicker} picker={picker} user={user} type2 />
        <div className="empty_img_wrap" >
        <input type="file" multiple hidden ref={imageInputRef} onChange={handleImages} />
           {images && images.length 
            ? <div className="img_inside_1">
                 <div className="small_white_circle_2" onClick={()=> setImages([])} >
                            <AiOutlineClose    />
                     </div>
                <div className="img_inside_btn_wrap"> 
                   
                     <button> <BiEdit className="img_inside_btn_icon" />Düzenle</button>
                     <button><IoMdPhotos className="img_inside_btn_icon" />  Fotoğraf/Video Ekle</button>
                </div>
                    <div className={images.length === 1 
                    ? 'image_prev_1'
                    : images.length === 2
                    ? 'image_prev_2'
                    : images.length === 3
                    ? 'image_prev_3'
                    : images.length === 4
                    ? 'image_prev_4'
                    : images.length === 5
                    ? 'image_prev_5'
                    : images.length % 2 === 0 
                    ? 'image_prev_6'
                    : 'image_prev_6 singular_grid'
                }>
                        {images.map((img,i)=> (
                            <img src={img} key={i} alt="" />
                        ))}
                    </div> 
               </div> 
            :  <div className="img_inside1">
                        <div className="small_white_circle" onClick={()=> setShowImg(false)}>
                            <AiOutlineClose />
                        </div>
                        <div className="img_inside_col" onClick={()=> imageInputRef.current.click()}>
                            <div className="small_circle" >
                        
                                <Photo />
                            </div>
                            <span>Fotoğraf veya Video ekle</span>
                            <span>sürükle veya sür</span>
                        </div>
                </div>}
            <div className="img_mobile_inside2">
                <div className="small_circle">
                    <MdPhoneAndroid />
                </div>
                <span>Cep telefonundan fotoğraf veya video ekle</span>
                <span className="add_btn">Ekle</span>
            </div>
        </div>
    </div>
  )
}
