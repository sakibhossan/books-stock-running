import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useProductDetail from '../../../hooks/useProductDetail';

const CheckOut = () => {
    const {productId} = useParams();
    const [products] = useProductDetail((productId));
    const [user] = useAuthState(auth);
   
  
    const handleOrder =event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            product: products.name,
            productId: productId,
            address: event.target.address.value,
            phone:event.target.phone.value
        }
      
        axios.post('http://localhost:5000/collectOrder',order)
        .then(res=>{
            const {data} = res;
            
            if(data.insertedId){
                toast('Your order is booked');
                
                event.target.reset();
            }
            
        })

    }




   

    return (
        <div className='w-50 mx-auto'>
            <h2>Your choice Order</h2>
            <form onSubmit={handleOrder}>
                <input className='w-100 mb-3' value={user?.displayName} type="text" name="name" placeholder='Your order name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-3' value={user?.email} type="email" name="email" placeholder='Your email'  required readOnly  />
                <br />
                <input className='w-100 mb-3' value={products.name} type="product" name="Product" placeholder='Your order name' required  readOnly/>
                <br />
                <input className='w-100 mb-3' type="address" name="address" placeholder='Your Address'  required  />
                <br />
                <input className='w-100 mb-3' type="phone" name="phone" placeholder='Your Phone Number' required   />
                <br />
                <input className='btn btn-dark ms-5' type="submit" value="Please Order" />
            </form>
           
        </div>
    );
};

export default CheckOut;