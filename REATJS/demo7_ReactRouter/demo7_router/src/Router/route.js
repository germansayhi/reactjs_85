import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import About from "../Page/About";
import AccountManagement from "../Page/AccountManagement";
import DepartmentManagement from "../Page/DepartmentManagement";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import AccountDetail from "../Page/AccountDetail";

export let route = (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accountManagement" element={<AccountManagement />} />
        <Route path="/departmentManagement" element={<DepartmentManagement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/accountDetail/:id_param" element={<AccountDetail />} />
    </Routes>
);
