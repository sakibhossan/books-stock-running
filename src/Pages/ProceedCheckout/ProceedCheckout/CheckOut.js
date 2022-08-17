import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useProductDetail from '../../../hooks/useProductDetail';

const CheckOut = () => {
    const {productId} = useParams();
    const [products] = useProductDetail((productId));
    const [user] = useAuthState(auth);
   
  
    const handleOrder =event =>{
        event.preventDefault();
        const order = {
            user:user.email,
            product: products.name,
            productId: productId,
            address: event.target.address.value,
            phone:event.target.phone.value
        }
        console.log(order);
        axios.post('',order)
        .then(res=>{
            console.log(res);
        })

    }




    // const [user, setUser] = useState({
    //     name: 'Akbar the great',
    //     email: 'akbar @gamil.com',
    //     address: 'tajmohal road',
    //     phone: '017484884984'
    // });

    return (
        <div className='w-50 mx-auto'>
            <h2>Your choice Order:{products.name}</h2>
            <form onSubmit={handleOrder}>
                <input className='w-100 mb-3' value={user.displayName} type="text" name="name" placeholder='Your order name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-3' type="email" name="email" defaultValue={user?.email} required readOnly  />
                <br />
                <input className='w-100 mb-3' value={products.name} type="product" name="Product" placeholder='Your order name' required  readOnly/>
                <br />
                <input className='w-100 mb-3' type="address" name="address" placeholder='Your order name'  required  />
                <br />
                <input className='w-100 mb-3' type="phone" name="phone" placeholder='Your order name' required  />
                <br />
                <input className='btn btn-dark ms-5' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default CheckOut;