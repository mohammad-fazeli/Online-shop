import React, { useState, useEffect } from "react";
import ProductFilterList from "./ProductFilterList";

const ProductFilterListContainer = ({ dispatch, list = [] }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [open, setOpen] = useState(true);

  const checkedHandler = (e) => {
    if (filter.includes(e.target.value)) {
      setFilter(filter.filter((item) => e.target.value !== item));
    } else {
      setFilter([...filter, e.target.value]);
    }
  };

  useEffect(() => {
    dispatch({ type: "list", data: filter });
  }, [dispatch, filter]);

  return (
    <div
      className={`w-72 border bg-white rounded-lg px-2 overflow-hidden transition-all ${
        !open ? "max-h-11" : "max-h-96"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="border-b flex justify-between items-center h-11 text-titeltext cursor-pointer"
      >
        <div className="flex">
          <span
            className={`h-0.5 w-2 bg-titeltext transition-all transform ${
              open ? "-rotate-45" : "rotate-45"
            } `}
          ></span>
          <span
            className={`h-0.5 w-2 bg-titeltext  transition-all transform ${
              open ? "rotate-45" : "-rotate-45"
            } -translate-x-0.5`}
          ></span>
        </div>
        <div className="text-xl">برند</div>
      </div>
      <div className="border-b">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          dir="rtl"
          placeholder="جستو جو در برند"
          className="border w-full my-2 px-2 py-1 outline-none rounded-lg border-blue placeholder-disabletext"
        />
      </div>
      <div dir="rtl" className="h-64 overflow-auto">
        <ProductFilterList
          filter={filter}
          checkedHandler={checkedHandler}
          items={list.filter(
            (i) => i.eName.includes(search) || i.pName.includes(search)
          )}
        />
      </div>
    </div>
  );
};

export default ProductFilterListContainer;
