import React from "react";
import ProductFilterItem from "./ProductFilterItem";

const ProductFilterList = ({ items = [], checkedHandler, filter }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <ProductFilterItem
          filter={filter}
          checkedHandler={checkedHandler}
          item={item}
          key={i}
        />
      ))}
    </ul>
  );
};

export default ProductFilterList;
