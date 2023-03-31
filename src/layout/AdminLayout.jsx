import React from 'react';
import {Outlet} from "react-router-dom";
import MyAdminNavBar from "../components/Navbar/Navbar";

const AdminLayout = () => {
    return (
        <div>
            <MyAdminNavBar />
            <Outlet />
        </div>
    );
};

export default AdminLayout;