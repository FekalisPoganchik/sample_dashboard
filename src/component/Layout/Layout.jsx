import React from "react";
import { Outlet } from "react-router";
// import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import SideNavbar from "../SideNavbar/SideNavbar";
// import classes from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <SideNavbar />
            <div style={{ width: "100%" }}>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
