import React from 'react';
import useProducts from '../../hooks/useProducts';
import './ManageProduct.css';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const handleDeleteButton = (id) =>{
        const handleProcced = window.confirm('Are you sure delete this product');
        if(handleProcced){
            const url= `https://books-stock-running-server.vercel.app/product/${id}`
            fetch(url,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remain =products.filter(product => product._id !== id);
                setProducts(remain);

            } )
        }
    }
    return (
        <div className='mt-5 w-50 mx-auto'>
            <h2 className='text-primary ms-5'>this is manage products</h2>
            {
                products.map(product => <div 
                key={product._id}
                >
                    <div className='delete-product d-flex '>
                    <h3>{product.name}</h3>
                    <button 
                    onClick={() =>handleDeleteButton(product._id)}
                    className='ms-5 btn btn-danger'>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;