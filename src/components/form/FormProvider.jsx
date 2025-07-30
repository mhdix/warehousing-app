import React from "react";
import Button from "./Button";

const FormProvider = ({ children, onSubmit, toggleHandler }) => {
  return (
    <form onSubmit={onSubmit} className="bg-slate-800 p-8 rounded-lg space-y-8">
      {children}
      <div className="flex gap-6 w-full">
        <Button className="flex-1/2" onClick={toggleHandler}>
          Cancel
        </Button>
        <Button cta className="flex-1/2">
          Add
        </Button>
      </div>
    </form>
  );
};

export default FormProvider;
