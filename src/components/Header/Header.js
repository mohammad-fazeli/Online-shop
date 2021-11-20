import React from "react";
import CartIcon from "./components/CartIcon";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Select from "./components/Select";
import useScroolUp from "../../costomhooks/useScrool/useScroolup";
const Header = () => {
  const show = useScroolUp();

  return (
    <header className="fixed top-0 w-full bg-White shadow-sm pt-4 pb-1 px-2.5 sm:flex sm:flex-col items-center">
      <div className="sm:min-w-640 lg:min-w-1024 xl:min-w-1280 2xl:min-w-1536">
        <div className="flex justify-between items-center pb-2">
          <div className="flex gap-2.5 ">
            <CartIcon cartCount={0} />
            <Login isLogin={true} userName="mohammad" />
          </div>
          <div className="w-8/12 text-right sm:flex sm:justify-end">
            <Search />
            <Select />
          </div>
        </div>
        <Nav show={show} />
      </div>
    </header>
  );
};

export default Header;
