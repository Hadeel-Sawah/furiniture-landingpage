import React from 'react';
import {products} from '../data'
import ProductSlider from '../ProductSlider/ProductSlider';

const Products = () => {
  const {title,subtitle}=products;
  return (
   <>
     <section className='pt-5' id='products'>
      <div className='text-center'>
        <h2 className='text-black'>{title}</h2>
        <p className='text-black w-75 m-auto pb-5'>{subtitle}</p>
      </div>
        <ProductSlider/>
     </section>
   </>
  )
}

export default Products