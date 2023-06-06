import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";

export interface CounterState {
  token: string |null;
}

const initialState: CounterState = {
  token: JSON.parse(localStorage.getItem("token") as string),
};

export const AuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.removeItem("token");
      window.location.replace("/login");
      state.token = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
