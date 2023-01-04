import './style.css';
import { useField ,ErrorMessage} from 'formik';
import { useMediaQuery } from 'react-responsive';

export default function RegisterInput({placeholder,type,...props}) {
  const [field,meta] = useField(props);
  const view1 = useMediaQuery({
    query:'(min-width:850px)'
  })
  return (
    <div className='login_input_wrap'>
    
        <input name={field.name} type={type} placeholder={placeholder} {...field} {...props}  className={meta.touched && meta.error ? 'input_error_border':''}  />

        {meta.touched && meta.error &&  
     <div className={view1 ?'input_error input_error_desktop' :'input_error'} style={{transform:'translateY(-8px)'}}>
        {meta.touched && meta.error && <div className={view1 ? 'input_error_message':''}><ErrorMessage  name={field.name} /> </div>}
        {meta.touched && meta.error && <div className={view1 ?'input_error_arrow_left' :'input_error_arrow_bottom'}></div>}
      </div>
      }
    </div>
  )
}
