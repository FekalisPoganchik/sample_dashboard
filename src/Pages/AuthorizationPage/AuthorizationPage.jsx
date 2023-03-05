import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import classes from "./AuthorizationPage.module.scss";
import logo from "../../resources/image/logo.png";
import MyButton from "../../component/MyButton/MyButton";
import MyInputAuth from "./component/InputAuth/MyInputAuth";
import axios from "axios";
import { useEffect } from "react";

const AuthorizationModal = () => {
    const http = axios.create({
        baseURL: "http://localhost:8000",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
        withCredentials: true,
        SameSite: "none",
        Secure: true,
    });

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const csrf = await http.get("/sanctum/csrf-cookie");
        console.log("csrf = ", csrf);

        const login = await http.post("/api/login", {
            email: "admin@example.com",
            password: "secret",
        });

        console.log("login", login);

        const user = await http.get("/api/user");

        console.log("user", user);

        const logout = await http.post("/api/logout");

        console.log("logout", logout);

        console.log("login", login);

        console.log("user", user);
    }
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                terms: false,
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Неправильный email адрес")
                    .required("Обязательное поле!"),
                password: Yup.string().required("Обязательное поле!"),
            })}
            onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className={classes.form}>
                <div className={classes.content}>
                    <div className={classes.left}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={classes.right}>
                        <div className={classes.title}>
                            <h2>Вход в систему</h2>
                            <Field id="currency" name="currency" as="select">
                                <option value="Rus">Русский</option>
                                <option value="Eng">English</option>
                            </Field>
                        </div>
                        <div className={classes.registration}>
                            Еще не зарегистрированы? <a href="#">Регистрация</a>
                        </div>
                        <MyInputAuth label={"E-mail"} name={"email"} />
                        <MyInputAuth label={"Пароль"} name={"password"} />
                        <div className={classes.wrap_footer}>
                            <label className="checkbox">
                                <Field name="terms" type="checkbox" />
                                Запомнить меня
                            </label>
                            <a href="#">Восстановление пароля</a>
                        </div>
                        <MyButton type="submit">ВОЙТИ</MyButton>
                        <div className={classes.another}>
                            <span>или войти через</span>
                        </div>
                        <MyButton
                            style={{ backgroundColor: "#fff", color: "black" }}
                        >
                            КОРПОРАТИВНУЮ УЧЕТНУЮ ЗАПИСЬ
                        </MyButton>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default AuthorizationModal;
