import React from "react";
import ProductList from "../ProductList/ProductList";

const ProductListByTitle = ({ title }) => {
  return (
    <div dir="rtl" className="w-full mt-8 bg-white shadow-md rounded-lg">
      <h1 className="text-titeltext text-3xl border-b border-disabletext py-1 mx-4">
        {title}
      </h1>
      <div className="overflow-x-auto sm:overflow-x-hidden py-4">
        <ProductList classNameItem="hover:shadow-sm hover:z-20 transition-all" />
      </div>
    </div>
  );
};

export default ProductListByTitle;
