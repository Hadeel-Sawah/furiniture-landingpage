import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {products} from '../data';
import {HiPlus} from 'react-icons/hi'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css'
import style from './ProductSlider.module.css'
const ProductSlider = () => {
  //distructing data
  const {pages} = products;
  return (
    <>
      <Swiper modules={[Pagination,Navigation]}
       pagination={{clickable:true}} navigation={true} 
       className='productSlider'>
         <div>
          {pages.map((page,index)=>{
            return <>
            <SwiperSlide key={index}>
              <div className="container">
                  <div className='row p-3'> 
                  {page.productList.map((product, index)=>{
                       //destructing product
                       const {image , name , price , oldPrice} = product;
                        return <div className='col-md-4 col-xl-3 col-sm-6'>
                         <div className={`${style.hgt} border border-light rounded text-center d-flex align-items-center justify-content-center p position-relative `}>
                           <div>
                           <div>
                                <img src={image.type} alt="productName"/>
                                <div>
                                  <HiPlus className={`${style.hPlus}  fs-5`}/>
                                </div>
                            </div>
                            <h6  className='text-black mt-3 mb-2'>{name}</h6>
                            <div>
                              <h6 className='text-black-50 text-decoration-line-through'>${oldPrice}</h6>
                              <h6 className='text-black'>${price}</h6>
                            </div>
                           </div>
                         </div>
                      
                    </div>
                  })}          
                  </div>
              </div>
            </SwiperSlide>
            </>
          })}
         </div>
      </Swiper>
    </>
  )
}

export default ProductSlider