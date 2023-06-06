import { Field } from "formik";
import React, { FC, useMemo } from "react";

export interface AppCheckboxProps extends Record<string, unknown> {
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  component?: any;
  inputClassName?: string;
  labelClassName?: string;
}

const AppCheckbox: FC<AppCheckboxProps> = ({
  label,
  onChange,
  value,
  component,
  inputClassName,
  labelClassName,
  ...rest
}) => {
  const inputSymbolLabel = rest["required"] ? " *" : "";

  return (
    <div className={"mb-4 " + rest["className"]} style={{ direction: "ltr" }}>
      <label
        className={
          "  font-bold mb-2 text-sm font-normal cursor-pointer " +
          (labelClassName ? labelClassName : "")
        }
        htmlFor={rest["id"] as string}
      >
        {label + " " + inputSymbolLabel}

        <input
          value={value || ""}
          onChange={onChange}
          {...rest}
          type="checkbox"
          className={"accent-gray-300 "+inputClassName}
        />
      </label>
    </div>
    // </div>
  );
};

export default AppCheckbox;
