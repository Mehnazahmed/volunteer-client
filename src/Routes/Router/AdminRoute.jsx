import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuth } from '../../hooks/useAuth';

const AdminRoute = ({children}) => {
    const {user,userLoading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();
    const location =useLocation();
    if(userLoading || isAdminLoading){
        return <p>Loading....</p>
    }
    if(user && isAdmin){
        return children;
    }
    return (
       <Navigate to='/' state={{from:location}}></Navigate>
    );
};

export default AdminRoute;