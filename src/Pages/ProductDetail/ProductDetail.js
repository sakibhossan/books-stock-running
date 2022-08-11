import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    const [products, setProducts] = useState({});
    useEffect(() =>{
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h2>Your booking views:{products.name}</h2>
           <div className='text-center'>
           <Link to="/checkout">
                <button className='btn btn-dark '>Order CheakOut</button>
            </Link>
           </div>
        </div>
    );
};

export default ProductDetail;