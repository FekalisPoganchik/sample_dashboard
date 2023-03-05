import React from "react";
import Bell from "../../resources/image/icon/Bell";
import Chat from "../../resources/image/icon/Chat";
import Exit from "../../resources/image/icon/Exit";
import Lupa from "../../resources/image/icon/Lupa";
import classes from "./HeaderNavbar.module.scss";
const HeaderNavbar = () => {
    return (
        <div className={classes.header}>
            <div className={classes.input}>
                <label>
                    <Lupa />
                    <input name="search" type="text" />
                </label>
            </div>
            <div className={classes.wrapper_icon}>
                <Chat />
                <Bell />
                <div className={classes.avatar}>avatar</div>
                <Exit />
            </div>
        </div>
    );
};

export default HeaderNavbar;
