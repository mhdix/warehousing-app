import { useEffect, useState } from "react";
import FormProvider from "../form/FormProvider";
import Textarea from "../form/Textarea";
import Input from "../form/Input";
import toast from "react-hot-toast";

const AddCategory = ({ categories, setCategories }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    console.log("add new category");
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
  console.log(categoryFormData);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  return (
    <div
      className={`flex flex-col w-full gap-4 duration-300 ${
        isOpenCategory ? "h-[24rem]" : "h-0"
      }`}
    >
      <button
        onClick={() => setIsOpenCategory((is) => !is)}
        className="text-gray-600 text-start text-md cursor-pointer hover:text-gray-400 duration-300"
      >
        {isOpenCategory ? "Close form ?" : "2. Add New Category ?"}
      </button>
      <div
        className={
          !isOpenCategory
            ? "left-[2800px] duration-500 absolute w-full top-16"
            : "relative left-0 duration-300"
        }
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
