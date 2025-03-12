import React, { useState } from "react";
import Button from "./Button";

export const EmailCapture = ({ placeholder = "Enter your email", actionLink , buttonText }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }
        console.log("Submitting email:", email);
    };

    return (
        <form className="email_capture_wrap" onSubmit={handleSubmit}>
            <div className="field_wrap">
                <input
                    type="email"
                    placeholder={placeholder}
                    className="input_field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <Button type="submit" className="btn_primary">{buttonText}</Button>
        </form>
    );
};
