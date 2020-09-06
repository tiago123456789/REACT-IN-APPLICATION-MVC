import React from "react";

export default (props) => (
    <div className="alert alert-danger">
        <strong>Error!</strong> {props.message}
    </div>
);
