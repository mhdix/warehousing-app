import { useEffect, useState } from "react";
import FormProvider from "../form/FormProvider";
import Textarea from "../form/Textarea";
import Input from "../form/Input";

const AddValue = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  const addNewCategoryHandler = (e) => {
    e.preventDefault();

    setCategories([
      ...categories,
      { ...categoryFormData, createdAt: new Date().toISOString() },
    ]);

    setCategoryFormData({ title: "", description: "" });
  };
  console.log(categoryFormData);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
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
        {/* <AddCategoryForm
          setIsOpen={setIsOpenCategory}
          handleSubmit={handleSubmit}
        /> */}

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

export default AddValue;
