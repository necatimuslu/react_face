import './style.css';
import { Formik,Form } from 'formik';
import LoginInput from '../../../components/inputs/loginInput/LoginInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import Footer from '../../../components/footer/Footer';
import Register from '../register/Register';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../../store/actions/userAction';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  
  const loginInfos = {
    email:'',
    password:''
  }
  const [login,setLogin] = useState(loginInfos);
  const {email,password} = login;
  const handleLoginChange = (e) => {
    const {name,value} = e.target;
    setLogin({...login,[name]:value})
  }
  const loginValidation = Yup.object({
    email:Yup.string().required('Girdiğin e-posta veya telefon numarası bir hesaba bağlı değil').max(100),
    password:Yup.string().required('Girdiğin şifre yanlış')
  })
  const [registerVisible,setRegisterVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginSubmit = () => {
    
      dispatch(loginUserAction(login,navigate))
  }
  return (
    <div className='login'>
      <div className='login_wrapper'>
        <div className='login_wrap'>
          <div className='login_1'>
            <img src='../../icons/facebook.svg' alt='' />
            <span>Facebook tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri paylaşmanı sağlar.</span>
          </div>
          <div className='login_2'>
            <div className='login_2_wrap'>
              <Formik
              enableReinitialize
              initialValues={{
                email,
                password
              }}
              validationSchema={loginValidation}
              onSubmit={handleLoginSubmit}
              >
                {
                  (formik) => (
                    <Form>
                      <LoginInput name="email" type="email" placeholder="E-posta veya Telefon Numarası" onChange={handleLoginChange}/>
                      <LoginInput name="password" type="password" placeholder="Şifre"  onChange={handleLoginChange} bottom/>
                      <button className='blue_btn' type="submit">Giriş Yap</button>
                    </Form>
                  )
                }
              </Formik>
             
              <Link to="/forgot" className='forgot_password'>Şifreni mi Unuttun?</Link>
              <div className='login_splitter'></div>
              <button className='blue_btn signup_btn' onClick={()=> setRegisterVisible(true)}>Yeni Hesap Oluştur</button>
            </div>
            <Link to="/" className='login_extra'>
              Ünlü biri,marka veya işletme için <b>Sayfa oluştur</b>
            </Link>
          </div>
        </div>
       {registerVisible && <Register setRegisterVisible={setRegisterVisible} />}
        <Footer />
      </div>
    </div>
  )
}
