import React, { Fragment, useState } from "react";
import FormProvider from "./form/FormProvider";
import Input from "./form/Input";
import Textarea from "./form/Textarea";

const AddValue = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <button
        onClick={() => setIsOpenCategory((is) => !is)}
        className="text-gray-600 text-start text-md cursor-pointer hover:text-gray-400 duration-300"
      >
        {isOpenCategory ? "Close form ?" : "Add New Category ?"}
      </button>
      <div
        className={
          !isOpenCategory
            ? "-mt-[800px] duration-500"
            : "relative top-0 duration-300"
        }
      >
        <FormProvider
          onSubmit={handleSubmit}
          toggleHandler={() => setIsOpenCategory(false)}
        >
          <div className="flex flex-col gap-6">
            <Input label="title" id="title" />
            <Textarea label="description" id="description" className="w-full" />
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddValue;
