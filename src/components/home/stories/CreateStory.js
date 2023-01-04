
import { Link } from "react-router-dom";

import {Feeling, LiveVideo, Photo } from '../../../svg';
import { BsFillFlagFill } from 'react-icons/bs';
export default function CreateStory({user,setShowPrev,event}) {
  
  return (
    <div className="create_story" >
        <div className="create_story_header" onClick={()=> setShowPrev(true)}>
            <Link to="/">
                <img src={user?.picture} alt="" />
            </Link>
            <div className="create_story_text" >{`Ne Düşünüyorsun ${user?.first_name }?`}</div>
        </div>
        <div className="create_story_splitter"></div>
        <div className="create_story_body">
        <div className="create_story_nody_item hover1">
              <LiveVideo color="#f3425f" /> Canlı video
            </div>
            <div className="create_story_nody_item hover1">
              <Photo color="#00A400" /> Fotoğraf/video
            </div>
            {
              event 
              ? <div className="create_story_nody_item hover1">
              <BsFillFlagFill className="icon_create_story" /> Olaylar
            </div>
            :<div className="create_story_nody_item hover1">
            <Feeling color="#F5C33B" /> His/Hareket
          </div>
            }
        </div>
    </div>
  )
}
