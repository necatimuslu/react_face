
export default function Photos({photos}) {
         
   
  return (
    <div className="photos_wrap">
        <div className="photos_header">
            <span>Fotoğraflar</span>
            <span className="hover1">Tüm fotoğrafları göster</span>
        </div>
        <div className="photos_count">
            {
                photos && photos.total_count === 0 ? ''
                : photos.total_count === 1 ? '1 adet Fotoğraf'
                : `${photos.total_count} adet Fotoğraf`
            }
        </div>
        <div className="photos_count_grid">
            {
                photos.resources && 
                photos.resources.length &&
                photos.resources.slice(0,9).map((img)=> (
                    <div key={img.public_id} className="photo_img_card"> 
                    <img src={img.secure_url} alt=""/></div>
                ))
            }
        </div>
    </div>
  )
}
