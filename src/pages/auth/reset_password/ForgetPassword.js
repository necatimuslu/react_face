import { Form, Formik } from 'formik';

import { Link } from 'react-router-dom';
import LoginInput from '../../../components/inputs/loginInput/LoginInput';

export default function ForgetPassword({email,setEmail,handleEmailValidation,handleFindEmailAndUser,error}) {
  return (
    <div className='reset_password_wrap'>
            <div className='reset_password_header'>Hesabını bul</div>
            <div className='reset_password_text'>
                <span>Hesabınızı aramak için lütfen e-posta adresinizi veya cep telefonu numaranızı giriniz.</span>
            </div>
            <Formik
            enableReinitialize
            initialValues={{
                email
            }}
            validationSchema={handleEmailValidation}
           
            >
                {
                    (formik) => (
                        <Form className='reset_password_form'>
                            <LoginInput
                            type="text"
                            placeholder="Email veya telefon numarası giriniz"
                            name="email"
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                         </Form>
                    )
                }
          </Formik>
            <div className='reset_password_btn_wrap'>
                <Link to="/login">
                    <button className='reset_password_btn'>İptal</button>
                </Link>
                <button onClick={()=>handleFindEmailAndUser() } className='blue_btn'>Ara</button>
            </div>
            
           {error &&  <div className='forgot_error'>{error}</div>}
        </div>
  )
}
