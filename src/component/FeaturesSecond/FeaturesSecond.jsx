import React from 'react'
import {features} from '../data'
const FeaturesSecond = () => {
    //distructing Data
    let {title,subtitle,image}=features.feature2;  
  return (
   <> 
      <section className='container m-auto pt-5'>
        <div className="row">
         <div className="col-md-6">
            <div>
              <img src={image.type} alt="sofa" className='w-100' />  
            </div>
         </div>
         <div className="col-md-6 text-black d-flex align-items-center">
             <div className="p-3">
               <h2>{title}</h2>
               <p>{subtitle}</p>
             </div>
         </div>
        </div>
     </section>
   </>
  )
}

export default FeaturesSecond