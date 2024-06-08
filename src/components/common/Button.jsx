import React from "react";
import "../../css/button.css";

const Button = ({
    className = "",
    bgColor = "#0165fc",
    fontSize = 20,
    padding = "5px 30px",
    text,
    type = "submit",
}) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            style={{ padding, backgroundColor: bgColor, fontSize }}
        >
            {text}
        </button>
    );
};

export default Button;
