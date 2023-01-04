import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoginRoutes(){
    const {user } = useSelector((state)=> ({...state}));
   /* ----------- const user = window.localStorage.getItem('user');
    console.log(user); -------- */
    return user ? <Navigate to="/" /> : <Outlet />
}