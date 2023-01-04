
import './style.css';
import * as Yup from 'yup';
import { useState } from 'react';
import ForgetPassword from './ForgetPassword';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../helpers/baseUrl';
import CodeVerification from './CodeVerification';
import FindUser from './FindUser';
import Footer from '../../../components/footer/Footer';
import ChangePassword from './ChangePassword';

export default function ResetPassword() {
    const [email,setEmail] = useState('');
    const [visibleForm,setVisibleForm] = useState(3);
    const [findUser,setFindUser] = useState();
    const [error,setError] = useState('');
    const [code,setCode] = useState('');
    const [password,setPassword]= useState('');
    const [conf_password,setConfPassword]= useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');
    const handleEmailValidation =Yup.object({
        email:Yup.string().required('Girdiğin e-posta veya telefon numarası bir hesaba bağlı değil').max(100),
        password:Yup.string().required('Lütfen yeni şifre giriniz'),
        conf_password:Yup.string().required("Lütfen yeni şifre'yi tekrar giriniz ")
    });
   console.log(visibleForm);
    const handleFindEmailAndUser = async() => {
        try {
            setLoading(true)
            const { data } = await axios.post(`${baseUrl}/auth/findByUserEmail`,{email})
            
            if(data.ok == true){
                setFindUser(data);
                setEmail('');
                setVisibleForm(1);
                setLoading(false)
                setError('')
            }
        } catch (error) {
            setError(error.response.data.message);
            setEmail('')
        }
    }
  return (
    <>
    <div className='reset'>
        <div className='reset_header'>
            <img src="../../icons/facebook.svg" alt="" />
            <Link to="/login"><button className='blue_btn'>Giriş</button></Link>
        </div>
       {visibleForm === 0 && <ForgetPassword email={email} setEmail={setEmail} handleEmailValidation={handleEmailValidation} handleFindEmailAndUser={handleFindEmailAndUser} error={error} />}
       {visibleForm === 1 && <FindUser findUser={findUser} error={error} setError={setError} email={email} success={success} setSuccess={setSuccess} setVisibleForm={setVisibleForm} />}
       {visibleForm === 2 && <CodeVerification setCode={setCode} code={code} error={error} setError={setError} findUser={findUser} setVisibleForm={setVisibleForm} />}
       {visibleForm === 3 && <ChangePassword success={success} setSuccess={setSuccess} setError={setError} findUser={findUser} setConfPassword={setConfPassword} password={password} error={error} setPassword={setPassword} conf_password={conf_password} handleEmailValidation={handleEmailValidation} />}
    </div>
     <Footer />
     </>
  )
}
