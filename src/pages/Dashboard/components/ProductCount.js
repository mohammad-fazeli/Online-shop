import React from "react";
import { FaLaptop, FaMobileAlt, FaTshirt, FaBook } from "react-icons/fa";

const ProductCount = () => {
  return (
    <div
      dir="rtl"
      className="w-full bg-White shadow-sm mt-5 rounded-lg pt-3 pb-2"
    >
      <h1 className="text-titeltext text-4xl  text-center">
        پیش از 400 کالا در دسته بندی های مختلف
      </h1>
      <div className="flex justify-evenly mt-5">
        <div className="text-center text-2xl">
          <FaLaptop className="text-blue text-7xl" />
          <span>لپ تاپ</span>
          <br />
          <span>+10 کالا</span>
        </div>
        <div className="text-center text-2xl">
          <FaMobileAlt className="text-blue text-7xl" />
          <span>موبایل</span>
          <br />
          <span>+10 کالا</span>
        </div>
        <div className="text-center text-2xl">
          <FaTshirt className="text-blue text-7xl" />

          <span>مد و پوشاک</span>
          <br />
          <span>+10 کالا</span>
        </div>
        <div className="text-center text-2xl">
          <FaBook className="text-blue text-7xl" />
          <span>کتاب</span>
          <br />
          <span>+10 کالا</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCount;
