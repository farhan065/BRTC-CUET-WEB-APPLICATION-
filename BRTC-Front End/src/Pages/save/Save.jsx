import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const Save = () => {
    const location = useLocation();
    const formData = location.state || {};
    const cart = useSelector((state) => state.cart);
    const [amount, setAmount] = useState(cart.totalPrice);
    const [orderId, setOrderId] = useState(1);
    const user = useSelector((state) => state.user.currentUser);

    const pay = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/bkash/payment/create",
                { amount,userId: user._id, orderId },
                { withCredentials: true }
            );
            if (data && data.bkashURL) {
                window.location.href = data.bkashURL;
            }
        } catch (error) {
            console.error("Error during payment creation:", error.response?.data || error.message);
        }
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Order Summary</h1>

            {/* Customer Information */}
            <div style={infoContainerStyle}>
                <h2 style={sectionHeaderStyle}>Customer Information</h2>
                <p><strong>Full Name:</strong> {formData.fullname || "Not Provided"}</p>
                <p><strong>Organization/Department:</strong> {formData.organization || "Not Provided"}</p>
                <p><strong>Designation:</strong> {formData.designation || "Not Provided"}</p>
                <p><strong>Description:</strong> {formData.description || "Not Provided"}</p>
                <p><strong>Contact:</strong> {formData.contact || "Not Provided"}</p>
            </div>

            {/* Cart Details */}
            <div style={cartContainerStyle}>
                <h2 style={sectionHeaderStyle}>Order Details</h2>
                <table style={cartTableStyle}>
                    <thead>
                        <tr style={tableHeaderStyle}>
                            <th style={cellStyle}>Item</th>
                            <th style={cellStyle}>Quantity</th>
                            <th style={cellStyle}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.map((item) => (
                            <tr key={item._id}>
                                <td style={cellStyle}>{item.title}</td>
                                <td style={cellStyle}>{item.quantity}</td>
                                <td style={cellStyle}>{(item.price * item.quantity).toFixed(2)} TAKA</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={totalCostStyle}>
                    <p><strong>Subtotal:</strong> {cart.totalPrice.toFixed(2)} TAKA</p>
                    <p><strong>VAT (5%):</strong> {(cart.totalPrice * 0.05).toFixed(2)} TAKA</p>
                    <p><strong>Total:</strong> {(cart.totalPrice * 1.05).toFixed(2)} TAKA</p>
                </div>
            </div>

            {/* Buttons */}
            <div style={buttonContainerStyle}>
    <button onClick={pay} style={payButtonStyle}>Pay with bKash</button>
    <Link to="/cart" style={backLinkStyle}>Back to Cart</Link>
</div>
        </div>
    );
};

export default Save;

// ✅ Styling
const containerStyle = {
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    background: "linear-gradient(to bottom, #f9f9f9, #ffffff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const headerStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "30px",
    textTransform: "uppercase",
    borderBottom: "4px solid #fbbf00",
    paddingBottom: "10px",
};

const infoContainerStyle = {
    width: "100%",
    maxWidth: "800px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
};

const sectionHeaderStyle = {
    fontSize: "1.8rem",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "15px",
    textDecoration: "underline",
};

const cartContainerStyle = {
    width: "100%",
    maxWidth: "800px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
};

const cartTableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
};

const tableHeaderStyle = {
    background: "#f4f6f9",
    fontWeight: "bold",
    color: "#34495e",
};

const cellStyle = {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
    fontSize: "1rem",
};

const totalCostStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop: "20px",
    textAlign: "right",
    lineHeight: "1.8",
    color: "#2c3e50",
};

const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
};

const payButtonStyle = {
    background: "#fbbf00",
    color: "#fff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "background 0.3s ease",
};

payButtonStyle[':hover'] = {
    background: "#ffae00",
};

const backLinkStyle = {
    display: "inline-block", // Makes it behave like a button
    textDecoration: "none", // Removes underline
    backgroundColor: "#e0e0e0", // Light gray background
    color: "#333", // Dark text for contrast
    padding: "12px 20px", // Padding for a button-like appearance
    border: "1px solid #ccc", // Subtle border for definition
    borderRadius: "8px", // Rounded corners
    fontWeight: "bold", // Bold text for emphasis
    fontSize: "1rem", // Readable font size
    cursor: "pointer", // Pointer cursor for interaction
    transition: "all 0.3s ease", // Smooth hover effect
};

backLinkStyle[":hover"] = {
    backgroundColor: "#d6d6d6", // Slightly darker gray on hover
    color: "#000", // Darker text on hover
    transform: "scale(1.05)", // Slight enlargement on hover
    borderColor: "#aaa", // Darker border for hover effect
};

