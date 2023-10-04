import React from 'react'
import style from './Stats.module.css';
import { stats } from '../data';
const Stats = () => {
  return (
   <>
     <section className={`${style.statsbg} rounded p-5 text-center w-75 m-auto mb-4`}>
        <div className="row">
          {stats.map((item,index)=>{
            return(<> 
           
              <div  key={index} className={`${style.stateCont} col-sm-6 col-md-3`}>
                <h2>{item.value}</h2>
                <h6>{item.text}</h6>
              </div>

              </>
            )
          })}
        </div>
     </section>
   </>
  )
}

export default Stats