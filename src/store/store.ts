import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import LoginApi from "./api/LoginApi";
import HomeApi from "./api/HomeApi";
// import { ApiErrorHandle } from "./middlewares/ApiErrorHandle.ts";

const middlewares = [
    // ApiErrorHandle,
  LoginApi.middleware,
  HomeApi.middleware,
];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
