import React, { useState } from "react";
import AddCategory from "../components/AddCategory/AddCategory";
import AddProduct from "../components/AddProduct/AddProduct";

const Home = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="flex flex-col gap-20">
      <AddCategory categories={categories} setCategories={setCategories} />
      <AddProduct categories={categories} />
    </div>
  );
};

export default Home;
