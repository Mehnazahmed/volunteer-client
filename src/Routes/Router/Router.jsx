import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import AddEvent from "../../pages/AddEvent/AddEvent";
import AllUsers from "../../pages/AllUsers/AllUsers";


import Events from "../../pages/Events/Events/Events";

import EventsLayOut from "../../Layout/EventsLayOut";
import AdminLayout from "../../Layout/adminLayout";

import AddBlog from "../../pages/Blog/AddBlog/AddBlog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import UserDashboard from "../../pages/UserDashboard/UserDashboard";
import Register from "../../pages/register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Register/>
      },
      
      
    ],
  },
  {
    path:'admin',
    element:<AdminRoute><AdminLayout/></AdminRoute>,
    children:[
      {
        index: true,
        element:<AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path:'users',
        element:<AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path:'addevent',
        element:<AdminRoute><AddEvent/></AdminRoute>
      },
     
     

    ]
  },
  {
    path:'eventsLayout',
    element:<PrivateRoute><EventsLayOut/></PrivateRoute>,
    children:[
      {
        index:true,
        element:<Events/>
      },
      {
        path:'userDashboard',
        element:<UserDashboard/>
      },
      {
        path:'addBlog',
        element:<AddBlog/>
      },
      
    ]
  }
]);
