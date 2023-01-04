
import { useState } from "react"

import AddBio from "./AddBio";
import EditDetail from "./EditDetail";


export default function Intro({details,setIntroVisible,introVisible,user}) {
    
    const initial = {
        bio: details?.bio ? details?.bio :  '',
        otherName:details?.otherName ? details?.otherName :  '',
        job: details?.job ? details.job :  '',
        worplace :details?.worplace ? details?.worplace : '',
        highSchool: details?.highSchool ? details?.highSchool :  '',
        collage : details?.collage ? details?.collage :  '',
        currentCity:  details?.currentCity ? details?.currentCity :  '',
        hometown:  details?.hometown ? details?.hometown :  '',
        releationship : details?.releationship ? details?.releationship :  '',
        instagram : details?.instagram ? details?.instagram : ''
    }
    const [error,setError] = useState('');
    const [intro,setIntro] = useState(initial);
   const [visibleBio,setVisibleBio] = useState(false);
   
  return (
    <div className="intro_wrap">
        <div className="intro_header">Hakkımda</div>
        <div className="intro_body">
            <div className="intro_btn" onClick={()=> setVisibleBio(true)}>
                <button  >Bio ekle</button>
            </div>
           {visibleBio && <AddBio setVisibleBio={setVisibleBio} setError={setError}  intro={intro} setIntro={setIntro}  />}
            {
                intro.job && !intro.worplace && <div className="intro_item">
                    <img src="../../../icons/job.png" alt=""/> 
                    <span>{intro.job} çalışıyor</span>   
                 </div>
            }
              {
                intro.highSchool && <div className="intro_item">
                    <img src="../../../icons/studies.png" alt=""/>  
                    <span>{intro.highSchool}</span>  
                 </div>
            }
              {
                intro.collage && <div className="intro_item">
                    <img src="../../../icons/studies.png" alt=""/>  
                    <span>{intro.collage}</span>  
                 </div>
            }
            {
                intro.instagram && <div className="intro_item">
                    <img src="../../../icons/instagram.png" alt=""/>  
                    <a target="_blank" href={`https://instagram.com/${intro?.instagram}`}>{intro.instagram}</a>  
                 </div>
            }
            <div className="intro_btn" onClick={()=> setIntroVisible(true)}>
                <button  >Detayı düzenle</button>
            </div>
            {introVisible && <EditDetail user={user} intro={intro} setIntro={setIntro} setIntroVisible={setIntroVisible} details={details} />}
            <div className="intro_btn">
                <button  >Hobi ekle</button>
            </div>
            <div className="intro_btn">
                <button  >Özellik ekle</button>
            </div>
        </div>
    </div>
  )
}
