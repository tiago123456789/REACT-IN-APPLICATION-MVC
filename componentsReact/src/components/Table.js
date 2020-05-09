import React from "react";

export default (props) => {
    const titles = props.titles;
    return (
        <table className="table table-striped table-hover table-bordered text-center">
            <thead>
                <tr>
                    {titles.map(title => (<th>{title}</th>))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    )
}