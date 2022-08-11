import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a  product</h2>
            <form
            className='d-flex flex-column'
             onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder="Name" {...register("name")} />
      <textarea className='mb-2' placeholder="description" {...register("description")} />
      <input className='mb-2' placeholder="Price" type="number" {...register("price")} />
      <input className='mb-2' placeholder="quantity" type="number" {...register("quantity")} />
      <input className='mb-2' placeholder="Supplier Name" {...register("supplier name")} />
      <input className='mb-2' placeholder="Photo URL" {...register("img")} />
      <input className='mx-auto w-50 ' type="submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItem;