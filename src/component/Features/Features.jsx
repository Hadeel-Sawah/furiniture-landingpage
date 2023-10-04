import React from 'react';
import {features} from '../data'
import Newltems from '../NewItems/Newltems';
import FeaturesSecond from '../FeaturesSecond/FeaturesSecond';

const Features =() => {
    // destructing features
    let {title,subtitle,image,items}=features;
  return (
    <>
    <section className='container mt-4' id='about'>
        <div className="row">
         <div className="col-md-6">
            <div>
              <img src={image.type} alt="sofa" className='w-100' />  
            </div>
         </div>
         <div className="col-md-6 text-black ">
             <div className="p-3">
             <h2>{title}</h2>
           <p>{subtitle}</p>
           {/* destructing items */}
           <div className='ms-2'>
            {items.map((item,index)=>{ 
              let{icon,title,subtitle}=item;
              return<> 
             
                     <div>{icon}</div>
                     <h5>{title}</h5>
                     <p>{subtitle}</p>
                   </>
            })}
           </div>
             </div>
         </div>
        </div>
     </section>
     <Newltems/>
     <FeaturesSecond/>

    </>
  )
}

export default Features