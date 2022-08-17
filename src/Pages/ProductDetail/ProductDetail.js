import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [products] = useProductDetail(productId);
    return (
        <div>
            <h2>Your booking views:{products.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${productId}`}>
                    <button className='btn btn-dark '>Order CheakOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;