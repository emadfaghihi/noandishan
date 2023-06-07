import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../data/AppCreateApi";
import { LoginForm } from "../../pages/login/components/LoginForm";

interface LoginRes{
  token:string
}

const LoginApi = createApi({
  baseQuery,
  reducerPath: "LoginApi",
  endpoints: (build) => ({

    login: build.mutation<LoginRes, { data: LoginForm }>({
      query: ({ data }) => ({
        url: `login`,
        method: "POST",
        body: data,
      }),
    }),
   
  }),
});
export const { useLoginMutation } = LoginApi;
export default LoginApi;
