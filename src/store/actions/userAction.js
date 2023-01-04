import * as api from '../../services/authService';
import Cookies from 'js-cookie';

export const registerUserAction = (userForm,setRegisterError,setRegisterSuccess,history) => async(dispatch) => {

    try {
        const { data } = await api.registerUser(userForm)
       
        dispatch({
            type:'LOGIN',
            payload:data
        })
        setRegisterSuccess(data.message);
        Cookies.set('user',JSON.stringify(data));
      
    } catch (error) {
        
        setRegisterError(error.response.data.message);
    }
}

export const loginUserAction =(userForm,navigate) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(userForm)
       
        dispatch({
            type:'LOGIN',
            payload:data
        })
        navigate('/')
        Cookies.set('user',JSON.stringify(data));
    } catch (error) {
        
    }
}