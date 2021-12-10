import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartIcon from "./components/CartIcon";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Select from "./components/Select";
import useScroolUp from "../../costomhooks/useScrool/useScroolup";
import { fetchCategory } from "./Actions/HeaderActions";

const Header = ({ fetchCategory, category, cart = [] }) => {
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  const show = useScroolUp();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="fixed z-50 top-0 w-full bg-White shadow-sm pt-4 pb-1 px-2.5 sm:flex sm:flex-col items-center">
      <div className="w-11/12 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        <div className="flex justify-between items-center pb-2">
          <div className="flex gap-2.5 ">
            <CartIcon cartCount={cart.length} />
            <Login isLogin={user} userName={user?.name} />
          </div>
          <div className="w-8/12 text-right sm:flex sm:justify-end">
            <Search />
            <Select />
          </div>
        </div>
        <Nav show={show} items={category} />
      </div>
    </header>
  );
};
const mapStateToProps = ({ header, cart }) => {
  return { category: header.category, cart: cart.cartList };
};

const mapDispatchToProps = {
  fetchCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
