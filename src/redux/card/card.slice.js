import { createSlice } from "@reduxjs/toolkit";
import ls from "local-storage";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    userId: "",
    isPaid: false,
    productList: []
  },
  reducers: {
    createCard: (state, action) => {
      state.userId = action.payload.userId;
      state.isPaid = false;
      state.productList = state.productList.push(action.payload.product)
    },
    cardPayment: (state, action) => {
      state.userId = action.payload.userId;
      state.isPaid = true;
      state.productList = state.productList;
    }
  },
});

export const { createCard, cardPayment } = cardSlice.actions;
export default cardSlice.reducer;
