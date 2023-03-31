import React from "react";
import FormGroupExample from "./components/admin/FormGroupExample";
import {Route, Routes} from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import LoginPage from "./components/admin/LoginPage";
import AdminHomePage from "./components/admin/AdminHomePage";
import UserListPage from "./components/admin/UserListPage";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="" element={<AdminHomePage/>}/>
                <Route path="users" element={<UserListPage/>}/>
                <Route path="registration" element={<FormGroupExample/>}/>
            </Route>
        </Routes>
    )
}

export default App;
