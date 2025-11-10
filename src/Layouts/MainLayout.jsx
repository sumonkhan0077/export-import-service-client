import React from 'react';
import Home from '../Pages/Home.jsx/Home';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Navbar/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;