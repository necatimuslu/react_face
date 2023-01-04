
import { GiSettingsKnobs } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
import { BsList,BsMicrosoft } from 'react-icons/bs';


export default function ManagePosts() {
  return (
    <div className="post_manage">
        <div className="post_manage_header">
            <span className='post_manage_header_span'>Gönderiler</span>
            <div className="post_manage_icon_container">
                <div className="icon_wrap hover1">
                    <GiSettingsKnobs className='manage_icon_size' />
                    <span>Filtreler</span>
                </div>
                <div className="icon_wrap hover1">
                    <AiFillSetting className='manage_icon_size' />
                    <span>Gönderiyi yönet</span>
                </div>
            </div>
        </div>
        <div className='manage_splitter'></div>
        <div className='manage_body'>
            <div className='manage_grid'>
                <div className='manage_list hover1'>
                    <BsList className='manage_list_icon' />
                    <span>Liste şekilde görüntüle</span>
                </div>
                <div className='manage_list hover1'>
                    <BsMicrosoft className='manage_list_icon' />
                    <span>Izgara şekilde görüntüle</span>
                </div>
            </div>
        </div>
    </div>
  )
}
