import './style.css';
import { AiOutlineClose } from 'react-icons/ai';
import RegisterInput from '../../../components/inputs/registerInput/RegisterInput';
import { Formik,Form } from 'formik';
import { useState } from 'react';
import { BsQuestionCircleFill } from 'react-icons/bs';
import * as Yup from 'yup';
import { registerUserAction } from '../../../store/actions/userAction';
import { registerUser } from '../../../services/authService';
import { useDispatch } from 'react-redux';
export default function Register({setRegisterVisible,history}) {
    const registerInfos = {
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        bDay:new Date().getDate(),
        bMonth: new Date().getMonth() + 1 ,
        bYear: new Date().getFullYear(),
        gender:''
    }
    
    const [register,setRegister] = useState(registerInfos);
    const [registerError,setRegisterError] = useState('');
    const [registerSuccess,setRegisterSuccess] = useState('');
    const { first_name,last_name,email,password,bDay,bMonth,bYear,gender } = register
    const dispatch = useDispatch();
    const handleChangeRegister = (e) => {
        const {name,value} = e.target;
        setRegister({...register,[name]:value})
    }
    
    const tempYear = new Date().getFullYear();
    const years = Array.from(new Array(108),(val,i) => tempYear - i);
    const month = Array.from(new Array(12),(val,i) => 1 + i);
    const getDays = () => {
        return new Date(bYear,bMonth,0).getDate();
    }
    const days = Array.from(new Array(getDays()),(val,i) => 1 + i);
    const [dateError,setDateError] = useState('');
    const [genderError,setGenderError] = useState('');
    const registerValidationSchema = Yup.object({
        first_name:Yup.string().required('Adın nedir?').max(25),
        last_name:Yup.string().required('Soyadın nedir?').max(25),
        email:Yup.string().required('Giriş yaparken ve şifreni yenilemen gerekirse bunu kullanacaksın.').email('Lütfen geçerli email giriniz').max(100),
        password:Yup.string().required('İçinde en az altı rakam,harf ve noktalama işareti (! ve &) bulunan bir şifre gir.')
    })
     
    
    const handleRegisterSubmit = () => {
        let current_date =new Date();
        let picked_date = new Date(bYear,bMonth - 1 ,bDay);
        let atleast14 = new Date(1970 + 14 , 0,1);
        let upleast70 = new Date(1970 + 70 , 0 ,1);
       
        if(current_date - picked_date < atleast14){
            setDateError('Görünüşe göre yanlış bilgi girdin.')
        } else if (current_date - picked_date > upleast70){
            setDateError('Görünüşe göre yanlış bilgi girdin.')
        }else if (gender === ''){
            setGenderError('Lütfen bir cinsiyet seç.Bunu kimlerin görebileceğini daha sonra değiştirebilirsin.')
        }else {
           
          dispatch(registerUserAction(register,setRegisterError,setRegisterSuccess));
          setRegister({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            bDay:'',
            bMonth: '' ,
            bYear: '',
            gender:''
          })
          setTimeout(()=> {
            setRegisterVisible(false);
          },2000)
        }
      
    }
    
  return (
    <div className='blur'>
        <div className='register'>
            <div className='register_header'>
                <AiOutlineClose className='register_header_icon' onClick={()=> setRegisterVisible(false)} />
                <span>Kaydol</span>
                <span>Hızlı ve Kolaydır.</span>
            </div>
            <Formik
            enableReinitialize
            
            initialValues={{
                first_name,
                last_name,
                email,
                password,
                bDay,
                bMonth,
                bYear,
                gender
            }}
            validationSchema={registerValidationSchema}
           onSubmit={handleRegisterSubmit}
            >
                {
                    (formik) => (
                        <Form className='register_form'>
                            <div className='reg_line'>
                                <RegisterInput name="first_name" type="text" placeholder="Adın" onChange={handleChangeRegister} />
                                <RegisterInput name="last_name" type="text" placeholder="Soyadın" onChange={handleChangeRegister} />
                            </div>
                            <div className='reg_line'>
                                <RegisterInput name="email" type="email" placeholder="Cep telefonu numarası veya e-posta" onChange={handleChangeRegister} />
                            </div>
                            <div className='reg_line'>
                                <RegisterInput name="password" type="password" placeholder="Yeni şifre"  onChange={handleChangeRegister}/>
                            </div>

                            <div className='reg_col'>
                                <div className='reg_line_header'>
                                    Doğum Tarihi <BsQuestionCircleFill />
                                </div>
                                <div className='reg_grid'>
                                    <select name="bDay" onChange={handleChangeRegister}>
                                       {days.map((d,i)=> <option value={d} key={i}>{d}</option>)}
                                    </select>
                                    <select name="bMonth" onChange={handleChangeRegister}>
                                        {month.map((m,i)=> <option value={m} key={i}>{m}</option>)}
                                    </select>
                                    <select name="bYear" onChange={handleChangeRegister}>
                                        {years.map((y,i) => <option value={y} key={i}>{y}</option>)}
                                    </select>
                                </div>
                            </div>
                            {dateError && <div className='input_error' style={{margin:'10px',width:'95%'}}>{dateError}</div>}
                            <div className='reg_col'>
                                <div className='reg_line_header'>
                                    Cinsiyet <BsQuestionCircleFill />
                                </div>
                                <div className='reg_grid'>
                                    <label htmlFor='female'>
                                        Kadın <input type="radio" name="gender" value="female" id="female" onChange={handleChangeRegister} />
                                    </label>
                                    <label htmlFor='male'>
                                        Erkek <input type="radio" name="gender" value="male" id="male" onChange={handleChangeRegister} />
                                    </label>
                                    <label htmlFor='custom'>
                                        Özel <input type="radio" name="gender" value="custom" id="custom" onChange={handleChangeRegister}/>
                                    </label>
                                </div>
                            </div>
                            {genderError && <div className='input_error' style={{margin:'10px',width:'95%'}}>{genderError}</div>}
                            <div className='register_extra'>
                                <span className='register_extra_span'>
                                    Hizmetlerimizi kullanan kişiler senin iletişim bilgilerini Facebook'a yüklemiş olabilir.
                                </span>
                                <a>Daha fazla bilgi al</a>
                            </div>
                            <div className='register_extra'>
                                <div className='register_extra_span'>Kaydol düğmesine tıklayarak <a>Koşullarımızı</a> <a>Gizlilik ilkemizi</a> ve <a>Çerez ilkemizi</a>
                                 {" "}kabul etmiş olursun.Bizden SMS Bildirimleri alabilir ve bu bildirimleri istediğin zaman durdurabilirsin.
                                </div>
                            </div>
                            <div className='register_btn_wrap'>
                                <button type="submit" className='blue_btn signup_btn'>Kaydol</button>
                            </div>
                            { registerSuccess && <div className='register_succes_text'>{registerSuccess}</div>}
                            { registerError && <div className='register_error_text'>{registerError}</div>}
                        </Form>
                    )
                }
            </Formik>
        </div>
    </div>
  )
}
