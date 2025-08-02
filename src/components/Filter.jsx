import React, { useState } from "react";
import Input from "./Form/Input";
import Label from "./Form/Label";

const Filter = ({ onSort, onSearch, sort, search, categories }) => {
  const [sortCategory, setSortCategory] = useState("");

  const sortCategoryHandler = (e) => {
    const value = e.target.value;
    setSortCategory(value);
    console.log(value);
  };

  return (
    <div className="lg:grid lg:grid-cols-12 w-full px-4 gap-10">
      <div className="col-span-4 ">
        <Input className="w-full" label="search" onChange={onSearch} />
      </div>
      <div className="flex flex-col col-span-4">
        <Label>sort</Label>
        <select
          name="sortDate"
          value={sort}
          onChange={onSort}
          className={`border border-gray-600 rounded-md p-2 w-full`}
        >
          <option value="" disabled>
            sort by ...
          </option>
          <option className="bg-slate-900" value="latest">
            latest
          </option>
          <option className="bg-slate-900" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex flex-col col-span-4">
        <Label>category</Label>
        <select
          name="sortCategory"
          value={sortCategory}
          onChange={sortCategoryHandler}
          className={`border border-gray-600 rounded-md p-2 w-full`}
        >
          <option value="" disabled>
            select category
          </option>
          {categories &&
            categories?.map((category) => (
              <option className="bg-slate-900" value={`${category.title}`}>
                {category.title}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
