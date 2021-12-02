import React from "react";

const ProductFilterItem = ({ item, checkedHandler, filter }) => {
  return (
    <>
      <li dir="ltr" className="flex items-center justify-between text-lg px-1">
        <label className="cursor-pointer" htmlFor={item.eName}>
          {item.eName}
        </label>
        <div>
          <label className="cursor-pointer" htmlFor={item.eName}>
            {item.pName}
          </label>
          <input
            className="ml-1"
            type="checkbox"
            value={item.eName}
            onChange={checkedHandler}
            checked={filter.includes(item.eName)}
            name="Brand"
            id={item.eName}
          />
        </div>
      </li>
    </>
  );
};

export default ProductFilterItem;
