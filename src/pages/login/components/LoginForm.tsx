import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import AppTextField from "../../../components/shared/AppTextField";
import AppCheckbox from "../../../components/shared/AppCheckbox";
import AppButton from "../../../components/shared/AppButton";
import { FC, useCallback, useEffect, useState } from "react";
// import logo from "src/assets/image/logo.png";
import logo from "../../../assets/image/logo.png";
import googel from "../../../assets/svg/Group.svg";
import { HandelInputValue } from "../../../helpers/tools";
import { useLoginMutation } from "../../../store/api/LoginApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { login } from "../../../store/AuthSlice";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {}

const PasswordLableComponent = ({ onCLick }: any) => (
  <div className="flex justify-between ">
    <label
      className="block  font-bold mb-2 text-sm font-normal"
      htmlFor="password"
    >
      کلمه عبور
    </label>
    <a
      onClick={(e) => {
        e.preventDefault();
        console.log(onCLick);
        onCLick();
      }}
      className="decoration-dashed underline  mb-2 text-sm font-normal cursor-pointer"
    >
      رمز عبور خود را فراموش کرم
    </a>
  </div>
);
export interface LoginForm {
  password: string;
  email: string;
}
const LoginForm: FC<LoginFormProps> = () => {
  // ANCHOR hook
  const dispatch = useAppDispatch();
  const navigete = useNavigate();
  const token = useAppSelector((state: RootState) => state.Auth.token);

  // ANCHOR usestate
  const [FormValue, setFormValue] = useState<LoginForm>({} as LoginForm);

  // ANCHOR API
  const [submitLogin] = useLoginMutation();

  // ANCHOR EFECT
  useEffect(() => {
    if (token) navigete("/home");
  }, [token]);

  // ANCHOR handeler
  const handleChange = useCallback((e: any) => {
    HandelInputValue(e, setFormValue);

    console.log(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    console.log("object", FormValue);
    submitLogin({ data: FormValue }).then(async (res: any) => {
      if (res.data) dispatch(login(res.data.token));
    });
  }, [FormValue]);

  return (
    <div>
      <div className="title flex py-5">
        <div className="logo">
          <img className="h-16" src={logo}></img>
        </div>
        <div className="lable px-5">
          <h1 className="text-xl font-medium">ورود به حساب کاربری</h1>
          <p className="block mb-2 font-light text-base">شرکت توسعه و پخش</p>
        </div>
      </div>

      <>
        <AppTextField
          icon={<UserIcon className="h-6 w-6 text-slate-700 " />}
          label="نام کاربری"
          placeholder="ایمیل خود را وارد کنید"
          id="user-name"
          type="email"
          value={FormValue["email"]}
          name="email"
          onChange={handleChange}
        />

        <AppTextField
          icon={<LockClosedIcon className="h-6 w-6 text-slate-700 " />}
          labelComponent={
            <PasswordLableComponent
              onCLick={async (e: any) => {
                console.log(e);
              }}
            />
          }
          placeholder="کلمه عبور خود را وارد کنید"
          id="password"
          value={FormValue["password"]}
          type="password"
          name="password"
          onChange={handleChange}
        />
        <AppCheckbox label="مرا به خاطر داشته باش" id="remind" />
        <AppButton onClick={onSubmit}>ورود</AppButton>
      </>
      <span className="  font-bold mb-2 text-sm font-normal">
        کاربر جدید هستید؟{" "}
        <span style={{ color: " #0116CB" }} className="cursor-pointer">
          ثبت نام
        </span>
      </span>
      <span className="  font-bold mb-2 text-sm font-normal mx-auto block text-center">
        یا
      </span>

      <button
        style={{ background: "#E9EBFF", color: "#282C52" }}
        className="bg-slate-50 hover:bg-blue-700 font-medium px-4 rounded w-full h-12 text-white text-sm 	 "
      >
        <img className="h-6 inline px-5" src={googel}></img>
        ورود از طریق حساب گوگل
      </button>
    </div>
  );
};

export default LoginForm;
