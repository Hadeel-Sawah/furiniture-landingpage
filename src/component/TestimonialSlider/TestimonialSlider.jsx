import React from 'react';
import {testimonial} from '../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const TestimonialSlider = () => {
  return (
    <>
      <Swiper modules={[Autoplay]}
       autoplay={true} className='text-black mt-4 testimonialSlider' >
         {testimonial.persons.map((person,index)=>
         {
          //destructing data
          const {name,avatar,occupation,message} =person;
           return<>
              <SwiperSlide key={index}>
                 <div>
                   <div>
                      <div className="d-flex ">
                      <img src={avatar.type} alt="imgePerson" className=' p-2 rounded-circle'/>
                        <div className="m-3">
                        <h4>{name}</h4>
                        <h6 className='text-secondary'>{occupation}</h6>
                        </div>
                     
                      </div>
                      <p className='mt-4'>{message}</p>
                   </div>
                 </div>
              </SwiperSlide>
           </>
         })}
      </Swiper>
    </>
  )
}

export default TestimonialSlider