

export default function ErrorPopup({error,setError}) {
  return (
    <div className="blur_error">
        {error} <button className="blue_btn" onClick={()=> setError('')}>Tekrar Dene</button>
    </div>
  )
}
