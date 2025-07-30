import { useState } from "react";
import AddCategoryForm from "./AddCategoryForm";

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
        <AddCategoryForm setIsOpen={setIsOpenCategory} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddValue;
