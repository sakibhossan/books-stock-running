
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {signOut} from 'firebase/auth';
import axiosSecret from '../../api/axiosSecret';
import './MyItem.css'
import useOrders from '../../hooks/useOrders';

const MyItem = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [myOders, setMyOders] = useState([]);
    const [orders, setOrders] = useOrders();
   
const deleteUser = (id) => {
        const proceed = window.confirm("Are your sure deliverd this product");
        if (proceed) {
        
          const url = `http://localhost:5000/collectOrder/${id}`;
          fetch(url, {
            method: "DELETE",
          })
    .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const remain =orders?.filter(order =>order._id !== id);
             
              setOrders(remain);
            })
           
        }
    }



    useEffect(() =>{
       
        const getmyOrder = async()=>{
            const email = user?.email;
            const url =`http://localhost:5000/collectOrder?email=${email}`;
       try{
        const {data} = await axiosSecret.get(url);
        setMyOders(data);
       }
       catch(error){
        console.log(error.message);
        if(error.response.status ===403 ||error.response.status ===401){
            signOut(auth);
            navigate('/login');
        }
       }
        }
        getmyOrder();

    },[user])
    return (
        <div className='w-50 mx-auto'>
            <h2>This is your item</h2>
            {
                myOders.map(order =><div key={order._id}>
                    
               <div className='order-delete d-flex'>
               <div>
                 <h2>{order.product}</h2>
                   <p>{order.email}</p>
                 </div>
                 <div className=''>
                    <button 
                    onClick={()=>{deleteUser(order._id)}}
                    className='btn-style mt-4' >Deliverd</button>
                 </div>
               </div>

                </div>)
                
            }
            
        </div>
    );
};

export default MyItem;