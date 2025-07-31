import React from "react";
import Label from "./Label";

const Input = ({ type = "text", className, label, onChange, value }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label id={label}>{label}</Label>}
      <input
        id={label}
        type={type}
        placeholder={label}
        onChange={onChange}
        name={label}
        value={value}
        className={`border border-gray-600 rounded-md p-2 w-fit ${className}`}
      />
    </div>
  );
};

export default Input;
