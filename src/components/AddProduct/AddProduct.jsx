import React, { useState } from "react";
import FormProvider from "../Form/FormProvider";
import Input from "../Form/Input";
import toast from "react-hot-toast";
import Label from "../Form/Label";

const AddProduct = ({ categories, setProducts }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [productValue, setProductValue] = useState({
    title: "",
    quantity: "",
    categoryId: "",
  });

  const addNewProduct = (e) => {
    e.preventDefault();

    setProducts((prevState) => [
      ...prevState,
      { ...productValue, createdAt: new Date().toISOString(), id: Date.now() },
    ]);
    setProductValue({ title: "", quantity: "", categoryId: "" });
    toast.success("add new product");
  };
  const hadnelChangeProductInput = (e) => {
    const { value, name } = e.target;
    setProductValue({ ...productValue, [name]: value });
    console.log(productValue);
  };
  return (
    <div className="flex flex-col w-full relative ">
      <button
        onClick={() => setIsOpenCategory((is) => !is)}
        className="text-gray-600 text-start text-md cursor-pointer hover:text-gray-400 duration-300"
      >
        {isOpenCategory ? "Close form ?" : "2. Add New Product ?"}
      </button>
      <div
        className={
          !isOpenCategory
            ? "left-[2800px] duration-500 absolute w-full top-10"
            : "relative left-0 duration-300"
        }
      >
        <h2 className="font-black text-2xl indent-2">Add New Product</h2>
        <FormProvider
          onSubmit={addNewProduct}
          toggleHandler={() => setIsOpenCategory(false)}
        >
          <Input
            label="title"
            value={productValue.title}
            onChange={hadnelChangeProductInput}
          />
          <Input
            type="number"
            label="quantity"
            value={productValue.quantity}
            onChange={hadnelChangeProductInput}
          />

          <div className="flex flex-col">
            <Label id="categoryId">categoryId</Label>
            <select
              value={productValue.categoryId}
              onChange={hadnelChangeProductInput}
              name="categoryId"
              id="categoryId"
              className="border border-gray-600 rounded-md p-2 w-full text-slate-400"
            >
              <option
                className="bg-slate-800 rounded-2xl text-slate-700"
                value=""
                disabled
              >
                select a category
              </option>
              {categories &&
                categories?.map((item) => (
                  <option key={item.id} className="bg-slate-800 rounded-2xl" value={item.id}>
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddProduct;
