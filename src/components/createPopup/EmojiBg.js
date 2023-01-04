import Picker from 'emoji-picker-react';
import { useRef } from 'react';
import { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';


export default function EmojiBg({handleEmoji,text,setText,textRef,setPicker,picker,user,type2,background,setBackground}) {
  const [showBgs,setShowBgs] = useState(false);
  const bgRef = useRef(null);
  const postBackgorunds = [
    "../../../images/postBackgrounds/1.jpg",
    "../../../images/postBackgrounds/2.jpg",
    "../../../images/postBackgrounds/3.jpg",
    "../../../images/postBackgrounds/4.jpg",
    "../../../images/postBackgrounds/5.jpg",
    "../../../images/postBackgrounds/6.jpg",
    "../../../images/postBackgrounds/7.jpg",
    "../../../images/postBackgrounds/8.jpg",
    "../../../images/postBackgrounds/9.jpg",
    "../../../images/postBackgrounds/10.jpg",
  ]
  const handleBgImage = (index) => {
    bgRef.current.style.backgroundImage = `url(${postBackgorunds[index]})`;
    setBackground(postBackgorunds[index]);
    bgRef.current.classList.add('bgHandler');
  }
  function removeBg(){
    bgRef.current.style.backgroundImage ="";
    setBackground("");
    bgRef.current.classList.remove('bgHandler');
  }
  return (
    <div >
        <div className={type2 ? 'image_input': 'flex_center'} ref={bgRef}>
            <textarea
            maxLength="250"
              style={{paddingTop:`${background ? Math.abs(textRef.current?.value.length * 0.1 - 33) :'0'}%`}}
                ref={textRef}
                className={`input_text ${type2 ? 'input2' : ''}`}
                value={text}
                placeholder={`Ne paylaşmak istiyorsun ${user?.first_name}?`}
                onChange={(e)=> setText(e.target.value)}
                ></textarea>
                {type2 &&   <BsEmojiSmile className='emoji_icon' onClick={()=> setPicker((prev)=> !prev)} />}
             </div>
            <div className='emoji_picker_wrap'>
                {picker && <div className={`emoji_picker ${type2 ? 'flex_emoji_picker' :'rmolve'}`}> <Picker onEmojiClick={handleEmoji} /> </div>}
                {!type2 && <img src="../../../icons/colorful.png" alt="" onClick={()=> setShowBgs(prev => !prev)}/>}
               {
               !type2 && showBgs &&  <div className='emoji_bgs' >
                <div className='no_bg' onClick={removeBg}></div>
                {
                  postBackgorunds.map((bg,i)=> (
                    <img src={bg} key={i} alt="" onClick={()=> handleBgImage(i)} />
                  ))
                }

              </div>
               }
               {!type2 &&  <BsEmojiSmile className='emoji_icon' onClick={()=> setPicker((prev)=> !prev)} />}
            </div>
           
    </div>
  )
}
