import React from "react";
import { Link } from "react-router-dom";

const Baner = ({ src, to = "" }) => {
  return (
    <div className="w-full mt-8">
      <Link to={to}>
        <img src={src} className="w-full" alt="" />
      </Link>
    </div>
  );
};

export default Baner;
