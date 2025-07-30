import React from "react";
import Label from "./Label";

const Textarea = ({ className, id, label }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label id={id}>
            description
        </Label>
      )}
      <textarea
        name=""
        id={id}
        placeholder={label}
        className={`border border-gray-600 rounded-md p-2 w-fit ${className}`}
      ></textarea>
    </div>
  );
};

export default Textarea;
