import React from "react";

const Button = ({ className, cta, onClick, children, type = "button" }) => {
  return (
    <button
      className={`border border-gray-600 p-2 rounded-lg text-sm cursor-pointer hover:scale-105 duration-300 text-slate-400 ${className} ${
        cta && "bg-slate-700 text-white"
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
