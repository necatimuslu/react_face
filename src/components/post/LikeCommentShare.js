import { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import {BiComment } from 'react-icons/bi';
import {VscLiveShare } from 'react-icons/vsc';
import { getAllEmoji, updateEmoji } from '../../services/postService';

export default function LikeCommentShare({postId,user,post}) {
    const [visibleReact,setVisibleReact] = useState(false);
    const [emojis,setEmojis] = useState();
    const [check,setCheck] = useState();
    const reacts = [
        {name:'like',image:'../../../reacts/like.gif'},
       {name:'love',image: '../../../reacts/love.gif'},
       {name:'haha',image: '../../../reacts/haha.gif'},
        {name:'wow',image:'../../../reacts/wow.gif'},
        {name:'sad', image:'../../../reacts/sad.gif'},
       {name:'angry', image: '../../../reacts/angry.gif'},
    ];
    useEffect(()=>{
        getAllEmojis()
    },[post]);
    const getAllEmojis = async ()=> {
       const res = await getAllEmoji(postId,user?.token);
       setEmojis(res?.reacts)
        setCheck(res?.check);
    }
    async function handleEmojiUpdate(type){
       const res = await updateEmoji(postId,type,user?.token);
       if(check == type){
        setCheck();
        let index = reacts.findIndex((x)=> x.emoji == check);
        if(index !== -1){
            setCheck([...reacts,reacts[index].count = -- reacts[index].count])
        }
       }else {
        setCheck(type)
        let index = reacts.findIndex((x)=> x.emoji == type);
        let index1 = reacts.findIndex((x)=> x.emoji == check);
        if(index !== -1){
            setCheck([...reacts,reacts[index].count = ++ reacts[index].count])
        }
        if(index1 !== -1){
            setCheck([...reacts,reacts[index1].count = -- reacts[index1].count])
        }
       }
       
       
    }
  
  return (
    <div className="like_comment_share">
       {visibleReact &&  <div className='react_wrap' >
            {
                reacts.map((r,i)=> (
                    <img src={r.image} key={i} alt="" onClick={()=> handleEmojiUpdate(r.name)}/>
                ))
            }
        </div>}
        <div className="like hover1" onMouseMove={()=>{
            setTimeout(()=> {
                setVisibleReact(true)
            },500)
        }} onMouseLeave={()=>{
            setTimeout(()=> {
                setVisibleReact(false)
            },3000)
        } } 
       onClick={()=> handleEmojiUpdate(check ? check : 'like')}
        >
         {
            check ? <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                <img style={{width:'18px'}} src={`../../../reacts/${check}.svg`} alt=""/>
                <span style={{
                color:`${
                    check == "love" ? "#f63459" : check == "like" ? "#4267b2" : check == "haha" ? "#f7b125" : check == "wow" ? "#f7b125" : check == "sad" ? "#f7b125" : check == "angry" ? "#e4605a" : ""
                }`
            }}>{check}</span></div> : ( <><AiOutlineLike className='like_icon_size' />
            <span style={{
                color:`${
                    check == "love" ? "#f63459" : check == "like" ? "#4267b2" : check == "haha" ? "#f7b125" : check == "wow" ? "#f7b125" : check == "sad" ? "#f7b125" : check == "angry" ? "#e4605a" : ""
                }`
            }}>Beğeni </span></>)
         }  
        </div>
        <div className="comment hover1">
            <BiComment className='like_icon_size' />
            <span>yorum </span>
        </div>
        <div className="share hover1">
            <VscLiveShare className='like_icon_size' />
            <span>paylaşım </span>
        </div>
    </div>
  )
}
