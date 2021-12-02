import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../../costomhooks/useClickOutside/useClickOutside";

const DropDownItem = ({ name = "", address = "", subvision = [] }) => {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (open) setOpen(false);
  });

  return (
    <li
      ref={wrapperRef}
      className="overflow-hidden border-b border-disabletext sm:border-b-0 hover:text-Backgroundsecondary"
    >
      <span
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-2 text-lg"
      >
        <Link to={subvision.length === 0 ? "/products/" + address : ""}>
          {name}
        </Link>

        <div className={`flex ${subvision.length === 0 ? "hidden" : ""}`}>
          <span
            className={`h-0.5 w-2 bg-titeltext transition-all transform ${
              open ? "-rotate-45" : "rotate-45"
            } `}
          ></span>
          <span
            className={`h-0.5 w-2 bg-titeltext  transition-all transform ${
              open ? "rotate-45" : "-rotate-45"
            } translate-x-0.5`}
          ></span>
        </div>
      </span>

      {subvision.length === 0 ? (
        ""
      ) : (
        <ul
          ref={wrapperRef}
          className={`${open ? "max-h-96" : "max-h-0"} transition-all`}
        >
          <li className="mb-2 text-bodytext hover:text-Backgroundsecondary">
            <Link to={"/products/" + address}>همه محصولات</Link>
          </li>
          {subvision.map((item, index) => (
            <li
              className="text-bodytext hover:text-Backgroundsecondary"
              key={index}
            >
              <Link to={"/products/" + item.address}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropDownItem;
