import React, { useState, useRef } from "react";
import useClickOutside from "../../../costomhooks/useClickOutside/useClickOutside";

const Select = (items = []) => {
  const [select, setSelect] = useState("همه دسته بندی ها");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => {
    if (open) setOpen(false);
  });

  const clickhandler = (e) => {
    setSelect(e.target.innerHTML);
  };
  return (
    <div
      ref={wrapperRef}
      onClick={() => setOpen(!open)}
      className="relative hidden sm:flex border rounded-l-none border-disabletext rounded-lg cursor-pointer w-40 items-center justify-end px-2 bg-Backgroundprimary"
    >
      <div className="flex items-center w-full justify-between">
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
        <span>{select}</span>
      </div>
      <div
        className={`absolute bg-White z-10 top-12 left-0 shadow-sm p-2 w-32 rounded-lg ${
          open ? "" : "hidden"
        }`}
      >
        <ul>
          <li onClick={clickhandler} className="hover:text-Backgroundsecondary">
            همه دسته بندی ها
          </li>
          <li onClick={clickhandler} className="hover:text-Backgroundsecondary">
            لپ تاپ
          </li>
          <li onClick={clickhandler} className="hover:text-Backgroundsecondary">
            موبایل
          </li>
          <li onClick={clickhandler} className="hover:text-Backgroundsecondary">
            مد و پوشاک
          </li>
          <li onClick={clickhandler} className="hover:text-Backgroundsecondary">
            کتاب
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Select;
