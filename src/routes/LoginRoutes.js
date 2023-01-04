import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from '../pages/auth/login/Login';
export default function LoginRoutes(){
    const { user } = useSelector((state)=> ({...state}));

    return user ? <Outlet /> : <Login />
}