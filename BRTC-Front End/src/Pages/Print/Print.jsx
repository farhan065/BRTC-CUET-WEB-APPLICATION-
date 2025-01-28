import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Print = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Clear the cart when this page renders
        dispatch(clearCart());
    }, [dispatch]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1>Bureau of Research, Testing and Consultation</h1>
            </header>

            <div style={contentStyle}>
                <h2 style={pageTitleStyle}>Order Details</h2>

                {/* Customer and Contact Information */}
                <div style={infoContainerStyle}>
                    <div style={infoBoxStyle}>
                        <h3 style={infoHeaderStyle}>Customer Information</h3>
                        <p><strong>Name:</strong> Miftahul Islam</p>
                        <p><strong>Phone:</strong> 01939677373</p>
                        <p><strong>Email:</strong> anmislm2000@gmail.com</p>
                    </div>
                    <div style={infoBoxStyle}>
                        <h3 style={infoHeaderStyle}>Contact Info</h3>
                        <p><strong>Address:</strong> Ground Floor, Council Building, BUET, Dhaka 1000</p>
                        <p><strong>Email:</strong> dirbrtc@brtc.cuet.ac.bd</p>
                        <p><strong>Phone:</strong> +8801728808414</p>
                    </div>
                </div>

                {/* Order Information */}
                <p><strong>Order NO:</strong> BO2501-0009</p>
                <p><strong>BRTC NO:</strong> W-1100-00036/CE/2024-25</p>
                <p><strong>Date:</strong> 1/14/2025 8:49:14 PM</p>

                {/* Table of Items */}
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={tableHeaderStyle}>Test Of</th>
                            <th style={tableHeaderStyle}>Specifications</th>
                            <th style={tableHeaderStyle}>Duration</th>
                            <th style={tableHeaderStyle}>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tableCellStyle}>Absorption FOR Bricks</td>
                            <td style={tableCellStyle}>Bricks test specifications, required sample</td>
                            <td style={tableCellStyle}>14 Days</td>
                            <td style={tableCellStyle}>3,500.00 TAKA</td>
                        </tr>
                    </tbody>
                </table>

                {/* Summary Section */}
                <div style={summaryStyle}>
                    <p><strong>VAT (5%):</strong> 175 TAKA</p>
                    <p><strong>TAX (2%):</strong> 70 TAKA</p>
                    <p style={{ fontSize: "1.4em", fontWeight: "bold" }}>
                        Total Cost: 3,745.00 TAKA
                    </p>
                </div>

                {/* Footer Section */}
                <footer style={footerStyle}>
                    <p><strong>We Receive Payment</strong></p>
                    <p>Bank Info: [Hidden]</p>
                </footer>

                {/* Buttons */}
                <div style={buttonContainerStyle}>
                    <button onClick={handlePrint} style={printButtonStyle}>
                        Print
                    </button>
                    <Link to="/" style={homeButtonStyle}>
                        Go to Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Print;

// ✅ Styles
const containerStyle = {
    fontFamily: "'Roboto', sans-serif",
    background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
    minHeight: "100vh",
    padding: "20px",
};

const headerStyle = {
    background: "#343a40",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const contentStyle = {
    width: "80%",
    margin: "30px auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
};

const pageTitleStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
    borderBottom: "3px solid #fbbf00",
    paddingBottom: "10px",
};

const infoContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
};

const infoBoxStyle = {
    width: "45%",
};

const infoHeaderStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "10px",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
};

const tableHeaderStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    background: "#f8f9fa",
    textAlign: "left",
    fontWeight: "bold",
};

const tableCellStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
};

const summaryStyle = {
    textAlign: "right",
    fontSize: "1.2rem",
    marginTop: "20px",
    color: "#333",
};

const footerStyle = {
    textAlign: "center",
    marginTop: "40px",
    color: "#555",
    fontSize: "0.9rem",
};

const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
};

const printButtonStyle = {
    background: "#007bff",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
};

const homeButtonStyle = {
    textDecoration: "none",
    background: "#28a745",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
    textAlign: "center",
    transition: "background-color 0.3s ease",
};

printButtonStyle[":hover"] = {
    backgroundColor: "#0056b3",
};

homeButtonStyle[":hover"] = {
    backgroundColor: "#218838",
};

