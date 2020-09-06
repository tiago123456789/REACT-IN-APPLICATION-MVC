import React, { Component } from "react";
import ReactDom from "react-dom";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";

const renderLogin = (container, settings) => {
    return ReactDom.render(
        <Login {...settings} />,
        document.querySelector(container)
    );
}

const renderLogout = (container, settings) => {
    return ReactDom.render(
        <Logout {...settings} />,
        document.querySelector(container)
    );
}

export {
    renderLogin, renderLogout
}