import React from "react";
import ReactDom from "react-dom";
import Table from "./components/Table";

const renderAlert = (container, settings) => {
    return ReactDom.render(
        (<div className="alert alert-danger"><p>Alert render success</p></div>), 
        document.querySelector(container)
    );
}

const renderTable = (container, settings) => {
    return ReactDom.render(
        <Table titles={["Id", "Name", "Email"]} />, 
        document.querySelector(container)
    );
}

export {
    renderAlert, renderTable
}