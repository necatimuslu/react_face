import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../../helpers/baseUrl';
export default function FindUser({findUser,error,setError,setSuccess,success,setVisibleForm}) {
    
    const handleSendResetCode = async() => {
        try {
            const { data } = await axios.post(`${baseUrl}/auth/sendResetPasswordCode`,{email:findUser?.email});
            setSuccess(data.message);
            setVisibleForm(2);
        } catch (error) {
            setError(error.response.data.message);
        }
    }
    console.log(findUser.email);
  return (
    <div className='reset_password_wrap'>
            <div className='reset_password_header'>Şifreni Sıfırla</div>
            <div className='reset_password_text'>
                <span>Şifrenizi sıfırlamak için kodu nasıl almak istersiniz?</span>
            </div>
           <div className='find_user_input_wrap'>
                <div className='find_user_col_wrap'>
                    <input  type="radio" name="email"  />
                    <div className='find_user_col'>
                        <span>E-posta ile kod gönder</span>
                        <span>{findUser?.email}</span>
                    </div>
                </div>
                <div className='find_user_find_wrap'>
                    <img src={findUser?.picture} alt="" />
                    <span>{findUser?.first_name} {" "} {findUser?.last_name} </span>
                    <span>Facebook kullanıcısı</span>
                </div>
           </div>
            <div className='reset_password_btn_wrap'>
                <Link to="/login">
                    <button className='reset_password_btn'>İptal</button>
                </Link>
                <button onClick={()=> handleSendResetCode()} className='blue_btn'>Devam</button>
            </div>
            
            {error &&  <div className='forgot_error'>{error}</div>}
        </div>
  )
}
