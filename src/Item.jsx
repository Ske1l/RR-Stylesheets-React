import React, { useContext } from "react";
import StyleContext from "./StyleContext";

export default function Item(props) {
    const { itemStyle } = useContext(StyleContext);
    return <div className="item" style={itemStyle}>
        This is an Item
    </div>
}