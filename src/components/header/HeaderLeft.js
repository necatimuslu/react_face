import { Link } from "react-router-dom"
import { Logo,    Search } from '../../svg';
export default function HeaderLeft({color,setSearchMenuVisible}) {
  return (
    <div className='header_left'>
    <Link to="/" className='header_logo'>
        <div className='circle'>
            <Logo />
        </div>
    </Link>
    <div className='search search1' onClick={()=> setSearchMenuVisible(true)}>
        <Search color={color} />
        <input type="text" placeholder="Facebook'ta ara" className="hide_input" />
    </div>
</div>
  )
}
