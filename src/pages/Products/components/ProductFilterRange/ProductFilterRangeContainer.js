import React, { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import Button from "../../../../components/button/Button";

const ProductFilterRangeContainer = ({ min = 0, max = 1234, dispatch }) => {
  const [open, setOpen] = useState(true);
  const [mint, setMint] = useState(0);
  const [maxt, setMaxt] = useState(0);

  const clickHandler = () => {
    dispatch({ type: "range", data: { min: mint, max: maxt } });
  };

  return (
    <div
      className={`w-72 border bg-white rounded-lg px-2 text-center overflow-hidden relative transition-all ${
        open ? "max-h-96" : "max-h-11"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="border-b flex justify-between items-center h-11 text-titeltext cursor-pointer"
      >
        <div className="flex">
          <span
            className={`h-0.5 w-2 bg-titeltext transition-all transform ${
              open ? "-rotate-45" : "rotate-45"
            } `}
          ></span>
          <span
            className={`h-0.5 w-2 bg-titeltext  transition-all transform ${
              open ? "rotate-45" : "-rotate-45"
            } -translate-x-0.5`}
          ></span>
        </div>
        <div className="text-xl">محدوده قیمت مورد نظر</div>
      </div>
      <MultiRangeSlider
        min={min}
        max={max}
        onChange={({ min, max }) => {
          setMint(min);
          setMaxt(max);
        }}
      />
      <div className="flex w-full">
        <div className="flex flex-col items-center w-1/2">
          <span>از</span>
          <span className="bg-Backgroundprimary inline-block px-3 rounded-lg pt-1">
            {mint}
          </span>
          <span>تومان</span>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <span>تا</span>
          <span className="bg-Backgroundprimary inline-block px-3 rounded-lg pt-1">
            {maxt}
          </span>
          <span>تومان</span>
        </div>
      </div>
      <Button
        text="اعمال محدوده قيمت"
        background="blue"
        border={false}
        onclick={clickHandler}
        className="mt-2 mb-4"
      />
    </div>
  );
};

export default ProductFilterRangeContainer;
