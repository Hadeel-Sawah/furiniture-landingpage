import React from 'react';
import {newsletter} from '../data';
import style from './Newsletter.module.css';
import { useState } from 'react';
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };
    
  const {title , subtitle , buttonText ,placeholder} = newsletter;
  return (
   <>
     <section className={`${style.bg} mt-5 pb-5`}>
        <div className="container p-5">
           <div className="row">
             <div className="col-md-7">

             </div>
             <div className="col-md-5">
             <div>
              <h2>{title}</h2>
              <p className='mt-3 ms-2 '>{subtitle}</p>
           </div>
           
            <div>
              <input type="email" required className={`${style.wdth1} p-2 form-label rounded border border-secondary` } placeholder={placeholder} id="email"
        name="email"
        value={email}
        onChange={handleChange}/>
        {error && <p className='text-white ms-3 mt-3'>{error}</p>}
              <button className={`${style.wdth} btn btn-secondary mt-3 text-white`}>{buttonText}</button>
            </div>
             </div>
           </div>
        </div>
     </section>
   </>
  )
}

export default Newsletter
