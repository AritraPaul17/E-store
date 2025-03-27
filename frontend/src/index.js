import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import router from './routes/index.js';
import { OrderProvider } from './context/OrderContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <OrderProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </OrderProvider>
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
