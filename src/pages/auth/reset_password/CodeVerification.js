import { Form, Formik } from 'formik';

import { Link } from 'react-router-dom';
import LoginInput from '../../../components/inputs/loginInput/LoginInput';
import * as Yup from 'yup';
import axios from 'axios';
import { baseUrl } from '../../../helpers/baseUrl';
export default function CodeVerification({setCode,code,error,setError,findUser,setVisibleCode}) {
    
   const handleCodeValidation = Yup.object({
    code:Yup.string().required('Kod girilmesi zorunludur').min(5,"Kod minimum 5 karekter olmalıdır.").max(5,"Kod maksimum 5 karekter olmalıdır.")
   });
   
   const  handleResetCode = async() =>{
    try {
      const { data } =  await axios.post(`${baseUrl}/auth/resetCodeSuccess`,{email:findUser?.email,code});
           
            setVisibleCode(3);
            setCode('');
            setError('')

    } catch (error) {
        setError(error?.response?.data?.message);
    }
   }
  return (
    <div className='reset_password_wrap'>
            <div className='reset_password_header'>Kod Doğrulama</div>
            <div className='reset_password_text'>
                <span>Lütfen e-postanıza gönderilen kodu girin.</span>
            </div>
            <Formik
            enableReinitialize
            initialValues={{code}}
           validationSchema={handleCodeValidation}
            >
                {
                    (formik) => (
                        <Form className='reset_password_form'>
                            <LoginInput
                            type="code"
                            placeholder="Kod"
                            name="code"
                           onChange={(e)=> setCode(e.target.value)}
                            />
                         </Form>
                    )
                }
          </Formik>
            <div className='reset_password_btn_wrap'>
                <Link to="/login">
                    <button className='reset_password_btn'>İptal</button>
                </Link>
                <button onClick={()=> handleResetCode()} className='blue_btn'>Gönder</button>
            </div>
            
            {error &&  <div className='forgot_error'>{error}</div>}
        </div>
  )
}
