import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import chatboxReducer from "./chat/chatbox.slice";
import cardReducer from "./card/card.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
    chatbox: chatboxReducer,
  },
});
