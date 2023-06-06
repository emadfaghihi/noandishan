import { FC } from "react";

export interface AppButtonProps extends Record<string, any> {
  children: any;
}

const AppButton: FC<AppButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "bg-blue hover:bg-blue-700 font-bold px-4 rounded w-full h-12 text-white text-sm 	 " +
        rest["className"]
      }
    >
      {children}
    </button>
  );
};

export default AppButton;
