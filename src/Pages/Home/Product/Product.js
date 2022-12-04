import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Product.css';

const Product = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://books-stock-running-server-l8e0rrms9-sakibhossan.vercel.app/product/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data)
        });
    },[])
    return (
        <div id="product">
            <h2 className='product-title'>YOUR BEST CHOOSE</h2>
           <div className='product-container '>
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