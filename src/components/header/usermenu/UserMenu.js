import { Link, useNavigate } from "react-router-dom";
import './style.css';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsMoonFill,BsExclamationDiamondFill } from 'react-icons/bs';
import { MdArrowForwardIos ,MdOutlineHelp} from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
export default function UserMenu({user,setVisibleUserMenu}) {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type:"LOGOUT",
      payload:null
    });
    Cookies.set('user',null);
    navigate('/login')
  }
  return (
    <div className="user_menu">
        <Link to="/profile" className="user_menu_link hover1">
            <img src={user?.picture} alt="" />
            <div className="user_menu_col">
                <span>{user?.first_name}{" "} {user?.last_name} </span>
                <span>Profiline bak</span>
            </div>
        </Link>
        <div className="user_menu_splitter"></div>
        <div className="user_menu_settings hover1" onClick={()=> setVisibleUserMenu(2)}>
            <div className="user_menu_setting_icon_wrap" >
              <AiTwotoneSetting className="user_menu_setting_1" />  
            </div>
            
            <span>Ayarlar ve gizlilik</span>
            <MdArrowForwardIos className="user_menu_setting_2" />
        </div>

        <div className="user_menu_settings hover1">
            <div className="user_menu_setting_icon_wrap">
              <MdOutlineHelp className="user_menu_setting_1" />  
            </div>
            
            <span>Yardım ve Destek</span>
            <MdArrowForwardIos className="user_menu_setting_2" />
        </div>
        <div className="user_menu_settings hover1">
            <div className="user_menu_setting_icon_wrap">
              <BsMoonFill className="user_menu_setting_1" />  
            </div>
            
            <span>Görünüm ve Erişebilirlik</span>
            <MdArrowForwardIos className="user_menu_setting_2" />
        </div>
        <div className="user_menu_settings hover1">
            <div className="user_menu_setting_icon_wrap">
              <BsExclamationDiamondFill className="user_menu_setting_1" />  
            </div>
            
            <span>Görüş Bildir</span>
          
        </div>
        <div className="user_menu_settings hover1" onClick={()=> logout()}>
            <div className="user_menu_setting_icon_wrap">
              <ImExit className="user_menu_setting_1" />  
            </div>
            
            <span>Çıkış</span>
          
        </div>
        <div className="user_menu_footer">
            <Link to="/">Gizlilik</Link> . 
            <Link to="/">Koşullar</Link> . 
            <Link to="/">Reklam</Link> .
            <Link to="/">Ad Choices</Link> . 
            <Link to="/">Çerezler</Link> . 
           
        </div>
        <div className="user_menu_footer">
        <Link to="/">Diğer</Link> . 
            <Link to="/" className="user_menu_copyright">Meta &copy; 2022</Link>
        </div>
    </div>
  )
}
