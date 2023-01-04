import { MdLocationOn } from 'react-icons/md';
import { GiMicrophone } from 'react-icons/gi';
import { FaUserPlus } from 'react-icons/fa';
import { Dots, Photo } from '../../svg';
import { BsEmojiSmile } from 'react-icons/bs';
export default function AddPost({setShowImg}) {
  return (
    <div className='add_post_wrap'>
                <div className='add_post_span_con'>
                   <span>Post Ekle</span> 
                </div>
                
                
                    <div className='add_post_icon'>
                        <div className='add_icon_circle' onClick={()=> setShowImg(true)}>
                            <Photo color="#228B22" />
                        </div>
                        <div className='add_icon_circle'>
                            <FaUserPlus className='icon_size user_wr' />
                        </div>
                        <div className='add_icon_circle'>
                            <BsEmojiSmile className='icon_size emoji_wr' />
                        </div>
                        <div className='add_icon_circle'>
                            <MdLocationOn className='icon_size location_wr' />
                        </div>
                        <div className='add_icon_circle'>
                            <GiMicrophone className='icon_size micro_wr' />
                        </div>
                        <div className='add_icon_circle'>
                            <Dots />
                        </div>
                   
                </div>
            </div>
  )
}
