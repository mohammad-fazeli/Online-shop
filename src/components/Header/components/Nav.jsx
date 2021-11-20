import React, { useState } from "react";
import DropDown from "./DropDown";
const Nav = ({ show }) => {
  const [open, setOpen] = useState(false);
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
        <DropDown
          title="دسته بندی"
          items={[
            { name: "لپ تاپ", subvision: [], address: "/cart" },
            { name: "موبایل", subvision: [], address: "/" },
            {
              name: "مد و پوشاک",
              address: "/",
              subvision: [
                { name: "لباس مردانه", address: "/" },
                { name: "لباس زنانه", address: "/" },
                { name: "کفش مردانه", address: "/" },
                { name: "کفش مردانه", address: "/" },
              ],
            },
            { name: "کتاب", subvision: [], address: "/" },
          ]}
        />
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
