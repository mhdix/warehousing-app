import { useEffect, useState } from "react";
import FormProvider from "../Form/FormProvider";
import Textarea from "../Form/Textarea";
import Input from "../Form/Input";
import toast from "react-hot-toast";

const AddCategory = ({ categories, setCategories }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories([
      ...categories,
      {
        ...categoryFormData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setCategoryFormData({ title: "", description: "" });
    toast.success("add new category");
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  return (
    <div
      className={`flex flex-col w-full duration-300 z-0 ${
        isOpenCategory ? "h-[24rem]" : "h-0"
      }`}
    >
      <button
        onClick={() => setIsOpenCategory((is) => !is)}
        className={`text-gray-600 text-start text-md cursor-pointer hover:text-gray-400 duration-300 ${
          isOpenCategory ? "" : "mt-4"
        }`}
      >
        {isOpenCategory ? null : "1. Add New Category ?"}
      </button>
      <div
        className={`${
          !isOpenCategory
            ? "left-[2800px] duration-500 absolute w-full mt-40"
            : "relative left-0 duration-300"
        }`}
      >
        {/* <AddCategoryForm
          setIsOpen={setIsOpenCategory}
          handleSubmit={handleSubmit}
        /> */}

        <h2 className="font-black text-2xl indent-2">Add New Category</h2>
        <FormProvider
          onSubmit={addNewCategoryHandler}
          toggleHandler={() => setIsOpenCategory(false)}
        >
          <div className="flex flex-col gap-6">
            <Input label="title" id="title" onChange={changeHandler} />
            <Textarea
              label="description"
              id="description"
              onChange={changeHandler}
              className="w-full"
            />
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddCategory;
