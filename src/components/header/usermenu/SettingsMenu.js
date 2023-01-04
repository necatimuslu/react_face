
import { FiArrowLeft } from 'react-icons/fi';
import { AiTwotoneSetting ,AiOutlineUnorderedList} from 'react-icons/ai';
import { FaUnlock,FaLock } from 'react-icons/fa';
import {MdRadio } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
export default function SettingsMenu() {
  return (
    <div className="setting_menu">
        
            <div className="setting_menu_header">
                <div className='setting_menu_icon_wrap hover1'>
                    <FiArrowLeft className='setting_menu_icon' />
                </div>
                <span>Ayarlar ve gizlilik</span>
            </div>
           
            <div className='setting_menu_item hover1' style={{marginTop:'15px'}} >
                <div className='setting_menu_icon_wrap'>
                    <AiTwotoneSetting  />
                </div>
                <span>Ayarlar</span>
            </div>
            <div className='setting_menu_item hover1' >
                <div className='setting_menu_icon_wrap'>
                    <FaLock  />
                </div>
                <span>Gizlilik Ayarı Kontrolü</span>
            </div>
            <div className='setting_menu_item hover1' >
                <div className='setting_menu_icon_wrap'>
                    <FaUnlock  />
                </div>
                <span>Gizlilik Merkezi</span>
            </div>
            <div className='setting_menu_item hover1' >
                <div className='setting_menu_icon_wrap'>
                    <AiOutlineUnorderedList  />
                </div>
                <span>Hareketler Dökümü</span>
            </div>
            <div className='setting_menu_item hover1' >
                <div className='setting_menu_icon_wrap'>
                    <MdRadio  />
                </div>
                <span>Akış tercihleri</span>
            </div>
            <div className='setting_menu_item hover1' >
                <div className='setting_menu_icon_wrap'>
                    <GrLanguage  />
                </div>
                <span>Dil</span>
            </div>
    </div>
  )
}
