import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Application = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        organization: "",
        designation: "",
        description: "",
        contact: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        // Show success message
        setSubmitted(true);

        // Automatically hide success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
        navigate("/save", { state: formData });
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerTitleStyle}>Submit Application</h1>

            <div style={formContainerStyle}>
                <h2 style={sectionTitleStyle}>Client Info</h2>

                {/* Success message */}
                {submitted && (
                    <div style={successMessageStyle}>
                        ✅ The form has been submitted successfully!
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Organization / Department</label>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Enter your organization/department"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Designation</label>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Enter your designation"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter additional details or a brief description"
                            style={textareaStyle}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Contact Address</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <button type="submit" style={submitBtnStyle}>
                        Submit Application
                    </button>
                </form>

              
            </div>
        </div>
    );
};

export default Application;

// ✅ Styling
const containerStyle = {
    padding: "40px",
    fontFamily: "Roboto, sans-serif",
    background: "#f5f7fa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const headerTitleStyle = {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#2c3e50",
    borderBottom: "3px solid #fbbf00",
    paddingBottom: "5px",
    marginBottom: "30px",
};

const formContainerStyle = {
    maxWidth: "600px",
    width: "100%",
    background: "#fff",
    padding: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    textAlign: "left",
};

const sectionTitleStyle = {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
    borderBottom: "2px solid #ddd",
    paddingBottom: "5px",
};

const successMessageStyle = {
    background: "#e3fcef",
    color: "#2c7a4b",
    padding: "15px",
    borderRadius: "5px",
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "1.1rem",
    fontWeight: "bold",
};

const inputGroupStyle = {
    marginBottom: "20px",
};

const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
};

const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
};

const textareaStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    resize: "none",
    height: "100px",
};

const submitBtnStyle = {
    backgroundColor: "#fbbf00",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    width: "100%",
    marginTop: "10px",
};


