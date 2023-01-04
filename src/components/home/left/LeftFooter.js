import { Link } from "react-router-dom"

export default function LeftFooter() {
  return (
    <div className="left_footer">
        <div className="left_footer_link_wrap">
        <Link to="/" className="left_footer_link">
            Gizlilik
        </Link> . 
        <Link to="/" className="left_footer_link">
            Koşullar
        </Link> .
        <Link to="/" className="left_footer_link">
            Reklam
        </Link> .
        <Link to="/" className="left_footer_link">
            Ad Chocies
        </Link>.
        <Link to="/" className="left_footer_link">
            Çerezler
        </Link> .
        </div>
        <div className="left_footer_link_wrap">
          <Link to="/" className="left_footer_link">
            Diğer
        </Link> .
        <div  className="left_footer_link">
            Meta &copy; 2022
        </div>  
        </div>
        
    </div>
  )
}
