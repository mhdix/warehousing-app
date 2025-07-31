import React from "react";
import AddCategory from "../components/AddCategory/AddCategory";
import AddProduct from "../components/AddProduct/AddProduct";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <AddCategory />
      <AddProduct />
    </div>
  );
};

export default Home;
