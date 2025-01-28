import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const searchData = new URLSearchParams(window.location.search);
    const message = searchData.get("message") || "Something went wrong";

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/save");
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={headerStyle}>Transaction Failed</h1>
                <p style={messageStyle}>
                    <span style={{ fontWeight: "bold" }}>Reason:</span> {message}
                </p>
                <button onClick={handleGoBack} style={buttonStyle}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Error;

// ✅ Styles
const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #f5f5f5, #e3e3e3)",
    fontFamily: "'Roboto', sans-serif",
};

const cardStyle = {
    background: "#fff",
    padding: "30px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
};

const headerStyle = {
    fontSize: "2rem",
    color: "#e74c3c",
    fontWeight: "bold",
    marginBottom: "20px",
};

const messageStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
};

const buttonStyle = {
    backgroundColor: "#fbbf00",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
};

buttonStyle[":hover"] = {
    backgroundColor: "#d39e00",
};
