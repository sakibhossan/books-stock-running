import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    return (
        <div>
            <h2>this is service Detail: {productId}</h2>
        </div>
    );
};

export default ProductDetail;