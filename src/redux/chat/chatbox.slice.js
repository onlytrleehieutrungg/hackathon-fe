import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const chatboxSlice = createSlice({
  name: "chatbox",
  initialState: {
    message: [],
    isCalling: true,
  },
  reducers: {
    logMessage: (state, action) => {
      state.message = state.message.push(action.payload);
    },
    isFetching: (state) => {
      state.isFetching = true;
    },
    isFetched: (state) => {
      state.isCalling = false;
    },
  },
});

export const { logMessage, isFetching, isFetched } = chatboxSlice.actions;
export default chatboxSlice.reducer;
