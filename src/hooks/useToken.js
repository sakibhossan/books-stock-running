import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(() =>{
   const getuserToken = async()=>{
    
    const email = user?.user?.email;
    if(email){
        const {data} = await axios.post('https://books-stock-running-server.vercel.app/getToken',{email});
    setToken(data.accessToken);
    localStorage.setItem('accessToken',data.accessToken);
    }
   }
   getuserToken();

    },[user]);
    return [token]
}

export default useToken;