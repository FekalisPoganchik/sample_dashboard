import React from "react";
import { NavLink } from "react-router-dom";
import ComplexManagement from "../../resources/image/icon/ComplexManagement";
import Document from "../../resources/image/icon/Document";
import EconomicActivity from "../../resources/image/icon/EconomicActivity";
import EducationalActivities from "../../resources/image/icon/EducationalActivities";
import Gaika from "../../resources/image/icon/Gaika";
import Kpi from "../../resources/image/icon/Kpi";
import Main from "../../resources/image/icon/Main";
import PersonalManagement from "../../resources/image/icon/PersonalManagement";
import ProgressTyuiu from "../../resources/image/icon/ProgressTyuiu";
import ScientificActivity from "../../resources/image/icon/ScientificActivity";
import LogoTyuiuWhite from "../../resources/image/LogoTyuiuWhite";
import classes from "./SideNavbar.module.scss";

const SideNavbar = () => {
    const setActive = ({ isActive }) => (isActive ? classes.active_link : "");
    const alignment = { alignItems: "start" };
    const settings = {
        position: "absolute",
        bottom: 0,
        color: "#585858",
        marginBottom: "18px",
    };

    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <LogoTyuiuWhite />
            </div>
            <div className={classes.links}>
                <NavLink to="/" className={setActive}>
                    <Main />
                    <span>Главная</span>
                </NavLink>
                <NavLink to="kpi" className={setActive}>
                    <Kpi />
                    <span>KPI</span>
                </NavLink>
                <NavLink to="progress_tyuiu" className={setActive}>
                    <ProgressTyuiu />
                    <span>
                        Программа развития
                        <br />
                        ТИУ
                    </span>
                </NavLink>
                <NavLink to="educational_activities" className={setActive}>
                    <EducationalActivities />
                    <span>
                        Образовательная
                        <br />
                        деятельность
                    </span>
                </NavLink>
                <NavLink
                    to="scientific_activity"
                    className={setActive}
                    style={alignment}
                >
                    <ScientificActivity />
                    <span>
                        Научно-
                        <br />
                        инновационная
                        <br />
                        деятельность
                    </span>
                </NavLink>
                <NavLink
                    to="economic_activity"
                    className={setActive}
                    style={alignment}
                >
                    <EconomicActivity />
                    <span>
                        Финансово-
                        <br />
                        экономическая
                        <br />
                        деятельность
                    </span>
                </NavLink>
                <NavLink
                    to="complex_management"
                    className={setActive}
                    style={alignment}
                >
                    <ComplexManagement />
                    <span>
                        Управление
                        <br />
                        имущественным
                        <br />
                        комплексом
                    </span>
                </NavLink>
                <NavLink to="personal_management" className={setActive}>
                    <PersonalManagement />
                    <span>Управление кадрами</span>
                </NavLink>
                <NavLink to="document" className={setActive}>
                    <Document />
                    <span>Документы</span>
                </NavLink>
                <NavLink to="settings" className={setActive} style={settings}>
                    <Gaika />
                    <span>Настройки</span>
                </NavLink>
            </div>
        </div>
    );
};

export default SideNavbar;
