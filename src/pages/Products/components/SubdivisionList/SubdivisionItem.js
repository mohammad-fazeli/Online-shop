import React from "react";
import { Link } from "react-router-dom";

const SubdivisionItem = ({ src, name, address }) => {
  return (
    <div className="w-44 rounded-lg bg-white flex items-center justify-center flex-col pt-2 border border-border">
      <Link to={`/products/${address}`}>
        <img src={src} alt="" className="w-40 h-36" />
        <div className="text-center text-xl">{name}</div>
      </Link>
    </div>
  );
};

export default SubdivisionItem;
