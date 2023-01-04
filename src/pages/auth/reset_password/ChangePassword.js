import { Form, Formik } from 'formik';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import LoginInput from '../../../components/inputs/loginInput/LoginInput';
import * as Yup from 'yup';
import axios from 'axios';
import { baseUrl } from '../../../helpers/baseUrl';
export default function ChangePassword({password,setPassword,setConfPassword,conf_password,error,findUser,setError,setSuccess,success}) {
    const [passwordError,setPasswordError] = useState('');
    const handlePasswordSchema = Yup.object({
        password:Yup.string().required('Şifre girilmesi zorunludur').min(6,"Girilen şifre en az 6 karekterli olmalıdır.").max(36,"Girilen şifre en fazla 36 karekter olabilir."),
        conf_password:Yup.string().required('Şifre girilmesi zorunludur').min(6,"Girilen şifre en az 6 karekterli olmalıdır.").max(36,"Girilen şifre en fazla 36 karekter olabilir.").oneOf([Yup.ref('password')],"Girişlen şifreler eşleşmiyor")
    })
    const handleChangePasswordSubmit = async() => {       
        try {
            if(password !== conf_password){
                setPasswordError('Girilen şifreler eşleşmemektedir.')
            }  
            const { data } = await axios.post(`${baseUrl}/auth/resetPassword`,{email:findUser?.email,password,conf_password});
            setSuccess(data.message);
        } catch (error) {
            setError(error.response.data.message);
        }
    }
  return (
    <div className='reset_password_wrap reset_change_password_wrap'>
            <div className='reset_password_header'>Şifre Değiştir</div>
            <div className='reset_password_text'>
                <span>Güçlü bir şifre seç</span>
            </div>
            <Formik
            enableReinitialize
            initialValues={{
                password,
                conf_password
            }}
           
           validationSchema={handlePasswordSchema}
           
            >
                
                {
                    (formik) => (
                        <Form className='reset_password_form_1'>
                            <LoginInput
                            type="text"
                            placeholder="Yeni Şifre giriniz"
                            name="password"
                            onChange={(e)=> setPassword(e.target.value)}
                            bottom
                            />
                             {password !== '' &&   <LoginInput
                            type="text"
                            placeholder="Yeni Şifre Onay"
                            name="conf_password"
                            onChange={(e)=> setConfPassword(e.target.value)}
                            bottom
                            />}
                         </Form>
                    )
                }
          </Formik>
            <div className='reset_password_btn_wrap'>
                <Link to="/login">
                    <button className='reset_password_btn'>İptal</button>
                </Link>
                <button onClick={()=> handleChangePasswordSubmit()}  className='blue_btn'>Onay</button>
            </div>
            
           {error &&  <div  className='forgot_error'>{error}</div>}
           {passwordError &&  <div className='forgot_error'>{passwordError}</div>}
           {success &&  <div  className='forgot_error'>{success}</div>}
        </div>
  )
}
