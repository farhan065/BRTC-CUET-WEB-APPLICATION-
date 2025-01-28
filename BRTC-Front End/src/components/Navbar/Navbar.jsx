import { useState } from 'react';
import './navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userRedux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section */}
        <div className="navbar-left">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="Logo" className="logo" />
          </Link>
          <Link to="/" className="ltitle">
            <span className="navbar-title">CUET BRTC</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          {user ? (
            <>
              <div className="navbar-link">
                <Link to="/profile" className="navbar-link">{user.data.userName}</Link>
              </div>
              <div
                className="navbar-link logout-btn"
                onClick={handleLogout}
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link">Login</Link>
              <Link to="/register" className="navbar-link">Register</Link>
            </>
          )}
          {/* Cart Section */}
          <Link to="/cart" className="cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartIcon className="cart-icon" />
            </Badge>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {user ? (
          <>
            <Link to="/profile" className="navbar-link">{user.data.userName}</Link>
            <div className="navbar-link logout-btn" onClick={handleLogout}>Logout</div>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
