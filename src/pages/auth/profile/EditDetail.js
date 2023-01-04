
import { useState } from 'react';
import { AiOutlineClose,AiOutlinePlusCircle } from 'react-icons/ai';
import { Public } from '../../../svg';
import AddAndUpdateDetail from './AddAndUpdateDetail';


export default function EditDetail({setIntroVisible,details,intro,setIntro,user}) {
    const [editAndAddDetail,setEditAndAddDetail] = useState(false);
  
  return (
    <div className="blur">
        <div className="edit_detail_container">
            <div className="edit_detail_header">
                <div className="edit_detail_circle_container" onClick={()=> setIntroVisible(false)}>
                    <AiOutlineClose />
                </div>
                <span>Detay Düzenle</span>
            </div>
            <div className='edit_detail_body'>
                <div className='edit_detail_body_col'>
                    <span>Kişisel bilgilerini özelleştir</span>
                    <span className='edit_detail_icon_container'><Public color="#909090" /> Seçtiğiniz bilgiler herkese açık olacaktır.</span>
                </div>
                <div className='edit_detail_item'>
                    <span className='edit_detail_item_header'>Diğer Adın</span>
                    <div className='edit_detail_item_col' onClick={()=> setEditAndAddDetail(true)}>
                        <AiOutlinePlusCircle className='edit_detail_icon' />
                        <span>Diğer adını ekle</span>
                    </div>
                </div>
                {
                    editAndAddDetail && <AddAndUpdateDetail user={user} intro={intro} setIntro={setIntro} details={details} setEditAndAddDetail={setEditAndAddDetail} />
                }
            </div>
        </div>
    </div>
  )
}
