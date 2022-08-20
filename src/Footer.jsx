import React, { useContext } from "react";
import StyleContext from "./StyleContext";

export default function Footer() {
    const { footerStyle } = useContext(StyleContext);
    return <div className="footer" style={footerStyle}>
        This is a footer
    </div>
}