import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Product.css';

const Product = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h2 className='product-title'>YOUR BEST CHOOSE</h2>
           <div className='product-container'>
           {
                products.map(product => <Products
               key={product.id}
               product ={product}

                ></Products>)

            }
           </div>
        </div>
    );
};

export default Product;