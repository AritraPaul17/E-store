import React, { createContext, useEffect, useState } from 'react'

export const OrderContext = createContext();

export const OrderProvider = (props)=>{
    const [orders,setOrders] = useState([]);
    const [message,setMessage] = useState("")
    const getOrders = async()=>{
        const url = `http://localhost:5555/api/auth/getOrders`
        const res = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                authToken: localStorage.getItem('JWT')
              }
        });
        const response = await res.json();
        // console.log(response.data);
        if(response.data.length===0){
            setMessage(response.message);
            return;
        }
        setOrders(response.data[0].products);        
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <OrderContext.Provider value={{orders,message}}>
            {props.children}
        </OrderContext.Provider>
    )
}
