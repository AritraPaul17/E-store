import {
  createBrowserRouter,
} from "react-router-dom";

import App from '../App'
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import MyAccount from "../pages/MyAccount";
import MyCart from "../pages/MyCart";
import MyOrders from "../pages/MyOrders";
import Admin from "../pages/Admin";
import Products from "../pages/Products";
import IndProduct from "../pages/IndProduct";
import ProfileHome from "../pages/ProfileHome";


const router = createBrowserRouter([
   {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/signup",
        element: <SignUp/>,
      },
      {
        path:"/profile",
        element: <Profile/>,
        children:[
          {
            path:"",
            element:<ProfileHome/>
          },
          {
            path:"myaccount",
            element:<MyAccount/>
          },
          {
            path:"mycart",
            element:<MyCart/>
          },
        ]
      },
      {
        path:"/admin",
        element:<Admin/>
      },
      {
        path:"/products/:category",
        element:<Products/>,
      },
      {
        path:"/products/category/:id",
        element:<IndProduct/>,
      }
    ]
   }
  ]);

  export default router;