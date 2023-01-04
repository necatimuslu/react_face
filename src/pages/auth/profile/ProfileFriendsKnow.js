import { FaUserPlus } from 'react-icons/fa';
import { stories } from '../../../data/home.js';
import { Dots } from '../../../svg';
export default function ProfileFriendsKnow() {
  return (
    <div className="ppl_wrap">
        <div className="ppl_header"><span>Tanıyor olabileceğin kişiler</span>
        <div className='ppl_dots hover2'>
            <Dots />
        </div>
        </div>
        
      <div className='ppl_container'> {
        stories && stories.map((s,i)=> (
            <div key={i} className="pp_card">
                <div className="ppl_img">
                    <img src={s?.profile_picture} alt="" />
                </div>
                <div className='ppl_username'><span >{s?.profile_name ? s?.profile_name.substring(0,11) + '...' : s?.profile_name}</span></div>
                <div className="ppl_btn ">
                    <button className='hover2'><FaUserPlus /> Arkadaş ekle</button>
                </div>
        </div>
        ))
       }</div>
    </div>
  )
}
