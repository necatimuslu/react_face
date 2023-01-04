import { MdCreate } from 'react-icons/md';
import { BsBookFill,BsFlagFill,BsFillCameraVideoFill,BsFillMegaphoneFill } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineAppstoreAdd,AiTwotoneShop } from 'react-icons/ai';
import {GiHandBag } from 'react-icons/gi';
import {  } from 'react-icons/bs';
export default function CreateItem() {
    
  return (
      <>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <MdCreate />
          </div>
            <span>Oluştur</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <BsBookFill />
          </div>
            <span>Hikaye</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <BsFillCameraVideoFill />
          </div>
            <span>Oda</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <BsFlagFill />
          </div>
            <span>Sayfa</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <BsFillMegaphoneFill />
          </div>
            <span>Reklam</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <HiOutlineUserGroup />
          </div>
            <span>Grup</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <AiOutlineAppstoreAdd />
          </div>
            <span>Olay</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <AiTwotoneShop />
          </div>
            <span>Pazaryeri listesi</span>
        </div>
        <div className='create_item hover2'>
          <div className='create_icon_wrap'>
            <GiHandBag />
          </div>
            <span>iş</span>
        </div>
        
    </>
  )
}
