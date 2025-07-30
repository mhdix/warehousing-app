import React from "react";
import Label from "./Label";

const Input = ({ type = "text", className, id, label }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label id={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        placeholder={label}
        className={`border border-gray-600 rounded-md p-2 w-fit ${className}`}
      />
    </div>
  );
};

export default Input;
