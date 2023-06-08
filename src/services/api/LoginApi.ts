import axios from "axios";
import { LoginForm } from "../../pages/login/components/LoginForm";

interface LoginRes {
  token: string;
}

const LoginApi = async (body: LoginForm) => {
  const { data } = await axios.post<{ body: LoginForm }, { data: LoginRes }>(
    "https://reqres.in/api/login",
    body
  );
  return data;
};
export default LoginApi;
