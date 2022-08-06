import React from 'react';
// import './Products.css';

const Products = ({product}) => {
    const { name, img, description, price} = product;
    return (
        <div className='product'>
          
           <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
        <button>Add To Cart</button>
          </div>
       
    );
};

export default Products;