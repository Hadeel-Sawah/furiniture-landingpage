import React from 'react';
import {newInStore} from '../data'
import NewltemsSlider from '../NewItemsSlider/NewltemsSlider';
import style from './Newltems.module.css'
const Newltems = () => {
//  destructing newInStore
let {icon,link,subtitle,title} = newInStore;
  return (
    <>
        <section className='mt-4'>
          <div className="container">
            <div className="row">
                <div className="col-md-3">
                  {/* start text */}
                 <div className="text-black ms-2">
                      <h2 className='mb-3'>{title}</h2>
                      <p>{subtitle}</p>
                      <div>
                        <a href="#" className={style.btnStyle}>{link}</a>
                        <span className='text-black fs-4'>{icon}</span>
                      </div>
                 </div>
              {/* end text  */}
               </div>

            <div className="col-md-9">
                 {/* start slider */}
         
      <NewltemsSlider/> 
            </div>
            
          </div>
          </div>
       </section>
    </>
  )
}

export default Newltems
