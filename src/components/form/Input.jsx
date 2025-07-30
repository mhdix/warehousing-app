import React from "react";

const Input = ({ type = "text", className, id, label }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="indent-1.5 text-gray-300" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`border border-gray-600 rounded-md p-2 w-fit ${className}`}
      />
    </div>
  );
};

export default Input;
