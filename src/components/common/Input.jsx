import React from "react";
import "../../css/input.css";

const Input = (
    {
        type = "text",
        placeholder = "Enter Something.....",
        bgColor = "",
        className = "",
        fontSize = "20px",
        width,
    },
    ref
) => {
    return (
        <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`input ${className}`}
            style={{ backgroundColor: bgColor, fontSize, width }}
        />
    );
};

export default React.forwardRef(Input);
