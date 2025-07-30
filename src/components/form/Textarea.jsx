import React from "react";

const Textarea = ({ className, id, label }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="indent-1.5 text-gray-300" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        name=""
        id={id}
        className={`border border-gray-600 rounded-md p-2 w-fit ${className}`}
      ></textarea>
    </div>
  );
};

export default Textarea;
