import './App.css';
import React, { useContext, useEffect } from 'react';
import {
  Outlet
} from 'react-router-dom'

//importing react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { UserContext } from './context/UserContext';

function App() {
  
  const {getuserDetails, dispatch} = useContext(UserContext)

  const setDetails = async () => {
    const userData = await getuserDetails();
    if(userData.success){
      dispatch({type:"ADD_USER",payload:userData.data})
    }
  }

  useEffect(()=>{
    setDetails()
  },[])

  return (
    <>
      <ToastContainer />
      <header><Navigation/></header>
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
