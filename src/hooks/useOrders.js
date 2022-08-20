import { useEffect } from "react";
import { useState } from "react"

const useOrders =() =>{
    const[orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/collectOrder')
        .then(res => res.json())
        .then(data =>setOrders(data));

    },[]);
    return [orders, setOrders]
} 
export default useOrders;