import { Box } from '@mui/material';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';

const Layout = () => {
    const location = useLocation();
    const noHeader = location.pathname.includes('/signup') || location.pathname.includes('/login') ;
    return (
        <Box maxWidth='xl'>
            
            {noHeader ||   <Header/>  }
            <Outlet/>
            
        </Box>
    );
};

export default Layout;