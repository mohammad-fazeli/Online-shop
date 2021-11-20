import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ cartCount = 0 }) => {
  return (
    <Link to="/cart">
      <div className="relative rounded-full w-12 h-12 flex justify-center items-center bg-Backgroundprimary text-3xl hover:text-Backgroundsecondary">
        <FaShoppingCart />

        {cartCount !== 0 ? (
          <span className="absolute top-0 -right-2 text-White bg-Backgroundsecondary rounded-full w-5 h-5 text-center text-2xl leading-6">
            {cartCount}
          </span>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
