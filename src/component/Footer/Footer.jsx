import React from 'react';
import Logo from "../../assets/img/logo.svg";
import {footer} from '../data';
import style from './Footer.module.css'

const Footer = () => {
  return (
   <>
      <footer className='bg-dark pb-3 ' id='contact'>
        <div className="container">
            <div>
                <a  href='#home'>
                    <img src={Logo} alt="logo" className='m-3 pt-3' role="button"/>
                </a> 
                {/* {social} */}
                <div className='d-flex gap-4 ms-3 fs-5 '>
                    {footer.social.map((item )=>{
                        return<>
                          <div>
                              <a  className={`${style.bg} text-white `} >{item.icon}</a>
                          </div>
                        </>
                    })}
                </div>
            </div>
             <hr />
            <h5 className='text-center mt-3'> &copy; FuriShop 2023 - All Rights Resrver</h5>
        </div>
      </footer>
   </>
  )
}

export default Footer