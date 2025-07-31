import React, { useState } from "react";
import FormProvider from "../form/FormProvider";
import Input from "../form/Input";
import toast from "react-hot-toast";

const AddProduct = () => {
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
  );
};

export default AddProduct;
