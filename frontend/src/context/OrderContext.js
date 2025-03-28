import React, { createContext, useEffect, useState } from 'react'
import { getordersroute } from '../utils/apis';

export const OrderContext = createContext();

export const OrderProvider = (props)=>{
    const [orders,setOrders] = useState([]);
    const [message,setMessage] = useState("")
    const getOrders = async()=>{
        const url = `${getordersroute}`
        const res = await fetch(url,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                authToken: localStorage.getItem('JWT')
              }
        });
        const response = await res.json();
        console.log(response);
        if(response.data.length===0){
            setMessage(response.message);
            return;
        }
        else {
            console.log(response.data);
            
            setOrders(response.data[0].products);
        }        
    }

    useEffect(() => {
        if(localStorage.getItem('JWT'))
            getOrders();
    }, [])

    return (
        <OrderContext.Provider value={{orders,message}}>
            {props.children}
        </OrderContext.Provider>
    )
}
