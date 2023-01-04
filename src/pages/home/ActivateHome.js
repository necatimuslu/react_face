import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import LeftHome from '../../components/home/left/LeftHome';
import './style.css';
import RightHome from '../../components/home/right/RightHome';
import Story from '../../components/home/stories/Story';
import CreateStory from '../../components/home/stories/CreateStory';
import { useEffect, useState } from 'react';
import ActivateForm from './ActivateForm';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../helpers/baseUrl';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

export default function ActivateHome() {
  const { user } = useSelector((state)=> ({...state}));
  const [success,setSuccess] = useState('');
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=> {
    activateAccount();
  },[])
  const activateAccount = async() => {
    try {
        setLoading(true)
        const { data } = await axios.post(`${baseUrl}/auth/activate`,{token},{
            headers:{
                Authorization:`Bearer ${user?.token}`
            }
        });
        setSuccess(data.message);
        setLoading(false);
        Cookies.set('user',JSON.stringify({...user,verified:true}))
        dispatch({
            type:'VERIFY',
            payload:true
        });
        setTimeout(()=> {
            navigate('/');
        },3000);
    } catch (error) {
        setError(error.response.data.message);
        setTimeout(()=> {
            navigate('/');
        },3000);
    }
  }
  return (
    <div className='home'>
        {
            success && <ActivateForm
            type="success"
            header="Hesap doğrulama başarılı"
            text={success}
            loading={loading}
            />
        }
        {
            error && <ActivateForm
            type="error"
            header="Hesap doğrulama başarısız"
            text={error}
            loading={loading}
            />
        }
        <Header />
        <LeftHome user={user} />
        <div className='middle_home'>
            <Story />
            <CreateStory user={user} />
        </div>
        
        <RightHome />
    </div>
  )
}

