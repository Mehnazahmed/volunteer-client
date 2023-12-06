import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,userLoading}=useAuth();
    
    const location =useLocation();
    if(userLoading){
        return <p>Loading....</p>
    }
    if(user){
        return children;
    }
    return (
       <Navigate to='/signup' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;