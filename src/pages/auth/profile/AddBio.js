import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useSelector } from "react-redux";
import { baseUrl } from "../../../helpers/baseUrl";


export default function AddBio({setIntro,intro,setVisibleBio,updateDetail,setError}) {
    const bio = intro?.bio;
    const {user} = useSelector((state)=> ({...state}));
    const [max,setMax] = useState();
    useEffect(()=> {
        setMax(100 - Number(bio.length)  );
    },[bio]);
    async function updateDetail(){
        try {
            const { data } = await axios.put(`${baseUrl}/auth/updateDetail`,{intro},{
                headers:{
                    Authorization:`Bearer ${user?.token}`
                }
            });
            setVisibleBio(false);
        } catch (error) {
            setError(error.response.data.message);
        }
       }
  return (
    <div className="add_bio_wrap">
       
       <div className="add_bio_text_wrap">
         <textarea
        placeholder="Bio ekle"
        className="add_bio_input"
        maxLength="100"
        value={intro?.bio}
        onChange={(e)=> setIntro({...intro,bio:e.target.value})}
        ></textarea>
       </div>
       
       <div style={{display:'flex',flexDirection:'column',margin:'10px 0'}}>
        <div className="intro_bio_count">
           <span></span> <span>{max} Kalan harf</span> 
        </div>
        <div className="bio_btn_wrap">
           <div></div>
           <div style={{flexDirection:'row', display:'flex', gap:'10px', margin:'5px 0'}}>
            <button className="cancel_btn" onClick={()=> setVisibleBio(false)}>İptal</button> 
            <button className="blue_btn" onClick={()=> updateDetail()}>Kaydet</button>
           </div>
            
        </div>
       </div>
        
    </div>
  )
}
