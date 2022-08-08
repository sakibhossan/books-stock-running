import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    return (
        <div>
            <h2>this is service Detail: {productId}</h2>
           <div className='text-center'>
           <Link to="/checkout">
                <button className='btn btn-dark '>Order CheakOut</button>
            </Link>
           </div>
        </div>
    );
};

export default ProductDetail;