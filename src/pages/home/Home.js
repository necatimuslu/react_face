import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import LeftHome from '../../components/home/left/LeftHome';
import './style.css';
import RightHome from '../../components/home/right/RightHome';
import Story from '../../components/home/stories/Story';
import CreateStory from '../../components/home/stories/CreateStory';
import ActiveEmail from '../../components/active/ActiveEmail';

import { useState } from 'react';
import Post from '../../components/post';
import { useRef } from 'react';
import { useEffect } from 'react';




export default function Home({setShowPrev,posts}) {
  const { user } = useSelector((state)=> ({...state}));
  const middleHomeRef = useRef(null);
  const [height,setHeight] = useState();
  const[createPostVisible,setCreatePostVisible] = useState(false);
  useEffect(()=> {
    setHeight(middleHomeRef.current.clientHeight);
  },[])
  return (
    <div className='home' style={{height:`${height}px`}}>
      <Header page="home" />
        <LeftHome user={user} />
       <div className='middle_home' ref={middleHomeRef} >
          <Story />
        
            {user.verified === false && <ActiveEmail user={user} />}
         
          
          <CreateStory user={user} setCreatePostVisible={setCreatePostVisible} setShowPrev={setShowPrev}  />
          <Post user={user} posts={posts} />
       </div>
       
        <RightHome />
    </div>
  )
}
