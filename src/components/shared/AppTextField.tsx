import { Field } from "formik";
import React, { FC, useMemo } from "react";

export interface AppTextFieldProps extends Record<string, unknown> {
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  labelComponent?: JSX.Element;
  icon?: JSX.Element;
  component?: any;
  inputClassName?: string;
  labelClassName?: string;
  // isFormik?: boolean;
}

const AppTextField: FC<AppTextFieldProps> = ({
  label,
  onChange,
  value,
  icon,
  component,
  labelComponent,
  inputClassName,
  labelClassName,
  // isFormik,
  ...rest
}) => {
  // const Comp: any = useMemo(
  //   () => component || (isFormik ? Field : <input />),
  //   []
  // );

  const inputSymbolLabel = rest["required"] ? " *" : "";

  return (
    <div className={"mb-4 " + rest["className"]}>
      {label && !labelComponent && (
        <label
          className="block  font-bold mb-2 text-sm font-normal"
          htmlFor={rest["id"] as string}
        >
          {label + " " + inputSymbolLabel}
        </label>
      )}
      {labelComponent}
      <div
        className={
          "bg-white appearance-none border rounded py-2  w-full text-gray-700 leading-tight flex rounded-xl border border-slate-200 border-solid ps-3 text-sm " +
          rest["inputClassName"]
        }
      >
        {icon}
        <input
          value={value || ""}
          onChange={onChange}
          {...rest}
          className="w-full outline-none focus:outline-none focus:shadow-outline  px-3 bg-transparent "
        style={{backgroundColor:"transparent"}}
        />
      </div>
    </div>
  );
};

export default AppTextField;
