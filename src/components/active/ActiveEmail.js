import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../../helpers/baseUrl';
import './style.css';

export default function ActiveEmail({user}) {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const handleSendEmailVerification = async() => {
        try {
            const { data } = await axios.post(`${baseUrl}/auth/sendVerification`,{},{
                headers:{
                    Authorization : `Bearer ${user?.token}`
                }
            });
            setSuccess(data.message);
        } catch (error) {
            setError(error.response.data.message);
        }
    }
  return (
    <div className='active_email_wrap'>
        <span>Hesabınız doğrulanmadı, Hesabınızı oluşturduktan bir ay sonra silinmeden önce hesabınızı doğrulayın</span>
        <a onClick={()=> handleSendEmailVerification()}>doğrulama e-postasını yeniden göndermek için burayı tıklayın</a>
       {success &&  <span className='success_text'>{success}</span>}
        {error && <span className='error_text'>{error}</span>}
    </div>
  )
}
