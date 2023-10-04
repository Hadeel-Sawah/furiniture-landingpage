import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import style from './NewltemsSlider.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import {newInStore} from '../data'
const NewltemsSlider = () => {
  
  return (
    <>
        <Swiper modules={[Autoplay]}
          autoplay={true}
          grabCursor={true}
          breakpoints= {{
            320: {
              slidesPerView: 2,
              spaceBetween:18
            },
            // // when window width is >= 640px
            786: {
              slidesPerView: 3,
              spaceBetween: 20
            }
      }}>
         
         {newInStore.products.map((product,index)=>{
           return <SwiperSlide key={index}>
             <div >
              <div className='position-relative'>
              <img src={product.image.type} alt="productImage" className='w-100'/>
               <div className={style.postion}>{product.name}</div>
              </div>
             </div>
           </SwiperSlide>
         })} 
        </Swiper>
    </>
  )
}

export default NewltemsSlider