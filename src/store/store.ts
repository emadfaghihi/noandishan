import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

// const middlewares = [
//     // ApiErrorHandle,
// ];

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(...middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
