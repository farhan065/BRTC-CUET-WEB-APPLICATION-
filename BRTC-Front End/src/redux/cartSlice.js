import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // List of cart items
  totalQuantity: 0, // Total items in cart
  totalPrice: 0, // Total cart price
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        state.totalQuantity = Math.max(0, state.totalQuantity - existingItem.quantity);
        state.totalPrice = Math.max(0, state.totalPrice - existingItem.price * existingItem.quantity);
        state.items = state.items.filter((item) => item._id !== id);
      }

      if (state.totalQuantity < 0) {
        state.totalQuantity = 0;
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
        } else {
          state.totalQuantity = Math.max(0, state.totalQuantity - 1);
          state.totalPrice = Math.max(0, state.totalPrice - existingItem.price);
          state.items = state.items.filter((item) => item._id !== id);
        }
      }

      if (state.totalQuantity < 0) {
        state.totalQuantity = 0;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



  