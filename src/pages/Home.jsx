import React, { useState } from "react";
import AddCategory from "../components/AddCategory/AddCategory";
import AddProduct from "../components/AddProduct/AddProduct";
import WarehoueseList from "../components/WarehouseList/WarehouseList";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  console.log("products", products);
  console.log('categories 2' , categories)

  return (
    <div className=" lg:grid lg:grid-cols-3 pl-4 flex flex-col gap-10 lg:gap-0">
      <div className="col-span-2 space-y-4 z-0">
        <p className="font-bold">Add Warehouse</p>
        <div className="flex flex-col lg:w-3/5 w-11/12 lg:gap-10 gap-20">
          <AddCategory categories={categories} setCategories={setCategories} />
          <AddProduct categories={categories} setProducts={setProducts} />
        </div>
      </div>
      <div className="col-span-1 space-y-4 z-50 backdrop-filter backdrop-blur-lg w-fit lg:p-10 lg:pt-0">
        <p className="font-bold">Warehouse List</p>
        <WarehoueseList products={products} categories={categories} />
      </div>
    </div>
  );
};

export default Home;
