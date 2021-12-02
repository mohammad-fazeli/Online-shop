import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import DropDown from "./DropDown";

const Nav = ({ show, items = [] }) => {
  const [open, setOpen] = useState(false);
  const { category } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => setOpen(false), [category]);

  return (
    <nav
      dir="rtl"
      className={`${
        show ? "max-h-96" : "max-h-0"
      } transition-all overflow-hidden`}
    >
      <div
        onClick={() => setOpen(true)}
        className="flex flex-col gap-1 sm:hidden"
      >
        <span className="h-0.5 w-7 bg-titeltext"></span>
        <span className="h-0.5 w-7 bg-titeltext"></span>
        <span className="h-0.5 w-7 bg-titeltext"></span>
      </div>

      <div
        className={`flex flex-col gap-4 px-6 pt-6 absolute bg-Backgroundprimary w-full h-screen transition-all ${
          open ? "right-0" : "-right-full"
        } top-0 sm:relative sm:w-auto sm:h-auto sm:top-0 sm:right-0 sm:flex-row sm:bg-White sm:p-0 sm:items-start`}
      >
        <div
          onClick={() => setOpen(false)}
          className="flex flex-col gap-1 sm:hidden"
        >
          <span className="h-0.5 w-7 bg-titeltext"></span>
          <span className="h-0.5 w-7 bg-titeltext"></span>
          <span className="h-0.5 w-7 bg-titeltext"></span>
        </div>
        <DropDown title="دسته بندی" items={items} />
        <Link to="/">
          <div className="text-lg cursor-pointer hover:text-Backgroundsecondary">
            صفحه اصلی
          </div>
        </Link>
        <div className="text-lg cursor-pointer hover:text-Backgroundsecondary">
          فروشنده شوید
        </div>
        <div className="text-lg cursor-pointer hover:text-Backgroundsecondary">
          درباره ما!
        </div>
      </div>
    </nav>
  );
};

export default Nav;
