import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total VAT and TAX on the total cost
  const vat = cart.totalPrice * 0.05; // 5% VAT
  const tax = cart.totalPrice * 0.02; // 2% TAX
  const totalWithTax = cart.totalPrice + vat + tax;

  return (
    <div style={containerStyle}>
      <h1 style={headerTitleStyle}>Your Cart</h1>

      {cart.items.length === 0 ? (
        <p style={emptyCartStyle}>Your cart is empty!</p>
      ) : (
        <>
          <table style={tableStyle}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={headerCellStyle}>Test Of</th>
                <th style={headerCellStyle}>Specifications</th>
                <th style={headerCellStyle}>Quantity</th>
                <th style={headerCellStyle}>Total Cost</th>
                <th style={headerCellStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item._id}>
                  <td style={cellStyle}>{item.title}</td>
                  <td style={cellStyle}>{item.description}</td>
                  <td style={quantityCellStyle}>
                    <button style={decreaseBtnStyle} onClick={() => dispatch(decreaseQuantity(item._id))}>
                      -
                    </button>
                    {item.quantity}
                    <button style={increaseBtnStyle} onClick={() => dispatch(increaseQuantity(item._id))}>
                      +
                    </button>
                  </td>
                  <td style={costCellStyle}>{(item.price * item.quantity).toFixed(2)} TAKA</td>
                  <td style={actionCellStyle}>
                    <button style={deleteBtnStyle} onClick={() => dispatch(removeFromCart(item._id))}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Cost Section */}
          <div style={totalCostContainer}>
            <div style={totalRowStyle}>
              <span>Subtotal:</span>
              <span>{cart.totalPrice.toFixed(2)} TAKA</span>
            </div>
            <div style={totalRowStyle}>
              <span>VAT (5%):</span>
              <span>{vat.toFixed(2)} TAKA</span>
            </div>
            <div style={totalRowStyle}>
              <span>TAX (2%):</span>
              <span>{tax.toFixed(2)} TAKA</span>
            </div>
            <hr style={dividerStyle} />
            <div style={totalRowBoldStyle}>
              <span>Grand Total:</span>
              <span>{totalWithTax.toFixed(2)} TAKA</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div style={{ textAlign: "center" }}>
            <Link to="/application">
              <button style={checkoutBtnStyle}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

// ✅ Reusable Styles
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerTitleStyle = {
  fontSize: "2.5rem",
  marginBottom: "30px",
  color: "#2c3e50",
  borderBottom: "3px solid #00c3ff",
  display: "inline-block",
  paddingBottom: "5px",
};

const emptyCartStyle = {
  textAlign: "center",
  fontSize: "1.5rem",
  color: "#888",
  marginTop: "50px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "30px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const tableHeaderStyle = {
  backgroundColor: "#f4f6f9",
  color: "#34495e",
};

const headerCellStyle = {
  textAlign: "left",
  padding: "15px",
  borderBottom: "1px solid #ccc",
  fontWeight: "bold",
};

const cellStyle = {
  padding: "15px",
  borderBottom: "1px solid #eee",
};

const quantityCellStyle = {
  padding: "15px",
  borderBottom: "1px solid #eee",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const decreaseBtnStyle = {
  backgroundColor: "#e74c3c",
  color: "#fff",
  padding: "5px 10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

const increaseBtnStyle = {
  backgroundColor: "#2ecc71",
  color: "#fff",
  padding: "5px 10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

const costCellStyle = {
  padding: "15px",
  borderBottom: "1px solid #eee",
  fontWeight: "bold",
  color: "#2c3e50",
};

const actionCellStyle = {
  textAlign: "center",
  padding: "15px",
  borderBottom: "1px solid #eee",
};

const deleteBtnStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "1.2rem",
  color: "#e74c3c",
};

const totalCostContainer = {
  textAlign: "right",
  fontWeight: "bold",
  fontSize: "1.2rem",
  marginBottom: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "15px",
  borderTop: "2px solid #ccc",
  backgroundColor: "#f8f8f8",
  borderRadius: "8px",
};

const totalRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "300px",
  fontSize: "1rem",
  color: "#555",
};

const totalRowBoldStyle = {
  ...totalRowStyle,
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "#2c3e50",
};

const dividerStyle = {
  border: "0.5px solid #ccc",
  width: "100%",
  margin: "10px 0",
};

const checkoutBtnStyle = {
  backgroundColor: "#00c3ff",
  color: "#fff",
  padding: "15px 30px",
  border: "none",
  borderRadius: "8px",
  fontSize: "1.2rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

