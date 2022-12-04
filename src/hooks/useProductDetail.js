import { useEffect, useState } from "react";

const useProductDetail = (productId) =>{   
     const [products, setProducts] = useState({});

useEffect(() =>{
    const url = `https://books-stock-running-server.vercel.app/product/${productId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data));
},[productId])
return[products]
}

export default useProductDetail;
