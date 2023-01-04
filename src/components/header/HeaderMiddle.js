import { Link } from "react-router-dom"
import {  Friends, Gaming, Home, HomeActive,  Market,     Watch } from '../../svg';
export default function HeaderMiddle({color,page}) {
    console.log(page);
  return (
    <div className='header_middle'>
            <Link to="/" className={`middle_icon ${page === "home" ? 'active' : 'hover1'}`}>
                {page === "home" && <HomeActive />}
               {page === 'profil' && <Home /> }
            </Link>
            <Link to="/" className='middle_icon hover1'>
                <Friends color={color} />
            </Link>
            <Link to="/" className='middle_icon hover1'>
                <Watch  color={color}/>
                <div className='watch_notification'>5+</div>
            </Link>
            <Link to="/" className='middle_icon hover1'>
                <Market color={color} />
            </Link>
            <Link to="/" className='middle_icon hover1'>
                <Gaming  color={color}/>
            </Link>
        </div>
  )
}
