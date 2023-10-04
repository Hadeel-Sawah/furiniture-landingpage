import React from 'react'
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import {testimonial} from '../data';
const Testimonial = () => {
  const {image, title}=testimonial
  return (
    <>
     <section id="opinion">
      <div className="container pt-5 mb-5 ">
        <div className="row pb-5">
            <div className="col-md-6">
              <h2 className='text-black'>{title}</h2>
              <TestimonialSlider/>
            </div> 
           <div className="col-md-6">
               <img src={image.type} alt="imge"  className='w-100'/>
           </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Testimonial