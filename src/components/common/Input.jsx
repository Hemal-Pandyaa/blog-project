import React from 'react';
import "../../css/input.css";

const Input = ({type = "text", placeholder = "Enter Something.....", bgColor="", className="", fontSize="20px", width}) => {
    return (
        <input type={type} placeholder={placeholder} className={`input ${className}`} style={{backgroundColor: bgColor, fontSize, width}} />
    );
}

export default Input;
