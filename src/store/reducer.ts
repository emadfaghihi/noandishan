import AuthReducer from "./AuthSlice";
import LoginApi from "./api/LoginApi";

const reducers = {
  Auth: AuthReducer,

  // api reducers
  [LoginApi.reducerPath]: LoginApi.reducer,
 
};

export default reducers;
