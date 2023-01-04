import PropagateLoader from 'react-spinners/PropagateLoader';

export default function ActivateForm({type,header,text,loading}) {
  return (
    <div  className="blur_2">
        <div className="activate_wrap">
            <div className="activate_header">{header}</div>
            <div className={type == "success" ?"active_text active_text_success" :"active_text active_text_error"}>{text}</div>
            <div className='active_spinner'>
                <PropagateLoader color="#1E90FF" size={30} loading={loading} />
            </div>
           
        </div>
    </div>
  )
}
