import './style.css';
import { LiveVideo,Photo,Feeling } from '../../../svg';
export default function CreatePost({user}) {
  return (
    <div className='create_post_wrap'>
        <div className='create_post_header'>
            <img src={user?.picture} alt="" />
            <div className='create_post_text'>Ne düşünüyorsun, {user?.first_name}?</div>
        </div>
        <div className='create_post_splitter'></div>
        <div className='create_post_body'>
            <div className='create_post_body_wrap'>
                <LiveVideo /> Canlı video
            </div>
            <div className='create_post_body_wrap'>
                <Photo /> Fotoğraf/video
            </div>
            <div className='create_post_body_wrap'>
                <Feeling /> His/Hareket
            </div>
        </div>
    </div>
  )
}
