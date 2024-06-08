import React from "react";
import "../../css/button.css";

const Button = ({
    children,
    className = "",
    bgColor = "#A9A9A9",
    fontSize = 20,
    padding = "5px 30px",
    type = "submit",
    borderColor = "black"
}) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            style={{ padding, backgroundColor: bgColor, fontSize, borderColor }}
        >
            {children}
        </button>
    );
};

export default Button;
