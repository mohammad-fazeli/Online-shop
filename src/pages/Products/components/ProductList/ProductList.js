import React, { useState } from "react";
import ProductItem from "../../../../components/productItem/ProductItem";
import Pagenation from "./Pagenation";

const ProductList = ({ products }) => {
  const [page, setPage] = useState(1);
  const end = page * 15;
  const start = end - 15;
  const result = products.slice(start, end);
  const maxpage = Math.ceil(products.length / 15);
  const next = () => {
    if (page !== maxpage) {
      setPage((curentvalue) => curentvalue + 1);
    }
  };
  const previous = () => {
    if (page !== 1) {
      setPage((curentvalue) => curentvalue - 1);
    }
  };
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex justify-center mt-3 flex-wrap gap-1 sm:justify-end sm:mt-0">
        {result.map((product) => (
          <ProductItem
            address={`/product/${product.category}/${product.id}`}
            model={product.model}
            Rated={product.Rated}
            price={product.price}
            Discount={product.Discount}
            src={product.images}
            border={true}
            shadow={true}
            availability={product.availability}
            key={product.id}
          />
        ))}
      </div>
      {maxpage > 1 && (
        <Pagenation
          count={page}
          max={maxpage}
          next={next}
          previous={previous}
        />
      )}
    </div>
  );
};

export default ProductList;
