import React from "react";
import { FaStar } from "react-icons/fa";
import DeadLine from "./components/DeadLine";

const ProductItem = ({
  model = "",
  Rated = 0,
  price = 0,
  Discount = 0,
  deadline = "0:0:0",
  src = "",
  className,
}) => {
  const priceBeforoff = (price * 100) / (100 - Discount);

  return (
    <div
      dir="ltr"
      className={`w-60 min-w-64 bg-White rounded-lg px-2 pb-2 min-h-84 ${className}`}
    >
      <img src={src} className="w-44 mx-auto h-44 border" alt="productimage" />
      <p dir="rtl" className="text-sm min-h-12 ">
        {model}
      </p>
      <p className="flex gap-1 my-2">
        <FaStar className="text-star text-lg" />
        <span className="text-sm text-disabletext">{Rated}</span>
      </p>
      <div className="my-2">
        {Discount !== 0 ? (
          <>
            <span className="bg-Backgroundsecondary inline-block h-5 text-White rounded-xl px-1 mr-1">
              {Discount}%
            </span>
            <span className="text-disabletext line-through">
              {priceBeforoff.toLocaleString()}
            </span>
          </>
        ) : (
          ""
        )}
        <br />
        <span dir="rtl">{price.toLocaleString()} تومان</span>
      </div>
      {deadline !== "0:0:0" ? <DeadLine deadline={deadline} /> : null}
    </div>
  );
};

export default ProductItem;
