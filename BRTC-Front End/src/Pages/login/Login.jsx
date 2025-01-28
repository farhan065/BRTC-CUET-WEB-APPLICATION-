import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isFetching, error } = useSelector((state) => state.user); // Accessing Redux state
    console.log(error)

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = (e) => {
        e.preventDefault(); // Prevent form default behavior
        login(dispatch, credentials, navigate); // Pass credentials directly
    };

    return (
        <div style={{ display: "flex", height: "100vh", margin: 0, fontFamily: "Arial, sans-serif" }}>
            {/* Left Section */}
            <div
                style={{
                    flex: 1,
                    background: "linear-gradient(to bottom, #4b4b4b, #c7c7c7)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                }}
            >
                BRTC
            </div>

            {/* Right Section */}
            <div
                style={{
                    flex: 2,
                    background: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        padding: "20px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <h1 style={{ fontSize: "1.8rem", color: "#000", marginBottom: "20px" }}>
                        <span style={{ color: "#fbbf00" }}>Login</span> to your Account
                    </h1>
                    <p style={{ color: "#888", marginBottom: "20px" }}>
                        Please{" "}
                        <Link to="/register" style={{ color: "red", textDecoration: "none" }}>
                            Register
                        </Link>{" "}
                        if you do not have an account
                    </p>
                    <form onSubmit={handleClick}>
                        <input
                            type="email"
                            placeholder="Your email"
                            required
                            id="email"
                            value={credentials.email}
                            style={{
                                width: "100%",
                                padding: "10px",
                                margin: "10px 0",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                fontSize: "1rem",
                            }}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Your Password"
                            required
                            id="password"
                            value={credentials.password}
                            style={{
                                width: "100%",
                                padding: "10px",
                                margin: "10px 0",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                fontSize: "1rem",
                            }}
                            onChange={handleChange}
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                margin: "10px 0",
                            }}
                        >
                            <label>
                                <input type="checkbox" style={{ marginRight: "5px" }} /> Remember me?
                            </label>
                            <span style={{ color: "#000", cursor: "pointer", fontSize: "0.9rem" }}>
                                Forgot Password?
                            </span>
                        </div>
                        <button
                            type="submit"
                            disabled={isFetching} // Disable button when fetching
                            style={{
                                width: "100%",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "1rem",
                                cursor: isFetching ? "not-allowed" : "pointer",
                                backgroundColor: isFetching ? "gray" : "#fbbf00",
                                color: "#000",
                                marginTop: "20px",
                            }}
                        >
                            {isFetching ? "Logging in..." : "Login"}
                        </button>
                    </form>
                    {error && (
                        <p style={{ color: "red", marginTop: "10px" }}>
                            Invalid credentials. Please try again.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
