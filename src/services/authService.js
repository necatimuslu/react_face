import axios from 'axios';
import { baseUrl } from '../helpers/baseUrl';

export const registerUser = async(userForm) => await axios.post(`${baseUrl}/auth/register`,userForm);


export const loginUser = async(userForm) => await axios.post(`${baseUrl}/auth/login`,userForm);