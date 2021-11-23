import React, { useState, useEffect } from "react";
import ProductItem from "../productItem/ProductItem";
import Button from "../button/Button";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const ProductList = ({ items = [""] }) => {
  const [translate, setTranslate] = useState(0);
  const [elementCount, setelementCount] = useState(0);
  const page = Math.ceil(18 / elementCount);

  useEffect(() => {
    const getElementCount = () => {
      const size = window.innerWidth;
      if (size < 640) {
        setTranslate(0);
      } else if (size >= 640 && size < 1024) {
        setelementCount(2);
      } else if (size >= 1024 && size < 1280) {
        setelementCount(3);
      } else if (size >= 1280 && size < 1536) {
        setelementCount(4);
      } else if (size >= 1536) {
        setelementCount(5);
      }
    };
    getElementCount();
    window.addEventListener("resize", getElementCount);

    return () => {
      window.removeEventListener("resize", getElementCount);
    };
  }, []);

  useEffect(() => {
    if (page < translate + 1) {
      setTranslate(page - 1);
    }
  }, [page, translate]);

  const translateNexthandler = () => {
    if (page !== translate + 1) {
      setTranslate((corentttranslate) => {
        return corentttranslate + 1;
      });
    }
  };

  const translatePervhandler = () => {
    if (translate !== 0) {
      setTranslate((corentttranslate) => {
        return corentttranslate - 1;
      });
    }
  };

  return (
    <div className="relative sm:overflow-hidden">
      <FaCaretRight
        onClick={translatePervhandler}
        className={`hidden sm:flex absolute z-10 text-2xl bg-White  shadow-sm h-20 rounded-lg rounded-r-none w-8  px-2 ring-0 right-1 top-1/4  cursor-pointer ${
          translate === 0 ? "opacity-40" : ""
        }`}
      />
      <FaCaretLeft
        onClick={translateNexthandler}
        className={`hidden sm:flex absolute z-10 text-2xl bg-White  shadow-sm h-20 rounded-lg rounded-l-none w-8  px-2 left-1 top-1/4  cursor-pointer ${
          page === translate + 1 ? "opacity-40" : ""
        }`}
      />
      <div
        style={{ transform: `translateX(${translate * 100}%)` }}
        className="flex flex-row items-center transition-all"
      >
        {/* map in item here */}
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />
        <ProductItem
          model="11"
          className="sm:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5 mx-1 "
        />

        <Button text="مشاهده همه" className="sm:hidden" />
      </div>
    </div>
  );
};

export default ProductList;
