import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url =`https://books-stock-running-server.vercel.app/product/`;
        fetch(url,{
            method: 'POST',
        headers: {
            'content-type': 'application/json'   
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>this is add service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
      <input className='mb-2' placeholder='PhotoURL' type="text" {...register("img")} />
      <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
      <input type="submit" value="Add Service" />
    </form>
        </div>
    );
};

export default AddItem;