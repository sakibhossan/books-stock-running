import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Product.css';

const Product = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div id="product">
            <h2 className='product-title'>YOUR BEST CHOOSE</h2>
           <div className='product-container'>
           {
                products.map(product => <Products
               key={product._id}
               product ={product}

                ></Products>)

            }
           </div>
        </div>
    );
};

export default Product;