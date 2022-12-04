import { useEffect, useState } from "react";

 const useProducts = () =>{
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://books-stock-running-server-l8e0rrms9-sakibhossan.vercel.app/product/')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return[products, setProducts];
 }
 export default useProducts;