import React from "react";

export default function Container(props) {
    return <div className="container">
        <div className="container-children">
            {props.children}
        </div>
    </div>
}