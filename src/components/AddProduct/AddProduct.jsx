import React, { useState } from "react";
import FormProvider from "../form/FormProvider";
import Input from "../form/Input";
import toast from "react-hot-toast";

const AddProduct = () => {
     const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [productValue, setProductValue] = useState({
    name: "",
    details: "",
  });

  const [products, setProducts] = useState([]);

  const hadnleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...productValue, createdAt: Date.now() }]);
    setProductValue({ name: "", details: "" });
    toast.success("add new product");
  };
  const hadnelChangeProductInput = (e) => {
    const { value, name } = e.target;
    setProductValue({ ...productValue, [name]: value });
    console.log(productValue);
  };
  return (
    <div className="flex flex-col w-full gap-4 relative ">
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
        <FormProvider onSubmit={hadnleSubmit}>
          <Input
            label="name"
            value={productValue.name}
            onChange={hadnelChangeProductInput}
          />
          <Input
            label="details"
            className="w-full"
            value={productValue.details}
            onChange={hadnelChangeProductInput}
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default AddProduct;
