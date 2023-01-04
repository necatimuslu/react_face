import { useMediaQuery } from 'react-responsive';
import { stories } from '../../../data/home';
import { ArrowRight, Plus } from '../../../svg';
import Stories from './Stories';
import './style.css';

export default function Story() {
  const query1185px = useMediaQuery({
    query:'(max-width:1185px)'
  });
  const query975px = useMediaQuery({
    query:'(max-width:975px)'
  });
  const query710px = useMediaQuery({
    query:'(max-width:710px)'
  });
  const max = query710px ? 4 : query975px ? 5 : query1185px ? 4 : stories.length;
  return (
    <div className='stories'>
        <div className='story_card_wrap'>
            <img  src='../../../images/default_pic.png' alt='' />
            <div className='plus_story'>
                <Plus color="#fff" className="story_plus_icon" />
            </div>
            <div className='story_card_text'>
                Hikaye Oluştur
            </div>
        </div>
        {stories.slice(0,max).map((s,i)=> <Stories key={i} s={s}/>)}
        <div className='story_arrow_left'>
          <ArrowRight color="#65676b" />
        </div>
    </div>
  )
}
