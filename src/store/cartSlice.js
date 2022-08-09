import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 0,
      quantity: 0,
      name: "Pancakes",
      price: 20,
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 1,
      quantity: 0,
      name: "Pizza",
      price: 60,
      image:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      quantity: 0,
      name: "Fries",
      price: 30,
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      quantity: 0,
      name: "Burger",
      price: 50,
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      quantity: 0,
      name: "Pasta",
      price: 60,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      quantity: 0,
      name: "Brownwie",
      price: 50,
      image:
        "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cart = action.payload;
    },
    updateItem: (state, action) => {
      state.cart[action.payload.id].quantity = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
