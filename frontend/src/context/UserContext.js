import React, { createContext, useReducer } from 'react'
import { getuserroute } from '../utils/apis';

export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const getuserDetails =async ()=>{
        const authToken = localStorage.getItem('JWT');
        const url = `${getuserroute}`;
        const response = await fetch(url,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                authToken:authToken
            }
        })
        const res = await response.json();
        return res;
    }

    // usereducer for storing user details
    const initial_state = {}

    const userReducer = (state,action)=>{
      switch(action.type){
        case "ADD_USER":
          return {
            ...action.payload
          }
        case "REMOVE_USER":
          return {
            
          }
          default:
            return state
      }
    }

    const [state,dispatch] = useReducer(userReducer,initial_state)

  return (
    <UserContext.Provider value={{getuserDetails, state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  )
}

