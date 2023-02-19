import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import chatboxReducer from "./chat/chatbox.slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    chatbox: chatboxReducer,
  },
});
