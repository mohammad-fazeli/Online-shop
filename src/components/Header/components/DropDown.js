import React from "react";
import DropDownItem from "./DropDownItem";
const DropDown = ({ title = "", items = [] }) => {
  return (
    <div className="dropdown cursor-pointer hover:text-Backgroundsecondary">
      <div className="text-xl ">{title}</div>
      <ul className=" flex flex-col gap-2 sm:bg-White sm:max-h-0 menu text-bodytext">
        {items.map((item, index) => (
          <DropDownItem
            key={index}
            name={item.name}
            subvision={item.subdivision}
            address={item.address}
          />
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
