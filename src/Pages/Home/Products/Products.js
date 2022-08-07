import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Products.css';

const Products = ({product}) => {
    const {id, name, img, description, price} = product;
    const navigate = useNavigate();
    const navigateToProceedCheckOut = id =>{
        navigate(`/product/${id}`);

    }
    return (
        <div className='product'>
          
           <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
        <button onClick={() =>navigateToProceedCheckOut(id)} className='btn btn-dark'>Add To Cart</button>
          </div>
       
    );
};

export default Products;