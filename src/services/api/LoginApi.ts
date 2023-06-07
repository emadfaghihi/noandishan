import axios from "axios";
import { LoginForm } from "../../pages/login/components/LoginForm";

interface LoginRes {
  token: string;
}

const LoginApi = (data: LoginForm) =>
  axios.post<{ data: LoginForm }, { data: LoginRes }>(
    "https://reqres.in/api/login",
    data
  );
export default LoginApi;
