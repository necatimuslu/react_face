import './style.css';
import { useField ,ErrorMessage} from 'formik';
export default function LoginInput({placeholder,type,bottom,...props}) {
  const [field,meta] = useField(props);
 
  return (
    <div className='login_input_wrap'>
     {meta.touched && meta.error && !bottom &&  
     <div className='input_error' style={{transform:'translateY(8px)'}}>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
        {meta.touched && meta.error && <div className='input_error_arrow_top'></div>}
      </div>
      }
        <input name={field.name} type={type} placeholder={placeholder} {...field} {...props} className={meta.touched && meta.error ? 'input_error_border':''}  />

        {meta.touched && meta.error && bottom &&  
     <div className='input_error' style={{transform:'translateY(-8px)'}}
     
     >
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
        {meta.touched && meta.error && <div className='input_error_arrow_bottom'></div>}
      </div>
      }
    </div>
  )
}
