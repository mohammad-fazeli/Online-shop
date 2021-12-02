import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const Pagenation = ({
  count = 1,
  max = 1,
  next = () => {},
  previous = () => {},
}) => {
  return (
    <div className="flex h-8 items-center flex-row gap-3 text-3xl bg-white rounded-md">
      <FaAngleLeft
        onClick={next}
        className={`bg-blue rounded-md cursor-pointer ${
          count === max && "cursor-not-allowed opacity-30"
        }`}
      />
      <span>{count}</span>
      <FaAngleRight
        onClick={previous}
        className={`bg-blue rounded-md cursor-pointer ${
          count === 1 && "cursor-not-allowed opacity-30"
        }`}
      />
    </div>
  );
};

export default Pagenation;
