import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Dots } from "../../../svg";

export default function ProfileMenu() {
  return (
    <div className="profile_menu_wrap">
       
        <div className="profile_menu_justify">
            <div className="profile_left_m">
                <Link to="/" className="profile_menu_l_item profile_menu_active">
                   <span> Gönderiler</span>
                </Link>
                <Link to="/" className="profile_menu_l_item hover1">
                   <span> Hakkında</span>
                </Link>
                <Link to="/" className="profile_menu_l_item hover1">
                   <span> Arkadaşlar</span>
                </Link>
                <Link to="/" className="profile_menu_l_item hover1">
                   <span> Fotoğraflar</span>
                </Link>
                <Link to="/" className="profile_menu_l_item hover1">
                   <span> Videolar</span>
                </Link>
                <Link to="/" className="profile_menu_l_item hover1">
                   <span> Yer bildirimleri</span>
                </Link>
                <Link to="/" className="profile_menu_l_item  hover1">
                   <span> Diğer</span>
                   <AiOutlineCaretDown className="profile_icon_l" />
                </Link>
            </div>
            <div className="dot_wrap_circle hover1">
                <Dots />
            </div>
        </div>
       
    </div>
  )
}
