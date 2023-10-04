import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './Navbar.module.css'
const Navbar = () => {
  const [bg ,setBg]= useState('bg-dark bg-opacity-50');
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      return window.scrollY > 50 ?setBg(true):setBg(false);
    })
  })
  
  return (
    <>
       <nav class={`${bg?'bg-dark bg-gradient':'bg-dark bg-opacity-50'} navbar navbar-expand-lg navbar-dark  fixed-top p-1` }>
  <div class="container ">
    <h1 class="navbar-brand fs-2">FurniShop</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto ps-4">
        <a class={`${style.cool_link} nav-link active `} aria-current="page" href='#home'>Home</a>
        <a class={`${style.cool_link} nav-link active `} href='#about'>About</a>
        <a class={`${style.cool_link} nav-link active `} href='#products'>Products</a>
        <a class={`${style.cool_link} nav-link active `} href='#opinion'>Testimonial</a>
        <a class={`${style.cool_link} nav-link active `} href='#contact'>
          Contact Us
        </a>
       
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar