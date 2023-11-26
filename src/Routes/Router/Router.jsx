import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import AdminLayout from "../../Layout/adminLayout";
import AddEvent from "../../pages/AddEvent/AddEvent";
import AllUsers from "../../pages/AllUsers/AllUsers";
import Events from "../../pages/Events/Events";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/register/Register";

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
      }
    ],
  },
  {
    path:'/admin',
    element:<AdminLayout/>,
    children:[
      {
        path:'admin/users',
        element:<AllUsers/>
      },
      {
        path:'admin/addevent',
        element:<AddEvent/>
      },
      {
        path:'admin/events',
        element:<Events/>
      },

    ]
  }
]);
