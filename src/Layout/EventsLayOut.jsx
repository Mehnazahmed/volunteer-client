import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/Shared/Header/AdminHeader';

const EventsLayOut = () => {
    return (
        <Box maxWidth='xl'>
            <AdminHeader/>
            <Outlet/>
            
        </Box>
    );
};

export default EventsLayOut;