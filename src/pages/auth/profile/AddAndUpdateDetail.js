import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../../helpers/baseUrl";

export default function AddAndUpdateDetail({setEditAndAddDetail, details,intro,setIntro,user}) {
  const [error,setError] = useState('')
   function handleChangeDetails(e){
    const {name,value} = e.target
    setIntro({...intro,[name]:value});
    
  }
  async function handleUpdateDetail(){
    try {
      const { data } = await axios.put(`${baseUrl}/auth/updateDetail`,{intro},{
          headers:{
              Authorization:`Bearer ${user?.token}`
          }
      });
      console.log(data.details);
      setEditAndAddDetail(false);
  } catch (error) {
      setError(error.response.data.message);
  }
  }
  
  return (
   <div className="add_update_detail_container">
    <textarea
    maxLength="100"
    placeholder="Diğer adını ekle"
    name="otherName"
    onChange={handleChangeDetails}
    value={intro?.otherName}
    >

    </textarea>
    <div className="add_update_detail_row">
        <span> Kalan yazı adet</span>
        <div className="add_update_button">
            <button className="gray_btn" onClick={()=> setEditAndAddDetail(false)}>İptal</button>
            <button className="blue_btn" onClick={handleUpdateDetail}>Kaydet</button>
        </div>
    </div>
</div>
 
   
  )
}
