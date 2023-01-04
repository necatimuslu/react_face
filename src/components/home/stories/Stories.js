

export default function Stories({s}) {
  return (
    <div className="absolute_story">
       <img src={s?.image} alt="" />
       <div className="absolute_story_name">{s?.profile_name}</div>
       <div className="absolute_story_profile">
            <img src={s?.profile_picture} alt="" />
       </div>
    </div>
  )
}
