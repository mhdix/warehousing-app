import React, { useEffect, useState } from "react";
import AddCategory from "../components/AddCategory/AddCategory";
import AddProduct from "../components/AddProduct/AddProduct";
import WarehoueseList from "../components/WarehouseList/WarehouseList";
import Filter from "../components/Filter";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");

  useEffect(() => {
    
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilteredProducts(result);
    
  }, [products, sort, search]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
  };

  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  return (
    <div className="lg:grid lg:grid-cols-12  flex flex-col gap-10 lg:gap-0">
      <div className="lg:col-span-full lg:place-items-center lg:mb-20">
        <Filter
          sort={sort}
          search={search}
          onSort={sortHandler}
          onSearch={searchHandler}
        />
      </div>
      <div className="lg:col-span-6 space-y-4 z-0 px-4 relative">
        <p className="font-bold">Add Warehouse</p>
        <div className="flex flex-col lg: w-full lg:gap-10 gap-20">
          <AddCategory categories={categories} setCategories={setCategories} />
          <AddProduct categories={categories} setProducts={setProducts} />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-6 w-full overflow-hidden space-y-4 z-20 px-4 backdrop-filter backdrop-blur-lg lg:pt-0 relative ">
        <p className="font-bold mb-11">Warehouse List</p>
        <div className="w-full">
          <WarehoueseList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
