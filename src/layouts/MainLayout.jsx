import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="min-h-[calc(100vh-399px)]">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
