import React from "react";
import HeaderNavbar from "../../component/HeaderNavbar/HeaderNavbar";
import classes from "./MainPage.module.scss";
const MainPage = () => {
    return (
        <div className={classes.main_page}>
            <HeaderNavbar />
        </div>
    );
};

export default MainPage;
