import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Layout;