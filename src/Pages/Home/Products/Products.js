import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const Products = ({product}) => {
    const {_id, name, img, description, price,quantity, supplier} = product;
    const navigate = useNavigate();
    const navigateToProceedCheckOut = id =>{
        navigate(`/product/${id}`);

    }
    return (
        <div className='product mt-2 ms-5'>
          
           <img className='ps-5 mt-2' src={img} alt="" />
          <div className='product-info'>
            <p className='text-size'>{name}</p>
            
            <p><small>{description}</small></p>
            <p>Price:{price}</p>
            <p>quantity:{quantity}</p>
            <p>Supplier Name:{supplier}</p>

          </div>
       
       <button onClick={() =>navigateToProceedCheckOut(_id)} className='btn-cart'  >Add To Cart</button>
       </div>
          
       
    );
};

export default Products;