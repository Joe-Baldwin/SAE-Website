// src/components/Products.js
import React from 'react';
import Bottles from '../Media/Images/Products.png';
import Jar from '../Media/Images/Jar.png'
import thirdp from '../Media/Images/3P.png'

const Products = () => {
  return (
    <div>
        <div id="products" className="section3 products">
        <h4>Our Products</h4>
        <br/>
        <p className='p3'>Explore our range of skincare products...</p>
        </div>
        <div className='bottle'>
            <img src={Bottles} className='img' alt='bottles'/>
            <img src={Jar} className='img' alt='jar'/>
            <img src={thirdp} className='img' alt='more products'/>
        </div>   
    </div>
  ) 
};

export default Products;
