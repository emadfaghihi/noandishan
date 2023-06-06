import LoginForm from "../login/components/LoginForm";
import LoginPoster from "./components/LoginPoster";

const Login = () => {
  return (
    // <div className="grid grid-cols-3 gap-4">
    //   <div className="col-span-7">dfsaaaaaaaaaaaaaaa</div>
    //   <div  className="col-span-5">
    //     <LoginForm />
    //   </div>
    // </div>

    <div className="grid grid-cols-5 gap-4 ">
      <div className="col-span-3 ">
        <LoginPoster />
      </div>
      <div className="col-span-2  col-start-4 ">
        <div className="flex h-full items-center">

        <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
