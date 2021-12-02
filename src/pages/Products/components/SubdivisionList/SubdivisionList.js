import React from "react";
import SubdivisionItem from "./SubdivisionItem";

const SubdivisionList = ({ subdivision }) => {
  return (
    <div className="flex flex-row items-center justify-center sm:justify-end flex-wrap gap-3 my-2">
      {subdivision.map((item, index) => (
        <SubdivisionItem
          src={item.image}
          name={item.name}
          address={item.address}
          key={index}
        />
      ))}
    </div>
  );
};

export default SubdivisionList;
