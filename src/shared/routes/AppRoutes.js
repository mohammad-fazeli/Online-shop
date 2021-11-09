import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Routes
import DashboardContainer from "../../pages/Dashboard/DashboardContainer";
import CartContainer from "../../pages/Cart/CartContainer";
import ProductsContainer from "../../pages/Products/ProductsContainer";
import ProductContainer from "../../pages/Product/ProductContainer";
import CheckoutContainer from "../../pages/Checkout/CheckoutContainer";
import LoginContainer from "../../pages/Login/LoginContainer";
import ProfileContainer from "../../pages/Profile/ProfileContainer";
import SignUpContainer from "../../pages/Sign Up/SignUpContainer";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardContainer />} />
        <Route exact path="/cart" element={<CartContainer />} />
        <Route exact path="/products" element={<ProductsContainer />} />
        <Route exact path="/product" element={<ProductContainer />} />
        <Route exact path="/Checkout" element={<CheckoutContainer />} />
        <Route exact path="/login" element={<LoginContainer />} />
        <Route exact path="/signup" element={<SignUpContainer />} />
        <Route exact path="/profile" element={<ProfileContainer />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
