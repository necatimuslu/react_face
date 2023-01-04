
import { Search } from '../../../svg';
import AllMenuItem from './AllMenuItem';
import { menu,create } from '../../../data/allMenu';
import CreateItem from './CreateItem';
export default function AllMenu({color}) {
 
  return (
    <div className="all_menu scrollbar">
        <div className="all_menu_header">
          <span>Menü</span>
        </div>
        <div className='all_menu_flex '>
            <div className='all_left'>
              <div className="search">
                  <div className='search_logo'>
                    <Search color={color} />
                  </div>
                  <input type="text" placeholder='Arama Menüsü' />
              </div>
                <div className='all_menu_group'>
                  <div className='all_menu_group_header'>
                    Sosyal
                  </div>
                    {
                      menu.slice(0,6).map((m,i)=> (<AllMenuItem key={i} name={m?.name} icon={m?.icon} description={m?.description} />))
                    }
                </div>
                <div className='all_menu_group'>
                  <div className='all_menu_group_header'>
                    Eğlence
                  </div>
                    {
                      menu.slice(6,9).map((m,i)=> (<AllMenuItem key={i} name={m?.name} icon={m?.icon} description={m?.description} />))
                    }
                </div>
                <div className='all_menu_group'>
                  <div className='all_menu_group_header'>
                    Mağaza
                  </div>
                    {
                      menu.slice(9,12).map((m,i)=> (<AllMenuItem key={i} name={m?.name} icon={m?.icon} description={m?.description} />))
                    }
                </div>
          </div>
          <div className='all_right'>
          <div>
              <div className='create_header'>
                  <span>Oluştur</span>
              </div>
            </div>
                   <CreateItem />
          </div>
       </div>
    </div>
  )
}
