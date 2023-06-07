import AuthReducer from "./AuthSlice";
import HomeApi from "./api/HomeApi";
import LoginApi from "./api/LoginApi";

const reducers = {
  Auth: AuthReducer,

  // api reducers
  [LoginApi.reducerPath]: LoginApi.reducer,
  [HomeApi.reducerPath]: HomeApi.reducer,
 
};

export default reducers;
