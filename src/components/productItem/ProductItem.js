import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import DeadLine from "./components/DeadLine";

const ProductItem = ({
  model = "",
  Rated,
  price = 0,
  Discount = 0,
  deadline = "0:0:0",
  src = "",
  className,
  border = false,
  shadow = false,
  availability = true,
  address = "",
}) => {
  const priceBeforoff = (price * 100) / (100 - Discount);

  return (
    <div
      dir="ltr"
      className={`w-60 min-w-64 bg-White rounded-lg p-2 py-2 min-h-84 hover:z-20
      ${border && "border border-border"} ${
        shadow && "hover:shadow-sm transition-all"
      } ${className}`}
    >
      <Link to={address}>
        <img
          src={src}
          className={`w-44 mx-auto h-44 ${!availability && "filter grayscale"}`}
          alt="productimage"
        />
      </Link>

      <Link to={address}>
        <p dir="rtl" className="text-sm h-12 mt-2">
          {model}
        </p>
      </Link>

      {Rated ? (
        <p className="flex gap-1 my-2">
          <FaStar className="text-star text-lg" />
          <span className="text-sm text-disabletext">{Rated}</span>
        </p>
      ) : (
        ""
      )}
      <div className="my-2">
        {Discount !== 0 ? (
          <>
            <span className="bg-Backgroundsecondary inline-block h-5 text-White rounded-xl px-1 mr-1 ">
              {Discount}%
            </span>
            <span className="text-disabletext line-through">
              {priceBeforoff.toLocaleString()}
            </span>
          </>
        ) : null}

        <span dir="rtl" className="block text-left">
          {!availability && (
            <span className="text-Backgroundsecondary mx-2">موجود نیست</span>
          )}
          {price.toLocaleString()} تومان
        </span>
      </div>
      {deadline !== "0:0:0" && deadline ? (
        <DeadLine deadline={deadline} />
      ) : null}
    </div>
  );
};

export default ProductItem;
