
import { BiPhotoAlbum } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TbArrowBigUpLine } from 'react-icons/tb';
export default function CoverImage({coverInputRef,setVisibleCover,}) {
  return (
    <div className="cover_image">
      
        <div className="cover_image_item hover1">
            <BiPhotoAlbum className='prfl_btn_icon_1' />
            <span>Fotoğraf Seç</span>
        </div>
        <div className="cover_image_item hover1" onClick={()=> {
          coverInputRef.current.click()
          setVisibleCover(false);
        
        }}>
            <TbArrowBigUpLine  className='prfl_btn_icon_1'/>
            <span>Fotoğraf Yükle</span>
        </div>
        <div className='cover_image_splitter'></div>
        <div className="cover_image_item hover1">
            <RiDeleteBin5Line className='prfl_btn_icon_1' />
            <span>Kaldır</span>
        </div>
    </div>
  )
}
