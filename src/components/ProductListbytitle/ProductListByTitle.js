import React from "react";
import ProductList from "../ProductList/ProductList";

const ProductListByTitle = ({ title, items }) => {
  return (
    <div dir="rtl" className="w-full mt-8 bg-white shadow-md rounded-lg">
      <h1 className="text-titeltext text-3xl border-b border-disabletext py-1 mx-4">
        {title}
      </h1>
      <div className="overflow-x-auto sm:overflow-x-hidden py-4">
        <ProductList shadow={true} items={items} />
      </div>
    </div>
  );
};

export default ProductListByTitle;
