import React from "react";
import Button from "../../../components/button/Button";
import ProductList from "../../../components/ProductList/ProductList";

const AmazingOffer = () => {
  return (
    <div className="bg-Backgroundsecondary w-screen h-96 flex overflow-x-auto">
      <div
        dir="rtl"
        className="grid grid-cols-amazing sm:grid-cols-amazing_sm gap-4 items-center overflow-x-scroll sm:overflow-hidden min-w-full sm:min-w-640 sm:max-w-sm lg:min-w-1024 lg:max-w-lg xl:min-w-1280 xl:max-w-xl 2xl:min-w-1536 2xl:max-w-2xl mx-auto"
      >
        <div className="text-center w-full">
          <img src="/img/amazingoffer.png" alt="" />
          <Button text="مشاهده همه" className="mt-5" />
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default AmazingOffer;
