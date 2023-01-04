import './style.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className='footer_wrap'>
        <div className='footer_wrap_link'>
           <Link  to="/">Türkçe</Link> 
           <Link  to="/">Kurdi (Kurmanci)</Link> 
           <Link  to="/">English (UK)</Link> 
           <Link  to="/">Zaza</Link> 
           <Link  to="/">Deutsch</Link> 
           <Link  to="/">Françiş (France)</Link> 
        </div>
        <div className='footer_splitter'></div>
        <div className='footer_wrap_link'>
           <Link  to="/">Kaydol</Link> 
           <Link  to="/">Giriş Yap</Link> 
           <Link  to="/">Messenger (UK)</Link> 
           <Link  to="/">Facebook Lite</Link> 
           <Link  to="/">Watch</Link> 
           <Link  to="/">Yerler</Link> 
           <Link  to="/">Oyunlar</Link> 
           <Link  to="/">Marketplace</Link> 
           <Link  to="/">Bağış kampanyaları</Link> 
           <Link  to="/">Hizmetler</Link> 
           <Link  to="/">Oy Kullanma</Link> 
           <Link  to="/">Bilgi Merkezi</Link> 
           <Link  to="/">Gruplar</Link> 
           <Link  to="/">Hakkımızda</Link> 
           <Link  to="/">Reklam</Link> 
           <Link  to="/">Çerezler</Link> 
           <Link  to="/">Ad Choices</Link> 
           <Link  to="/">Koşullar</Link> 
           <Link  to="/">Yardım</Link> 
           <Link  to="/">Kişi Yükleme ve Hesabı Olmayan Kişiler</Link> 
        </div>
        <div className='footer_wrap_link'>
            <div style={{marginTop:'10px', fontSize:'12px'}}>
            Meta &#169; 2022
        </div> 
        </div>
       
    </footer>
  )
}
