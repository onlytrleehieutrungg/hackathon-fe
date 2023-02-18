import { createSlice } from "@reduxjs/toolkit";
import ls from "local-storage";
import { LOCAL_TOKEN } from "../../constants/app.constants";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLogin: false,
    token: {},
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLogin = true;
      state.token = action.payload["_tokenResponse"].idToken;
      ls.set(LOCAL_TOKEN, action.payload["_tokenResponse"].idToken);
    },
    logout: (state) => {
      state.user = {};
      state.isLogin = false;
      state.token = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
