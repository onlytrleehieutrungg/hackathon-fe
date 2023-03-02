import {createSlice} from "@reduxjs/toolkit";
import ls from "local-storage";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    userId: "",
    isPaid: false,
    productList: [],
    cart: [],
    total: 0,
  },
  reducers: {
    addToCard: (state, action) => {
      state.productList = action.payload;
      state.isPaid = false;
      state.cart = state.cart.push(action.payload.product);
    },
    createCard: (state, action) => {
      state.userId = action.payload.userId;
      state.isPaid = false;
      state.productList = state.productList.push(action.payload.product);
    },
    addToCart: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity++;
        product.totalPrice = action.payload.price * product.quantity;
        state.total += product.price;
      } else {
        state.cart.push({...action.payload, quantity: 1});
        state.total += action.payload.price;
      }
    },
    cardPayment: (state, action) => {
      state.userId = action.payload.userId;
      state.isPaid = true;
      state.cart = state.productList;
    },
  },
});

export const {addToCard, createCard, cardPayment, addToCart} =
  cardSlice.actions;
export default cardSlice.reducer;
