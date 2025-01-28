import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [credentials, setCredentials] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const navigate = useNavigate(); // Initialize navigate
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if password and confirmPassword match
        if (credentials.password !== credentials.confirmPassword) {
            setError("Password and Confirm Password do not match!");
            return;
        }

        setError(null); // Clear any previous error

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                userName: credentials.userName,
                email: credentials.email,
                phone: credentials.phone,
                password: credentials.password,
            });

            if (response.status === 200) {
                alert("Registration successful!");
                setCredentials({
                    userName: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                });
                console.log("Navigating to login page...");
                navigate('/login');

            }
        } catch (err) {
            setError(err.response?.data?.message || "Failed to connect to the server.");
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', margin: 0, fontFamily: 'Arial, sans-serif' }}>
            {/* Left Section */}
            <div style={{ flex: 1, background: 'linear-gradient(to bottom, #4b4b4b, #c7c7c7)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
                BRTC
            </div>

            {/* Right Section */}
            <div style={{ flex: 2, background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '100%', maxWidth: '400px', padding: '20px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <h1 style={{ fontSize: '1.8rem', color: '#000', marginBottom: '20px' }}>
                        <span style={{ color: '#fbbf00' }}>Register</span> your Account
                    </h1>
                    {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            id="userName"
                            required
                            value={credentials.userName}
                            style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem' }}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            required
                            value={credentials.email}
                            style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem' }}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            id="phone"
                            required
                            value={credentials.phone}
                            style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem' }}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            required
                            value={credentials.password}
                            style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem' }}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            id="confirmPassword"
                            required
                            value={credentials.confirmPassword}
                            style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem' }}
                            onChange={handleChange}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <button
                                type="submit"
                                style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#fbbf00', color: '#000' }}
                            >
                                Register
                            </button>
                            <Link to="/">
                                <button
                                    type="button"
                                    style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#333', color: '#fff' }}
                                >
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

