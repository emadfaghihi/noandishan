import View from "../../../assets/image/View.png";
import { FC } from "react";

interface LoginPosterProps {}

const LoginPoster: FC<LoginPosterProps> = () => {
  return (
    <div className="View">
      <img className="h-screen object-cover" src={View}></img>
    </div>
  );
};

export default LoginPoster;
