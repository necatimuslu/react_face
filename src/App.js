import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Profile from './pages/auth/profile/Profile';
import LoginRoutes from './routes/LoginRoutes';
import NotLoginRoutes from './routes/NotLoginRoutes';
import ActivateHome from './pages/home/ActivateHome';
import ResetPassword from './pages/auth/reset_password/ResetPassword';
import CreatePopup from './components/createPopup';
import { useSelector } from 'react-redux';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './helpers/baseUrl';
import { postReducer } from './app_reducers/postsReducer';
function App() {
   const {user} = useSelector((state)=> ({...state}));
   const [showPrev,setShowPrev] = useState(false);

   
   useEffect(()=>{
      fetchAllPosts()
   },[]);
   
   const [{loading,posts,error}, dispatch] = useReducer(postReducer,{
      loading:false,
      error:'',
      posts:[]
   });
   async function fetchAllPosts(){
      try {
         dispatch({
            type:'FETCH_POSTS',
           error:''
         });
         const {data} = await axios.get(`${baseUrl}/post/getAllPosts`,{
            headers:{
               Authorization:`Bearer ${user?.token}`
            }
         });
         dispatch({
            type:'GET_ALL_POSTS',
            loading:false,
            payload:data,
            error:''
         });
      } catch (error) {
         dispatch({
            type:'ERROR_POSTS',
            payload:error.response.data.message
         })
      }
   }
 
  return (
   <div>
     {showPrev &&  <CreatePopup user={user} setShowPrev={setShowPrev} showPrev={showPrev} />}
     <Routes>
         <Route element={<NotLoginRoutes />}>
            <Route path='/login' element={<Login />} exact />
         </Route>
         <Route element={<LoginRoutes />}>
            <Route path='/' element={<Home setShowPrev={setShowPrev} posts={posts} />} exact />
            <Route path='/active/:token' element={<ActivateHome />} exact />
            <Route path='/profile' element={<Profile setShowPrev={setShowPrev} user={user} />} exact />
            <Route path='/profile/:username' element={<Profile setShowPrev={setShowPrev} user={user} />} exact />
         </Route>
         <Route path='/forgot' element={<ResetPassword />} exact />
     </Routes>
   </div>
  );
}

export default App;
