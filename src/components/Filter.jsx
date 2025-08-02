import React, { useState } from "react";
import Input from "./Form/Input";
import Label from "./Form/Label";

const Filter = ({ onSort, onSearch, sort, search }) => {
  return (
    <div className="lg:grid lg:grid-cols-12 w-full px-4">
      <div className="col-span-4 ">
        <Input className="w-full" label="search" onChange={onSearch} />
      </div>
      <div className="flex flex-col col-span-4 col-start-7">
        <Label>sort</Label>
        <select
          name=""
          value={sort}
          onChange={onSort}
          className={`border border-gray-600 rounded-md p-2 w-full`}
        >
          <option className="bg-slate-900" value="latest">
            latest
          </option>
          <option className="bg-slate-900" value="earliest">
            earliest
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
