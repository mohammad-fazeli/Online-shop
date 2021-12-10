import React from "react";
import Button from "../../../components/button/Button";
import { FaTrashRestore } from "react-icons/fa";

const CartItem = ({ product, increase, decrease, remove }) => {
  const temp = product.price * product.count;
  const priceBeforoff = (product.price * 100) / (100 - product.Discount);
  return (
    <div className="border rounded-lg bg-white px-2 flex flex-row gap-1 items-start w-full relative">
      <div dir="rtl" className="w-full h-40 flex flex-col justify-around py-2">
        <p>{product.model}</p>
        <div className="flex items-center gap-2">
          <Button
            count={product.count}
            onclickPlus={() => {
              increase({ id: product.id });
            }}
            onclickMinus={() => {
              decrease(product.id);
            }}
            border={false}
          />
          <div
            onClick={() => {
              if (window.confirm("محصول مورد نظر حذف شود؟")) {
                remove(product.id);
              }
            }}
            className="flex items-center text-disabletext gap-1  cursor-pointer"
          >
            <FaTrashRestore className="text-lg" />
            <span>حذف</span>
          </div>
        </div>
        <div
          dir="ltr"
          className="absolute bottom-px sm:bottom-2 left-px sm:left-2"
        >
          <p className="flex gap-0.5">
            {product.Discount !== 0 && (
              <>
                <span className="bg-Backgroundsecondary inline-block h-5 text-White rounded-xl px-1">
                  {product.Discount}%
                </span>
                <span className="text-disabletext">
                  {priceBeforoff?.toLocaleString()}
                </span>
              </>
            )}
          </p>
          <p dir="rtl" className="flex gap-1">
            <span className="flex gap-1">
              <span className="text-Backgroundsecondary">
                {temp?.toLocaleString()}
              </span>
              <span>X {product.count}</span>
              <span>{product.price?.toLocaleString()}</span>
            </span>
            <span>تومان</span>
          </p>
        </div>
      </div>
      <img src={product.image} className="w-40 h-40" alt="" />
    </div>
  );
};

export default CartItem;
