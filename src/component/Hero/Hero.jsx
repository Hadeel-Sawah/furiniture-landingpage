import React from 'react';
import { hero } from "../data";
import style from './style.module.css';
import Stats from '../Stats/Stats';
const Hero = () => {
  //destructing for hero 
  let {title,subtitle,buttonText} = hero;
  return (
    <>
      <div className="row" id='home'>
            <div className="col-md-12">
              <section className={`${style.hero} position-relative text-white`} >
             
               <div className={`${style.contant} w-50  text-center  ps-2 pe-2`}>
                  
                   <h2 className='pb-4 fs-1'>{title}</h2>
                  <p className='fs-6'>{subtitle}</p>
                <button type="button" className={`${style.btnW} btn btn-secondary mt-4 mb-4 ps-3 pe-3 `}>{buttonText}</button>
                   {/* </div> */}
              </div>
              </section>
                <div>
                  <Stats/>
                </div>
            </div>
      </div>
    </>
  )
}

export default Hero