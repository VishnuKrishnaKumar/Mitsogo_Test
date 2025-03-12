import React from "react";

const Button = ({
    type = "button", 
    href = "#", 
    onClick = () => { }, 
    className = "",
    children, 
}) => {

    if (type === "link") {
        return (
            <a href={href} className={`btn ${className} text_xxxxs`}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={`btn ${className} text_xxxxs`}>
            {children}
        </button>
    );
};

export default Button;
